package com.ecommerce.quickbuy.dto;

import java.util.List;

public class CartDto {

    private int id;
    private List<CartItemDto> cartItems;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<CartItemDto> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<CartItemDto> cartItems) {
        this.cartItems = cartItems;
    }

}
