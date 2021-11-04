package com.rafaelbarros.dsvendas.services;

import java.util.List;
import java.util.stream.Collectors;

import com.rafaelbarros.dsvendas.dto.SellerDTO;
import com.rafaelbarros.dsvendas.entities.Seller;
import com.rafaelbarros.dsvendas.repositories.SellerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SellerService {

  @Autowired
  private SellerRepository repository;

  public List<SellerDTO> findAll() {
    List<Seller> result = repository.findAll();
    return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
  }
}
