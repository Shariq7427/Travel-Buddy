package com.travelbuddy.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.travelbuddy.Entity.CarDetails;

public interface CarDetailsRepo extends JpaRepository<CarDetails, Integer> {
	
	@Query(value = "SELECT * FROM car_details ORDER BY RAND() LIMIT 1", nativeQuery = true)
	CarDetails findRandomCarNumber();

}
