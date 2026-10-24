package com.example.osheen.exception;

/**
 * Custom exception for resume processing errors.
 */
public class ResumeProcessingException extends RuntimeException {
    
    private static final long serialVersionUID = 1L; // Recommended for serializable classes

    public ResumeProcessingException(String message) {
        super(message);
    }

    public ResumeProcessingException(String message, Throwable cause) {
        super(message, cause);
    }
}
