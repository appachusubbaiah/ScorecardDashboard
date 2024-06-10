package com.ocwen.ScorecardDashboard.RowMappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ocwen.ScorecardDashboard.Responses.RevCSAgentResponse;

public class RevCSAgentRowMapper implements RowMapper<RevCSAgentResponse> {

	@Override
	public RevCSAgentResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
		RevCSAgentResponse retval= new RevCSAgentResponse();
		retval.setMonth(rs.getString("MONTH"));
		retval.setEmpId(rs.getString("FUSIONID"));
		retval.setUcid(rs.getString("UCID"));
		retval.setName(rs.getString("NAME"));
		retval.setTl(rs.getString("TEAM_LEADER"));
		retval.setLocation(rs.getString("LOCATION"));
		retval.setDept(rs.getString("DEPT"));
		retval.setGlobalRank(rs.getInt("MTD_RANK"));
		retval.setSa(rs.getDouble("Schedule Adherence"));
		retval.setSaTarget(rs.getDouble("SCH_ADH_TARGET"));
		retval.setAht(rs.getDouble("IB_AHT"));
		retval.setAhtTarget(rs.getDouble("AHT_TARGET"));
		retval.setOcr(rs.getDouble("OCR_PER"));
		retval.setOcrTarget(rs.getDouble("OCR_TARGET"));
		retval.setqScore(rs.getDouble("QA_PER"));
		retval.setQ_target(rs.getDouble("QA_TARGET"));
		retval.setStella(rs.getDouble("Stella Star Rating"));
		retval.setStellaTarget(rs.getDouble("STAR_RATING_TARGET"));
		retval.setSkillport(rs.getDouble("COMPLETION_PER"));
		retval.setSkillportTarget(rs.getDouble("CTS_TARGET"));
		retval.setVoc(rs.getDouble("VERBAL_OCC_COMP"));
		retval.setVocTarget(rs.getDouble("VOC_TARGET"));
		retval.setCmsDefectPer(rs.getDouble("CMS_ACHIEVED"));
		retval.setCmsTarget(rs.getDouble("CMS_TARGET"));
		retval.setIcw(rs.getDouble("ICW_PER"));
		retval.setIcwTarget(rs.getDouble("ICW_TARGET"));
		retval.setGlobalRank(rs.getInt("MTD_RANK"));
		retval.setOutOf(rs.getInt("Out Of"));
		return retval;
	}

}
