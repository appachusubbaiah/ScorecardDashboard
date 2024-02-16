package com.ocwen.ScorecardDashboard.Repositories;

import com.ocwen.ScorecardDashboard.Responses.CSIndResponse;
import com.ocwen.ScorecardDashboard.RowMappers.CSIndRowMapper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;






@Repository
@Component
public class JdbcScoreCardRepository
  implements ScorecardRepository
{
  @Autowired
  private JdbcTemplate jdbcTemplate;
  private SimpleJdbcCall simpleJdbcCall;
  
  public List<CSIndResponse> getCsIndScore(String dt, String fusionId) {
    this.simpleJdbcCall = (new SimpleJdbcCall(this.jdbcTemplate)).withCatalogName("SCORECARD_CS_IND")
      .withProcedureName("SP_GET_CS_IND_SCORECARD");
    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("period", 12));
    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("vfusionid", 12));
    this.simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", -10, new CSIndRowMapper()));
    
    Map<String, Object> resultMap = this.simpleJdbcCall.execute(new Object[] { dt, fusionId });
    List<CSIndResponse> pList = null;
    if (resultMap != null)
      pList = (List)resultMap.get("p_result"); 
    return pList;
  }
}
