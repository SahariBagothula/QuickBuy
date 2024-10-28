package com.ecommerce.quickbuy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.quickbuy.model.Testimonial;
import com.ecommerce.quickbuy.service.TestimonialService;

@RestController
@RequestMapping("testimonial")
public class TestimonialController {

    @Autowired
    private TestimonialService testimonialService;

    @PostMapping("/add")
    public ResponseEntity<String> addTestimonial(@RequestBody Testimonial testimonial) {
        testimonialService.addTestimonial(testimonial);
        return ResponseEntity.ok().body("Testimonial saved successfully");
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Testimonial>> findAllTestimonials() {
        List<Testimonial> testimonials = testimonialService.findAllTestimonials();
        return ResponseEntity.ok(testimonials);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateTestimonial(@RequestBody Testimonial testimonial) {
        testimonialService.updateTestimonial(testimonial);
        return ResponseEntity.ok().body("Testimonial updated successfully");
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteTestimonial(@RequestParam int id) {
        testimonialService.deleteTestimonial(id);
        return ResponseEntity.ok().body("Testimonial has been deleted successfully");
    }

}
