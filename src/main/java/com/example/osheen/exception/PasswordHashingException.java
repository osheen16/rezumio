package com.example.osheen.exception;

public class PasswordHashingException extends Exception {

    public PasswordHashingException(String message) {
        super(message);
    }

    public PasswordHashingException(String message, Throwable cause) {
        super(message, cause);
    }
}
