package com.travelbuddy.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelbuddy.Entity.UserApplication;
import com.travelbuddy.Repo.UserApplicationRepo;

@Service
public class UserApplicationService {
	
	@Autowired
	UserApplicationRepo uaRepo;

	public String checkApplication(String username) {
		if(username == null) {
			return "fail";
		}
		UserApplication userapplication= uaRepo.findByName(username);
		
		if(( userapplication != null) && (userapplication.getName().contentEquals(username))) {
			return "success";
			
		}
		else {
			return "fail";
		}
}
	
}
