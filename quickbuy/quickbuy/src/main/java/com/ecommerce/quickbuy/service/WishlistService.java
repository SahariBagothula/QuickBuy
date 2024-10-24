package com.ecommerce.quickbuy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.quickbuy.exception.InsufficientStockException;
import com.ecommerce.quickbuy.exception.ProductNotFoundException;
import com.ecommerce.quickbuy.exception.UserNotFoundException;
import com.ecommerce.quickbuy.exception.WishlistItemNotFoundException;
import com.ecommerce.quickbuy.exception.WishlistNotFoundException;
import com.ecommerce.quickbuy.model.Cart;
import com.ecommerce.quickbuy.model.Product;
import com.ecommerce.quickbuy.model.User;
import com.ecommerce.quickbuy.model.Wishlist;
import com.ecommerce.quickbuy.model.WishlistItem;
import com.ecommerce.quickbuy.repository.ProductRepository;
import com.ecommerce.quickbuy.repository.UserRepository;
import com.ecommerce.quickbuy.repository.WishlistItemRepository;
import com.ecommerce.quickbuy.repository.WishlistRepository;

import jakarta.transaction.Transactional;

@Service
public class WishlistService {

        @Autowired
        private WishlistRepository wishlistRepository;

        @Autowired
        private WishlistItemRepository wishlistItemRepository;

        @Autowired
        private ProductRepository productRepository;

        @Autowired
        private UserRepository userRepository;

        @Autowired
        private CartService cartService;

        @Transactional
        public Wishlist addToWishlist(int userId, int productId, int quantity) {
                User user = userRepository.findById(userId)
                                .orElseThrow(() -> new UserNotFoundException("User not found"));

                Product product = productRepository.findById(productId)
                                .orElseThrow(() -> new ProductNotFoundException("Product not foubnd"));

                if (product.getStock() < quantity) {
                        throw new InsufficientStockException("Not enough stock available");
                }

                Wishlist wishlist = wishlistRepository.findByUserId(userId)
                                .orElse(new Wishlist(user));

                wishlist.addProduct(product, quantity);
                return wishlistRepository.save(wishlist);

        }

        @Transactional
        public void removeFromWishlist(int userId, int productId) {
                Wishlist wishlist = wishlistRepository.findByUserId(userId)
                                .orElseThrow(() -> new WishlistNotFoundException("Wishlist not found"));

                WishlistItem wishlistItemToRemove = wishlist.getWishlistItems()
                                .stream()
                                .filter(item -> item.getProduct().getId() == productId)
                                .findFirst()
                                .orElseThrow(() -> new WishlistItemNotFoundException("Product not found in wishlist"));

                wishlist.getWishlistItems().remove(wishlistItemToRemove);
                wishlistItemRepository.delete(wishlistItemToRemove);
                wishlistRepository.save(wishlist);
        }

        public Wishlist getWishlist(int userId) {
                return wishlistRepository.findByUserId(userId)
                                .orElseThrow(() -> new WishlistNotFoundException("Wishlist not found"));
        }

        @Transactional
        public Cart addToCart(int userId, int productId, int quantity) {
                removeFromWishlist(userId, productId);
                return cartService.addProductToCart(userId, productId, quantity);
        }

}
