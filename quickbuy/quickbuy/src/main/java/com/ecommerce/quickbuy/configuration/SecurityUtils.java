package com.ecommerce.quickbuy.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ecommerce.quickbuy.model.User;
import com.ecommerce.quickbuy.util.JwtUtil;

@Component
public class SecurityUtils {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private User user;

    public int getCurrentUserId() {

        if (user == null || jwtUtil == null) {
            throw new IllegalStateException("User or JwtUtil is not properly initialized");
        }

        String token = jwtUtil.generateToken(user.getUsername(), user.getId());

        return jwtUtil.extractUserId(token);
    }

}
