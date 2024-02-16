package com.ocwen.ScorecardDashboard.Repositories;

import com.ocwen.ScorecardDashboard.Responses.CSIndResponse;
import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public interface ScorecardRepository {
  List<CSIndResponse> getCsIndScore(String paramString1, String paramString2);
}
