package com.travelbuddy.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.travelbuddy.Entity.TravelBuddy;
import com.travelbuddy.Repo.TravelBuddyRepo;
import com.travelbuddy.Service.TravelBuddyService;

@RestController
@CrossOrigin("*")
public class TravelBuddyController {
	String pw;
	@Autowired
	TravelBuddyRepo tbRepo;
	
	@Autowired
	TravelBuddyService tbService;
	
	
	
	@PostMapping("/signup") public TravelBuddy userAdd(@RequestBody TravelBuddy tb) {
		TravelBuddy savedUser=tbRepo.save(tb);
		return savedUser;
	}
	
	@GetMapping("/login")
	public String checkLogin(@RequestParam String username,@RequestParam String password) {
		return tbService.checkLogin(username,password);
	}
	
	@GetMapping("/userCheck")
	public String checkUser(@RequestParam String username) {
		return tbService.checkUser(username);
}
	
}