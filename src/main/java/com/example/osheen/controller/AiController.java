package com.example.osheen.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import javax.annotation.PostConstruct;
import org.slf4j.Logger;
import java.util.Map;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://127.0.0.1:3000", "http://localhost:5500"})
public class AiController {

    private static final Logger logger = LoggerFactory.getLogger(AiController.class);

    @Value("${gemini.api.key}")
    private String geminiApiKey;
    private static final String GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

    @PostConstruct
    public void init() {
        logger.info("AiController initialized");
    }

    @GetMapping("/resume/summary")
    public String getResumeSummary(@RequestParam String jobTitle) {
        logger.info("Generating resume summary for job title: {}", jobTitle);
        String prompt = "Write a concise professional resume summary (under 100 words) for a " + jobTitle + ".";
        String response = getGeminiResponse(prompt);
        logger.info("Generated summary: {}", response);
        return response;
    }
    @PostMapping("/feedback")
public String submitFeedback(@RequestBody Map<String, String> feedback) {
    logger.info("Feedback received: Rating={}, Comment={}", feedback.get("rating"), feedback.get("comment"));
    return "Feedback submitted successfully!";
}

    @PostMapping("/chat")
public String chat(@RequestParam("message") String message) {
    logger.info("Received chat message: {}", message);
    String response = getGeminiResponse(message);
    logger.info("Chat response: {}", response);
    return response;
}

    private String getGeminiResponse(String prompt) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.set("Content-Type", "application/json");

            String requestBody = String.format(
                "{\"contents\": [{\"parts\": [{\"text\": \"%s\"}]}], \"generationConfig\": {\"maxOutputTokens\": 150, \"temperature\": 0.7}}",
                prompt
            );

            HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);
            String url = GEMINI_API_URL + "?key=" + geminiApiKey;
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);

            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response.getBody());
            String generatedText = root.path("candidates").get(0).path("content").path("parts").get(0).path("text").asText();
            return generatedText;
        } catch (Exception e) {
            if (prompt.contains("resume summary")) {
                String jobTitle = prompt.split("for a ")[1].split("\\.")[0];
                String specificArea = jobTitle.toLowerCase()
                    .replace("engineer", "engineering")
                    .replace("developer", "development")
                    .replace("architect", "architecture");
                return "Highly motivated and results-oriented " + jobTitle + " with 5 years of experience in " + specificArea + ". Proven ability to design, develop, and deploy high-quality software solutions using Java, Python, and React. Experienced in Agile methodologies, cloud platforms, and database management. Seeking a challenging role where I can leverage my skills to contribute to a dynamic team and deliver innovative solutions.";
            } else {
                String lowerPrompt = prompt.toLowerCase();
                if (lowerPrompt.contains("help")) {
                    return "I can assist with generating resume summaries, answering questions, or providing insights on various topics. What would you like to explore?";
                } else if (lowerPrompt.contains("data engineering")) {
                    return "Data engineering involves designing and building systems to collect, store, and analyze data at scale. It’s a crucial field for enabling data-driven decisions. Want to know more?";
                } else if (lowerPrompt.contains("weather")) {
                    return "I’m not connected to real-time data, but I can help with other topics! What else would you like to discuss?";
                } else if (lowerPrompt.contains("resume")) {
                    return "I can help you generate a professional resume summary! Just use the 'Generate Resume Summary' section above, or ask me for tips on resume writing.";
                } else if (lowerPrompt.contains("job") || lowerPrompt.contains("career")) {
                    return "Looking for career advice? I can help with resume summaries, or we can discuss skills and strategies to land your dream job. What’s on your mind?";
                } else {
                    return "This is a mock response to your message: " + prompt + ". I can assist with various tasks!";
                }
            }
        }
    }
}