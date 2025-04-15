package com.travelbuddy.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.travelbuddy.Entity.UserApplication;

public interface UserApplicationRepo extends JpaRepository<UserApplication, Integer> {
	UserApplication findByName(String name);
	
	@Modifying
	@Transactional
	@Query(value = "DELETE FROM user_application where name = ?1", nativeQuery = true)
	int deleteByName(String name);
	

}
