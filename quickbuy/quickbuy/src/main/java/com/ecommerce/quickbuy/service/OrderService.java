package com.ecommerce.quickbuy.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.quickbuy.exception.AddressNotFoundException;
import com.ecommerce.quickbuy.exception.CartNotFoundException;
import com.ecommerce.quickbuy.exception.OrderNotFoundException;
import com.ecommerce.quickbuy.exception.UserNotFoundException;
import com.ecommerce.quickbuy.model.Address;
import com.ecommerce.quickbuy.model.Cart;
import com.ecommerce.quickbuy.model.CartItem;
import com.ecommerce.quickbuy.model.Order;
import com.ecommerce.quickbuy.model.OrderItem;
import com.ecommerce.quickbuy.model.User;
import com.ecommerce.quickbuy.repository.AddressRepository;
import com.ecommerce.quickbuy.repository.CartRepository;
import com.ecommerce.quickbuy.repository.OrderRepository;
import com.ecommerce.quickbuy.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class OrderService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Transactional
    public Order placeOrder(int userId, int addressId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found"));

        Address address = addressRepository.findById(addressId)
                .orElseThrow(() -> new AddressNotFoundException("Address not found"));

        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new CartNotFoundException("Cart not found"));

        Order order = new Order();
        order.setUser(user);
        order.setDeliveryAddress(address);
        order.setOrderDate(LocalDateTime.now());

        double totalPrice = 0;
        for (CartItem item : cart.getCartItems()) {
            OrderItem orderItem = new OrderItem();
            orderItem.setProduct(item.getProduct());
            orderItem.setQuantity(item.getQuantity());
            orderItem.setOrder(order);
            order.getOrderItems().add(orderItem);
            totalPrice += item.getProduct().getPrice() * item.getQuantity();
        }

        order.setTotalPrice(totalPrice);
        orderRepository.save(order);

        cart.getCartItems().clear();
        cartRepository.save(cart);

        return order;

    }

    public List<Order> getOrdersByUserId(int userId) {
        return orderRepository.findByUserId(userId);
    }

    public String processPayment(Order order) {
        boolean paymentSuccessful = true;

        if (paymentSuccessful) {
            return "Payment of " + order.getTotalPrice() + " processed successfully. ";
        } else {
            return "Payment failed. Please try again. ";
        }

    }

    public Order getOrderById(int orderId) {
        return orderRepository.findById(orderId)
                .orElseThrow(() -> new OrderNotFoundException("Order not found"));
    }

    public LocalDateTime calculateEstimatedDeliveryTime() {
        return LocalDateTime.now().plusDays(3);
    }

    public String getDeliveryEstimate(Order order) {
        LocalDateTime deliveryTime = calculateEstimatedDeliveryTime();
        return "Your order will be delivered by: "
                + deliveryTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }

}
