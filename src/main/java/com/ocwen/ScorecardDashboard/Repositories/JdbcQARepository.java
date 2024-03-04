package com.ocwen.ScorecardDashboard.Repositories;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;

import com.ocwen.ScorecardDashboard.Responses.CSFormResponse;
import com.ocwen.ScorecardDashboard.Responses.User;
import com.ocwen.ScorecardDashboard.RowMappers.CSFormRowmapper;
import com.ocwen.ScorecardDashboard.RowMappers.UserRowmapper;
import com.ocwen.ScorecardDashboard.exceptions.SCException;

import oracle.jdbc.OracleTypes;

public class JdbcQARepository implements QARepository {

	Logger logger = LogManager.getLogger(JdbcQARepository.class);
	@Autowired
	private JdbcTemplate jdbcTemplate;
	private SimpleJdbcCall simpleJdbcCall;
	
	@Override
	public List<CSFormResponse> getCSForm(String dept) throws SCException {
		try{
		logger.info("Calling procedure SP_GET_CS_QUESTIONS");
		simpleJdbcCall = new SimpleJdbcCall(jdbcTemplate).withCatalogName("QA")
		        .withProcedureName("SP_GET_CS_QUESTIONS");
		simpleJdbcCall.addDeclaredParameter(new SqlParameter("dept", OracleTypes.VARCHAR));
		simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", OracleTypes.CURSOR, new CSFormRowmapper()));		
		Map<String, Object> resultMap = simpleJdbcCall.execute(dept);
		List<CSFormResponse> csForResp=null;
		if(resultMap!=null){
			logger.info("resultMap is not null..returning CS FormResponse");
			csForResp=(List<CSFormResponse>) resultMap.get("p_result");
		}
		return csForResp;
		}
		catch(Exception e)
		{
			logger.error(e.getMessage());
			throw new SCException(e.getMessage());
		}
	}

	@Override
	public List<User> getUserData(String ntd) throws SCException {
		try{
			logger.info("Calling procedure SP_GET_USER_DATA");	
			simpleJdbcCall = new SimpleJdbcCall(jdbcTemplate).withCatalogName("QA")
			        .withProcedureName("SP_GET_USER_DATA");
			simpleJdbcCall.addDeclaredParameter(new SqlParameter("ntd", OracleTypes.VARCHAR));
			simpleJdbcCall.addDeclaredParameter(new SqlOutParameter("p_result", OracleTypes.CURSOR, new UserRowmapper()));		
			Map<String, Object> resultMap = simpleJdbcCall.execute(ntd);
			List<User> usrs=null;
			if(resultMap!=null)
				usrs=(List<User>) resultMap.get("p_result");
			if(usrs.size()==0)
				throw new SCException("User not authourized to access the application!");
			logger.info("Returning user data..");
			return usrs;
		}
		catch(Exception e)
		{
			logger.error(e.getMessage());
			throw new SCException(e.getMessage());
		}
	}

}
