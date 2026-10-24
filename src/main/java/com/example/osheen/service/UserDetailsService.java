package com.example.osheen.service;

import com.example.osheen.model.UserDetails;
import com.example.osheen.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class UserDetailsService {

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    // Retrieve user details by username
    public UserDetails getUserDetailsByUsername(String username) {
        return userDetailsRepository.findByUsername(username).orElse(new UserDetails());
    }

    // Update user details
    public UserDetails updateUserDetails(UserDetails userDetails) {
        return userDetailsRepository.save(userDetails);
    }
}
