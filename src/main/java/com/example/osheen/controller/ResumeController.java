package com.example.osheen.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.osheen.model.ResumeData;
import com.example.osheen.service.ResumeService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:3000", "http://localhost:5500"}, 
             allowCredentials = "true")
public class ResumeController {

    private static final Logger logger = LoggerFactory.getLogger(ResumeController.class);

    @Autowired
    private ResumeService resumeService;

    @PostMapping(value = "/generate-resume", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<byte[]> generateResume(@RequestBody ResumeData resumeData) {
        try {
            logger.info("Received resume generation request: template={}, fields={}", 
                resumeData.getTemplate(), resumeData.getFields());

            if (resumeData == null || resumeData.getTemplate() == null || resumeData.getFields() == null) {
                logger.error("Invalid request: template and fields are required");
                return ResponseEntity.badRequest()
                        .body("Invalid request: template and fields are required".getBytes());
            }

            byte[] resumeBytes = resumeService.generateResume(resumeData);

            String fileName = resumeData.getFields()
                    .getOrDefault("FULL_NAME", 
                        resumeData.getFields().getOrDefault("Name", "Resume"))
                    .replaceAll("[^a-zA-Z0-9_]", "_") + "_Resume_" + System.currentTimeMillis() + ".docx";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            headers.setContentDispositionFormData("attachment", fileName);
            headers.setContentLength(resumeBytes.length);

            logger.info("Successfully generated resume: {}", fileName);

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(resumeBytes);

        } catch (IllegalArgumentException e) {
            logger.error("Invalid template or data: {}", e.getMessage());
            return ResponseEntity.badRequest()
                    .body(("Error: " + e.getMessage()).getBytes());
        } catch (Exception e) {
            logger.error("Error generating resume: {}", e.getMessage(), e);
            return ResponseEntity.status(500)
                    .body(("Error generating resume: " + e.getMessage()).getBytes());
        } finally {
            if (resumeData != null && resumeData.getFields() != null) {
                resumeData.getFields().clear();
            }
        }
    }
}