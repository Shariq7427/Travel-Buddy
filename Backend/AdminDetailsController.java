package com.travelbuddy.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.travelbuddy.Entity.AdminDetails;
import com.travelbuddy.Repo.AdminDetailsRepo;
import com.travelbuddy.Service.AdminDetailsService;

@RestController
@CrossOrigin("*")
public class AdminDetailsController {
	String pw;
	@Autowired
	AdminDetailsRepo adRepo;
	
	@Autowired
	AdminDetailsService adService;
	
	@PostMapping("/addAdmin") public AdminDetails adminAdd(@RequestBody AdminDetails ad) {
		AdminDetails savedAdmin=adRepo.save(ad);
		return savedAdmin;
	}
	
	@GetMapping("/adminCheck")
	public String checkAdmin(@RequestParam String username,@RequestParam String password) {
		return adService.checkAdmin(username,password);
	}

}
