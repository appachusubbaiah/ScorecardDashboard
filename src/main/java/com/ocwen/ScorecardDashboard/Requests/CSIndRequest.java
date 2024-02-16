package com.ocwen.ScorecardDashboard.Requests;

import com.fasterxml.jackson.annotation.JsonProperty;





public class CSIndRequest
{
  @JsonProperty("Month")
  private String dt;
  @JsonProperty("FusionId")
  private String fusionId;
  
  public String getDt() { return this.dt; }


  
  public void setDt(String dt) { this.dt = dt; }


  
  public String getFusionId() { return this.fusionId; }


  
  public void setFusionId(String fusionId) { this.fusionId = fusionId; }
}
