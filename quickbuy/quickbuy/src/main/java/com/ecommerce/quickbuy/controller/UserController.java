package com.ecommerce.quickbuy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.quickbuy.dto.LoginDto;
import com.ecommerce.quickbuy.dto.OtpVerificationDto;
import com.ecommerce.quickbuy.dto.UserDto;
import com.ecommerce.quickbuy.model.User;
import com.ecommerce.quickbuy.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String defaultRoute() {
        return "Working fine";
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody UserDto userDto) {
        userService.registerUser(userDto);
        return ResponseEntity.ok("To complete the registration please check your email for OTP. ");
    }

    @PostMapping("/verifyOtp")
    public ResponseEntity<String> verifyOtp(@Valid @RequestBody OtpVerificationDto otpVerificationDto) {
        String token = userService.verifyOtp(otpVerificationDto.getIdentifier(), otpVerificationDto.getOtp());
        return ResponseEntity.ok(token);
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<User> findUserById(@PathVariable int id) {
        return ResponseEntity.ok(userService.findUserById(id));
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@Valid @RequestBody LoginDto loginDto) {
        String token = userService.loginUser(loginDto);
        return ResponseEntity.ok(token);
    }

}
