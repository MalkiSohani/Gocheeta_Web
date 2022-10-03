package com.codewithmalki.gocheetabackend.controller;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.codewithmalki.gocheetabackend.repository.DriverRepository;
import com.codewithmalki.gocheetabackend.exception.DriverNotFoundException;
import com.codewithmalki.gocheetabackend.model.Driver;



@RestController
@CrossOrigin("http://localhost:3000")
public class DriverController {
	
	private final DriverRepository driverRepository;
    
	public DriverController(DriverRepository driverRepository) {
		this.driverRepository=driverRepository;
		
	}
	@PostMapping("/drivers")
    Driver newUser(@RequestBody Driver newDriver){
        return driverRepository.save(newDriver);
    }

    @GetMapping("/drivers")
    List<Driver> all(){
        return driverRepository.findAll();
    }
    
    @GetMapping("/driver/{id}")
    Driver getDriverById(@PathVariable Long id){
        return driverRepository.findById(id)
                .orElseThrow(()->new DriverNotFoundException(id));
    }
    
    @PutMapping("/driver/{id}")
    Driver updateDriver(@RequestBody Driver newDriver,@PathVariable Long id){
        return driverRepository.findById(id)
                .map(driver->{
                	driver.setName(newDriver.getName());
                	driver.setNic(newDriver.getNic());
                	driver.setPhone(newDriver.getPhone());
                	driver.setEmail(newDriver.getEmail());
                    return driverRepository.save(driver);
                }).orElseGet(()->{
                	newDriver.setId(id);
                	return driverRepository.save(newDriver);
                });
    }
    
    @DeleteMapping("/driver/{id}")
    String deleteDriver(@PathVariable Long id){
        if (!driverRepository.existsById(id)) {
            throw new DriverNotFoundException(id);
        }
        driverRepository.deleteById(id);
        return "Driver with id "+ id + " has been deleted success";
    }
}
