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

    @GetMapping("/findById")
    public Cart getCartByUserId() {
        return cartService.getCartByUserId();
    }

    @PostMapping("/products/{productId}")
    public String addProductToCart(@PathVariable int productId) {
        cartService.addProductToCart(productId);
        return "Product added to cart";
    }

    @DeleteMapping("/products/{productId}")
    public String removeProductFromCart(@PathVariable int productId) {
        cartService.removeProductFromCart(productId);
        return "Product removed from cart";
    }

}
