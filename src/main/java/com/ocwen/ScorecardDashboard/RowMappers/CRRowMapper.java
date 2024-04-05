package com.ocwen.ScorecardDashboard.RowMappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ocwen.ScorecardDashboard.Responses.CRResponse;

public class CRRowMapper extends Object
implements RowMapper<CRResponse>{

	@Override
	public CRResponse mapRow(ResultSet rs, int rowNum) throws SQLException  {
		CRResponse resp = new CRResponse();
		resp.setMonth(rs.getString("MONTH"));
		resp.setUcid(rs.getString("UCID"));
		resp.setEmpId(rs.getString("Employee ID"));
		resp.setName(rs.getString("NAME"));
		resp.setTl(rs.getString("Team Lead"));
		resp.setLocation(rs.getString("LOCATION"));
		resp.setDept(rs.getString("DEPT"));
		resp.setGlobalRank(rs.getInt("Global Rank"));
		resp.setTotalPoints(rs.getDouble("Total Points"));
		resp.setCreditPerHr(rs.getDouble("Credit Per Hr"));
		resp.setCreditRank(rs.getInt("Credit Rank"));
		resp.setCreditScore(rs.getDouble("Credits Score"));
		resp.setCreditsTarget(rs.getDouble("CPH_TARGET"));
		resp.setqScore(rs.getDouble("Quality Score"));
		resp.setqRank(rs.getInt("Quality Rank"));
		resp.setQ_Score(rs.getDouble("Quality_Score"));
		resp.setQ_target(rs.getDouble("QUALITY_TARGET"));
		resp.setStellaRating(rs.getDouble("Stella Star Rating"));
		resp.setStellaRank(rs.getInt("Stella Star Rank"));
		resp.setStellaScore(rs.getDouble("Stella Star Score"));
		resp.setStellaTarget(rs.getDouble("STAR_TARGET"));
		resp.setSa(rs.getDouble("Schedule Adherence"));
		resp.setSaRank(rs.getInt("Adherence Rank"));
		resp.setSaScore(rs.getInt("Adherence Score"));
		resp.setSaTarget(rs.getDouble("ADHERENCE_TARGET"));
		resp.setAht(rs.getDouble("inbound AHT"));
		resp.setAhtRank(rs.getInt("AHT Rank"));
		resp.setAhtScore(rs.getDouble("AHT Score"));
		resp.setAhtTarget(rs.getInt("IB_AHT_TARGET"));
		resp.setCmsDefectPer(rs.getDouble("Cms Defect %"));
		resp.setCmsRank(rs.getInt("Cms Defect Rank"));
		resp.setCmsScore(rs.getDouble("Cms Defect Score"));
		resp.setCmsTarget(rs.getDouble("CMS_DEFECT_TARGET"));
		resp.setOutOf(rs.getInt("Out Of"));
		resp.setYtdGlobalrank(rs.getInt("YTD Global Rank"));
		return resp;
	}

}
