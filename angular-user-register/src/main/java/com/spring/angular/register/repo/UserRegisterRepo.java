package com.spring.angular.register.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.angular.register.model.User;

@Repository
public interface UserRegisterRepo extends JpaRepository<User, Integer> {

}
