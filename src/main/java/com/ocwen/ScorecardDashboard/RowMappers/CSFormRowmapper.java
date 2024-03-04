package com.ocwen.ScorecardDashboard.RowMappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ocwen.ScorecardDashboard.Responses.CSFormResponse;

public class CSFormRowmapper implements RowMapper<CSFormResponse>{

	@Override
	public CSFormResponse mapRow(ResultSet rs, int rownum) throws SQLException {
			CSFormResponse rsp = new CSFormResponse();
			rsp.setId(rs.getInt("ID"));
			rsp.setQaMetric(rs.getString("QAMETRIC"));
			rsp.setCompliance(rs.getInt("COMPLIANCE"));
			rsp.setPointsLost(rs.getInt("POINTSLOST"));
			return rsp;
		}

}
