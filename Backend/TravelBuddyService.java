package com.travelbuddy.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelbuddy.Entity.TravelBuddy;
import com.travelbuddy.Entity.UserRequest;
import com.travelbuddy.Repo.TravelBuddyRepo;

@Service
public class TravelBuddyService {
	
	@Autowired
	TravelBuddyRepo tbRepo;

	public String checkLogin(String username, String password) {
		TravelBuddy travelBuddy = tbRepo.findByUserName(username);
		
		if(( travelBuddy != null) && (travelBuddy.getPassword().contentEquals(password))) {
			return "success";
			
		}
		else {
			return "fail";
		}
	}
	
	public String checkUser(String username) {
		if(username == null) {
			return "not exists";
		}
		TravelBuddy travelbuddy= tbRepo.findByUserName(username);
		
		if(( travelbuddy != null) && (travelbuddy.getUserName().contentEquals(username))) {
			return "exists";
			
		}
		else {
			return "not exists";
		}
}
}