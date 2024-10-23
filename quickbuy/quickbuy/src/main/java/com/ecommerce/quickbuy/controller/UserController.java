package com.ecommerce.quickbuy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.quickbuy.dto.LoginDto;
import com.ecommerce.quickbuy.dto.OtpVerificationDto;
import com.ecommerce.quickbuy.dto.UserDto;
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
        boolean isVerified = userService.verifyOtp(otpVerificationDto.getIdentifier(), otpVerificationDto.getOtp());

        if (isVerified) {
            return ResponseEntity.ok("Registration successful ! You can log in. ");
        } else {
            return ResponseEntity.badRequest().body("Invalid OTP. ");
        }

    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@Valid @RequestBody LoginDto loginDto) {
        userService.loginUser(loginDto);
        return ResponseEntity.ok("You are logged into Quickbuy now. ");
    }

}
