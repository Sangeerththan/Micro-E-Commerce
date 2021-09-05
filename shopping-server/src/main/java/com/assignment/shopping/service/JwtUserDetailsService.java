package com.assignment.shopping.service;

import java.util.ArrayList;

import com.assignment.shopping.dto.UserCredDto;
import com.assignment.shopping.model.UserCredential;
import com.assignment.shopping.repository.UserCredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private UserCredentialRepository userCredentialRepository;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserCredential user = userCredentialRepository.find(username).get(0);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                new ArrayList<>());
    }

    public UserCredential save(UserCredDto userCredDto){
        UserCredential userCredential = new UserCredential();
        userCredential.setUsername(userCredDto.getUsername());
        userCredential.setPassword(bcryptEncoder.encode(userCredDto.getPassword()));
        return userCredentialRepository.save(userCredential);
    }
}