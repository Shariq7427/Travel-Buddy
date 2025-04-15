package com.travelbuddy.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class TravelBuddy {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id=0;
	private String emaildId;
	private String userName;
	private String password;
	public TravelBuddy() {
		super();
	}
	public TravelBuddy(int id, String emaildId, String userName, String password) {
		super();
		id = id+1;
		this.emaildId = emaildId;
		this.userName = userName;
		this.password = password;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmaildId() {
		return emaildId;
	}
	public void setEmaildId(String emaildId) {
		this.emaildId = emaildId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	

}
