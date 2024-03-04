package com.ocwen.ScorecardDashboard.Responses;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CRResponse {
	private String month;
	private String ucid;
	private String empId;
	private String name;
	private String tl;
	private String location;
	private String dept;
	private int globalRank;
	private double totalPoints;
	private double creditPerHr;
	private int creditRank;
	private double creditScore;
	private double qScore;
	private double q_Score;
	private int qRank;
	private double stellaRating;
	private int stellaRank;
	private double stellaScore;
	private double sa;
	private int saRank;
	private int saScore;
	private double aht;
	private int ahtRank;
	private double ahtScore;
	private double cmsDefectPer;
	private int cmsRank;
	private double cmsScore;
	private int outOf;
	
	@JsonProperty("Month")
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	
	@JsonProperty("UcId")
	public String getUcid() {
		return ucid;
	}
	public void setUcid(String ucid) {
		this.ucid = ucid;
	}
	
	@JsonProperty("EmpId")
	public String getEmpId() {
		return empId;
	}
	public void setEmpId(String empId) {
		this.empId = empId;
	}
	
	@JsonProperty("Name")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@JsonProperty("Tl")
	public String getTl() {
		return tl;
	}
	public void setTl(String tl) {
		this.tl = tl;
	}
	
	@JsonProperty("Location")
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
	@JsonProperty("Dept")
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	
	@JsonProperty("GlobalRank")
	public int getGlobalRank() {
		return globalRank;
	}
	public void setGlobalRank(int globalRank) {
		this.globalRank = globalRank;
	}
	
	@JsonProperty("TotalPoints")
	public double getTotalPoints() {
		return totalPoints;
	}
	public void setTotalPoints(double totalPoints) {
		this.totalPoints = totalPoints;
	}
	
	@JsonProperty("CreditPerHr")
	public double getCreditPerHr() {
		return creditPerHr;
	}
	public void setCreditPerHr(double creditPerHr) {
		this.creditPerHr = creditPerHr;
	}
	
	@JsonProperty("CreditRank")
	public int getCreditRank() {
		return creditRank;
	}
	public void setCreditRank(int creditRank) {
		this.creditRank = creditRank;
	}
	
	@JsonProperty("CreditScore")
	public double getCreditScore() {
		return creditScore;
	}
	public void setCreditScore(double creditScore) {
		this.creditScore = creditScore;
	}
	
	@JsonProperty("QAScore")
	public double getqScore() {
		return qScore;
	}
	public void setqScore(double qScore) {
		this.qScore = qScore;
	}
	
	
	@JsonProperty("QA_Score")
	public double getQ_Score() {
		return q_Score;
	}
	public void setQ_Score(double q_Score) {
		this.q_Score = q_Score;
	}
	@JsonProperty("QARank")
	public int getqRank() {
		return qRank;
	}
	public void setqRank(int qRank) {
		this.qRank = qRank;
	}
	
	@JsonProperty("Stellarating")
	public double getStellaRating() {
		return stellaRating;
	}
	public void setStellaRating(double stellaRating) {
		this.stellaRating = stellaRating;
	}
	
	@JsonProperty("StellaRank")
	public int getStellaRank() {
		return stellaRank;
	}
	public void setStellaRank(int stellaRank) {
		this.stellaRank = stellaRank;
	}
	
	@JsonProperty("StellaScore")
	public double getStellaScore() {
		return stellaScore;
	}
	public void setStellaScore(double stellaScore) {
		this.stellaScore = stellaScore;
	}
	
	@JsonProperty("SA")
	public double getSa() {
		return sa;
	}
	public void setSa(double sa) {
		this.sa = sa;
	}
	
	@JsonProperty("SARank")
	public int getSaRank() {
		return saRank;
	}
	public void setSaRank(int saRank) {
		this.saRank = saRank;
	}
	
	@JsonProperty("SAScore")
	public int getSaScore() {
		return saScore;
	}
	public void setSaScore(int saScore) {
		this.saScore = saScore;
	}
	
	@JsonProperty("AHT")
	public double getAht() {
		return aht;
	}
	public void setAht(double aht) {
		this.aht = aht;
	}
	
	@JsonProperty("AHTRAnk")
	public int getAhtRank() {
		return ahtRank;
	}
	public void setAhtRank(int ahtRank) {
		this.ahtRank = ahtRank;
	}
	
	@JsonProperty("AHTScore")
	public double getAhtScore() {
		return ahtScore;
	}
	public void setAhtScore(double ahtScore) {
		this.ahtScore = ahtScore;
	}
	
	@JsonProperty("CMSDefectPer")
	public double getCmsDefectPer() {
		return cmsDefectPer;
	}
	public void setCmsDefectPer(double cmsDefectPer) {
		this.cmsDefectPer = cmsDefectPer;
	}
	
	@JsonProperty("CMSRank")
	public int getCmsRank() {
		return cmsRank;
	}
	public void setCmsRank(int cmsRank) {
		this.cmsRank = cmsRank;
	}
	
	@JsonProperty("CMSScore")
	public double getCmsScore() {
		return cmsScore;
	}
	public void setCmsScore(double cmsScore) {
		this.cmsScore = cmsScore;
	}
	
	@JsonProperty("OutOf")
	public int getOutOf() {
		return outOf;
	}
	public void setOutOf(int outOf) {
		this.outOf = outOf;
	}
	
}
