package com.assignment.shopping.dto;

public class ShoppingDetailDto {

    private Long productId;

    private int quantity;

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "ShoppingDetailDto{" +
                "productId=" + productId +
                ", quantity=" + quantity +
                '}';
    }
}
