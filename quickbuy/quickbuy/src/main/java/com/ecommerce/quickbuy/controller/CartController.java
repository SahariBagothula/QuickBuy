package com.ecommerce.quickbuy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.quickbuy.model.Cart;
import com.ecommerce.quickbuy.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/{userId}")
    public Cart getCartByUserId(@PathVariable int userId) {
        return cartService.getCartByUserId(userId);
    }

    @PostMapping("/{userId}/products/{productId}")
    public String addProductToCart(@PathVariable int userId, @PathVariable int productId) {
        cartService.addProductToCart(userId, productId);
        return "Product added to cart";
    }

    @DeleteMapping("/{userId}/products/{productId}")
    public String removeProductFromCart(@PathVariable int userId, @PathVariable int productId) {
        cartService.removeProductFromCart(userId, productId);
        return "Product removed from cart";
    }

}
