package com.assignment.shopping.repository;

import com.assignment.shopping.model.UserCredential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserCredentialRepository extends JpaRepository<UserCredential, Long> {

    @Query(value = "SELECT * FROM user_credential WHERE username = :userName", nativeQuery = true)
    public List<UserCredential> find(@Param("userName") String userName);

}
