package com.spring.angular.register.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;

import com.spring.angular.register.model.Macsalite;
import com.spring.angular.register.repo.MacsaliteRepository;

public class MacsaliteServiceImpl implements MacsaliteService{
	
	@Autowired
	private MacsaliteRepository macsaliteRepository;

	@Override
	public boolean validUser(String userName, String password){
		List<Macsalite> macsaliteList = macsaliteRepository.findAll();
		Map<String, String> usersInfoMap = new HashMap<>();
		if(!CollectionUtils.isEmpty(macsaliteList)) {
			macsaliteList.stream().forEach(user ->{
				usersInfoMap.put(user.getUserName(), user.getPassword());
			});
			for(Map.Entry<String, String>entryMap :  usersInfoMap.entrySet()) {
				if(entryMap.getKey().equals(userName) && entryMap.getValue().equals(password)) {
					return true;
				}
			}
		}
		return false;
	}

	@Override
	public List<Macsalite> getMacsaliteList() {
		return macsaliteRepository.findAll();
	}

	@Override
	public Macsalite getAgentProfile(Long userId) {
		if(Objects.nonNull(userId)) {
		Optional<Macsalite> macsaliteOptional = macsaliteRepository.findById(userId);
		if(macsaliteOptional.isPresent())
			return macsaliteOptional.get();
		}
		return null;
	}

	@Override
	public Macsalite saveAgentProfile(Macsalite macsalite) {
		return macsaliteRepository.save(macsalite);
	}

	@Override
	public void deleteAgentProfile(Macsalite agentProfile) {
		macsaliteRepository.delete(agentProfile);
	}

}
