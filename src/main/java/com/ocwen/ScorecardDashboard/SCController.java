package com.ocwen.ScorecardDashboard;

import com.ocwen.ScorecardDashboard.Requests.CSIndRequest;
import com.ocwen.ScorecardDashboard.Responses.CSIndResponse;
import com.ocwen.ScorecardDashboard.services.ScorecardService;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;







@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping(path = {"api/scorecard"})
public class SCController
{
  @Autowired
  ScorecardService scService;
  
  @RequestMapping({"/login"})
  String home() { return "index"; }


  
  @PostMapping(path = {"/"})
  @ResponseBody
  public ResponseEntity<Object> getScorecard(@RequestBody CSIndRequest request, HttpSession session, HttpServletResponse httpServletResponse, HttpServletRequest httpServletRequest) {
    List<CSIndResponse> pList = null;
    pList = this.scService.getCSIndScore(request);
    
    return new ResponseEntity(pList, HttpStatus.OK);
  }
}
