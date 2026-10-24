package com.example.osheen.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/oauth")
@CrossOrigin(origins = "http://127.0.0.1:5500") // ✅ Allow frontend requests
public class OAuthController {

    @GetMapping("/user-info")
    public Map<String, Object> getUserInfo(@AuthenticationPrincipal OAuth2User oauthUser) {
        if (oauthUser == null) {
            return Collections.singletonMap("error", "User not authenticated");
        }
        return oauthUser.getAttributes();
    }
}
