
package com.example.osheen.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.osheen.exception.PasswordHashingException;
import com.example.osheen.model.User;
import com.example.osheen.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(
    origins = {
        "http://localhost:8080",
        "http://localhost:5500",
        "http://127.0.0.1:5500"
    },
    allowCredentials = "true"
)
public class AuthController {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;

    private final HttpSessionSecurityContextRepository securityContextRepository =
            new HttpSessionSecurityContextRepository();

    @Autowired
    public AuthController(
            UserService userService,
            AuthenticationManager authenticationManager) {

        this.userService = userService;
        this.authenticationManager = authenticationManager;
    }

    // -------------------- REGISTER --------------------

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {

        if (user.getUsername() == null
                || user.getUsername().isBlank()) {
            return ResponseEntity
                    .badRequest()
                    .body("Username is required.");
        }

        if (user.getEmail() == null
                || user.getEmail().isBlank()) {
            return ResponseEntity
                    .badRequest()
                    .body("Email is required.");
        }

        if (user.getPassword() == null
                || user.getPassword().isBlank()) {
            return ResponseEntity
                    .badRequest()
                    .body("Password is required.");
        }

        if (user.getPhone() == null
                || user.getPhone().isBlank()) {
            return ResponseEntity
                    .badRequest()
                    .body("Phone number is required.");
        }

        try {
            Optional<User> registeredUser =
                    userService.registerUser(user);

            if (registeredUser.isPresent()) {
                return ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body("User registered successfully.");
            }

            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body("Email already in use.");

        } catch (PasswordHashingException e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Password hashing failed: " + e.getMessage());
        }
    }

    // -------------------- EMAIL/PASSWORD LOGIN --------------------

    @PostMapping("/login")
    public ResponseEntity<String> login(
            @RequestBody User user,
            HttpServletRequest request,
            HttpServletResponse response) {

        if (user.getEmail() == null
                || user.getEmail().isBlank()
                || user.getPassword() == null
                || user.getPassword().isBlank()) {

            return ResponseEntity
                    .badRequest()
                    .body("Email and password are required.");
        }

        try {
            Authentication authentication =
                    authenticationManager.authenticate(
                            new UsernamePasswordAuthenticationToken(
                                    user.getEmail(),
                                    user.getPassword()
                            )
                    );

            SecurityContext context =
                    SecurityContextHolder.createEmptyContext();

            context.setAuthentication(authentication);
            SecurityContextHolder.setContext(context);

            // Ensure a session exists, then persist authentication.
            request.getSession(true);

            securityContextRepository.saveContext(
                    context,
                    request,
                    response
            );

            return ResponseEntity.ok("Login successful");

        } catch (AuthenticationException e) {

            SecurityContextHolder.clearContext();

            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email or password");
        }
    }

    // -------------------- CHECK LOGIN SESSION --------------------

    @GetMapping("/check-session")
    public ResponseEntity<Map<String, Object>> checkSession(
            HttpServletRequest request) {

        HttpSession session = request.getSession(false);

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        Map<String, Object> result = new HashMap<>();

        boolean loggedIn =
                authentication != null
                && authentication.isAuthenticated()
                && !"anonymousUser".equals(authentication.getPrincipal());

        if (loggedIn) {
            String email = authentication.getName();

            Optional<User> user = userService.loginUser(email, null);

            result.put("loggedIn", true);
            result.put("email", email);
            result.put(
                    "username",
                    user.map(User::getUsername).orElse("Unknown User")
            );
        } else {
            result.put("loggedIn", false);
        }

        result.put(
                "sessionId",
                session != null ? session.getId() : null
        );

        System.out.println(
                "Check-session - Session ID: "
                + (session != null ? session.getId() : "No session")
        );

        System.out.println(
                "Check-session - Cookies: "
                + Arrays.toString(request.getCookies())
        );

        System.out.println(
                "Check-session - Authenticated: " + loggedIn
        );

        return ResponseEntity.ok(result);
    }

    // -------------------- DASHBOARD DATA --------------------

    @GetMapping("/index")
    public ResponseEntity<Map<String, String>> getDashboardData() {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        boolean loggedIn =
                authentication != null
                && authentication.isAuthenticated()
                && !"anonymousUser".equals(authentication.getPrincipal());

        if (!loggedIn) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "Not logged in");

            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(error);
        }

        String email = authentication.getName();

        Optional<User> optionalUser =
                userService.loginUser(email, null);

        if (optionalUser.isEmpty()) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "User not found");

            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(error);
        }

        User user = optionalUser.get();

        Map<String, String> result = new HashMap<>();
        result.put(
                "userId",
                user.getId() != null ? user.getId().toString() : ""
        );
        result.put("email", user.getEmail());
        result.put("name", user.getUsername());

        return ResponseEntity.ok(result);
    }

    // -------------------- OAUTH ERROR HANDLING --------------------

    @ExceptionHandler(OAuth2AuthenticationException.class)
    public ResponseEntity<String> handleOAuth2Error(
            OAuth2AuthenticationException exception) {

        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(
                        "OAuth2 authentication failed: "
                        + exception.getMessage()
                );
    }
}
