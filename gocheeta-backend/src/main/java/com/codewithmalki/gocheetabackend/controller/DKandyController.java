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

import com.codewithmalki.gocheetabackend.exception.DKandyNotFoundException;
import com.codewithmalki.gocheetabackend.model.DKandy;
import com.codewithmalki.gocheetabackend.repository.DKandyRepository;


@RestController
@CrossOrigin("http://localhost:3000")
public class DKandyController {
	
	private final DKandyRepository dKandyRepository;
	
	public DKandyController(DKandyRepository dKandyRepository) {
		this.dKandyRepository=dKandyRepository;
	}
	@PostMapping("/dkandys")
    DKandy newDKandy(@RequestBody DKandy newDKandy){
        return dKandyRepository.save(newDKandy);
    }

    @GetMapping("/dkandys")
    List<DKandy> all(){
        return dKandyRepository.findAll();
    }
    
    @GetMapping("/dkandy/{id}")
    DKandy getDKandyById(@PathVariable Long id){
        return dKandyRepository.findById(id)
                .orElseThrow(()->new DKandyNotFoundException(id));
    }
    @PutMapping("/dkandy/{id}")
    DKandy updateDKandy(@RequestBody DKandy newDKandy,@PathVariable Long id){
        return dKandyRepository.findById(id)
                .map(dKandy->{
                	dKandy.setStart(newDKandy.getStart());
                	dKandy.setEnd(newDKandy.getEnd());
                	dKandy.setOne(newDKandy.getOne());
                	dKandy.setKm(newDKandy.getKm());
                    return dKandyRepository.save(dKandy);
                }).orElseGet(()->{
                	newDKandy.setId(id);
                	return dKandyRepository.save(newDKandy);
                });
    }
    
    @DeleteMapping("/dkandy/{id}")
    String deleteDKandy(@PathVariable Long id){
        if (!dKandyRepository.existsById(id)) {
            throw new DKandyNotFoundException(id);
        }
        dKandyRepository.deleteById(id);
        return "Vehical with id "+ id + " has been deleted success";
    }


}
