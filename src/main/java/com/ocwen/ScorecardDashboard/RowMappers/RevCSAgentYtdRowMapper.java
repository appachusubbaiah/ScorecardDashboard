package com.ocwen.ScorecardDashboard.RowMappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ocwen.ScorecardDashboard.Responses.RevCSAgentYtdResponse;

public class RevCSAgentYtdRowMapper implements RowMapper<RevCSAgentYtdResponse> {

	@Override
	public RevCSAgentYtdResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		RevCSAgentYtdResponse retval=new RevCSAgentYtdResponse();
		retval.setEmpId(rs.getString("FUSIONID"));
		retval.setName(rs.getString("NAME"));
		retval.setTl(rs.getString("TEAM_LEADER"));
		retval.setLocation(rs.getString("LOCATION"));
		retval.setDept(rs.getString("DEPT"));
		retval.setGlobalRank(rs.getInt("GLOBAL_RANK"));
		retval.setSa(rs.getDouble("Schedule Adherence"));
		retval.setAht(rs.getDouble("IB_AHT"));
		retval.setOcr(rs.getDouble("OCR_PER"));
		retval.setqScore(rs.getDouble("QA_PER"));
		retval.setStella(rs.getDouble("Stella Star Rating"));
		retval.setSkillport(rs.getDouble("COMPLETION_PER"));
		retval.setVoc(rs.getDouble("VERBAL_OCC_COMP"));
		retval.setCmsDefectPer(rs.getDouble("CMS_ACHIEVED"));
		retval.setIcw(rs.getDouble("ICW_PER"));
		retval.setGlobalRank(rs.getInt("GLOBAL_RANK"));
		retval.setOutOf(rs.getInt("OUT_OFF"));
		return retval;
	}

}
