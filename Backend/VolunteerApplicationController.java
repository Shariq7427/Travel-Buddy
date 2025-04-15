package com.travelbuddy.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.travelbuddy.Entity.VolunteerApplication;
import com.travelbuddy.Repo.VolunteerApplicationRepo;
import com.travelbuddy.Service.VolunteerApplicationService;

@RestController
@CrossOrigin("*")
public class VolunteerApplicationController {
	String pw;
	@Autowired
	VolunteerApplicationRepo vaRepo;
	
	@Autowired
	VolunteerApplicationService vaService;
	
	@PostMapping("/volunteers") public VolunteerApplication volunteerAdd(@RequestBody VolunteerApplication va) {
		VolunteerApplication savedVolunteer=vaRepo.save(va);
		return savedVolunteer;
		}
	
	@GetMapping("/randomVolunteer")
	public String volunteerRandom() {
		return vaService.randomVolunteer();
	}

}
