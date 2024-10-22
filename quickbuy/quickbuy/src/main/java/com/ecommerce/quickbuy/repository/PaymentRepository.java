package com.ecommerce.quickbuy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.quickbuy.model.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {

}
