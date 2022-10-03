package com.codewithmalki.gocheetabackend.service;

import com.codewithmalki.gocheetabackend.model.Booking;

public interface BookingService {
	
	public Iterable<Booking> findAll();
	
	public Booking save(Booking booking);
	

}
