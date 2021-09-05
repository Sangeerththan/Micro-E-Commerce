package com.assignment.shopping.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table
public class ShoppingDetail implements Serializable {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Long shoppingId;

    @Column
    private Long productId;

    @Column
    private int quantity;

    @Override
    public String toString() {
        return "ShoppingDetail{" +
                "id=" + id +
                ", shoppingId=" + shoppingId +
                ", productId=" + productId +
                ", quantity=" + quantity +
                '}';
    }

    public ShoppingDetail() {
    }

    public ShoppingDetail(Long shoppingId, Long productId, int quantity) {
        this.shoppingId = shoppingId;
        this.productId = productId;
        this.quantity = quantity;
    }

    public Long getShoppingId() {
        return shoppingId;
    }

    public void setShoppingId(Long shoppingId) {
        this.shoppingId = shoppingId;
    }

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
