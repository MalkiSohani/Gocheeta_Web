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

import com.codewithmalki.gocheetabackend.exception.UserNotFoundException;
import com.codewithmalki.gocheetabackend.model.User;
import com.codewithmalki.gocheetabackend.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
private final UserRepository userRepository;
    
	public UserController(UserRepository userRepository) {
		this.userRepository=userRepository;
		
	}
	@PostMapping("/users")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> all(){
        return userRepository.findAll();
    }
    
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }
    
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser,@PathVariable Long id){
        return userRepository.findById(id)
                .map(user->{
                	user.setName(newUser.getName());
                	user.setPhone(newUser.getPhone());
                	user.setUsername(newUser.getUsername());
                	user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseGet(()->{
                	newUser.setId(id);
                	return userRepository.save(newUser);
                });
    }
    
    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+ id + " has been deleted success";
    }

}
