package com.ocwen.ScorecardDashboard.RowMappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ocwen.ScorecardDashboard.Responses.CRAgentYtdResponse;
import com.ocwen.ScorecardDashboard.Responses.CRTLYtdResponse;

public class CRTLYtdRowMapper extends Object
implements RowMapper<CRTLYtdResponse>{

	@Override
	public CRTLYtdResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
		CRTLYtdResponse resp = new CRTLYtdResponse();
		resp.setEmpId(rs.getString("EMPLOYEE ID"));
		resp.setName(rs.getString("TL NAME"));
		resp.setGlobalRank(rs.getInt("Global Rank"));
		resp.setTier(rs.getInt("TIER"));
		resp.setYtdCredits(rs.getDouble("Credit Per Hr"));
		resp.setYtdStella(rs.getDouble("Stella Star Rating"));
		resp.setYtdSA(rs.getDouble("Schedule Adherence"));
		resp.setYtdAHT(rs.getDouble("Inbound AHT"));
		resp.setYtdCmsDefect(rs.getDouble("Cms Defect %"));
		resp.setYtdCallMonDefect(rs.getDouble("TL Call Monitoring Defect"));
		resp.setYtdCollectionModelDefect(rs.getDouble("Collection Call Model Defect"));
		resp.setDept(rs.getString("DEPT"));
		return resp;
	}

}
