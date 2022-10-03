package com.codewithmalki.gocheetabackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class KandyNotFoundAdvice {
	@ResponseBody
	 @ExceptionHandler(KandyNotFoundException.class)
	 @ResponseStatus(HttpStatus.NOT_FOUND)
	String kandyNotFoundHandler(KandyNotFoundException exception) {
		return exception.getMessage();
	}


}
