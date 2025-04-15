package com.travelbuddy.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.travelbuddy.Entity.CarDetails;
import com.travelbuddy.Repo.CarDetailsRepo;
import com.travelbuddy.Service.CarDetailsService;

@RestController
@CrossOrigin("*")
public class CarDetailsController {
	String pw;
	@Autowired
	CarDetailsRepo cdRepo;
	
	@Autowired
	CarDetailsService cdService;
	
	@PostMapping("/cars") public CarDetails carAdd(@RequestBody CarDetails cd) {
		CarDetails savedCar=cdRepo.save(cd);
		return savedCar;
	}
	
	@GetMapping("/randomCar")
	public String CarRandom() {
		return cdService.randomCar();
	}
	}
