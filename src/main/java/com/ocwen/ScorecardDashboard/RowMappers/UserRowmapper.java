package com.ocwen.ScorecardDashboard.RowMappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ocwen.ScorecardDashboard.Responses.User;

public class UserRowmapper implements RowMapper<User> {

	@Override
	public User mapRow(ResultSet rs, int rownum) throws SQLException {
		User usr = new User();
		usr.setName(rs.getString("NAME"));
		usr.setNtid(rs.getString("NAME"));
		usr.setDept(rs.getString("DEPT"));
		usr.setDesignation(rs.getString("DESIGNATION"));
		usr.setLocation(rs.getString("LOCATION"));
		usr.setFusionId(rs.getString("FUSIONID"));
		usr.setEmailId(rs.getString("OCWEN_EMAIL"));
		return usr;
	}

}

