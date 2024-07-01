package com.ocwen.ScorecardDashboard.Repositories;

import com.ocwen.ScorecardDashboard.Responses.CRAMResponse;
import com.ocwen.ScorecardDashboard.Responses.CRAMYtdResponse;
import com.ocwen.ScorecardDashboard.Responses.CRAgentYtdResponse;
import com.ocwen.ScorecardDashboard.Responses.CRResponse;
import com.ocwen.ScorecardDashboard.Responses.CRTLResponse;
import com.ocwen.ScorecardDashboard.Responses.CRTLYtdResponse;
import com.ocwen.ScorecardDashboard.Responses.CSIndResponse;
import com.ocwen.ScorecardDashboard.Responses.RevCSAgentResponse;
import com.ocwen.ScorecardDashboard.Responses.RevCSAgentYtdResponse;
import com.ocwen.ScorecardDashboard.Responses.RevCSTLResponse;
import com.ocwen.ScorecardDashboard.Responses.RevCSTLYtdResponse;
import com.ocwen.ScorecardDashboard.RowMappers.CRAMRowMapper;
import com.ocwen.ScorecardDashboard.RowMappers.CRAMYtdRowMapper;
import com.ocwen.ScorecardDashboard.RowMappers.CRAgentYtdRowMapper;
import com.ocwen.ScorecardDashboard.RowMappers.CRRowMapper;
import com.ocwen.ScorecardDashboard.RowMappers.CRTLRowMapper;
import com.ocwen.ScorecardDashboard.RowMappers.CRTLYtdRowMapper;
import com.ocwen.ScorecardDashboard.RowMappers.CSIndRowMapper;
import com.ocwen.ScorecardDashboard.RowMappers.RevCSAgentRowMapper;
import com.ocwen.ScorecardDashboard.RowMappers.RevCSAgentYtdRowMapper;
import com.ocwen.ScorecardDashboard.RowMappers.RevCSTLRowMapper;
import com.ocwen.ScorecardDashboard.RowMappers.RevCSTLYtdRowMapper;

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
    /*this.simpleJdbcCall = (new SimpleJdbcCall(this.jdbcTemplate)).withCatalogName("SCORECARD")
      .withProcedureName("SP_GET_CS_IND_SCORECARD");
    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("period", 12));
    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("vfusionid", 12));
    this.simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", -10, new CSIndRowMapper()));
    
    Map<String, Object> resultMap = this.simpleJdbcCall.execute(new Object[] { dt, fusionId });
    List<CSIndResponse> pList = null;
    if (resultMap != null)
      pList = (List)resultMap.get("p_result"); 
    return pList;*/
    return null;
  }

