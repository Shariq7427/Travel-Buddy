package com.travelbuddy.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelbuddy.Entity.CarDetails;
import com.travelbuddy.Repo.CarDetailsRepo;

@Service
public class CarDetailsService {
	
	@Autowired
	CarDetailsRepo cdRepo;
	
	public String randomCar() {
		CarDetails cardetails= cdRepo.findRandomCarNumber();
		String cn;
		cn = cardetails.getCarNumber();
		return cn;
}

}
