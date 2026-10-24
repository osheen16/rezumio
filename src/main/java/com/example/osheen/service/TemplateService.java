package com.example.osheen.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.osheen.model.Template;
import com.example.osheen.repository.TemplateRepository;

@Service
public class TemplateService {
    private final TemplateRepository templateRepository;

    public TemplateService(TemplateRepository templateRepository) {
        this.templateRepository = templateRepository;
    }

    public List<Template> getAllTemplates() {
        return templateRepository.findAll();
    }

    public Optional<Template> getTemplateById(Long id) {
        return templateRepository.findById(id);
    }

    public Optional<Template> getTemplateByName(String name) {
        return templateRepository.findByName(name);
    }

    public Template saveTemplate(Template template) {
        return templateRepository.save(template);
    }

    public void deleteTemplate(Long id) {
        templateRepository.deleteById(id);
    }
}
