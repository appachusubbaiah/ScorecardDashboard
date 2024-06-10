package com.ocwen.ScorecardDashboard.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ocwen.ScorecardDashboard.Repositories.JdbcScoreCardRepository;
import com.ocwen.ScorecardDashboard.Requests.CSIndRequest;
import com.ocwen.ScorecardDashboard.Responses.RevCSAgentResponse;
import com.ocwen.ScorecardDashboard.Responses.RevCSAgentYtdResponse;

@Component
public class ReverseScorecardService {
	
	@Autowired
	  JdbcScoreCardRepository rep;
	  
	  public List<RevCSAgentResponse> getRevCSAgentScore(CSIndRequest request) { 
		  List<RevCSAgentResponse> crResp;
		  crResp=this.rep.getRevCSAgentScore(request.getDt(), request.getFusionId());
		  
		  return crResp;
		  }

	public List<RevCSAgentYtdResponse> getAgentYtdScore(CSIndRequest request) {
		List<RevCSAgentYtdResponse> resp=null;
		resp = rep.getRevCsYtdAgentScore(request.getFusionId());
		return resp;
	}
}
