package com.assignment.shopping.repository;

import com.assignment.shopping.model.UserDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDetailRepo extends JpaRepository<UserDetail, Long> {

    @Query(value = "SELECT * FROM user_detail WHERE username = :userName", nativeQuery = true)
    public List<UserDetail> findByUserName(@Param("userName") String userName);

}
