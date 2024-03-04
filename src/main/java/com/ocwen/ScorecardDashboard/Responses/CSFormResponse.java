package com.ocwen.ScorecardDashboard.Responses;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonProperty;

@Component
public class CSFormResponse {
	private int id;
	private String qaMetric;
	private int compliance; 
	private int pointsLost;
	
	@JsonProperty("Id")
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	@JsonProperty("Metric")
	public String getQaMetric() {
		return qaMetric;
	}
	public void setQaMetric(String qaMetric) {
		this.qaMetric = qaMetric;
	}
	
	@JsonProperty("Compliance")
	public int getCompliance() {
		return compliance;
	}
	
	public void setCompliance(int compliance) {
		this.compliance = compliance;
	}
	
	@JsonProperty("PointsLost")
	public int getPointsLost() {
		return pointsLost;
	}
	public void setPointsLost(int pointsLost) {
		this.pointsLost = pointsLost;
	}
}
