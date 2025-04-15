package com.travelbuddy.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;

import com.travelbuddy.Entity.TourGuideDetails;
import com.travelbuddy.Entity.UserRequest;
import com.travelbuddy.Repo.UserRequestRepo;

@Service
public class UserRequestService {
	
	@Autowired
	UserRequestRepo urRepo;

	public String checkRequest(String username) {
		if(username == null) {
			return "fail";
		}
		UserRequest userrequest= urRepo.findByRequestTo(username);
		
		if(( userrequest != null) && (userrequest.getRequestTo().contentEquals(username))) {
			return "success";
			
		}
		else {
			return "fail";
		}
}
	
	public String displayRequest(String username) {
		if(username == null || username.isEmpty()) {
			return "Invalid UserName";
		}
		UserRequest userrequest=urRepo.findByRequestTo(username);
		String rf="";
		
		if((userrequest !=null) && (userrequest.getRequestTo().contentEquals(username))) {
			rf=userrequest.getRequestFrom();
		}
		else {
			rf="user has no request";
		}
		return rf;
	}
	
	public String oneRequest(String username) {
		if(username == null) {
			return "fail";
		}
		UserRequest userrequest= urRepo.findByRequestFrom(username);
		
		if(( userrequest != null) && (userrequest.getRequestFrom().contentEquals(username))) {
			return "success";
			
		}
		else {
			return "fail";
		}
}
	
}
