package com.assignment.shopping.component;

import com.assignment.shopping.controller.ProductController;
import com.assignment.shopping.dto.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class Test {
    @Autowired
    ProductController productController;

    public synchronized void process() throws IOException, InterruptedException {
        List<ProductDto> productDtos = new ArrayList<>();
//        productDtos.add(new ProductDto("Apple", "Red apples", "https://placeimg.com/150/150/fruits", 100));
//        productDtos.add(new ProductDto("Cat", "Pet", "https://placeimg.com/150/150/animals", 500));
//        productDtos.add(new ProductDto("Milk", "Packet milk", "https://placeimg.com/150/150/nature", 150));
//        productDtos.add(new ProductDto("Pen", "Ballpoint pen advanced", "https://placeimg.com/150/150/nature", 20));
//        productDtos.add(new ProductDto("Trimmer", "Original trimmer", "https://placeimg.com/150/150/nature", 1000));
        productDtos.add(new ProductDto("Parrot", "Five coloured parrot", "https://placeimg.com/150/150/parrot", 4000));
        Thread th = new Thread() {
            @Override
            public void run() {
                try {
                    for ( ProductDto productDto : productDtos) {
                        productController.saveProduct(productDto);
                        System.out.println("test pass1");
                    }
                } catch (Exception e){
//                    System.out.println(e);
                }
            }
        };
        th.start();
    }
}
