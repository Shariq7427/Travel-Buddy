package com.travelbuddy.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travelbuddy.Entity.TravelBuddy;

public interface TravelBuddyRepo extends JpaRepository<TravelBuddy, Integer> {
TravelBuddy findByUserName(String name);
}