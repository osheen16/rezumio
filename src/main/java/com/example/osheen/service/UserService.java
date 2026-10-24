package com.example.osheen.service;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.example.osheen.exception.PasswordHashingException;
import com.example.osheen.model.User;
import com.example.osheen.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> registerUser(User user) throws PasswordHashingException {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return Optional.empty();
        }
        try {
            if (user.getUsername() == null || user.getUsername().isEmpty()) {
                throw new IllegalArgumentException("Username cannot be empty.");
            }
            if (user.getPhone() == null || user.getPhone().isEmpty()) {
                throw new IllegalArgumentException("Phone number cannot be empty.");
            }
            user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
        } catch (Exception e) {
            throw new PasswordHashingException("Error: " + e.getMessage(), e);
        }
        return Optional.of(userRepository.save(user));
    }

    public Optional<User> loginUser(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if (!user.isPresent()) {
            return Optional.empty();
        }
        if (password == null) { // For UserDetailsService or OAuth2
            return user;
        }
        if (BCrypt.checkpw(password, user.get().getPassword())) {
            return user;
        }
        return Optional.empty();
    }

    // New method to handle OAuth2 users
    public User registerOrGetOAuth2User(String email, String name) {
        Optional<User> existingUser = userRepository.findByEmail(email);
        if (existingUser.isPresent()) {
            return existingUser.get();
        }
        // Create a new user for OAuth2 login
        User newUser = new User();
        newUser.setEmail(email);
        newUser.setUsername(name != null ? name : email.split("@")[0]); // Use name or email prefix as username
        newUser.setPassword(BCrypt.hashpw("oauth2-placeholder", BCrypt.gensalt())); // Placeholder password
        newUser.setPhone("N/A"); // Default phone, adjust as needed
        return userRepository.save(newUser);
    }
}