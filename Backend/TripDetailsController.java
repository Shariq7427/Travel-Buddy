package com.travelbuddy.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.travelbuddy.Entity.TripDetails;
import com.travelbuddy.Repo.TripDetailsRepo;
import com.travelbuddy.Service.TripDetailsService;


@RestController
@CrossOrigin("*")
public class TripDetailsController {
	String pw;
	@Autowired
	TripDetailsRepo rdRepo;
	
	@Autowired
	TripDetailsService rbService;
	
	@DeleteMapping("/deletetrip") public void deleteTrip(@RequestParam String username) {
		rdRepo.deleteByOTravelerName(username);
	}
	
	@PostMapping("/tripdetails") public TripDetails tripAdd(@RequestBody TripDetails rd) {
		TripDetails savedTrip=rdRepo.save(rd);
		return savedTrip;
	}
	
	@GetMapping("/tripCheck")
	public String checkTrip(@RequestParam String username) {
		return rbService.checkTrip(username);
}
	
	@GetMapping("/tripDisplay")
	public List<TripDetails> displayTrip(@RequestParam String username) {
		return rbService.displayTrip(username);
		
}

}
