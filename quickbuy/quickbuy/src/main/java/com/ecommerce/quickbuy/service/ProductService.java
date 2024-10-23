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

    public List<Product> findByCatgeory(String category) {
        return productRepository.findByCategory(category);
    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }

}
