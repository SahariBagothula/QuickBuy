package com.ecommerce.quickbuy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.ecommerce.quickbuy.model.Cart;
import com.ecommerce.quickbuy.model.CartItem;
import com.ecommerce.quickbuy.model.Product;
import com.ecommerce.quickbuy.model.User;
import com.ecommerce.quickbuy.repository.CartRepository;
import com.ecommerce.quickbuy.repository.ProductRepository;
import com.ecommerce.quickbuy.repository.UserRepository;
import com.ecommerce.quickbuy.util.JwtUtil;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private JwtUtil jwtUtil;

    private HttpServletRequest getCurrentHttpRequest() {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (attributes != null) {
            return attributes.getRequest();
        } else {
            throw new IllegalStateException("Request attributes are not available");
        }
    }

    private String extractTokenFromRequest(HttpServletRequest request) {
        System.out.println("REQUEST: " + request);
        String bearerToken = request.getHeader("Authorization");
        System.out.println("TOKEN: " + bearerToken);
        return bearerToken;
    }

    private int getCurrentUserId() {
        HttpServletRequest request = getCurrentHttpRequest();
        String token = extractTokenFromRequest(request);
        System.out.println("USERID: " + jwtUtil.extractUserId(token));
        return jwtUtil.extractUserId(token);
    }

    @Transactional
    public String addProductToCart(int productId) {
        int userId = getCurrentUserId();
        Cart cart = cartRepository.findByUserId(userId);
        if (cart == null) {
            cart = new Cart();
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found"));
            cart.setUser(user);
            cartRepository.save(cart);
        }

        // Check if the product is already in the cart
        boolean productExists = cart.getCartItems().stream()
                .anyMatch(item -> item.getProduct().getId() == productId);

        if (productExists) {
            return "Product is already in the cart.";
        }

        // If not, add the new CartItem
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        CartItem newItem = new CartItem();
        newItem.setCart(cart);
        newItem.setProduct(product);
        cart.getCartItems().add(newItem);
        cartRepository.save(cart);

        return "Product added to cart successfully.";
    }

    @Transactional
    public String removeProductFromCart(int productId) {
        int userId = getCurrentUserId();
        Cart cart = cartRepository.findByUserId(userId);

        if (cart == null) {
            throw new RuntimeException("Cart not found for the user.");
        }

        // Find the CartItem by product ID
        CartItem itemToRemove = cart.getCartItems().stream()
                .filter(item -> item.getProduct().getId() == productId)
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Product not found in cart."));

        // Remove the item from the cart and save the cart
        cart.getCartItems().remove(itemToRemove);
        cartRepository.save(cart);

        return "Product removed from cart successfully.";
    }

    public Cart getCartByUserId() {
        int userId = getCurrentUserId();
        return cartRepository.findByUserId(userId);
    }
}
