package com.ecommerce.quickbuy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.quickbuy.model.Testimonial;
import com.ecommerce.quickbuy.repository.TestimonialRepository;

@Service
public class TestimonialService {

    @Autowired
    private TestimonialRepository testimonialRepository;

    public void addTestimonial(Testimonial testimonial) {
        testimonialRepository.save(testimonial);
    }

    public List<Testimonial> findAllTestimonials() {
        return testimonialRepository.findAll();
    }

    public void deleteTestimonial(int id) {
        testimonialRepository.deleteById(id);
    }

    public void updateTestimonial(Testimonial testimonial) {
        Testimonial choosedTestimonial = testimonialRepository.findById(testimonial.getId()).orElse(null);
        choosedTestimonial.setName(testimonial.getName());
        choosedTestimonial.setMessage(testimonial.getMessage());
        choosedTestimonial.setImageUrl(testimonial.getImageUrl());
        testimonialRepository.save(choosedTestimonial);
    }

}
