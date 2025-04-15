package com.travelbuddy.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class TripDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id=0;
	private String oTravelerName;
	private String tTravelerName;
	private String tourGuideName;
	private String volunteerName;
	private String carNumber;
	private String driverName;
	public TripDetails() {
		super();
	}
	public TripDetails(int id, String oTravelerName, String tTravelerName, String tourGuideName, String volunteerName,
			String carNumber, String driverName) {
		super();
		id = id+1;
		this.oTravelerName = oTravelerName;
		this.tTravelerName = tTravelerName;
		this.tourGuideName = tourGuideName;
		this.volunteerName = volunteerName;
		this.carNumber = carNumber;
		this.driverName = driverName;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getoTravelerName() {
		return oTravelerName;
	}
	public void setoTravelerName(String oTravelerName) {
		this.oTravelerName = oTravelerName;
	}
	public String gettTravelerName() {
		return tTravelerName;
	}
	public void settTravelerName(String tTravelerName) {
		this.tTravelerName = tTravelerName;
	}
	public String getTourGuideName() {
		return tourGuideName;
	}
	public void setTourGuideName(String tourGuideName) {
		this.tourGuideName = tourGuideName;
	}
	public String getVolunteerName() {
		return volunteerName;
	}
	public void setVolunteerName(String volunteerName) {
		this.volunteerName = volunteerName;
	}
	public String getCarNumber() {
		return carNumber;
	}
	public void setCarNumber(String carNumber) {
		this.carNumber = carNumber;
	}
	public String getDriverName() {
		return driverName;
	}
	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}
	@Override
	public String toString() {
		return "oTravelerName=" + oTravelerName + ", \n tTravelerName=" + tTravelerName + ", \n tourGuideName="
				+ tourGuideName + ", \n volunteerName=" + volunteerName + ", \n carNumber=" + carNumber + ", \n driverName="
				+ driverName;
	}
}
