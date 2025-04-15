package com.travelbuddy.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserRequest {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id=0;
	private String requestFrom;
	private String requestTo;
	public UserRequest() {
		super();
	}
	public UserRequest(int id, String requestFrom, String requestTo) {
		super();
		id = id+1;
		this.requestFrom = requestFrom;
		this.requestTo = requestTo;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRequestFrom() {
		return requestFrom;
	}
	public void setRequestFrom(String requestFrom) {
		this.requestFrom = requestFrom;
	}
	public String getRequestTo() {
		return requestTo;
	}
	public void setRequestTo(String requestTo) {
		this.requestTo = requestTo;
	}

}
