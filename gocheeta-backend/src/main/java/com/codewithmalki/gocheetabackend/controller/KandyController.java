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

import com.codewithmalki.gocheetabackend.exception.KandyNotFoundException;
import com.codewithmalki.gocheetabackend.model.Kandy;
import com.codewithmalki.gocheetabackend.repository.KandyRepository;


@RestController
@CrossOrigin("http://localhost:3000")
public class KandyController {
	
private final KandyRepository kandyRepository;
	
	public KandyController(KandyRepository kandyRepository) {
		this.kandyRepository=kandyRepository;
	}
	
	@PostMapping("/kandys")
    Kandy newKandy(@RequestBody Kandy newKandy){
        return kandyRepository.save(newKandy);
    }

    @GetMapping("/kandys")
    List<Kandy> all(){
        return kandyRepository.findAll();
    }
    
    @GetMapping("/kandy/{id}")
    Kandy getKandyById(@PathVariable Long id){
        return kandyRepository.findById(id)
                .orElseThrow(()->new KandyNotFoundException(id));
    }
    
    @PutMapping("/kandy/{id}")
    Kandy updateKandy(@RequestBody Kandy newKandy,@PathVariable Long id){
        return kandyRepository.findById(id)
                .map(kandy->{
                	kandy.setName(newKandy.getName());
                	kandy.setNumber(newKandy.getNumber());
                	kandy.setDiscription(newKandy.getDiscription());
                    return kandyRepository.save(kandy);
                }).orElseGet(()->{
                	newKandy.setId(id);
                	return kandyRepository.save(newKandy);
                });
    }
    
    @DeleteMapping("/kandy/{id}")
    String deleteKandy(@PathVariable Long id){
        if (!kandyRepository.existsById(id)) {
            throw new KandyNotFoundException(id);
        }
        kandyRepository.deleteById(id);
        return "Vehical with id "+ id + " has been deleted success";
    }

}
