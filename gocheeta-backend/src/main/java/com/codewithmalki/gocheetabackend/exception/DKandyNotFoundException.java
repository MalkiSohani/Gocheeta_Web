package com.codewithmalki.gocheetabackend.exception;

public class DKandyNotFoundException  extends RuntimeException {
	
	public DKandyNotFoundException(Long id) {
        super("Could not found the Kandy with id " + id);
    }


}
