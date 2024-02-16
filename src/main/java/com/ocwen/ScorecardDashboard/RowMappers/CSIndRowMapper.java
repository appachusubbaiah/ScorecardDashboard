package com.ocwen.ScorecardDashboard.RowMappers;

import com.ocwen.ScorecardDashboard.Responses.CSIndResponse;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;


public class CSIndRowMapper
  extends Object
  implements RowMapper<CSIndResponse>
{
  public CSIndResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
    CSIndResponse retVal = new CSIndResponse();
    retVal.setMonth(rs.getDate("MONTH"));
    retVal.setUcId(rs.getString("UCID"));
    retVal.setEmpId(rs.getString("Employee ID"));
    retVal.setName(rs.getString("Name"));
    retVal.setTl(rs.getString("Team Lead"));
    retVal.setRegion(rs.getString("Region"));
    retVal.setSite(rs.getString("SITE"));
    retVal.setScore(rs.getDouble("Score"));
    retVal.setGlobalRank(rs.getInt("Global Rank"));
    retVal.setOcrPercentage(rs.getDouble("OCR %"));
    retVal.setOcrRank(rs.getInt("OCR% Rank"));
    retVal.setOcrScore(rs.getInt("OCR% SCORE"));
    retVal.setOcrCredits(rs.getInt("OCR Credits"));
    retVal.setOcrCreditsRank(rs.getInt("OCR CREDITS RANK"));
    retVal.setOcrCreditsScore(rs.getInt("OCR CREDIT SCORE"));
    retVal.setQaScore(rs.getDouble("Quality Score"));
    retVal.setQaRank(rs.getInt("OUALITY RANK"));
    retVal.setQaPoints(rs.getInt("OUALITY_PNTS"));
    retVal.setStellaStarRating(rs.getDouble("Stella Star Rating"));
    retVal.setStellRatingRank(rs.getInt("STAR RATING RANK"));
    retVal.setStarRatingScore(rs.getDouble("STAR RATING SCORE"));
    retVal.setSa(rs.getDouble("Schedule Adherence"));
    retVal.setSaRank(rs.getInt("Schedule Adherence RANK"));
    retVal.setSaScore(rs.getDouble("Schedule Adherence SCORE"));
    retVal.setAht(rs.getDouble("Inbound AHT"));
    retVal.setAhtRank(rs.getInt("Inbound AHT RANK"));
    retVal.setAhtScore(rs.getInt("Inbound AHT SCORE"));
    retVal.setCmsDefectPercent(rs.getDouble("Cms Defect %"));
    retVal.setCmsDefectRank(rs.getInt("Cms Defect % RANK"));
    retVal.setCmsDefectScore(rs.getInt("Cms Defect % SCORE"));
    retVal.setSkillPort(rs.getDouble("Skillport / Mandatory Training"));
    retVal.setSkillPortScore(rs.getInt("Skillport / Mandatory Training SCORE"));
    retVal.setOo(rs.getInt("Out Of"));
    retVal.setNps(rs.getDouble("NPS - Stella"));
    retVal.setNpsRank(rs.getInt("NPS Rank"));
    retVal.setNpsScore(rs.getInt("NPS Score"));
    retVal.setRefSoli(rs.getDouble("Refinance Solicitation - Transfer"));
    retVal.setRefSoliRank(rs.getInt("Refinance Solicitation - Transfer RANK"));
    retVal.setRefSoliScore(rs.getInt("Refinance Solicitation - Transfer SCORE"));
    retVal.setPkt(rs.getDouble("PKT"));
    retVal.setPktRank(rs.getInt("PKT Rank"));
    retVal.setPktScore(rs.getInt("PKT Score"));
    return retVal;
  }
}
