package com.example.osheen.model;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true) // ✅ Username may not be available for OAuth users
    private String username;

    @Column(nullable = false, unique = true) // ✅ Email is required and unique
    private String email;

    @Column(nullable = true) // ✅ Nullable for OAuth users
    private String password;

    @Column(nullable = true) // ✅ Optional field
    private String phone;

    @Column(nullable = true) // ✅ Stores "google", "linkedin", etc.
    private String oauthProvider;

    @Column(nullable = true, unique = true) // ✅ Unique OAuth ID
    private String oauthId;

    @Column(nullable = true) // ✅ Stores profile picture URL
    private String profilePicture;

    @CreationTimestamp // ✅ Automatically set when user is created
    private Timestamp createdAt;

    @UpdateTimestamp // ✅ Automatically updated when user info is modified
    private Timestamp updatedAt;

    // ✅ Default Constructor (Required by JPA)
    public User() {}

    // ✅ Full Constructor
    public User(String username, String email, String password, String phone,
                String oauthProvider, String oauthId, String profilePicture) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.oauthProvider = oauthProvider;
        this.oauthId = oauthId;
        this.profilePicture = profilePicture;
    }

    // ✅ Constructor for OAuth Users (No Password Required)
    public User(String username, String email, String oauthProvider, String oauthId, String profilePicture) {
        this.username = username;
        this.email = email;
        this.oauthProvider = oauthProvider;
        this.oauthId = oauthId;
        this.profilePicture = profilePicture;
    }

    // ✅ New Constructor for username, email, password, and phone
    public User(String username, String email, String password, String phone) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.oauthProvider = null;
        this.oauthId = null;
        this.profilePicture = null;
    }
}
