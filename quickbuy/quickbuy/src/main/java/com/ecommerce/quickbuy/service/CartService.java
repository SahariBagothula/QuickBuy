package com.ecommerce.quickbuy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.quickbuy.model.Cart;
import com.ecommerce.quickbuy.model.Product;
import com.ecommerce.quickbuy.model.User;
import com.ecommerce.quickbuy.repository.CartRepository;
import com.ecommerce.quickbuy.repository.ProductRepository;
import com.ecommerce.quickbuy.repository.UserRepository;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    public Cart getCartByUserId(int userId) {
        return cartRepository.findByUserId(userId);
    }

    public String addProductToCart(int userId, int productId) {
        Cart cart = cartRepository.findByUserId(userId);
        if (cart == null) {
            cart = new Cart();
            User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
            cart.setUser(user);
        }

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        cart.getProducts().add(product);
        cartRepository.save(cart);
        return "Product added to cart";
    }

    public String removeProductFromCart(int userId, int productId) {
        Cart cart = cartRepository.findByUserId(userId);
        if (cart != null) {
            Product product = productRepository.findById(productId)
                    .orElseThrow(() -> new RuntimeException("Product not found"));
            cart.getProducts().remove(product);
            cartRepository.save(cart);
            return "Product removed from cart";
        }
        throw new RuntimeException("Cart not found");
    }
}
