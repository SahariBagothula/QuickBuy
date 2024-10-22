package com.ecommerce.quickbuy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.quickbuy.model.Wishlist;

@Repository
public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {

}
