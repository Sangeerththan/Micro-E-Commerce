package com.assignment.shopping.repository;

import com.assignment.shopping.model.ShoppingDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShoppingDetailRepository extends JpaRepository<ShoppingDetail, Long> {

    @Query(value = "SELECT * FROM shopping_detail WHERE shopping_id = :shoppingId", nativeQuery = true)
    public List<ShoppingDetail> find(@Param("shoppingId") Long shoppingId);
}
