package com.travelbuddy.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelbuddy.Entity.VolunteerApplication;
import com.travelbuddy.Repo.VolunteerApplicationRepo;

@Service
public class VolunteerApplicationService {
	
	@Autowired
	VolunteerApplicationRepo vaRepo;
	
	public String randomVolunteer() {
		VolunteerApplication volunteerapplication= vaRepo.findRandomVolunteerName();
		String vn;
		vn = volunteerapplication.getName();
		return vn;
}

}
