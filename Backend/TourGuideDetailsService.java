package com.travelbuddy.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelbuddy.Entity.TourGuideDetails;
import com.travelbuddy.Repo.TourGuideDetailsRepo;

@Service
public class TourGuideDetailsService {
	
	@Autowired
	TourGuideDetailsRepo tdRepo;
	
	public String randomTourGuide() {
		TourGuideDetails tourguidedetails= tdRepo.findRandomTourGuideName();
		String tn="";
		tn = tourguidedetails.getTourGuideName();
		return tn;
}

}
