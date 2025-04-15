package com.travelbuddy.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelbuddy.Entity.DriverDetails;
import com.travelbuddy.Repo.DriverDetailsRepo;

@Service
public class DriverDetailsService {
	
	@Autowired
	DriverDetailsRepo ddRepo;
	
	public String randomDriver() {
		DriverDetails driverdetails= ddRepo.findRandomDriverName();
		String dn;
		dn = driverdetails.getDriverName();
		return dn;
}

}
