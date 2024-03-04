package com.ocwen.ScorecardDashboard.Repositories;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ocwen.ScorecardDashboard.Responses.CSFormResponse;
import com.ocwen.ScorecardDashboard.Responses.User;
import com.ocwen.ScorecardDashboard.exceptions.SCException;

@Repository
public interface QARepository {
	List<CSFormResponse> getCSForm(String dept) throws SCException;
	List<User> getUserData(String ntd) throws SCException;
	}
