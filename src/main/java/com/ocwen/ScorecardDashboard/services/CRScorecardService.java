package com.ocwen.ScorecardDashboard.services;

import com.ocwen.ScorecardDashboard.Repositories.JdbcScoreCardRepository;
import com.ocwen.ScorecardDashboard.Requests.CSIndRequest;
import com.ocwen.ScorecardDashboard.Responses.CRResponse;
import com.ocwen.ScorecardDashboard.Responses.CRTLResponse;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class CRScorecardService
{
  @Autowired
  JdbcScoreCardRepository rep;
  
  public List<CRResponse> getCRScore(CSIndRequest request) { 
	  List<CRResponse> crResp;
	  crResp=this.rep.getCRScore(request.getDt(), request.getFusionId());
	  
	  return crResp;
	  }
  
  public List<CRTLResponse> getCRTLScore(CSIndRequest request) { 
	  List<CRTLResponse> crTlResp;
	  crTlResp=this.rep.getCRTLScore(request.getDt(), request.getFusionId());
	  
	  return crTlResp;
	  }
}
