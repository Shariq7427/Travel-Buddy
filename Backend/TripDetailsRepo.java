package com.travelbuddy.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.travelbuddy.Entity.TripDetails;

public interface TripDetailsRepo extends JpaRepository<TripDetails, Integer> {
	@Query(value = "SELECT * FROM trip_details where o_traveler_name = ?1", nativeQuery = true)
	TripDetails findByOTravelerName(String name);
	@Query(value = "SELECT * FROM trip_details where t_traveler_name = ?1", nativeQuery = true)
	TripDetails findByTTravelerName(String name);
	
	@Modifying
	@Transactional
	@Query(value = "DELETE FROM trip_details where o_traveler_name = ?1", nativeQuery = true)
	int deleteByOTravelerName(String name);
}
