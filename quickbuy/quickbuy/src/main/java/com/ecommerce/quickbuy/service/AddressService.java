package com.ecommerce.quickbuy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.ecommerce.quickbuy.dto.AddressDto;
import com.ecommerce.quickbuy.model.Address;
import com.ecommerce.quickbuy.model.User;
import com.ecommerce.quickbuy.repository.AddressRepository;
import com.ecommerce.quickbuy.repository.UserRepository;
import com.ecommerce.quickbuy.util.JwtUtil;

import jakarta.servlet.http.HttpServletRequest;

import java.util.List;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository userRepository; // Assuming you have a UserRepository

    @Autowired
    private JwtUtil jwtUtil;

    private HttpServletRequest getCurrentHttpRequest() {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (attributes != null) {
            return attributes.getRequest();
        } else {
            throw new IllegalStateException("Request attributes are not available");
        }
    }

    private String extractTokenFromRequest(HttpServletRequest request) {
        System.out.println("REQUEST: " + request);
        String bearerToken = request.getHeader("Authorization");
        System.out.println("TOKEN: " + bearerToken);
        return bearerToken;
    }

    private int getCurrentUserId() {
        HttpServletRequest request = getCurrentHttpRequest();
        String token = extractTokenFromRequest(request);
        System.out.println("USERID: " + jwtUtil.extractUserId(token));
        return jwtUtil.extractUserId(token);
    }

    public Address addAddress(AddressDto addressDTO) {
        // Get the JWT token from the request header
        HttpServletRequest request = getCurrentHttpRequest();
        String token = extractTokenFromRequest(request);

        // Extract the userId from the token
        int userId = jwtUtil.extractUserId(token);
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        // Map DTO to Address entity
        Address address = new Address();
        address.setHouseNumber(addressDTO.getHouseNumber());
        address.setStreet(addressDTO.getStreet());
        address.setCity(addressDTO.getCity());
        address.setStateName(addressDTO.getStateName());
        address.setPincode(addressDTO.getPincode());
        address.setCountry(addressDTO.getCountry());
        address.setUser(user);

        return addressRepository.save(address);
    }

    public List<Address> getAddressesByUserID() {
        int userId = getCurrentUserId();
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        return addressRepository.findByUserId(user.getId());
    }

    public List<Address> getUserAddresses() {
        // Get the JWT token from the request header
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes())
                .getRequest();
        String token = extractTokenFromRequest(request);

        // Extract the userId from the token
        int userId = jwtUtil.extractUserId(token);
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        return addressRepository.findByUserId(user.getId());
    }

}
