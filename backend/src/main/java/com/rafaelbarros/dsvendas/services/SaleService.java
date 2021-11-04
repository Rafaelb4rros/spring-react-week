package com.rafaelbarros.dsvendas.services;

import java.util.List;

import com.rafaelbarros.dsvendas.dto.SaleDTO;
import com.rafaelbarros.dsvendas.dto.SaleSuccessDTO;
import com.rafaelbarros.dsvendas.dto.SaleSumDTO;
import com.rafaelbarros.dsvendas.entities.Sale;
import com.rafaelbarros.dsvendas.repositories.SaleRepository;
import com.rafaelbarros.dsvendas.repositories.SellerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SaleService {

  @Autowired
  private SaleRepository repository;

  @Autowired
  private SellerRepository sellerRepository;

  @Transactional(readOnly = true)
  public Page<SaleDTO> findAll(Pageable pageable) {
    sellerRepository.findAll();
    Page<Sale> result = repository.findAll(pageable);
    return result.map(x -> new SaleDTO(x));
  }

  @Transactional(readOnly = true)
  public List<SaleSumDTO> amountBySeller() {
    sellerRepository.findAll();
    return repository.amountBySeller();
  }

  @Transactional(readOnly = true)
  public List<SaleSuccessDTO> successBySeller() {
    sellerRepository.findAll();
    return repository.successBySeller();
  }
}
