package com.travelbuddy.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travelbuddy.Entity.AdminDetails;

public interface AdminDetailsRepo extends JpaRepository<AdminDetails, Integer> {
	AdminDetails findByUserName(String name);

}
