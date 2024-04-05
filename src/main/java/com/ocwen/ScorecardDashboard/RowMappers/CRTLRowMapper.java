package com.ocwen.ScorecardDashboard.RowMappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ocwen.ScorecardDashboard.Responses.CRResponse;
import com.ocwen.ScorecardDashboard.Responses.CRTLResponse;

public class CRTLRowMapper extends Object
implements RowMapper<CRTLResponse>{

	@Override
	public CRTLResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
		//Rowmapper
		CRTLResponse resp=new CRTLResponse();
		resp.setMonth(rs.getString("MONTH"));
		resp.setUcid(rs.getString("UCID"));
		resp.setFusionId(rs.getString("FUSION_ID"));
		resp.setTlName(rs.getString("TL NAME"));
		resp.setAsm(rs.getString("ASM"));
		resp.setLocation(rs.getString("LOCATION"));
		resp.setDept(rs.getString("DEPT"));
		resp.setGlobalRank(rs.getInt("Global Rank"));
		resp.setTotalPoints(rs.getDouble("Total Points"));
		resp.setResCredits(rs.getDouble("Resolution Credits"));
		resp.setResCreditsRank(rs.getInt("Res Credit Rank"));
		resp.setResCreditsPoints(rs.getDouble("Res Credit Points"));
		resp.setCphTarget(rs.getDouble("CPH_TARGET"));
		resp.setStellaRating(rs.getDouble("Stella Star Rating"));
		resp.setStellaRank(rs.getInt("Stella Star rank"));
		resp.setStellaTarget(rs.getDouble("Star_TARGET"));
		resp.setSa(rs.getDouble("Schedule Adherence"));
		resp.setSaRank(rs.getInt("Adherence Rank"));
		resp.setSaTarget(rs.getDouble("ADHERENCE_TARGET"));
		resp.setAht(rs.getDouble("Inbound AHT"));
		resp.setAhtRank(rs.getInt("AHT Rank"));
		resp.setAhtScore(rs.getDouble("AHT Points"));
		resp.setAhtTarget(rs.getInt("IB_AHT_TARGET"));
		resp.setCmsDefectPer(rs.getDouble("Cms Defect %"));
		resp.setCmsScore(rs.getDouble("CMS Usage Points"));
		resp.setCmsRank(rs.getInt("CMS Defect Rank"));
		resp.setCmsTarget(rs.getDouble("CMS_DEFECT_TARGET"));
		resp.setCallMonDefect(rs.getDouble("TL Call Monitoring Defect"));
		resp.setCallMonDefectRank(rs.getInt("TL Call Monitoring Defect Rank"));
		resp.setCallMonPoints(rs.getDouble("TL Call Monitoring Points"));
		resp.setCallMonTarget(rs.getDouble("Call_MONITORING_DEFECT_TARGET"));
		resp.setCollectioncallMonDefect(rs.getDouble("Collection call Model Defect"));
		resp.setCollectioncallMonDefectRank(rs.getInt("Collection call Model Defect Rank"));
		resp.setCollectioncallMonPoints(rs.getDouble("Collection call Model Points"));
		resp.setCollectioncallMonTarget(rs.getDouble("COLLECTION_CALL_MODEL_DEFECT_TARGET"));
		resp.setOutOf(rs.getInt("Out Of"));
		resp.setYtdGlobalrank(rs.getInt("YTD Global Rank"));
		return resp;
	}

}
