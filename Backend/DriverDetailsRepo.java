package com.travelbuddy.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.travelbuddy.Entity.DriverDetails;

public interface DriverDetailsRepo extends JpaRepository<DriverDetails, Integer> {
	
	@Query(value = "SELECT * FROM driver_details ORDER BY RAND() LIMIT 1", nativeQuery = true)
	DriverDetails findRandomDriverName();

}
