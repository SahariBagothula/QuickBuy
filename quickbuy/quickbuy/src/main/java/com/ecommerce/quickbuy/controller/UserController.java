package com.ecommerce.quickbuy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.quickbuy.model.User;
import com.ecommerce.quickbuy.service.UserService;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String defaultRoute() {
        return "Working fine";
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        userService.registerUser(null);
        return ResponseEntity.ok("To complete the registration please check your email for OTP. ");
    }

    public ResponseEntity<String> verifyOtp(@RequestParam String identifier, @RequestParam String otp) {
        boolean isVerified = userService.verifyOtp(identifier, otp);

        if (isVerified) {
            return ResponseEntity.ok("Registration successful ! You can log in. ");
        } else {
            return ResponseEntity.badRequest().body("Invalid OTP. ");
        }

    }

}
