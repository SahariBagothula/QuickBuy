package com.ecommerce.quickbuy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.quickbuy.model.Cart;
import com.ecommerce.quickbuy.model.Wishlist;
import com.ecommerce.quickbuy.service.WishlistService;

@RestController
@RequestMapping("/wishlist")
public class WishlistController {

    @Autowired
    private WishlistService wishlistService;

    @PostMapping("/add")
    public ResponseEntity<Wishlist> addToWishlist(@RequestParam int userId, @RequestParam int productId,
            @RequestParam int quantity) {
        Wishlist wishlist = wishlistService.addToWishlist(userId, productId, quantity);
        return ResponseEntity.ok(wishlist);
    }

    @DeleteMapping("/remove")
    public ResponseEntity<String> removeFromWishlist(@RequestParam int userId, @RequestParam int productId) {
        wishlistService.removeFromWishlist(userId, productId);
        return ResponseEntity.ok("Product removed from wishlist");
    }

    @GetMapping("/findAll")
    public ResponseEntity<Wishlist> getWishlist(@RequestParam int userId) {
        Wishlist wishlist = wishlistService.getWishlist(userId);
        return ResponseEntity.ok(wishlist);
    }

    @PostMapping("/addToCart")
    public ResponseEntity<Cart> addToCart(@RequestParam int userId, @RequestParam int productId,
            @RequestParam int quantity) {
        Cart cart = wishlistService.addToCart(userId, productId, quantity);
        return ResponseEntity.ok(cart);
    }

}
