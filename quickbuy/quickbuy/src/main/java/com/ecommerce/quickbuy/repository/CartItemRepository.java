package com.ecommerce.quickbuy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.quickbuy.model.Cart;
import com.ecommerce.quickbuy.model.CartItem;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Integer> {

    void deleteByCartAndProductId(Cart cart, int productId);

}
