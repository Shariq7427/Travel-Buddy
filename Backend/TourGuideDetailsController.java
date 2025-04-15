package com.travelbuddy.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.travelbuddy.Entity.TourGuideDetails;
import com.travelbuddy.Repo.TourGuideDetailsRepo;
import com.travelbuddy.Service.TourGuideDetailsService;

@RestController
@CrossOrigin("*")
public class TourGuideDetailsController {
	String pw;
	@Autowired
	TourGuideDetailsRepo tdRepo;
	
	@Autowired
	TourGuideDetailsService tdService;
	
	@PostMapping("/tourGuides") public TourGuideDetails tourGuideAdd(@RequestBody TourGuideDetails td) {
		TourGuideDetails savedTourGuide=tdRepo.save(td);
		return savedTourGuide;
	}
	
	@GetMapping("/randomTourGuide")
	public String tourGuideRandom() {
		return tdService.randomTourGuide();
	}
}