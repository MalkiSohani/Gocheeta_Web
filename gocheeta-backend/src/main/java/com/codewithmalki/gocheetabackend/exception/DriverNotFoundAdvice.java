package com.codewithmalki.gocheetabackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class DriverNotFoundAdvice {
	 @ResponseBody
	 @ExceptionHandler(DriverNotFoundException.class)
	 @ResponseStatus(HttpStatus.NOT_FOUND)
	String DriverNotFoundHandler(DriverNotFoundException exception) {
		return exception.getMessage();
	}
}
