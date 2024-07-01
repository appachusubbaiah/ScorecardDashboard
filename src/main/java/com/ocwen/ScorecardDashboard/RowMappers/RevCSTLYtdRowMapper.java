package com.ocwen.ScorecardDashboard.RowMappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ocwen.ScorecardDashboard.Responses.RevCSTLYtdResponse;

public class RevCSTLYtdRowMapper implements RowMapper<RevCSTLYtdResponse> {

	@Override
	public RevCSTLYtdResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
		RevCSTLYtdResponse retval= new RevCSTLYtdResponse();
		retval.setEmpId(rs.getString("FUSIONID"));
		retval.setName(rs.getString("TL_NAME"));
		retval.setTl(rs.getString("MANAGER_NAME"));
		retval.setLocation(rs.getString("LOCATION"));
		retval.setDept(rs.getString("DEPT"));
		retval.setGlobalRank(rs.getInt("GLOBAL_RANK"));
		retval.setSa(rs.getDouble("Schedule Adherence"));
		retval.setAht(rs.getDouble("IB_AHT"));
		retval.setOcr(rs.getDouble("OCR_PER"));
		retval.setqScore(rs.getDouble("QA_PER"));
		retval.setStella(rs.getDouble("Stella Star Rating"));
		retval.setSkillport(rs.getDouble("CTS_TEAM_COMPLETION_PER"));
		retval.setVoc(rs.getDouble("VERBAL_OCC_COMP"));
		retval.setCmsDefectPer(rs.getDouble("CMS_ACHIEVED"));
		retval.setIcw(rs.getDouble("ICW_PER"));
		retval.setTier(rs.getInt("TIER"));
		retval.setOutOf(rs.getInt("Out_Off"));
		retval.setYtdGlobalrank(rs.getInt("GLOBAL_RANK"));
		return retval;
	}

}
