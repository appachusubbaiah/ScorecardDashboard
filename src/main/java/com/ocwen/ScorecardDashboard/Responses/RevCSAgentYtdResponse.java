package com.ocwen.ScorecardDashboard.Responses;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RevCSAgentYtdResponse {
	
	private String empId;
	private String name;
	private String tl;
	private String location;
	private String dept;
	private int globalRank;
	private int tier;
	private double ocr;
	private double qScore;
	private double stella;
	private double sa;
	private double aht;
	private double cmsDefectPer;
	private double skillport;
	private double voc;
	private double icw;
	private int outOf;
	
	
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
	
	@JsonProperty("OCR")
	public double getOcr() {
		return ocr;
	}
	public void setOcr(double ocr) {
		this.ocr = ocr;
	}
	
	@JsonProperty("QA")
	public double getqScore() {
		return qScore;
	}
	public void setqScore(double qScore) {
		this.qScore = qScore;
	}
	
	
	@JsonProperty("Stella")
	public double getStella() {
		return stella;
	}
	public void setStella(double stella) {
		this.stella = stella;
	}
	
	@JsonProperty("SA")
	public double getSa() {
		return sa;
	}
	public void setSa(double sa) {
		this.sa = sa;
	}
	
	
	@JsonProperty("AHT")
	public double getAht() {
		return aht;
	}
	
	public void setAht(double aht) {
		this.aht = aht;
	}
	
	@JsonProperty("CMS")
	public double getCmsDefectPer() {
		return cmsDefectPer;
	}
	public void setCmsDefectPer(double cmsDefectPer) {
		this.cmsDefectPer = cmsDefectPer;
	}
	
	@JsonProperty("Skillport")
	public double getSkillport() {
		return skillport;
	}
	public void setSkillport(double skillport) {
		this.skillport = skillport;
	}
	
	@JsonProperty("VOC")
	public double getVoc() {
		return voc;
	}
	public void setVoc(double voc) {
		this.voc = voc;
	}
	
	
	@JsonProperty("ICW")
	public double getIcw() {
		return icw;
	}
	public void setIcw(double icw) {
		this.icw = icw;
	}
	
	
	@JsonProperty("OutOf")
	public int getOutOf() {
		return outOf;
	}
	public void setOutOf(int outOf) {
		this.outOf = outOf;
	}
	
	@JsonProperty("Tier")
	public int getTier() {
		return tier;
	}
	public void setTier(int tier) {
		this.tier = tier;
	}
	
}
