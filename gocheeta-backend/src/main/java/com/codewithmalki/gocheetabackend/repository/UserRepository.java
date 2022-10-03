package com.codewithmalki.gocheetabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithmalki.gocheetabackend.model.User;

public interface UserRepository extends JpaRepository<User,Long> {

}
