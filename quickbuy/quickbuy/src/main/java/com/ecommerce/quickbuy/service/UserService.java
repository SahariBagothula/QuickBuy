package com.ecommerce.quickbuy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ecommerce.quickbuy.exception.InvalidOtpException;
import com.ecommerce.quickbuy.exception.UserAlreadyActiveException;
import com.ecommerce.quickbuy.exception.UserAlreadyExistsException;
import com.ecommerce.quickbuy.exception.UserNotFoundException;
import com.ecommerce.quickbuy.model.User;
import com.ecommerce.quickbuy.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OtpService otpService;

    private BCryptPasswordEncoder passwordEncoder;

    public User registerUser(User user) {

        if (userRepository.existsByEmail(user.getEmail())) {
            throw new UserAlreadyExistsException("Email already registered");
        }

        if (userRepository.existsByUsername(user.getUsername())) {
            throw new UserAlreadyExistsException("Username already taken");
        }

        String otp = otpService.generateOtp();
        user.setOtp(otp);
        user.setActive((false));
        userRepository.save(user);

        otpService.sendOtpEmai(user.getEmail(), otp);
        return user;

    }

    public boolean verifyOtp(String identifier, String enteredOtp) {

        User user = userRepository.findByEmailOrUsername(identifier, identifier)
                .orElseThrow(() -> new UserNotFoundException("User not found"));

        if (!user.isActive()) {
            if (user.getOtp() != null && user.getOtp().equals(enteredOtp)) {
                user.setActive(true);
                user.setOtp(null);
                userRepository.save(user);
                return true;
            } else {
                throw new InvalidOtpException("Invalid or expired OTP.");
            }
        } else {
            throw new UserAlreadyActiveException("User account is already activated. ");
        }
    }

}
