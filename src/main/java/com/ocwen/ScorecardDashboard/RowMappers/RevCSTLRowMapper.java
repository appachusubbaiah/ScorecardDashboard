package com.ocwen.ScorecardDashboard.RowMappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ocwen.ScorecardDashboard.Responses.RevCSTLResponse;

public class RevCSTLRowMapper implements RowMapper<RevCSTLResponse>{

	@Override
	public RevCSTLResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
		RevCSTLResponse retval= new RevCSTLResponse();
		retval.setMonth(rs.getString("MONTH"));
		retval.setEmpId(rs.getString("FUSIONID"));
		retval.setName(rs.getString("TL_NAME"));
		retval.setTl(rs.getString("MANAGER_NAME"));
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
		retval.setQaTarget(rs.getDouble("QA_TARGET"));
		retval.setStella(rs.getDouble("Stella Star Rating"));
		retval.setStellaTarget(rs.getDouble("STAR_RATING_TARGET"));
		retval.setSkillport(rs.getDouble("CTS_TEAM_COMPLETION_PER"));
		retval.setSkillportTarget(rs.getDouble("CTS_SELF_TARGET"));
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
