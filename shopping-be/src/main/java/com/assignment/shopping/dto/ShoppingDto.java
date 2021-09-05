package com.assignment.shopping.dto;

import java.util.Set;

public class ShoppingDto {

    private String username;

    private int totalAmount;

    private Set<ShoppingDetailDto> shoppingDetailDtos;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(int totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Set<ShoppingDetailDto> getShoppingDetailDtos() {
        return shoppingDetailDtos;
    }

    public void setShoppingDetailDtos(Set<ShoppingDetailDto> shoppingDetailDtos) {
        this.shoppingDetailDtos = shoppingDetailDtos;
    }

    @Override
    public String toString() {
        return "ShoppingDto{" +
                "username='" + username + '\'' +
                ", totalAmount=" + totalAmount +
                ", shoppingDetailDtos=" + shoppingDetailDtos +
                '}';
    }
}
