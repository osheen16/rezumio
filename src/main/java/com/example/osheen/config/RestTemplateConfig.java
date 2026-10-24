package com.example.osheen.config;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.client.RestTemplate;

@Configuration
public class RestTemplateConfig {

    @Bean
    public RestTemplate restTemplate() {
        RestTemplate restTemplate = new RestTemplate();
        
        // Define converters: Form for requests, String for raw responses
        List<HttpMessageConverter<?>> converters = restTemplate.getMessageConverters();
        converters.clear(); // Optional: Clear default converters to avoid conflicts
        converters.add(new FormHttpMessageConverter()); // For application/x-www-form-urlencoded requests
        converters.add(new StringHttpMessageConverter()); // For raw string responses
        
        return restTemplate;
    }
}