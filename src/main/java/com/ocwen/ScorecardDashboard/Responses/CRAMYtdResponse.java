package com.ocwen.ScorecardDashboard.Responses;

public class CRAMYtdResponse {
	
	private String empId;
	private String name;
	private String dept;
	private int globalRank;
	private double ytdCredits;
	private double ytdAHT;
	private double ytdCmsDefect;
	private double ytdCallMonDefect;
	private double ytdCollectionModelDefect;
	private double ytdQaScore;
	
	public String getEmpId() {
		return empId;
	}
	public void setEmpId(String empId) {
		this.empId = empId;
	}
	public int getGlobalRank() {
		return globalRank;
	}
	public void setGlobalRank(int globalRank) {
		this.globalRank = globalRank;
	}
	public double getYtdCredits() {
		return ytdCredits;
	}
	public void setYtdCredits(double ytdCredits) {
		this.ytdCredits = ytdCredits;
	}
	public double getYtdAHT() {
		return ytdAHT;
	}
	public void setYtdAHT(double ytdAHT) {
		this.ytdAHT = ytdAHT;
	}
	public double getYtdCmsDefect() {
		return ytdCmsDefect;
	}
	public void setYtdCmsDefect(double ytdCmsDefect) {
		this.ytdCmsDefect = ytdCmsDefect;
	}
	public double getYtdCallMonDefect() {
		return ytdCallMonDefect;
	}
	public void setYtdCallMonDefect(double ytdCallMonDefect) {
		this.ytdCallMonDefect = ytdCallMonDefect;
	}
	public double getYtdCollectionModelDefect() {
		return ytdCollectionModelDefect;
	}
	public void setYtdCollectionModelDefect(double ytdCollectionModelDefect) {
		this.ytdCollectionModelDefect = ytdCollectionModelDefect;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public double getYtdQaScore() {
		return ytdQaScore;
	}
	public void setYtdQaScore(double ytdQaScore) {
		this.ytdQaScore = ytdQaScore;
	}

	
}
