package com.ocwen.ScorecardDashboard.Responses;

public class CRAgentYtdResponse {
	private String empId;
	private String name;
	private String dept;
	private int globalRank;
	private int tier;
	private double ytdCredits;
	private double ytdQa;
	private double ytdStella;
	private double ytdSA;
	private double ytdAHT;
	private double cmsDefect;
	
	
	
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public double getYtdQa() {
		return ytdQa;
	}
	public void setYtdQa(double ytdQa) {
		this.ytdQa = ytdQa;
	}
	public double getYtdStella() {
		return ytdStella;
	}
	public void setYtdStella(double ytdStella) {
		this.ytdStella = ytdStella;
	}
	public double getYtdSA() {
		return ytdSA;
	}
	public void setYtdSA(double ytdSA) {
		this.ytdSA = ytdSA;
	}
	public double getYtdAHT() {
		return ytdAHT;
	}
	public void setYtdAHT(double ytdAHT) {
		this.ytdAHT = ytdAHT;
	}
	public double getCmsDefect() {
		return cmsDefect;
	}
	public void setCmsDefect(double cmsDefect) {
		this.cmsDefect = cmsDefect;
	}
	public double getYtdCredits() {
		return ytdCredits;
	}
	public void setYtdCredits(double ytdCredits) {
		this.ytdCredits = ytdCredits;
	}
	public int getTier() {
		return tier;
	}
	public void setTier(int tier) {
		this.tier = tier;
	}
	public int getGlobalRank() {
		return globalRank;
	}
	public void setGlobalRank(int globalRank) {
		this.globalRank = globalRank;
	}
	public String getEmpId() {
		return empId;
	}
	public void setEmpId(String empId) {
		this.empId = empId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
}
