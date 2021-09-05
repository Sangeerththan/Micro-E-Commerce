package com.assignment.shopping.dto;

public class ProductDto {

    private String name;

    private String description;

    private String img;

    private Integer price;

    public ProductDto(String name, String description, String img, Integer price) {
        this.name = name;
        this.description = description;
        this.img = img;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}
