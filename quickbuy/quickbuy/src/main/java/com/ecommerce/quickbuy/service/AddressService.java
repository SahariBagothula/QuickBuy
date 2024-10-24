package com.ecommerce.quickbuy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.quickbuy.model.Address;
import com.ecommerce.quickbuy.repository.AddressRepository;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    public Address addAddress(Address address) {
        return addressRepository.save(address);
    }

    public void deleteAddress(int addressId) {
        addressRepository.deleteById(addressId);
    }

    public List<Address> getAddressesByUserId(int userId) {
        return addressRepository.findByUserId(userId);
    }

    public Address getAddressById(int addressId) {
        return addressRepository.findById(addressId)
                .orElseThrow(() -> new IllegalArgumentException("Address not found with id: " + addressId));
    }

}
