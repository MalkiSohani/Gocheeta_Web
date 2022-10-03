package com.codewithmalki.gocheetabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.codewithmalki.gocheetabackend.model.Booking;
import com.codewithmalki.gocheetabackend.service.BookingService;

@RestController
@CrossOrigin("http://localhost:3000")
public class BookingController {
	

	@Autowired
	private BookingService bookingService;
	
	@RequestMapping(value ="bookings", 
			method = RequestMethod.GET,
			produces = {MimeTypeUtils.APPLICATION_JSON_VALUE})
	        
	public ResponseEntity<Iterable<Booking>>findAll(){
		try {
			return new ResponseEntity<Iterable<Booking>>(bookingService.findAll(),HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<Iterable<Booking>>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(value ="bookings", 
			method = RequestMethod.POST,
			produces = {MimeTypeUtils.APPLICATION_JSON_VALUE},
	        consumes = {MimeTypeUtils.APPLICATION_JSON_VALUE})
	public ResponseEntity<Booking> create(@RequestBody Booking booking){
		try {
			return new ResponseEntity<Booking>(bookingService.save(booking),HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<Booking>(HttpStatus.BAD_REQUEST);
		}
	}
	

}
