package com.ocwen.ScorecardDashboard.Responses;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Date;
import org.springframework.stereotype.Component;



@Component
public class CSIndResponse
{
  private Date month;
  private String ucId;
  private String empId;
  private String name;
  private String tl;
  private String region;
  private String site;
  private double score;
  private int globalRank;
  private double ocrPercentage;
  private int ocrRank;
  private double ocrScore;
  private int ocrCredits;
  private int ocrCreditsRank;
  private double ocrCreditsScore;
  private double qaScore;
  private int qaRank;
  private int qaPoints;
  private double stellaStarRating;
  private int stellRatingRank;
  private double starRatingScore;
  private double sa;
  private int saRank;
  private double saScore;
  private double aht;
  private int ahtRank;
  private int ahtScore;
  private double cmsDefectPercent;
  private int cmsDefectRank;
  private int cmsDefectScore;
  private double skillPort;
  private int skillPortScore;
  private double nps;
  private int npsRank;
  private double npsScore;
  private double refSoli;
  private int refSoliRank;
  private int RefSoliScore;
  private double pkt;
  private int pktRank;
  private int pktScore;
  private int oo;
  
  @JsonProperty("Month")
  public Date getMonth() { return this.month; }

  
  public void setMonth(Date month) { this.month = month; }


  
  @JsonProperty("UCId")
  public String getUcId() { return this.ucId; }

  
  public void setUcId(String ucId) { this.ucId = ucId; }


  
  @JsonProperty("EmpId")
  public String getEmpId() { return this.empId; }

  
  public void setEmpId(String empId) { this.empId = empId; }


  
  @JsonProperty("Name")
  public String getName() { return this.name; }

  
  public void setName(String name) { this.name = name; }


  
  @JsonProperty("TeamLeader")
  public String getTl() { return this.tl; }

  
  public void setTl(String tl) { this.tl = tl; }


  
  @JsonProperty("Region")
  public String getRegion() { return this.region; }

  
  public void setRegion(String region) { this.region = region; }


  
  @JsonProperty("Site")
  public String getSite() { return this.site; }

  
  public void setSite(String site) { this.site = site; }


  
  @JsonProperty("Score")
  public double getScore() { return this.score; }

  
  public void setScore(double score) { this.score = score; }


  
  @JsonProperty("GlobalRank")
  public int getGlobalRank() { return this.globalRank; }

  
  public void setGlobalRank(int globalRank) { this.globalRank = globalRank; }


  
  @JsonProperty("OCRPercentage")
  public double getOcrPercentage() { return this.ocrPercentage; }

  
  public void setOcrPercentage(double ocrPercentage) { this.ocrPercentage = ocrPercentage; }


  
  @JsonProperty("OCRRank")
  public int getOcrRank() { return this.ocrRank; }

  
  public void setOcrRank(int ocrRank) { this.ocrRank = ocrRank; }


  
  @JsonProperty("OCRScore")
  public double getOcrScore() { return this.ocrScore; }

  
  public void setOcrScore(double ocrScore) { this.ocrScore = ocrScore; }


  
  @JsonProperty("OCRCredits")
  public int getOcrCredits() { return this.ocrCredits; }

  
  public void setOcrCredits(int ocrCredits) { this.ocrCredits = ocrCredits; }


  
  @JsonProperty("OCRCreditsRank")
  public int getOcrCreditsRank() { return this.ocrCreditsRank; }

  
  public void setOcrCreditsRank(int ocrCreditsRank) { this.ocrCreditsRank = ocrCreditsRank; }


  
  @JsonProperty("OCRCreditScore")
  public double getOcrCreditsScore() { return this.ocrCreditsScore; }

  
  public void setOcrCreditsScore(double ocrCreditsScore) { this.ocrCreditsScore = ocrCreditsScore; }


  
  @JsonProperty("QAScore")
  public double getQaScore() { return this.qaScore; }

  
  public void setQaScore(double qaScore) { this.qaScore = qaScore; }


  
  @JsonProperty("QARank")
  public int getQaRank() { return this.qaRank; }

  
  public void setQaRank(int qaRank) { this.qaRank = qaRank; }


  
  @JsonProperty("QAPoints")
  public int getQaPoints() { return this.qaPoints; }

  
  public void setQaPoints(int qaPoints) { this.qaPoints = qaPoints; }


  
  @JsonProperty("StellaStarRating")
  public double getStellaStarRating() { return this.stellaStarRating; }

  
  public void setStellaStarRating(double stellaStarRating) { this.stellaStarRating = stellaStarRating; }


  
  @JsonProperty("StellaStarRatingRank")
  public int getStellRatingRank() { return this.stellRatingRank; }

  
  public void setStellRatingRank(int stellRatingRank) { this.stellRatingRank = stellRatingRank; }


  
  @JsonProperty("StellaStarRatingScore")
  public double getStarRatingScore() { return this.starRatingScore; }

  
  public void setStarRatingScore(double starRatingScore) { this.starRatingScore = starRatingScore; }


  
  @JsonProperty("ScheduleAdherence")
  public double getSa() { return this.sa; }

  
  public void setSa(double sa) { this.sa = sa; }


  
  @JsonProperty("ScheduleAdherenceRank")
  public int getSaRank() { return this.saRank; }

  
  public void setSaRank(int saRank) { this.saRank = saRank; }


  
  @JsonProperty("ScheduleAdherenceScore")
  public double getSaScore() { return this.saScore; }

  
  public void setSaScore(double saScore) { this.saScore = saScore; }


  
  @JsonProperty("AHT")
  public double getAht() { return this.aht; }

  
  public void setAht(double aht) { this.aht = aht; }


  
  @JsonProperty("AHTRank")
  public int getAhtRank() { return this.ahtRank; }

  
  public void setAhtRank(int ahtRank) { this.ahtRank = ahtRank; }


  
  @JsonProperty("AHTScore")
  public int getAhtScore() { return this.ahtScore; }

  
  public void setAhtScore(int ahtScore) { this.ahtScore = ahtScore; }


  
  @JsonProperty("CMSDefectPercentage")
  public double getCmsDefectPercent() { return this.cmsDefectPercent; }

  
  public void setCmsDefectPercent(double cmsDefectPercent) { this.cmsDefectPercent = cmsDefectPercent; }


  
  @JsonProperty("CMSDefectRank")
  public int getCmsDefectRank() { return this.cmsDefectRank; }

  
  public void setCmsDefectRank(int cmsDefectRank) { this.cmsDefectRank = cmsDefectRank; }


  
  @JsonProperty("CMSDefectScore")
  public int getCmsDefectScore() { return this.cmsDefectScore; }

  
  public void setCmsDefectScore(int cmsDefectScore) { this.cmsDefectScore = cmsDefectScore; }


  
  @JsonProperty("SkillPort")
  public double getSkillPort() { return this.skillPort; }

  
  public void setSkillPort(double skillPort) { this.skillPort = skillPort; }


  
  @JsonProperty("SkillPortScore")
  public int getSkillPortScore() { return this.skillPortScore; }

  
  public void setSkillPortScore(int skillPortScore) { this.skillPortScore = skillPortScore; }


  
  @JsonProperty("Nps")
  public double getNps() { return this.nps; }

  
  public void setNps(double nps) { this.nps = nps; }


  
  @JsonProperty("NPSRank")
  public int getNpsRank() { return this.npsRank; }

  
  public void setNpsRank(int npsRank) { this.npsRank = npsRank; }


  
  @JsonProperty("NPSScore")
  public double getNpsScore() { return this.npsScore; }

  
  public void setNpsScore(double npsScore) { this.npsScore = npsScore; }


  
  @JsonProperty("RefSoli")
  public double getRefSoli() { return this.refSoli; }

  
  public void setRefSoli(double refSoli) { this.refSoli = refSoli; }


  
  @JsonProperty("RefSoliRank")
  public int getRefSoliRank() { return this.refSoliRank; }

  
  public void setRefSoliRank(int refSoliRank) { this.refSoliRank = refSoliRank; }


  
  @JsonProperty("RefSoliScore")
  public int getRefSoliScore() { return this.RefSoliScore; }

  
  public void setRefSoliScore(int refSoliScore) { this.RefSoliScore = refSoliScore; }


  
  @JsonProperty("PKT")
  public double getPkt() { return this.pkt; }

  
  public void setPkt(double pkt) { this.pkt = pkt; }


  
  @JsonProperty("PKTRank")
  public int getPktRank() { return this.pktRank; }

  
  public void setPktRank(int pktRank) { this.pktRank = pktRank; }


  
  @JsonProperty("PKTScore")
  public int getPktScore() { return this.pktScore; }

  
  public void setPktScore(int pktScore) { this.pktScore = pktScore; }


  
  @JsonProperty("OutOf")
  public int getOo() { return this.oo; }

  
  public void setOo(int oo) { this.oo = oo; }
}
