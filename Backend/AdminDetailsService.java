package com.travelbuddy.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelbuddy.Entity.AdminDetails;
import com.travelbuddy.Repo.AdminDetailsRepo;

@Service
public class AdminDetailsService {
	
	@Autowired
	AdminDetailsRepo adRepo;
	
	public String checkAdmin(String username, String password) {
		AdminDetails adminDetails = adRepo.findByUserName(username);
		
		if(( adminDetails != null) && (adminDetails.getPassword().contentEquals(password))) {
			return "success";
			
		}
		else {
			return "fail";
		}
	}

}
