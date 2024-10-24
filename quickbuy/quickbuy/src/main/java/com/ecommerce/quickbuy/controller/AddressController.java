package com.ecommerce.quickbuy.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.ecommerce.quickbuy.dto.AddressDto;
import com.ecommerce.quickbuy.service.AddressService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/address")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @GetMapping("/findAll")
    public ResponseEntity<List<AddressDto>> getUserAddresses(@RequestParam int userId) {
        List<AddressDto> addresses = addressService.getAddressesByUserId(userId);
        return ResponseEntity.ok(addresses);
    }

    @PostMapping("/add")
    public ResponseEntity<AddressDto> addAddress(@RequestBody AddressDto address) {
        AddressDto savedAddress = addressService.addAddress(address);
        return ResponseEntity.ok(savedAddress);
    }

    @DeleteMapping("/remove")
    public ResponseEntity<String> deleteAddress(@RequestParam int addressId) {
        addressService.deleteAddress(addressId);
        return ResponseEntity.ok("Address deleted successfully");
    }

}
