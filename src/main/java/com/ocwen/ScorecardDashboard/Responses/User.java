package com.ocwen.ScorecardDashboard.Responses;

import com.fasterxml.jackson.annotation.JsonProperty;

public class User {
	private String name;
	private String fusionId;
	private String tl;
	private String dept;
	private String ntid;
	private String designation;
	private String location;
	private String emailId;
	
	@JsonProperty("Location")
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
	@JsonProperty("Designation")
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
		
	@JsonProperty("NtId")
	public String getNtid() {
		return ntid;
	}
	public void setNtid(String ntid) {
		this.ntid = ntid;
	}
	
	@JsonProperty("Name")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@JsonProperty("FusionId")
	public String getFusionId() {
		return fusionId;
	}
	public void setFusionId(String fusionId) {
		this.fusionId = fusionId;
	}
	
	@JsonProperty("TL")
	public String getTl() {
		return tl;
	}
	public void setTl(String tl) {
		this.tl = tl;
	}
	
	@JsonProperty("Department")
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	
	@JsonProperty("EmailId")
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
}