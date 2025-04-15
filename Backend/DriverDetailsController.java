package com.travelbuddy.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.travelbuddy.Entity.DriverDetails;
import com.travelbuddy.Repo.DriverDetailsRepo;
import com.travelbuddy.Service.DriverDetailsService;

@RestController
@CrossOrigin("*")
public class DriverDetailsController {
	String pw;
	@Autowired
	DriverDetailsRepo ddRepo;
	
	@Autowired
	DriverDetailsService ddService;
	
	@PostMapping("/drivers") public DriverDetails driverAdd(@RequestBody DriverDetails dd) {
		DriverDetails savedDriver = ddRepo.save(dd);
		return savedDriver;
	}
	
	@GetMapping("/randomDriver")
	public String driverRandom() {
		return ddService.randomDriver();
	}
	}
