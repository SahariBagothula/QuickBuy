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
import com.ecommerce.quickbuy.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/add")
    public ResponseEntity<Cart> addToCart(@RequestParam int userId, @RequestParam int productId,
            @RequestParam int quantity) {
        Cart cart = cartService.addProductToCart(userId, productId, quantity);
        return ResponseEntity.ok(cart);
    }

    @DeleteMapping("/remove")
    public ResponseEntity<String> removeFromCart(@RequestParam int userId, @RequestParam int productId) {
        cartService.removeFromCart(userId, productId);
        return ResponseEntity.ok("Product has been removed from cart");
    }

    @GetMapping("/findAll")
    public ResponseEntity<Cart> getCart(@RequestParam int userId) {
        Cart cart = cartService.getCart(userId);
        return ResponseEntity.ok(cart);
    }

}
