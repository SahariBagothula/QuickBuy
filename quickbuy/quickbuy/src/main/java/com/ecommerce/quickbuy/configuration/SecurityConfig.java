package com.ecommerce.quickbuy.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // Disable CSRF protection for testing (not recommended for production)
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/user/**", "/user/register", "/user/verifyOtp", "/user/login",
                                "/products/add", "/products/findAll", "/products/category/**", "/products/delete/**",
                                "/cart/add", "/cart/findAll", "/cart/remove", "/wishlist/add", "/wishlist/findAll",
                                "/wishlist/remove", "/wishlist/addToCart")
                        .permitAll() // Allow
                        // public
                        // access to
                        // these
                        // endpoints
                        .anyRequest().authenticated() // Require authentication for all other requests
                );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
