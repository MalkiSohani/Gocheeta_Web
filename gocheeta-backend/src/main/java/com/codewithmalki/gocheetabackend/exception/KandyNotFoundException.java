package com.codewithmalki.gocheetabackend.exception;

public class KandyNotFoundException extends RuntimeException {
	
	public KandyNotFoundException(Long id) {
        super("Could not found the Vehical with id " + id);
    }

	
}
