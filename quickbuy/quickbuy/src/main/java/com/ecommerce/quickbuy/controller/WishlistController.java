package com.ecommerce.quickbuy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.quickbuy.model.Wishlist;
import com.ecommerce.quickbuy.service.WishlistService;

@RestController
@RequestMapping("/wishlist")
public class WishlistController {

    @Autowired
    private WishlistService wishlistService;

    @GetMapping("/{userId}")
    public Wishlist getWishlistByUserId(@PathVariable int userId) {
        return wishlistService.getWihslistByUserId(userId);
    }

    @PostMapping("/{userId}/products/{productId}")
    public String addProductToWishlist(@PathVariable int userId, @PathVariable int productId) {
        wishlistService.addProductToWishlist(userId, productId);
        return "Product added to wishlist";
    }

    @DeleteMapping("/{userId}/products/{productId}")
    public String removeProductFromWishlist(@PathVariable int userId, @PathVariable int productId) {
        wishlistService.removeProductFromWishlist(userId, productId);
        return "Product removed from wishlist";
    }

}
