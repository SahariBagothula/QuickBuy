package com.ecommerce.quickbuy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.quickbuy.model.Product;
import com.ecommerce.quickbuy.model.User;
import com.ecommerce.quickbuy.model.Wishlist;
import com.ecommerce.quickbuy.repository.ProductRepository;
import com.ecommerce.quickbuy.repository.UserRepository;
import com.ecommerce.quickbuy.repository.WishlistRepository;

@Service
public class WishlistService {

    @Autowired
    private WishlistRepository wishlistRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    public Wishlist getWihslistByUserId(int userId) {
        return wishlistRepository.findByUserId(userId);
    }

    public String addProductToWishlist(int userId, int productId) {
        Wishlist wishlist = wishlistRepository.findByUserId(userId);
        if (wishlist == null) {
            wishlist = new Wishlist();
            User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
            wishlist.setUser(user);
        }

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        wishlist.getProducts().add(product);
        wishlistRepository.save(wishlist);
        return "Product added to wishlist";
    }

    public String removeProductFromWishlist(int userId, int productId) {
        Wishlist wishlist = wishlistRepository.findByUserId(userId);
        if (wishlist != null) {
            Product product = productRepository.findById(productId)
                    .orElseThrow(() -> new RuntimeException("Product not found"));
            wishlist.getProducts().remove(product);
            wishlistRepository.save(wishlist);
            return "Product removed from wishlist";
        }
        throw new RuntimeException("wishlist not found");
    }

}
