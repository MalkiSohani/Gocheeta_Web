package com.codewithmalki.gocheetabackend.exception;

public class DriverNotFoundException extends RuntimeException {
	
	public DriverNotFoundException(Long id) {
        super("Could not found the user with id " + id);
    }

}
