package com.assignment.shopping.controller;

import com.assignment.shopping.dto.ShoppingDetailDto;
import com.assignment.shopping.dto.ShoppingDetailModelDto;
import com.assignment.shopping.dto.ShoppingDto;
import com.assignment.shopping.dto.ShoppingModelDto;
import com.assignment.shopping.model.Product;
import com.assignment.shopping.model.Shopping;
import com.assignment.shopping.model.ShoppingDetail;
import com.assignment.shopping.repository.ProductRepository;
import com.assignment.shopping.repository.ShoppingDetailRepository;
import com.assignment.shopping.repository.ShoppingRepository;
import com.assignment.shopping.service.KafkaAddSender;
import com.assignment.shopping.service.KafkaCancelSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
public class ShoppingController {

    @Autowired
    private ShoppingRepository shoppingRepository;

    @Autowired
    private ShoppingDetailRepository shoppingDetailRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private KafkaAddSender kafkaAddSender;

    @Autowired
    private KafkaCancelSender kafkaCancelSender;

    @PostMapping("/saveShopping")
    public ResponseEntity<?> saveShopping(@RequestBody ShoppingDto shoppingDto){
        Date date = new Date();
        Shopping shopping = new Shopping(shoppingDto.getUsername(), "NEW", shoppingDto.getTotalAmount(), date);
        Shopping shopping1 = shoppingRepository.save(shopping);
        for(ShoppingDetailDto shoppingDetailDto : shoppingDto.getShoppingDetailDtos()){
            ShoppingDetail shoppingDetail = new ShoppingDetail(shopping1.getId(), shoppingDetailDto.getProductId(), shoppingDetailDto.getQuantity());
            ShoppingDetail shoppingDetail1 = shoppingDetailRepository.save(shoppingDetail);
        }
        kafkaAddSender.send(shopping1.getId().toString());
        return ResponseEntity.ok(true);
    }

    @PostMapping("/cancelShopping")
    public ResponseEntity<?> cancelShopping(@RequestBody String id){
        Long purchaseId = Long.parseLong(id);
        int success = shoppingRepository.cancelById(purchaseId);
        if(success == 1){
            kafkaCancelSender.send(id);
            return ResponseEntity.ok(true);
        }
        return ResponseEntity.ok(false);
    }

    @PostMapping("/getShopping")
    public ResponseEntity<?> getShopping(@RequestBody String username){
        List<Shopping> shoppings = shoppingRepository.find(username);
        List<ShoppingModelDto> shoppingModelDtos = new ArrayList<>();
        for (Shopping shopping : shoppings) {
            List<ShoppingDetail> shoppingDetails = shoppingDetailRepository.find(shopping.getId());
            List<ShoppingDetailModelDto> shoppingDetailModelDtos = new ArrayList<>();
            for (ShoppingDetail shoppingDetail : shoppingDetails) {
                Product product = productRepository.getProductById(shoppingDetail.getProductId());
                ShoppingDetailModelDto shoppingDetailModelDto = new ShoppingDetailModelDto(product.getId(), product.getName(), product.getImg(), product.getDescription(), product.getPrice(), shoppingDetail.getQuantity());
                shoppingDetailModelDtos.add(shoppingDetailModelDto);
            }
            ShoppingModelDto shoppingModelDto = new ShoppingModelDto(shopping.getId(), shopping.getDate(), shopping.getStatus(), shopping.getTotalAmount(), shoppingDetailModelDtos);
            shoppingModelDtos.add(shoppingModelDto);
        }

        return ResponseEntity.ok(shoppingModelDtos);
    }
}
