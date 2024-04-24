package com.ocwen.ScorecardDashboard.Responses;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CRTLResponse {

	private String month;
	private String ucid;
	private String fusionId;
	private String tlName;
	private String asm;
	private String location;
	private String dept;
	private int globalRank;
	private double totalPoints;
	private double resCredits;
	private double resCreditsTarget;
	private int resCreditsRank;
	private double resCreditsPoints;
	private double cphTarget;
	private double stellaRating;
	private int stellaRank;
	private double stellaScore;
	private double stellaTarget;
	private double sa;
	private int saRank;
	private int saScore;
	private double saTarget;
	private double aht;
	private int ahtRank;
	private double ahtScore;
	private int ahtTarget;
	private double cmsDefectPer;
	private int cmsRank;
	private double cmsScore;
	private double cmsTarget;
	private double callMonDefect;
	private int callMonDefectRank;
	private double callMonPoints;
	private double callMonTarget;
	private double collectioncallMonDefect;
	private int collectioncallMonDefectRank;
	private double collectioncallMonPoints;
	private double collectioncallMonTarget;
	private int outOf;
	private int ytdGlobalrank;
	
	@JsonProperty("Month")
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	
	@JsonProperty("UCId")
	public String getUcid() {
		return ucid;
	}
	public void setUcid(String ucid) {
		this.ucid = ucid;
	}
	
	@JsonProperty("FusionId")
	public String getFusionId() {
		return fusionId;
	}
	public void setFusionId(String fusionId) {
		this.fusionId = fusionId;
	}
	
	@JsonProperty("TLName")
	public String getTlName() {
		return tlName;
	}
	public void setTlName(String tlName) {
		this.tlName = tlName;
	}
	
	@JsonProperty("AsstMngr")
	public String getAsm() {
		return asm;
	}
	public void setAsm(String asm) {
		this.asm = asm;
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
	
	@JsonProperty("ResolutionCredits")
	public double getResCredits() {
		return resCredits;
	}
	public void setResCredits(double resCredits) {
		this.resCredits = resCredits;
	}
	
	@JsonProperty("ResolutionCreditsRank")
	public int getResCreditsRank() {
		return resCreditsRank;
	}
	public void setResCreditsRank(int resCreditsRank) {
		this.resCreditsRank = resCreditsRank;
	}
	
	@JsonProperty("ResolutionCreditsPoints")
	public double getResCreditsPoints() {
		return resCreditsPoints;
	}
	public void setResCreditsPoints(double resCreditsPoints) {
		this.resCreditsPoints = resCreditsPoints;
	}
	
	@JsonProperty("CreditsPerHourTarget")
	public double getCphTarget() {
		return cphTarget;
	}
	public void setCphTarget(double cphTarget) {
		this.cphTarget = cphTarget;
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
	
	@JsonProperty("StellaTarget")
	public double getStellaTarget() {
		return stellaTarget;
	}
	public void setStellaTarget(double stellaTarget) {
		this.stellaTarget = stellaTarget;
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
	
	@JsonProperty("SATarget")
	public double getSaTarget() {
		return saTarget;
	}
	public void setSaTarget(double saTarget) {
		this.saTarget = saTarget;
	}
	
	@JsonProperty("AHT")
	public double getAht() {
		return aht;
	}
	public void setAht(double aht) {
		this.aht = aht;
	}
	
	@JsonProperty("AHTRank")
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
	
	@JsonProperty("AHTTarget")
	public int getAhtTarget() {
		return ahtTarget;
	}
	public void setAhtTarget(int ahtTarget) {
		this.ahtTarget = ahtTarget;
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
	
	@JsonProperty("CMSTarget")
	public double getCmsTarget() {
		return cmsTarget;
	}
	public void setCmsTarget(double cmsTarget) {
		this.cmsTarget = cmsTarget;
	}
	
	@JsonProperty("CallMonitoringDefect")
	public double getCallMonDefect() {
		return callMonDefect;
	}
	public void setCallMonDefect(double callMonDefect) {
		this.callMonDefect = callMonDefect;
	}
	
	@JsonProperty("CallMonitoringDefectRank")
	public int getCallMonDefectRank() {
		return callMonDefectRank;
	}
	public void setCallMonDefectRank(int callMonDefectRank) {
		this.callMonDefectRank = callMonDefectRank;
	}
	
	@JsonProperty("CallMonitoringPoints")
	public double getCallMonPoints() {
		return callMonPoints;
	}
	public void setCallMonPoints(double callMonPoints) {
		this.callMonPoints = callMonPoints;
	}
	
	@JsonProperty("CallMonitoringTarget")
	public double getCallMonTarget() {
		return callMonTarget;
	}
	public void setCallMonTarget(double callMonTarget) {
		this.callMonTarget = callMonTarget;
	}
	
	@JsonProperty("CollectionModelDefect")
	public double getCollectioncallMonDefect() {
		return collectioncallMonDefect;
	}
	public void setCollectioncallMonDefect(double collectioncallMonDefect) {
		this.collectioncallMonDefect = collectioncallMonDefect;
	}
	
	@JsonProperty("CollectionModelDefectRank")
	public int getCollectioncallMonDefectRank() {
		return collectioncallMonDefectRank;
	}
	public void setCollectioncallMonDefectRank(int collectioncallMonDefectRank) {
		this.collectioncallMonDefectRank = collectioncallMonDefectRank;
	}
	
	@JsonProperty("CollectionModelDefectPoints")
	public double getCollectioncallMonPoints() {
		return collectioncallMonPoints;
	}
	public void setCollectioncallMonPoints(double collectioncallMonPoints) {
		this.collectioncallMonPoints = collectioncallMonPoints;
	}
	
	@JsonProperty("CollectionModelTarget")
	public double getCollectioncallMonTarget() {
		return collectioncallMonTarget;
	}
	public void setCollectioncallMonTarget(double collectioncallMonTarget) {
		this.collectioncallMonTarget = collectioncallMonTarget;
	}
	
	@JsonProperty("OutOf")
	public int getOutOf() {
		return outOf;
	}
	public void setOutOf(int outOf) {
		this.outOf = outOf;
	}
	
	@JsonProperty("YTDGlobalRank")
	public int getYtdGlobalrank() {
		return ytdGlobalrank;
	}
	public void setYtdGlobalrank(int ytdGlobalrank) {
		this.ytdGlobalrank = ytdGlobalrank;
	}
	
	@JsonProperty("ResolutionCreditsTarget")
	public double getResCreditsTarget() {
		return resCreditsTarget;
	}
	public void setResCreditsTarget(double resCreditsTarget) {
		this.resCreditsTarget = resCreditsTarget;
	}
	
	
}
