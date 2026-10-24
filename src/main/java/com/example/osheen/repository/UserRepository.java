package com.example.osheen.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.osheen.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
    // Find user by email (for normal authentication)
    Optional<User> findByEmail(String email);

    // Find user by OAuth ID and Provider (for social login)
    Optional<User> findByOauthIdAndOauthProvider(String oauthId, String oauthProvider);
}
