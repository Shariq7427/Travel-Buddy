package com.travelbuddy.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.travelbuddy.Entity.UserRequest;

public interface UserRequestRepo extends JpaRepository<UserRequest, Integer> {
	UserRequest findByRequestTo(String name);
	UserRequest findByRequestFrom(String name);
	
	@Modifying
	@Transactional
	@Query(value = "DELETE FROM user_request where request_to = ?1", nativeQuery = true)
	int deleteByRequestTo(String name);
	
	//UserRequest findByRequestFrom(String name);
}
