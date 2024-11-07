package com.ecommerce.quickbuy.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.ecommerce.quickbuy.dto.AddressDto;
import com.ecommerce.quickbuy.model.Address;
import com.ecommerce.quickbuy.service.AddressService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/address")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @PostMapping("/add")
    public ResponseEntity<String> addAddress(@RequestBody AddressDto addressDto) {
        addressService.addAddress(addressDto);
        return ResponseEntity.ok().body("Address saved successfully");
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Address>> getAddressesByUserId(@PathVariable int userId) {
        List<Address> addresses = addressService.getAddressesByUserID(userId);
        return ResponseEntity.ok(addresses);
    }

}
