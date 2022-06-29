package com.spring.angular.register;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@EnableJpaRepositories(basePackages = "com.spring.angular.register.repo")
@SpringBootApplication
public class AngularUserRegisterApplication {

	public static void main(String[] args) {
		SpringApplication.run(AngularUserRegisterApplication.class, args);
	}

}
