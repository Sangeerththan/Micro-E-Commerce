package com.assignment.shopping.repository;

import com.assignment.shopping.model.Shopping;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ShoppingRepository extends JpaRepository<Shopping, Long> {

    @Query(value = "SELECT * FROM shopping WHERE username = :userName", nativeQuery = true)
    public List<Shopping> find(@Param("userName") String userName);

    @Transactional
    @Modifying
    @Query(value = "UPDATE shopping SET status = 'CANCELLED' WHERE id = :id", nativeQuery = true)
    public int cancelById(@Param("id") Long id);
}
