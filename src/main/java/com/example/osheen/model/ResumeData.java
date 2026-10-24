package com.example.osheen.model;

import java.util.Map;

public class ResumeData {
    private String template;
    private Map<String, String> fields;

    public String getTemplate() {
        return template;
    }

    public void setTemplate(String template) {
        this.template = template;
    }

    public Map<String, String> getFields() {
        return fields;
    }

    public void setFields(Map<String, String> fields) {
        this.fields = fields;
    }
}