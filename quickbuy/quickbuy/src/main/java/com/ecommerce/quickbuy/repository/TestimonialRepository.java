package com.ecommerce.quickbuy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.quickbuy.model.Testimonial;

@Repository
public interface TestimonialRepository extends JpaRepository<Testimonial, Integer> {

}
