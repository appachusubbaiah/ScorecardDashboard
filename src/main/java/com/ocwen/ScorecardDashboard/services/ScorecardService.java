package com.ocwen.ScorecardDashboard.services;

import com.ocwen.ScorecardDashboard.Repositories.JdbcScoreCardRepository;
import com.ocwen.ScorecardDashboard.Requests.CSIndRequest;
import com.ocwen.ScorecardDashboard.Responses.CSIndResponse;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;






@Component
public class ScorecardService
{
  @Autowired
  JdbcScoreCardRepository rep;
  
  public List<CSIndResponse> getCSIndScore(CSIndRequest request) { return this.rep.getCsIndScore(request.getDt(), request.getFusionId()); }
}
