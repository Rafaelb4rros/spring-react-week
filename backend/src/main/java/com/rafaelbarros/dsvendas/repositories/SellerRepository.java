package com.rafaelbarros.dsvendas.repositories;

import com.rafaelbarros.dsvendas.entities.Seller;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepository extends JpaRepository<Seller, Long> {
}
