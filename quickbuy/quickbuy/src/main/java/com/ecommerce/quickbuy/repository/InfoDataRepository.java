package com.ecommerce.quickbuy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.quickbuy.model.InfoData;

@Repository
public interface InfoDataRepository extends JpaRepository<InfoData, Integer> {

}
