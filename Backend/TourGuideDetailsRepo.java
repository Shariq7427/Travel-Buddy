package com.travelbuddy.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.travelbuddy.Entity.TourGuideDetails;

public interface TourGuideDetailsRepo extends JpaRepository<TourGuideDetails, Integer> {
	
	@Query(value = "SELECT * FROM tour_guide_details ORDER BY RAND() LIMIT 1", nativeQuery = true)
	TourGuideDetails findRandomTourGuideName();

}
