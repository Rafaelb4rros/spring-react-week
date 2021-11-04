package com.rafaelbarros.dsvendas.controllers;

import java.util.List;

import com.rafaelbarros.dsvendas.dto.SaleDTO;
import com.rafaelbarros.dsvendas.dto.SaleSuccessDTO;
import com.rafaelbarros.dsvendas.dto.SaleSumDTO;
import com.rafaelbarros.dsvendas.services.SaleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

  @Autowired
  private SaleService service;

  @GetMapping
  public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable) {
    Page<SaleDTO> list = service.findAll(pageable);
    return ResponseEntity.ok(list);
  }

  @GetMapping(value = "/sum")
  public ResponseEntity<List<SaleSumDTO>> amountBySeller() {
    List<SaleSumDTO> list = service.amountBySeller();
    return ResponseEntity.ok(list);
  }

  @GetMapping(value = "/success")
  public ResponseEntity<List<SaleSuccessDTO>> successBySeller() {
    List<SaleSuccessDTO> list = service.successBySeller();
    return ResponseEntity.ok(list);
  }
}
