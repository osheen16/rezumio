package com.example.osheen.config;

import java.util.Collections;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.security.oauth2.client.endpoint.OAuth2AccessTokenResponseClient;
import org.springframework.security.oauth2.client.endpoint.OAuth2AuthorizationCodeGrantRequest;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.security.oauth2.core.endpoint.OAuth2AccessTokenResponse;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class LinkedInAccessTokenResponseClient implements OAuth2AccessTokenResponseClient<OAuth2AuthorizationCodeGrantRequest> {

    private static final Logger logger = LoggerFactory.getLogger(LinkedInAccessTokenResponseClient.class);

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    @Autowired
    public LinkedInAccessTokenResponseClient(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
        this.objectMapper = new ObjectMapper();
        this.restTemplate.getMessageConverters().add(0, new StringHttpMessageConverter());
    }

    @Override
    public OAuth2AccessTokenResponse getTokenResponse(OAuth2AuthorizationCodeGrantRequest authorizationGrantRequest) {
        String registrationId = authorizationGrantRequest.getClientRegistration().getRegistrationId();
        String tokenUri = authorizationGrantRequest.getClientRegistration().getProviderDetails().getTokenUri();
        String code = authorizationGrantRequest.getAuthorizationExchange().getAuthorizationResponse().getCode();
        String redirectUri = authorizationGrantRequest.getClientRegistration().getRedirectUri();
        String clientId = authorizationGrantRequest.getClientRegistration().getClientId();
        String clientSecret = authorizationGrantRequest.getClientRegistration().getClientSecret();

        // Validate inputs
        if (code == null || code.isEmpty()) {
            logger.error("Authorization code is null or empty for provider: {}", registrationId);
            throw new IllegalArgumentException("Authorization code is missing");
        }
        if (redirectUri == null || redirectUri.isEmpty()) {
            logger.error("Redirect URI is null or empty for provider: {}", registrationId);
            throw new IllegalArgumentException("Redirect URI is missing");
        }
        if (clientId == null || clientId.isEmpty() || clientSecret == null || clientSecret.isEmpty()) {
            logger.error("Client ID or Client Secret is null or empty for provider: {}", registrationId);
            throw new IllegalArgumentException("Client credentials are missing");
        }

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("code", code);
        params.add("redirect_uri", redirectUri);
        params.add("client_id", clientId);
        params.add("client_secret", clientSecret);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(params, headers);

        logger.info("Sending token exchange request to {} for provider {} with params: {}", tokenUri, registrationId, params);
        logger.debug("Request headers: {}", headers);

        try {
            ResponseEntity<String> rawResponse = restTemplate.exchange(
                tokenUri, // Use provider-specific token URI
                HttpMethod.POST,
                request,
                String.class
            );

            logger.info("Token response status for {}: {}", registrationId, rawResponse.getStatusCode());
            logger.debug("Raw token response body: {}", rawResponse.getBody());

            JsonNode jsonNode = objectMapper.readTree(rawResponse.getBody());
            String accessToken = jsonNode.get("access_token").asText();
            String tokenTypeStr = jsonNode.get("token_type") != null ? jsonNode.get("token_type").asText() : "Bearer";
            int expiresIn = jsonNode.get("expires_in").asInt();

            if (accessToken == null || accessToken.isEmpty()) {
                logger.error("Access token is null or empty in response from {}: {}", registrationId, rawResponse.getBody());
                throw new IllegalStateException("No access token received from provider: " + registrationId);
            }

            OAuth2AccessToken.TokenType tokenType = OAuth2AccessToken.TokenType.BEARER;
            if (!"Bearer".equalsIgnoreCase(tokenTypeStr)) {
                logger.warn("Unexpected token type for {}: {}", registrationId, tokenTypeStr);
            }

            OAuth2AccessTokenResponse tokenResponse = OAuth2AccessTokenResponse.withToken(accessToken)
                .tokenType(tokenType)
                .expiresIn(expiresIn)
                .build();

            logger.info("Successfully parsed token response for {}: {}", registrationId, tokenResponse);
            return tokenResponse;
        } catch (JsonProcessingException e) {
            logger.error("Failed to parse token response for {}: {}", registrationId, e.getMessage(), e);
            throw new IllegalStateException("Unable to parse token response from " + registrationId, e);
        } catch (Exception e) {
            logger.error("Token exchange failed for {}: {}", registrationId, e.getMessage(), e);
            if (e.getMessage().contains("401")) {
                logger.error("401 Unauthorized - Check client credentials, redirect URI, or authorization code for {}", registrationId);
            }
            throw new RuntimeException("Failed to exchange authorization code for access token", e);
        }
    }
}