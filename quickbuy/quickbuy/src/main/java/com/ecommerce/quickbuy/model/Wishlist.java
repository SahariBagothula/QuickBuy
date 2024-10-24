package com.ecommerce.quickbuy.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Wishlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private int id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private User user;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "wishlist", orphanRemoval = true)
    @JsonManagedReference
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<WishlistItem> wishlistItems = new ArrayList<>();

    public Wishlist() {
    }

    public Wishlist(User user) {
        this.user = user;
    }

    public void addProduct(Product product, int quantity) {
        WishlistItem wishlistItem = new WishlistItem(this, product, quantity);
        this.wishlistItems.add(wishlistItem);
    }

    public void removeProduct(int productId) {
        this.wishlistItems.removeIf(item -> item.getProduct().getId() == productId);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<WishlistItem> getWishlistItems() {
        return wishlistItems;
    }

    public void setWishlistItems(List<WishlistItem> wishlistItems) {
        this.wishlistItems = wishlistItems;
    }

}
