package com.ocwen.ScorecardDashboard.Responses;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RevCSAgentResponse {
	
	private String month;
	private String ucid;
	private String empId;
	private String name;
	private String tl;
	private String location;
	private String dept;
	private int globalRank;
	private double ocr;
	private double ocrTarget;
	private double qScore;
	private double q_target;
	private double stella;
	private double stellaTarget;
	private double sa;
	private double saTarget;
	private double aht;
	private double ahtTarget;
	private double cmsDefectPer;
	private double cmsTarget;
	private double skillport;
	private double skillportTarget;
	private double voc;
	private double vocTarget;
	private double icw;
	private double icwTarget;
	private int outOf;
	private int ytdGlobalrank;
	
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
	
	@JsonProperty("OCR")
	public double getOcr() {
		return ocr;
	}
	public void setOcr(double ocr) {
		this.ocr = ocr;
	}
	
	@JsonProperty("OCRTarget")
	public double getOcrTarget() {
		return ocrTarget;
	}
	public void setOcrTarget(double ocrTarget) {
		this.ocrTarget = ocrTarget;
	}
	
	@JsonProperty("QA")
	public double getqScore() {
		return qScore;
	}
	public void setqScore(double qScore) {
		this.qScore = qScore;
	}
	
	@JsonProperty("QATarget")
	public double getQ_target() {
		return q_target;
	}
	public void setQ_target(double q_target) {
		this.q_target = q_target;
	}
	
	@JsonProperty("Stella")
	public double getStella() {
		return stella;
	}
	public void setStella(double stella) {
		this.stella = stella;
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
	
	@JsonProperty("AHTTarget")
	public double getAhtTarget() {
		return ahtTarget;
	}
	public void setAhtTarget(double ahtTarget) {
		this.ahtTarget = ahtTarget;
	}
	
	@JsonProperty("CMS")
	public double getCmsDefectPer() {
		return cmsDefectPer;
	}
	public void setCmsDefectPer(double cmsDefectPer) {
		this.cmsDefectPer = cmsDefectPer;
	}
	
	@JsonProperty("CMSTarget")
	public double getCmsTarget() {
		return cmsTarget;
	}
	public void setCmsTarget(double cmsTarget) {
		this.cmsTarget = cmsTarget;
	}
	
	@JsonProperty("Skillport")
	public double getSkillport() {
		return skillport;
	}
	public void setSkillport(double skillport) {
		this.skillport = skillport;
	}
	
	@JsonProperty("SkillportTarget")
	public double getSkillportTarget() {
		return skillportTarget;
	}
	public void setSkillportTarget(double skillportTarget) {
		this.skillportTarget = skillportTarget;
	}
	
	@JsonProperty("VOC")
	public double getVoc() {
		return voc;
	}
	public void setVoc(double voc) {
		this.voc = voc;
	}
	
	@JsonProperty("VOCTarget")
	public double getVocTarget() {
		return vocTarget;
	}
	public void setVocTarget(double vocTarget) {
		this.vocTarget = vocTarget;
	}
	
	@JsonProperty("ICW")
	public double getIcw() {
		return icw;
	}
	public void setIcw(double icw) {
		this.icw = icw;
	}
	
	@JsonProperty("ICWTarget")
	public double getIcwTarget() {
		return icwTarget;
	}
	public void setIcwTarget(double icwTarget) {
		this.icwTarget = icwTarget;
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

}
