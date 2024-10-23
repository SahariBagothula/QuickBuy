package com.ecommerce.quickbuy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ecommerce.quickbuy.dto.LoginDto;
import com.ecommerce.quickbuy.dto.UserDto;
import com.ecommerce.quickbuy.exception.InvalidOtpException;
import com.ecommerce.quickbuy.exception.InvalidPasswordException;
import com.ecommerce.quickbuy.exception.UserAlreadyActiveException;
import com.ecommerce.quickbuy.exception.UserAlreadyExistsException;
import com.ecommerce.quickbuy.exception.UserNotActivatedException;
import com.ecommerce.quickbuy.exception.UserNotFoundException;
import com.ecommerce.quickbuy.model.User;
import com.ecommerce.quickbuy.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OtpService otpService;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User registerUser(UserDto userDto) {

        if (userRepository.existsByEmail(userDto.getEmail())) {
            throw new UserAlreadyExistsException("Email already registered");
        }

        if (userRepository.existsByUsername(userDto.getUsername())) {
            throw new UserAlreadyExistsException("Username already taken");
        }

        // Mapping DTO to Entity
        User user = new User();
        user.setFullname(userDto.getFullname());
        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        user.setMobileNumber(userDto.getMobilenumber());
        user.setGender(userDto.getGender());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));

        String otp = otpService.generateOtp();
        user.setOtp(otp);
        user.setActive((false));
        userRepository.save(user);

        otpService.sendOtp(user.getEmail(), otp);
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

    public String loginUser(LoginDto loginDto) {

        User user = userRepository.findByEmailOrUsername(loginDto.getIdentifier(), loginDto.getIdentifier())
                .orElseThrow(() -> new UserNotFoundException("User not found"));

        if (!passwordEncoder.matches(loginDto.getPassword(), user.getPassword())) {
            throw new InvalidPasswordException("Invalid password. ");
        }

        if (!user.isActive()) {
            throw new UserNotActivatedException("User has not verified their account. ");
        }

        return "Login successful! Welcome, " + user.getFullname();

    }

}
