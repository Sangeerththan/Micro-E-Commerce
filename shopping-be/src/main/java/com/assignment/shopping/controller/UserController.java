package com.assignment.shopping.controller;

import com.assignment.shopping.model.UserCredential;
import com.assignment.shopping.model.UserDetail;
import com.assignment.shopping.repository.UserCredentialRepository;
import com.assignment.shopping.repository.UserDetailRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserCredentialRepository userCredentialRepository;

    @Autowired
    private UserDetailRepo userDetailRepo;

    @PostMapping("/isUsernameAvailable")
    public boolean isUserNameAvailable(@RequestBody String username){
        List<UserCredential> userCredentials = userCredentialRepository.find(username);

        return userCredentials.size() == 0;

    }

    @PostMapping("/getUserData")
    public ResponseEntity<?> getUserData(@RequestBody String username){
        List<UserDetail> userDetail =  userDetailRepo.findByUserName(username);
        return ResponseEntity.ok(userDetail.get(0));
    }

}
