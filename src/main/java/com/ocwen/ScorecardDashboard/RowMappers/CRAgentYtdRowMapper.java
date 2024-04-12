package com.ocwen.ScorecardDashboard.RowMappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ocwen.ScorecardDashboard.Responses.CRAgentYtdResponse;

public class CRAgentYtdRowMapper extends Object
implements RowMapper<CRAgentYtdResponse>{

	@Override
	public CRAgentYtdResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
		CRAgentYtdResponse resp = new CRAgentYtdResponse();
		resp.setEmpId(rs.getString("EMPLOYEE ID"));
		resp.setName(rs.getString("EMPLOYEE_NAME"));
		resp.setGlobalRank(rs.getInt("Global Rank"));
		resp.setTier(rs.getInt("TIER"));
		resp.setYtdCredits(rs.getDouble("Credit Per Hr"));
		resp.setYtdQa(rs.getDouble("Quality Score"));
		resp.setYtdStella(rs.getDouble("Stella Star Rating"));
		resp.setYtdSA(rs.getDouble("Schedule Adherence"));
		resp.setYtdAHT(rs.getDouble("Inbound AHT"));
		resp.setCmsDefect(rs.getDouble("Cms Defect %"));
		resp.setDept(rs.getString("DEPT"));
		return resp;
	}

}
