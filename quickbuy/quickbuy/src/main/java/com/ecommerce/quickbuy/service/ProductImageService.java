package com.ecommerce.quickbuy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.quickbuy.model.ProductImage;
import com.ecommerce.quickbuy.repository.ProductImageRepository;

import java.util.List;

@Service
public class ProductImageService {

    @Autowired
    private ProductImageRepository productImageRepository;

    public void addImage(ProductImage productImage) {
        productImageRepository.save(productImage);
    }

    public void updateImage(ProductImage productImage) {
        ProductImage updatedImage = productImageRepository.findById(productImage.getId()).orElse(null);
        updatedImage.setImageHeading(productImage.getImageHeading());
        updatedImage.setImageUrl(productImage.getImageUrl());
        productImageRepository.save(updatedImage);
    }

    public List<ProductImage> findAllImages() {
        return productImageRepository.findAll();
    }

}
