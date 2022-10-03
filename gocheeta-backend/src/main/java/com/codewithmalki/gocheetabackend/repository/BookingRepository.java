package com.codewithmalki.gocheetabackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codewithmalki.gocheetabackend.model.Booking;

@Repository("BookingRepository")
public interface BookingRepository extends CrudRepository<Booking, String>{

}
