package com.example.osheen.controller;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/templates")
@CrossOrigin(origins = {"http://127.0.0.1:5500", "http://localhost:5500"}) // Allow frontend requests
public class TemplateController {

    private final ResourceLoader resourceLoader;
    private static final Logger logger = LoggerFactory.getLogger(TemplateController.class);

    public TemplateController(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    @GetMapping("/{templateName}")
    public ResponseEntity<byte[]> getTemplate(@PathVariable String templateName) throws IOException {
        // Adjust the path if needed (ensure your DOCX files are in src/main/resources/templates/)
        String templatePath = "classpath:templates/" + templateName;
        
        // Log the path for debugging purposes
        logger.debug("Loading template from: {}", templatePath);
        
        Resource resource = resourceLoader.getResource(templatePath);

        if (!resource.exists()) {
            logger.debug("Template not found: {}", templatePath);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        // Read the DOCX file as bytes
        byte[] content = resource.getInputStream().readAllBytes();

        HttpHeaders headers = new HttpHeaders();
        // Set the content type for DOCX files
        headers.add(HttpHeaders.CONTENT_TYPE, "application/vnd.openxmlformats-officedocument.wordprocessingml.document");

        return ResponseEntity.ok().headers(headers).body(content);
    }
}
