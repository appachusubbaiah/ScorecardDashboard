package com.ocwen.ScorecardDashboard.Responses;

import com.fasterxml.jackson.annotation.JsonProperty;

public class JsonResponse {
	private String msg;

	public JsonResponse(String msg){
		this.msg=msg;
	}
	
	@JsonProperty("Message")
	public String getErrMsg() {
		return msg;
	}

	public void setErrMsg(String msg) {
		this.msg = msg;
	}
	

}
