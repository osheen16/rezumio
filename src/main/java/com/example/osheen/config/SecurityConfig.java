package com.example.osheen.config;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.mindrot.jbcrypt.BCrypt;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.InMemoryOAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.endpoint.OAuth2AccessTokenResponseClient;
import org.springframework.security.oauth2.client.endpoint.OAuth2AuthorizationCodeGrantRequest;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.osheen.service.UserService;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private static final Logger logger = LoggerFactory.getLogger(SecurityConfig.class);
    private static final String DEFAULT_REDIRECT_URL = "/index.html";
    private static final String ROLE_USER = "ROLE_USER";
    private static final String EMAIL_ATTRIBUTE = "email";

    private final RestTemplate restTemplate;
    private final UserService userService;

    @Autowired
    public SecurityConfig(RestTemplate restTemplate, UserService userService) {
        this.restTemplate = restTemplate;
        this.userService = userService;
    }

    @Value("${spring.security.oauth2.client.registration.linkedin.client-id:}")
    private String linkedinClientId;

    @Value("${spring.security.oauth2.client.registration.linkedin.client-secret:}")
    private String linkedinClientSecret;

    @Value("${spring.security.oauth2.client.registration.linkedin.redirect-uri:}")
    private String linkedinRedirectUri;

    @Value("${spring.security.oauth2.client.registration.google.client-id:}")
    private String googleClientId;

    @Value("${spring.security.oauth2.client.registration.google.client-secret:}")
    private String googleClientSecret;

    @Value("${spring.security.oauth2.client.registration.google.redirect-uri:}")
    private String googleRedirectUri;

    @Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http)
        throws Exception {

    DaoAuthenticationProvider authProvider =
            authenticationProvider(customUserDetailsService());

    http
        .cors(cors ->
            cors.configurationSource(corsConfigurationSource())
        )
        .csrf(csrf -> csrf.disable())

        .authorizeHttpRequests(auth -> auth
            .requestMatchers(
                "/",
                "/index",
                "/index.html",
                "/login",
                "/login.html",
                "/register",
                "/register.html",
                "/error",
                "/favicon.ico",

                // Static frontend files
                "/*.html",
                "/*.css",
                "/*.js",
                "/css/**",
                "/js/**",
                "/images/**",

                // OAuth endpoints
                "/oauth2/**",
                "/login/oauth2/**",

                // Authentication endpoints
                "/api/register",
                "/api/login",
                "/api/check-session",
                "/api/index",
                "/api/oauth/user-info",
                "/api/logout",

                // Existing application endpoints
                "/api/generate-resume",
                "/generate-resume",
                "/api/resume/summary",
                "/api/chat",
                "/api/feedback"
            )
            .permitAll()
            .anyRequest().authenticated()
        )

        .authenticationProvider(authProvider)

        .oauth2Login(oauth2 -> oauth2
            // Use your custom HTML page instead of Spring's generated page
            .loginPage("/login.html")
            .defaultSuccessUrl("/index.html", true)
            .failureUrl("/login.html?error=true")
            .userInfoEndpoint(userInfo ->
                userInfo.userService(oauth2UserService())
            )
            .tokenEndpoint(token ->
                token.accessTokenResponseClient(
                    accessTokenResponseClient()
                )
            )
            .successHandler(successHandler())
        )

        .logout(logout -> logout
            .logoutUrl("/api/logout")
            .logoutSuccessUrl("/login.html")
            .clearAuthentication(true)
            .invalidateHttpSession(true)
            .deleteCookies("JSESSIONID")
        )

        .sessionManagement(session -> session
            .sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
            .sessionFixation(fixation -> fixation.migrateSession())
        )

        .securityContext(security ->
            security.requireExplicitSave(false)
        );

    return http.build();
}

    @Bean
    public UserDetailsService customUserDetailsService() {
        return email -> userService.loginUser(email, null)
            .map(user -> new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority(ROLE_USER))
            ))
            .orElseThrow(() -> new UsernameNotFoundException("User not found: " + email));
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider(UserDetailsService customUserDetailsService) {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(customUserDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authBuilder.authenticationProvider(authenticationProvider(customUserDetailsService()));
        return authBuilder.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new PasswordEncoder() {
            @Override
            public String encode(CharSequence rawPassword) {
                return BCrypt.hashpw(rawPassword.toString(), BCrypt.gensalt());
            }

            @Override
            public boolean matches(CharSequence rawPassword, String encodedPassword) {
                return BCrypt.checkpw(rawPassword.toString(), encodedPassword);
            }
        };
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of(
            "http://127.0.0.1:3000", "http://localhost:3000",
            "http://127.0.0.1:5500", "http://localhost:5500",
            "http://localhost:8080"
        ));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("Authorization", "Content-Type", "Accept"));
        configuration.setAllowCredentials(true);
        configuration.setExposedHeaders(List.of("Authorization"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public ClientRegistrationRepository clientRegistrationRepository() {
        List<ClientRegistration> registrations = new ArrayList<>();
        if (!linkedinClientId.isEmpty() && !linkedinClientSecret.isEmpty() && !linkedinRedirectUri.isEmpty()) {
            registrations.add(ClientRegistration.withRegistrationId("linkedin")
                .clientId(linkedinClientId)
                .clientSecret(linkedinClientSecret)
                .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_POST)
                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
                .redirectUri(linkedinRedirectUri)
                .scope("profile")
                .authorizationUri("https://www.linkedin.com/oauth/v2/authorization")
                .tokenUri("https://www.linkedin.com/oauth/v2/accessToken")
                .userInfoUri("https://api.linkedin.com/v2/me")
                .userNameAttributeName("id")
                .build());
        }
        if (!googleClientId.isEmpty() && !googleClientSecret.isEmpty() && !googleRedirectUri.isEmpty()) {
            registrations.add(ClientRegistration.withRegistrationId("google")
                .clientId(googleClientId)
                .clientSecret(googleClientSecret)
                .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
                .redirectUri(googleRedirectUri)
                .scope("profile", EMAIL_ATTRIBUTE)
                .authorizationUri("https://accounts.google.com/o/oauth2/v2/auth")
                .tokenUri("https://oauth2.googleapis.com/token")
                .userInfoUri("https://www.googleapis.com/oauth2/v3/userinfo")
                .userNameAttributeName("sub")
                .build());
        }
        return new InMemoryClientRegistrationRepository(registrations);
    }

    @Bean
    public OAuth2AuthorizedClientService authorizedClientService(ClientRegistrationRepository clientRegistrationRepository) {
        return new InMemoryOAuth2AuthorizedClientService(clientRegistrationRepository);
    }

    @Bean
    public AuthenticationSuccessHandler successHandler() {
        SimpleUrlAuthenticationSuccessHandler handler = new SimpleUrlAuthenticationSuccessHandler();
        handler.setDefaultTargetUrl(DEFAULT_REDIRECT_URL);
        handler.setAlwaysUseDefaultTargetUrl(true);
        return (request, response, authentication) -> {
            logger.info("OAuth2 login successful, redirecting to /index.html");
            handler.onAuthenticationSuccess(request, response, authentication);
        };
    }

    @Bean
    public OAuth2UserService<OAuth2UserRequest, OAuth2User> oauth2UserService() {
        return userRequest -> {
            String registrationId = userRequest.getClientRegistration().getRegistrationId();
            logger.debug("Processing OAuth2 login for provider: {}", registrationId);
            return switch (registrationId) {
                case "google" -> googleUser(userRequest);
                case "linkedin" -> linkedinUser(userRequest);
                default -> throw new IllegalArgumentException("Unsupported OAuth2 provider: " + registrationId);
            };
        };
    }

    @Bean
    public OAuth2AccessTokenResponseClient<OAuth2AuthorizationCodeGrantRequest> accessTokenResponseClient() {
        return new LinkedInAccessTokenResponseClient(restTemplate);
    }

    private OAuth2User googleUser(OAuth2UserRequest userRequest) {
        String accessToken = userRequest.getAccessToken().getTokenValue();
        RestTemplate restTemplateLocal = new RestTemplate();
        String userInfoUri = "https://www.googleapis.com/oauth2/v3/userinfo";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        HttpEntity<String> entity = new HttpEntity<>(headers);
        ResponseEntity<Map<String, Object>> response = restTemplateLocal.exchange(
            userInfoUri, HttpMethod.GET, entity, new ParameterizedTypeReference<Map<String, Object>>() {}
        );
        Map<String, Object> userInfo = response.getBody();
        if (userInfo == null) {
            throw new IllegalStateException("Failed to fetch user info from Google");
        }
        String email = (String) userInfo.get("email");
        String name = (String) userInfo.get("name");

        // Register or get the user in the database
        userService.registerOrGetOAuth2User(email, name);

        Map<String, Object> attributes = new HashMap<>();
        attributes.put("id", userInfo.get("sub"));
        attributes.put("name", name);
        attributes.put(EMAIL_ATTRIBUTE, email);
        logger.info("Google login successful with real user info: {}", name);
        return new DefaultOAuth2User(
            Set.of(new SimpleGrantedAuthority(ROLE_USER)),
            attributes,
            EMAIL_ATTRIBUTE
        );
    }

    private OAuth2User linkedinUser(OAuth2UserRequest userRequest) {
        String accessToken = userRequest.getAccessToken().getTokenValue();
        String pseudoId = accessToken.substring(0, Math.min(accessToken.length(), 10));
        logger.info("LinkedIn login successful with access token. Pseudo ID: {}", pseudoId);
        return new DefaultOAuth2User(
            Set.of(new SimpleGrantedAuthority(ROLE_USER)),
            Map.of("id", pseudoId, "name", "Demo LinkedIn User", EMAIL_ATTRIBUTE, "demo.linkedin@example.com"),
            "id"
        );
    }
}