@Override
public List<CRResponse> getCRScore(String period, String fusionId) {
	this.simpleJdbcCall = (new SimpleJdbcCall(this.jdbcTemplate)).withCatalogName("SCORECARD")
		      .withProcedureName("CR_SC_MTD_AGNTS");
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("period", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("vfusionid", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", -10, new CRRowMapper()));
		    
		    Map<String, Object> resultMap = this.simpleJdbcCall.execute(new Object[] { period, fusionId });
		    List<CRResponse> pList = null;
		    if (resultMap != null)
		      pList = (List)resultMap.get("p_result"); 
		    return pList;
}

public List<CRTLResponse> getCRTLScore(String period, String fusionId) {
	this.simpleJdbcCall = (new SimpleJdbcCall(this.jdbcTemplate)).withCatalogName("SCORECARD")
		      .withProcedureName("CR_SC_MTD_TL");
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("period", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("vfusionid", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", -10, new CRTLRowMapper()));
		    
		    Map<String, Object> resultMap = this.simpleJdbcCall.execute(new Object[] { period, fusionId });
		    List<CRTLResponse> pList = null;
		    if (resultMap != null)
		      pList = (List)resultMap.get("p_result"); 
		    return pList;
}

@Override
public List<CRAgentYtdResponse> getYtdAgentScore(String fusionId) {
	this.simpleJdbcCall = (new SimpleJdbcCall(this.jdbcTemplate)).withCatalogName("SCORECARD")
		      .withProcedureName("CR_SC_YTD_AGNTS");
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("vfusionid", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", -10, new CRAgentYtdRowMapper()));
		    
		    Map<String, Object> resultMap = this.simpleJdbcCall.execute(new Object[] { fusionId });
		    List<CRAgentYtdResponse> pList = null;
		    if (resultMap != null)
		      pList = (List)resultMap.get("p_result"); 
		    return pList;
}

public List<CRTLYtdResponse> getYtdTLScore(String fusionId) {
	this.simpleJdbcCall = (new SimpleJdbcCall(this.jdbcTemplate)).withCatalogName("SCORECARD")
		      .withProcedureName("CR_SC_YTD_TL");
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("vfusionid", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", -10, new CRTLYtdRowMapper()));
		    
		    Map<String, Object> resultMap = this.simpleJdbcCall.execute(new Object[] { fusionId });
		    List<CRTLYtdResponse> pList = null;
		    if (resultMap != null)
		      pList = (List)resultMap.get("p_result"); 
		    return pList;
}

@Override
public List<CRResponse> getCRAgents(String period, String fusionId) {
	this.simpleJdbcCall = (new SimpleJdbcCall(this.jdbcTemplate)).withCatalogName("SCORECARD")
		      .withProcedureName("CR_SC_MTD_TL_AGNTS");
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("period", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("vfusionid", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", -10, new CRRowMapper()));
		    
		    Map<String, Object> resultMap = this.simpleJdbcCall.execute(new Object[] { period, fusionId });
		    List<CRResponse> pList = null;
		    if (resultMap != null)
		      pList = (List)resultMap.get("p_result"); 
		    return pList;
	}
 
public List<CRAMResponse> getCRAMScore(String period, String fusionId) {
	this.simpleJdbcCall = (new SimpleJdbcCall(this.jdbcTemplate)).withCatalogName("SCORECARD")
		      .withProcedureName("CR_SC_MTD_AM");
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("period", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("vfusionid", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", -10, new CRAMRowMapper()));
		    
		    Map<String, Object> resultMap = this.simpleJdbcCall.execute(new Object[] { period, fusionId });
		    List<CRAMResponse> pList = null;
		    if (resultMap != null)
		      pList = (List)resultMap.get("p_result"); 
		    return pList;
	}

public List<CRAMYtdResponse> getYtdAmScore(String fusionId) {
	this.simpleJdbcCall = (new SimpleJdbcCall(this.jdbcTemplate)).withCatalogName("SCORECARD")
		      .withProcedureName("CR_SC_YTD_AM");
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("vfusionid", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", -10, new CRAMYtdRowMapper()));
		    
		    Map<String, Object> resultMap = this.simpleJdbcCall.execute(new Object[] { fusionId });
		    List<CRAMYtdResponse> pList = null;
		    if (resultMap != null)
		      pList = (List)resultMap.get("p_result"); 
		    return pList;
}

public List<CRTLResponse> getCRTLs(String dt, String fusionId) {
	this.simpleJdbcCall = (new SimpleJdbcCall(this.jdbcTemplate)).withCatalogName("SCORECARD")
		      .withProcedureName("CR_SC_MTD_AM_TL");
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("period", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("vfusionid", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", -10, new CRTLRowMapper()));
		    
		    Map<String, Object> resultMap = this.simpleJdbcCall.execute(new Object[] { dt, fusionId });
		    List<CRTLResponse> pList = null;
		    if (resultMap != null)
		      pList = (List)resultMap.get("p_result"); 
		    return pList;
		    //comment
	}

public List<RevCSAgentResponse> getRevCSAgentScore(String period, String fusionId) {
	this.simpleJdbcCall = (new SimpleJdbcCall(this.jdbcTemplate)).withCatalogName("SCORECARD")
		      .withProcedureName("REV_CS_SC_MTD_AGNTS");
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("period", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("vfusionid", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", -10, new RevCSAgentRowMapper()));
		    
		    Map<String, Object> resultMap = this.simpleJdbcCall.execute(new Object[] { period, fusionId });
		    List<RevCSAgentResponse> pList = null;
		    if (resultMap != null)
		      pList = (List)resultMap.get("p_result"); 
		    return pList;
	}

public List<RevCSAgentYtdResponse> getRevCsYtdAgentScore(String fusionId) {
	this.simpleJdbcCall = (new SimpleJdbcCall(this.jdbcTemplate)).withCatalogName("SCORECARD")
		      .withProcedureName("REV_CS_SC_YTD_AGNTS");
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("vfusionid", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", -10, new RevCSAgentYtdRowMapper()));
		    
		    Map<String, Object> resultMap = this.simpleJdbcCall.execute(new Object[] { fusionId });
		    List<RevCSAgentYtdResponse> pList = null;
		    if (resultMap != null)
		      pList = (List)resultMap.get("p_result"); 
		    return pList;
	}

public List<RevCSTLResponse> getRevCSTLScore(String period, String fusionId) {
	this.simpleJdbcCall = (new SimpleJdbcCall(this.jdbcTemplate)).withCatalogName("SCORECARD")
		      .withProcedureName("REV_CS_SC_MTD_TL");
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("period", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("vfusionid", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", -10, new RevCSTLRowMapper()));
		    
		    Map<String, Object> resultMap = this.simpleJdbcCall.execute(new Object[] { period, fusionId });
		    List<RevCSTLResponse> pList = null;
		    if (resultMap != null)
		      pList = (List)resultMap.get("p_result"); 
		    return pList;
}

public List<RevCSTLYtdResponse> getrevCSTLYtdScore(String fusionId)  {
	this.simpleJdbcCall = (new SimpleJdbcCall(this.jdbcTemplate)).withCatalogName("SCORECARD")
		      .withProcedureName("REV_CS_SC_YTD_TL");
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("vfusionid", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", -10, new RevCSTLYtdRowMapper()));
		    
		    Map<String, Object> resultMap = this.simpleJdbcCall.execute(new Object[] { fusionId });
		    List<RevCSTLYtdResponse> pList = null;
		    if (resultMap != null)
		      pList = (List)resultMap.get("p_result"); 
		    return pList;
	}

public List<RevCSAgentResponse> getRevCsAgents(String period, String fusionId) {
	this.simpleJdbcCall = (new SimpleJdbcCall(this.jdbcTemplate)).withCatalogName("SCORECARD")
		      .withProcedureName("REV_CS_SC_TL_AGNTS");
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("period", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlParameter("vfusionid", 12));
		    this.simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", -10, new RevCSAgentRowMapper()));
		    
		    Map<String, Object> resultMap = this.simpleJdbcCall.execute(new Object[] { period, fusionId });
		    List<RevCSAgentResponse> pList = null;
		    if (resultMap != null)
		      pList = (List)resultMap.get("p_result"); 
		    return pList;
	}
}
