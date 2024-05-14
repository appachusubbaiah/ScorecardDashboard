package com.ocwen.ScorecardDashboard.RowMappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ocwen.ScorecardDashboard.Responses.CRAMYtdResponse;
import com.ocwen.ScorecardDashboard.Responses.CRTLYtdResponse;

public class CRAMYtdRowMapper extends Object
implements RowMapper<CRAMYtdResponse>{

	@Override
	public CRAMYtdResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
		CRAMYtdResponse resp = new CRAMYtdResponse();
		resp.setEmpId(rs.getString("EMPLOYEE ID"));
		resp.setName(rs.getString("TL NAME"));
		resp.setDept(rs.getString("DEPT"));
		resp.setGlobalRank(rs.getInt("Global Rank"));
		resp.setYtdCredits(rs.getDouble("Credit Per Hr"));
		resp.setYtdAHT(rs.getDouble("Inbound AHT"));
		resp.setYtdCmsDefect(rs.getDouble("Cms Defect %"));
		resp.setYtdCallMonDefect(rs.getDouble("TL Call Monitoring Defect"));
		resp.setYtdCollectionModelDefect(rs.getDouble("Collection Call Model Defect"));
		resp.setYtdQaScore(rs.getDouble("Quality Score"));
		return resp;
	}
	
	

}
