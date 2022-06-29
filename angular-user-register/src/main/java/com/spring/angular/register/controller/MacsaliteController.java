package com.spring.angular.register.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.angular.register.model.Macsalite;
import com.spring.angular.register.service.MacsaliteService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MacsaliteController {
	
	@Autowired
	private MacsaliteService macsaliteService;
	
	@GetMapping("/macsalites")
	public List<Macsalite> getAllEmployees() {
		return macsaliteService.getMacsaliteList();
	}

	@GetMapping("/macsalitesDetail/{id}")
	public ResponseEntity<Macsalite> getEmployeeById(@PathVariable(value = "id") Long userId)
			throws Exception {
		 Macsalite agentProfile = macsaliteService.getAgentProfile(userId);
			return ResponseEntity.ok().body(agentProfile);
	}

	@PostMapping("/macsalite/create")
	public Macsalite createEmployee(@Validated @RequestBody Macsalite macsalite) {
		return macsaliteService.saveAgentProfile(macsalite);
	}

	@PutMapping("/macsalitesUpdate/{id}")
	public ResponseEntity<Macsalite> updateEmployee(@PathVariable(value = "id") Long userID,
			@Validated @RequestBody Macsalite macsaliteDetails) throws Exception {
		Macsalite agentProfile = macsaliteService.getAgentProfile(userID);
		if(Objects.nonNull(agentProfile)) {
			final Macsalite updatedMember = macsaliteService.saveAgentProfile(macsaliteDetails);
			return ResponseEntity.ok(updatedMember);
		}
		return null;
	}

	@DeleteMapping("/macsalitesDelete/{id}")
	public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long userId)
			throws Exception {
		Macsalite agentProfile = macsaliteService.getAgentProfile(userId);
		if(Objects.nonNull(agentProfile)) {
			macsaliteService.deleteAgentProfile(agentProfile);
		}
		Map<String, Boolean> responseMap = new HashMap<>();
		responseMap.put("deleted", Boolean.TRUE);
		return responseMap;
	}
	
	@GetMapping("/macsalite/validUser/{userName}/{password}")
	public ResponseEntity<Map<String, Boolean>> checkConnectivity(@PathVariable(value = "userName") String userName,
			@PathVariable(value = "password") String password) {
		Map<String, Boolean> responseMap = new HashMap<>();
		responseMap.put("valid", macsaliteService.validUser(userName, password));
		return ResponseEntity.ok().body(responseMap);
	}

	@GetMapping("/macsalite/check")
	public String checkConnectivity() {
		return "Connection Success";
	}
}
