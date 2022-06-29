package com.spring.angular.register.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.spring.angular.register.model.Macsalite;

@Component
public interface MacsaliteService {
	public boolean validUser(String userName, String password);

	public List<Macsalite> getMacsaliteList();
	
	public Macsalite getAgentProfile(Long userId);

	public Macsalite saveAgentProfile(Macsalite macsalite);

	public void deleteAgentProfile(Macsalite agentProfile);

}
