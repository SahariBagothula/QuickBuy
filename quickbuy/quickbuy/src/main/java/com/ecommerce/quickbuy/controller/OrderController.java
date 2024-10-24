package com.ecommerce.quickbuy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.quickbuy.model.Order;
import com.ecommerce.quickbuy.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/place")
    public ResponseEntity<Order> placeOrder(@RequestParam int userId, @RequestParam int addressId) {
        Order order = orderService.placeOrder(userId, addressId);
        return ResponseEntity.ok(order);
    }

    @GetMapping("/user")
    public ResponseEntity<List<Order>> getOrders(@RequestParam int userId) {
        List<Order> orders = orderService.getOrdersByUserId(userId);
        return ResponseEntity.ok(orders);
    }

    @PostMapping("/pay")
    public ResponseEntity<String> processPayment(@RequestParam int orderId) {
        Order order = orderService.getOrderById(orderId);
        String paymentStatus = orderService.processPayment(order);
        return ResponseEntity.ok(paymentStatus);
    }

}
