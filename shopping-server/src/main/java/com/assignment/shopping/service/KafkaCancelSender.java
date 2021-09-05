package com.assignment.shopping.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaCancelSender {

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    String kafkaTopic = "cancel_shopping";

    public void send(String message) {

        kafkaTemplate.send(kafkaTopic, message);
    }
}
