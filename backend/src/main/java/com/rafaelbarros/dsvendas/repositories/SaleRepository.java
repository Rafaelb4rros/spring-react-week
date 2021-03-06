package com.rafaelbarros.dsvendas.repositories;

import java.util.List;

import com.rafaelbarros.dsvendas.dto.SaleSuccessDTO;
import com.rafaelbarros.dsvendas.dto.SaleSumDTO;
import com.rafaelbarros.dsvendas.entities.Sale;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SaleRepository extends JpaRepository<Sale, Long> {

  @Query("SELECT new com.rafaelbarros.dsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
      + " FROM Sale AS obj GROUP BY obj.seller")
  List<SaleSumDTO> amountBySeller();

  @Query("SELECT new com.rafaelbarros.dsvendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
      + " FROM Sale AS obj GROUP BY obj.seller")
  List<SaleSuccessDTO> successBySeller();
}
