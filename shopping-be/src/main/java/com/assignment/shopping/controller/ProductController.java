package com.assignment.shopping.controller;

import com.assignment.shopping.dto.ProductDto;
import com.assignment.shopping.model.Product;
import com.assignment.shopping.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @PostMapping("/save")
    public void saveProduct(@RequestBody ProductDto productDto){
        Product product = new Product();
        product.setName(productDto.getName());
        product.setDescription(productDto.getDescription());
        product.setImg(productDto.getImg());
        product.setPrice(productDto.getPrice());
        productRepository.save(product);
        System.out.println("test pass");
    }

    @GetMapping("/getAllProducts")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
}
