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

import com.travelbuddy.Entity.UserApplication;
import com.travelbuddy.Repo.UserApplicationRepo;
import com.travelbuddy.Service.UserApplicationService;

@RestController
@CrossOrigin("*")
public class UserApplicationController {
	String pwt;
	@Autowired
	UserApplicationRepo uaRepo;
	
	@Autowired
	UserApplicationService uaService;
	
	@DeleteMapping("/deleteapplication") public void deleteApplication(@RequestParam String username) {
		uaRepo.deleteByName(username);
	}
	
	
	
	
	@PostMapping("/userapplications") public UserApplication applicationAdd(@RequestBody UserApplication ua) {
		UserApplication savedApplication=uaRepo.save(ua);
		return savedApplication;
	}
	
	@GetMapping("/applications")
	public List<UserApplication> getAllUsers() {
		return uaRepo.findAll();
	}
	
	@GetMapping("/applicationCheck")
	public String checkApplication(@RequestParam String username) {
		return uaService.checkApplication(username);
}
	
}