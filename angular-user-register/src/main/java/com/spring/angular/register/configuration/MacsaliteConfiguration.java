package com.spring.angular.register.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.spring.angular.register.service.MacsaliteService;
import com.spring.angular.register.service.MacsaliteServiceImpl;

@Configuration
public class MacsaliteConfiguration {
	
//	@Autowired
//	private MacsaliteService macsaliteService;
//	
//	@Autowired
//	private MacsaliteServiceImpl macsaliteServiceImpl;
//	
	@Bean
	public MacsaliteService macsaliteService() {
		return new MacsaliteServiceImpl();
	}

}
