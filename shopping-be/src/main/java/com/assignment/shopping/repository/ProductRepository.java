package com.assignment.shopping.repository;

import com.assignment.shopping.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "SELECT * FROM product", nativeQuery = true)
    public List<Product> getAllProducts();

    @Query(value = "SELECT * FROM product where id= :productId", nativeQuery = true)
    public Product getProductById(@Param("productId") Long productId);
}
