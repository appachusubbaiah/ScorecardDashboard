package com.ocwen.ScorecardDashboard.RowMappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ocwen.ScorecardDashboard.Responses.CRAMResponse;

public class CRAMRowMapper implements RowMapper<CRAMResponse> {

	@Override
	public CRAMResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
		CRAMResponse resp=new CRAMResponse();
		resp.setMonth(rs.getString("MONTH"));
		resp.setUcid(rs.getString("UCID"));
		resp.setFusionId(rs.getString("EMPLOYEE ID"));
		resp.setAmName(rs.getString("TL NAME"));
		resp.setManager(rs.getString("ASM"));
		resp.setLocation(rs.getString("LOCATION"));
		resp.setDept(rs.getString("DEPT"));
		resp.setGlobalRank(rs.getInt("Overall Rank"));
		resp.setTotalPoints(rs.getDouble("Overall Score"));
		resp.setResCredits(rs.getDouble("Resolution Credits"));
		resp.setCphTarget(rs.getInt("CPH_TARGET"));
		resp.setAht(rs.getDouble("Inbound AHT"));
		resp.setAhtTarget(rs.getInt("IB_AHT_TARGET"));
		resp.setCmsDefectPer(rs.getDouble("Cms Defect %"));
		resp.setCmsTarget(rs.getDouble("CMS_DEFECT_TARGET"));
		resp.setCallMonDefect(rs.getDouble("TL Call Monitoring Defect"));
		resp.setCallMonTarget(rs.getDouble("Call_MONITORING_DEFECT_TARGET"));
		resp.setCollectioncallMonDefect(rs.getDouble("Collection call Model Defect"));
		resp.setCollectioncallMonTarget(rs.getDouble("COLLECTION_CALL_MODEL_DEFECT_TARGET"));
		resp.setQaScore(rs.getDouble("Quality Score"));
		resp.setQaTarget(rs.getDouble("QA_TARGET"));
		resp.setOutOf(rs.getInt("Out Off"));
		resp.setYtdGlobalrank(rs.getInt("YTD Global Rank"));
		return resp;
	}

}
