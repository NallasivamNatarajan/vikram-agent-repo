package com.spring.angular.register.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.angular.register.model.User;
import com.spring.angular.register.repo.UserRegisterRepo;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserRegisterController {
	
	@Autowired
	private UserRegisterRepo userRepo;
	
	@PostMapping("/user")
	public ResponseEntity<User> registerUser(@RequestBody User user){
		return ResponseEntity.ok(userRepo.save(user));
	}
	
	@GetMapping("/check")
	public String check() {
		return "Spring Boot Connected";
	}
	}