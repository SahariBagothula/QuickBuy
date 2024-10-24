package com.ecommerce.quickbuy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.quickbuy.exception.CartItemNotFoundException;
import com.ecommerce.quickbuy.exception.CartNotFoundException;
import com.ecommerce.quickbuy.exception.InsufficientStockException;
import com.ecommerce.quickbuy.exception.ProductNotFoundException;
import com.ecommerce.quickbuy.exception.UserNotFoundException;
import com.ecommerce.quickbuy.model.Cart;
import com.ecommerce.quickbuy.model.CartItem;
import com.ecommerce.quickbuy.model.Product;
import com.ecommerce.quickbuy.model.User;
import com.ecommerce.quickbuy.repository.CartItemRepository;
import com.ecommerce.quickbuy.repository.CartRepository;
import com.ecommerce.quickbuy.repository.ProductRepository;
import com.ecommerce.quickbuy.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class CartService {

        @Autowired
        private CartRepository cartRepository;

        @Autowired
        private ProductRepository productRepository;

        @Autowired
        private CartItemRepository cartItemRepository;

        @Autowired
        private UserRepository userRepository;

        @Transactional
        public Cart addProductToCart(int userId, int productId, int quantity) {

                User user = userRepository.findById(userId)
                                .orElseThrow(() -> new UserNotFoundException("User not found"));

                Product product = productRepository.findById(productId)
                                .orElseThrow(() -> new ProductNotFoundException("Product not found"));

                if (product.getStock() < quantity) {
                        throw new InsufficientStockException("Not enough stock available");
                }

                Cart cart = cartRepository.findByUserId(userId)
                                .orElse(new Cart(user));

                cart.addProduct(product, quantity);
                return cartRepository.save(cart);

        }

        @Transactional
        public void removeFromCart(int userId, int productId) {
                Cart cart = cartRepository.findByUserId(userId)
                                .orElseThrow(() -> new CartNotFoundException("Cart not found"));

                CartItem cartItemToRemove = cart.getCartItems()
                                .stream()
                                .filter(item -> item.getProduct().getId() == productId)
                                .findFirst()
                                .orElseThrow(() -> new CartItemNotFoundException("Product not found in cart"));

                cart.getCartItems().remove(cartItemToRemove);

                cartItemRepository.delete(cartItemToRemove);

                cartRepository.save(cart);

        }

        public Cart getCart(int userId) {
                return cartRepository.findByUserId(userId)
                                .orElseThrow(() -> new CartNotFoundException("Cart not found"));
        }

        // @Transactional
        // public Order placeOrder(int userId, int addressId) {
        // User user = userRepository.findById(userId)
        // .orElseThrow(() -> new UserNotFoundException("User not found"));

        // Address address = addressRepository.findById(addressId)
        // .orElseThrow(() -> new AddressNotFoundException("Address not found"));

        // Cart cart = cartRepository.findByUserId(userId)
        // .orElseThrow(() -> new CartNotFoundException("Cart not found"));

        // Order order = new Order();
        // order.setUser(user);
        // order.setDeliveryAddress(address);
        // order.setOrderDate(LocalDateTime.now());

        // double totalPrice = 0;
        // for (CartItem item : cart.getCartItems()) {
        // OrderItem orderItem = new OrderItem();
        // orderItem.setProduct(item.getProduct());
        // orderItem.setQuantity(item.getQuantity());
        // order.getOrderItems().add(orderItem);
        // totalPrice += item.getProduct().getPrice() * item.getQuantity();
        // }

        // order.setTotalPrice(totalPrice);
        // orderRepository.save(order);

        // cart.getCartItems().clear();
        // cartRepository.save(cart);

        // return order;

        // }

}
