package com.assignment.shopping.dto;

import java.util.Date;
import java.util.List;

public class ShoppingModelDto {

    private Long id;

    private Date date;

    private String status;

    private int totalAmount;

    private List<ShoppingDetailModelDto> shoppingDetailModelDtos;

    public ShoppingModelDto(Long id, Date date, String status, int totalAmount, List<ShoppingDetailModelDto> shoppingDetailModelDtos) {
        this.id = id;
        this.date = date;
        this.status = status;
        this.totalAmount = totalAmount;
        this.shoppingDetailModelDtos = shoppingDetailModelDtos;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(int totalAmount) {
        this.totalAmount = totalAmount;
    }

    public List<ShoppingDetailModelDto> getShoppingDetailModelDtos() {
        return shoppingDetailModelDtos;
    }

    public void setShoppingDetailModelDtos(List<ShoppingDetailModelDto> shoppingDetailModelDtos) {
        this.shoppingDetailModelDtos = shoppingDetailModelDtos;
    }

    @Override
    public String toString() {
        return "ShoppingModelDto{" +
                "date=" + date +
                ", status='" + status + '\'' +
                ", totalAmount=" + totalAmount +
                ", shoppingDetailModelDtos=" + shoppingDetailModelDtos +
                '}';
    }
}
