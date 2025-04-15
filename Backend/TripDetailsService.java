package com.travelbuddy.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelbuddy.Entity.TripDetails;
import com.travelbuddy.Repo.TripDetailsRepo;

@Service
public class TripDetailsService {
	
	@Autowired
	TripDetailsRepo rdRepo;

	public String checkTrip(String username) {
		if(username == null) {
			return "user has not joined any trip";
		}
		TripDetails otripdetails= rdRepo.findByOTravelerName(username);
		TripDetails ttripdetails= rdRepo.findByTTravelerName(username);
		
		if(( otripdetails != null) && (otripdetails.getoTravelerName().contentEquals(username))) {
			return "exists";
			
		}
		else if(( ttripdetails != null) && (ttripdetails.gettTravelerName().contentEquals(username))) {
			return "exists";
			
		}
		else {
			return "user has not joined any trip";
		}
}
	
	public List<TripDetails> displayTrip(String username) {
		List<TripDetails> ot = new ArrayList<>();
		if(username == null || username.isEmpty()) {
			return ot;
		}
		TripDetails otripdetails=rdRepo.findByOTravelerName(username);
		TripDetails ttripdetails=rdRepo.findByTTravelerName(username);
		TripDetails rf;
		
		if((otripdetails !=null) && (otripdetails.getoTravelerName().contentEquals(username))) {
			ot.add(otripdetails);
		}
		else if((ttripdetails !=null) && (ttripdetails.gettTravelerName().contentEquals(username))) {
			ot.add(ttripdetails);
		}
		else {
			return ot;
		}
		return ot;
	}
}
