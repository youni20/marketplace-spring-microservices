package com.ecommerce.payment.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payments")
@Slf4j
public class PaymentController {

    @PostMapping("/process")
    public ResponseEntity<String> processPayment(@RequestBody String paymentDetails) {
        log.info("Processing payment: {}", paymentDetails);
        return new ResponseEntity<>("Payment Processed Successfully", HttpStatus.OK);
    }
}
