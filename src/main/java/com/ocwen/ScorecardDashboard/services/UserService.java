package com.ocwen.ScorecardDashboard.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ocwen.ScorecardDashboard.Repositories.JdbcQARepository;
import com.ocwen.ScorecardDashboard.Responses.User;
import com.ocwen.ScorecardDashboard.exceptions.SCException;

@Component
public class UserService {

	@Autowired
	JdbcQARepository userRepository;
	
	public List<User> getUsers(String ntid) throws SCException
	{
		return userRepository.getUserData(ntid);
	}
}
