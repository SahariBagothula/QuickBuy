package com.ecommerce.quickbuy.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.quickbuy.dto.AddressDto;
import com.ecommerce.quickbuy.model.Address;
import com.ecommerce.quickbuy.model.User;
import com.ecommerce.quickbuy.repository.AddressRepository;
import com.ecommerce.quickbuy.repository.UserRepository;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository userRepository;

    public AddressDto convertToAddressDto(Address address) {
        AddressDto dto = new AddressDto();
        dto.setId(address.getId());
        dto.setHouseNumber(address.getHouseNumber());
        dto.setStreet(address.getStreet());
        dto.setCity(address.getCity());
        dto.setState(address.getState());
        dto.setPincode(address.getPincode());
        dto.setCountry(address.getCountry());

        dto.setUserId(address.getUser().getId());
        dto.setUserName(address.getUser().getUsername());

        return dto;

    }

    public Address convertToAddressEntity(AddressDto dto) {
        Address address = new Address();
        address.setHouseNumber(dto.getHouseNumber());
        address.setStreet(dto.getStreet());
        address.setCity(dto.getCity());
        address.setState(dto.getState());
        address.setPincode(dto.getPincode());
        address.setCountry(dto.getCountry());

        // You need to fetch the user entity using the userId in the DTO (assumed here)
        User user = new User();
        user.setId(dto.getUserId());
        address.setUser(user);

        return address;
    }

    public AddressDto addAddress(AddressDto addressDto) {

        User user = userRepository.findById(addressDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + addressDto.getUserId()));

        Address address = convertToAddressEntity(addressDto);
        address.setUser(user);

        Address savedAddress = addressRepository.save(address);
        return convertToAddressDto(savedAddress);
    }

    public void deleteAddress(int addressId) {
        addressRepository.deleteById(addressId);
    }

    public List<AddressDto> getAddressesByUserId(int userId) {
        List<Address> addresses = addressRepository.findByUserId(userId);
        return addresses.stream()
                .map(this::convertToAddressDto)
                .collect(Collectors.toList());
    }

    public AddressDto getAddressById(int addressId) {
        Address address = addressRepository.findById(addressId)
                .orElseThrow(() -> new IllegalArgumentException("Address not found with id: " + addressId));
        return convertToAddressDto(address);
    }

}
