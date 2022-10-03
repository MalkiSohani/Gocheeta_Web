package com.codewithmalki.gocheetabackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codewithmalki.gocheetabackend.model.Booking;
import com.codewithmalki.gocheetabackend.repository.BookingRepository;

@Service("BookingService")
public class BookingServiceImpl implements BookingService{
	
	@Autowired
	private BookingRepository bookingRepository ;

	@Override
	public Iterable<Booking> findAll() {
		return bookingRepository.findAll();
	}

	@Override
	public Booking save(Booking booking) {
		
		return bookingRepository.save(booking);
	}

}
