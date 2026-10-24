package com.example.osheen.config;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private static final Logger logger = LoggerFactory.getLogger(CustomOAuth2UserService.class);

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        logger.debug("Starting loadUser for registration ID: {}", userRequest.getClientRegistration().getRegistrationId());
        logger.debug("Access Token: {}", userRequest.getAccessToken().getTokenValue());

        try {
            // Load user info from the OAuth2 provider
            OAuth2User oAuth2User = super.loadUser(userRequest);
            logger.debug("Successfully retrieved OAuth2User: {}", oAuth2User);

            // Log the full raw attributes
            Map<String, Object> attributes = oAuth2User.getAttributes();
            logger.info("Raw User Attributes: {}", attributes);

            // Check if attributes are present
            if (attributes == null || attributes.isEmpty()) {
                logger.error("User attributes are missing or empty");
                throw new OAuth2AuthenticationException(new OAuth2Error("invalid_user_info_response", "User attributes are missing or empty", null));
            }

            // Identify provider
            String registrationId = userRequest.getClientRegistration().getRegistrationId();
            String id;
            String firstName;
            String lastName;

            if ("google".equalsIgnoreCase(registrationId)) {
                id = (String) attributes.getOrDefault("sub", "N/A");  // Google's unique ID
                firstName = (String) attributes.getOrDefault("given_name", "Unknown");
                lastName = (String) attributes.getOrDefault("family_name", "Unknown");
            } else if ("linkedin".equalsIgnoreCase(registrationId)) {
                id = (String) attributes.getOrDefault("id", "N/A");
                firstName = (String) attributes.getOrDefault("localizedFirstName", "Unknown");
                lastName = (String) attributes.getOrDefault("localizedLastName", "Unknown");
            } else {
                id = (String) attributes.getOrDefault("id", "N/A");
                firstName = (String) attributes.getOrDefault("first_name", "Unknown");
                lastName = (String) attributes.getOrDefault("last_name", "Unknown");
            }

            logger.info("Extracted User ID: {}", id);
            logger.info("Extracted First Name: {}", firstName);
            logger.info("Extracted Last Name: {}", lastName);
            logger.debug("All attribute keys: {}", attributes.keySet());

            // Return the OAuth2User object
            logger.debug("Returning OAuth2User with attributes: {}", attributes);
            return oAuth2User;

        } catch (OAuth2AuthenticationException e) {
            logger.error("OAuth2 Authentication failed: {}", e.getMessage(), e);
            throw e; // Re-throw the original exception
        } catch (Exception e) {
            logger.error("Unexpected error during user loading: {}", e.getMessage(), e);
            throw new OAuth2AuthenticationException(
                new OAuth2Error("user_load_error", "Failed to load user: " + e.getMessage(), null), 
                e
            );
        }
    }
}
