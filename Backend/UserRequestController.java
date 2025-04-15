package com.travelbuddy.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.travelbuddy.Entity.UserRequest;
import com.travelbuddy.Repo.UserRequestRepo;
import com.travelbuddy.Service.UserRequestService;

@RestController
@CrossOrigin("*")
public class UserRequestController {
	String pwtu;
	@Autowired
	UserRequestRepo urRepo;
	
	@Autowired
	UserRequestService urService;
	
	
	@DeleteMapping("/requestResponse") public void deleteRequest(@RequestParam String username) {
		urRepo.deleteByRequestTo(username);
		/*if (isDeleted) {
			return "Request with username " + username + " was deleted successfully.";
		} else {
			return "Request with username " + username + " not found.";
		}*/
	}
	
	
	@PostMapping("/requests") public UserRequest requestAdd(@RequestBody UserRequest ur) {
		UserRequest savedRequest=urRepo.save(ur);
		return savedRequest;
	}
		
		@GetMapping("/requestCheck")
		public String checkRequest(@RequestParam String username) {
			return urService.checkRequest(username);
	}
	
	@GetMapping("/requestNotification")
	public String displayRequest(@RequestParam String username) {
		return urService.displayRequest(username);
		
}
	
	@GetMapping("/requestOne")
	public String oneRequest(@RequestParam String username) {
		return urService.oneRequest(username);
}
}
