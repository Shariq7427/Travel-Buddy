package com.travelbuddy.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.travelbuddy.Entity.VolunteerApplication;

public interface VolunteerApplicationRepo extends JpaRepository<VolunteerApplication, Integer> {
	
	@Query(value = "SELECT * FROM volunteer_application ORDER BY RAND() LIMIT 1", nativeQuery = true)
	VolunteerApplication findRandomVolunteerName();

}
