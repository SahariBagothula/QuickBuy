package com.ecommerce.quickbuy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.quickbuy.model.ProductImage;
import com.ecommerce.quickbuy.service.ProductImageService;

@RestController
@RequestMapping("/image")
public class ProductImageController {

    @Autowired
    private ProductImageService productImageService;

    @PostMapping("/add")
    public ResponseEntity<String> addImage(@RequestBody ProductImage productImage) {
        productImageService.addImage(productImage);
        return ResponseEntity.ok().body("Image added successfully");
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateImage(@RequestBody ProductImage productImage) {
        productImageService.updateImage(productImage);
        return ResponseEntity.ok().body("updated successfully");
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<ProductImage>> getAllImages() {
        List<ProductImage> images = productImageService.findAllImages();
        return ResponseEntity.ok().header("customheader", "900").body(images);
    }

}
