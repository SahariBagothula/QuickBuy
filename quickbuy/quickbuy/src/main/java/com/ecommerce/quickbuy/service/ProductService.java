package com.ecommerce.quickbuy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.quickbuy.model.Product;
import com.ecommerce.quickbuy.repository.ProductRepository;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }

    public Product updateProduct(Product product) {
        Product updatedProduct = productRepository.findById(product.getId()).orElse(null);
        updatedProduct.setName(product.getName());
        updatedProduct.setBrand(product.getBrand());
        updatedProduct.setCategory(product.getCategory());
        updatedProduct.setDescription(product.getDescription());
        updatedProduct.setGender(product.getGender());
        updatedProduct.setImageUrl(product.getImageUrl());
        updatedProduct.setNewlyArrived(product.isNewlyArrived());
        updatedProduct.setTopSeller(product.isTopSeller());
        updatedProduct.setPrice(product.getPrice());
        productRepository.save(updatedProduct);
        return updatedProduct;
    }

}
