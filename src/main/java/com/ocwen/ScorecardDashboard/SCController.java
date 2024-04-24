package com.ocwen.ScorecardDashboard;

import com.ocwen.ScorecardDashboard.Requests.CSIndRequest;
import com.ocwen.ScorecardDashboard.Responses.CRAgentYtdResponse;
import com.ocwen.ScorecardDashboard.Responses.CRResponse;
import com.ocwen.ScorecardDashboard.Responses.CRTLResponse;
import com.ocwen.ScorecardDashboard.Responses.CRTLYtdResponse;
import com.ocwen.ScorecardDashboard.Responses.CSIndResponse;
import com.ocwen.ScorecardDashboard.Responses.JsonResponse;
import com.ocwen.ScorecardDashboard.Responses.User;
import com.ocwen.ScorecardDashboard.exceptions.SCException;
import com.ocwen.ScorecardDashboard.services.CRScorecardService;
import com.ocwen.ScorecardDashboard.services.ScorecardService;
import com.ocwen.ScorecardDashboard.services.UserService;

import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	Logger logger = LogManager.getLogger(SCController.class);
	
	String user="";
  @Autowired
  ScorecardService scService;
  
  @Autowired
  CRScorecardService crService;
  
  @Autowired
	 UserService usrService;
  
  @RequestMapping({"/login"})
  String home() { return "index"; }

  @GetMapping(path = "/",produces = "application/json")
	public @ResponseBody ResponseEntity<Object> home(HttpSession session,
			HttpServletResponse response, 
			HttpServletRequest request) throws Exception 
	{
		try{
			System.out.println("Attempting NTLM login...");
			logger.info("Attempting NTLM login...");
			String auth = request.getHeader("Authorization");
			//String auth = aut;
			String result = "";
			String user="";
			String domain="";
			String role="";
			if (auth == null)
			{
				System.out.println("Home Controller - auth is null, initiating NTLM auth..");
				logger.info("auth is null, initiating NTLM auth..");
					response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
			        response.setHeader("WWW-Authenticate", "NTLM");
			        //return "Unauthourized..";
			        return null;
			}
			else if (auth.startsWith("NTLM "))
			{    
				byte[] msg = org.apache.commons.codec.binary.Base64.decodeBase64(auth.substring(5));
	            int off = 0, length, offset;
	            if (msg[8] == 1) {
	            	System.out.println("Login details are not valid. ");
	            	logger.info("Login details are not valid. ");
	                byte z = 0;
	                byte[] msg1 = { (byte) 'N', (byte) 'T', (byte) 'L',
	                        (byte) 'M', (byte) 'S', (byte) 'S', (byte) 'P',
	                        z, (byte) 2, z, z, z, z, z, z, z, (byte) 40, z,
	                        z, z, (byte) 1, (byte) 130, z, z, z, (byte) 2,
	                        (byte) 2, (byte) 2, z, z, z, z, z, z, z, z, z,
	                        z, z, z };
	                System.out.println("Setting response header for NTLM authentication");
	                logger.info("Setting response header for NTLM authentication");
	                response.setHeader(
	                        "WWW-Authenticate", 
	                        "NTLM " + org.apache.commons.codec.binary.Base64.encodeBase64String(msg1));
	                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
	                response.setContentLength(0);
	                response.flushBuffer();
	                result="Unauthourized";
	            }else if (msg[8] == 3) 
	            {
	            	System.out.println("Login details seem valid. Grabbing the username...");
	            	logger.info("Login details seem valid. Grabbing the username...");
	                off = 30;
	                length = msg[off + 9] * 256 + msg[off + 8];
	                offset = msg[off + 11] * 256 + msg[off + 10];
	                user = new String(msg, offset, length);
	                user = canonicalUsername(user);
	                length = msg[off + 1] * 256 + msg[off + 0];
	                offset = msg[off + 3] * 256 + msg[off + 2];
	                domain = new String(msg, offset, length);
	                domain = canonicalUsername(domain);
	                //result= "Authourized user" + domain+"\\" + user;
	                }
			}
			 
			 if(!result.equals("Unauthourized"))
				{
				 System.out.println("Querying LDAP for " + user + " on domain " + domain);
				 logger.info("Querying BISRoster for  " +   user + " on domain " + domain);
				 //List<User> usrs=usrService.getUsers("magender");
				 List<User> usrs=usrService.getUsers(user);
				 logger.info("User " + usrs.get(0).getName() + " authenticated");
				 return new ResponseEntity<Object>(usrs.get(0), HttpStatus.OK);
				}
			 else
				 System.out.println("using hard coded values.." + user);
				 //return new ResponseEntity<Object>(null, HttpStatus.UNAUTHORIZED);*/
				result = "";
				role=null;
				StringBuffer sbuffer=new StringBuffer();
				return new ResponseEntity<Object>(null, HttpStatus.UNAUTHORIZED);
		}
		catch(SCException e)
		{
			logger.error("Returning Unauthourized response..");
			return new ResponseEntity<Object>(new JsonResponse(e.getMessage()), HttpStatus.UNAUTHORIZED);
		}
	}
	
	private String canonicalUsername(String username) {
      return username.replaceAll("[^a-zA-Z0-9#]", "").toLowerCase().trim();
  }


  
  @PostMapping(path = {"/"})
  @ResponseBody
  public ResponseEntity<Object> getScorecard(@RequestBody CSIndRequest request, HttpSession session, HttpServletResponse httpServletResponse, HttpServletRequest httpServletRequest) {
    List<CSIndResponse> pList = null;
    pList = this.scService.getCSIndScore(request);
    
    return new ResponseEntity(pList, HttpStatus.OK);
  }
  
  @PostMapping(path = {"/getCRScoreCard"})
  @ResponseBody
  public ResponseEntity<Object> getCRScorecard(@RequestBody CSIndRequest request, HttpSession session, HttpServletResponse httpServletResponse, HttpServletRequest httpServletRequest) {
    List<CRResponse> pList = null;
    pList = this.crService.getCRScore(request);
    return new ResponseEntity(pList, HttpStatus.OK);
  }
  
  @PostMapping(path = {"/getCRScoreCard/agent/ytd"})
  @ResponseBody
  public ResponseEntity<Object> getCRAgentYtdScores(@RequestBody CSIndRequest request, HttpSession session, HttpServletResponse httpServletResponse, HttpServletRequest httpServletRequest) {
    List<CRAgentYtdResponse> pList = null;
    pList = this.crService.getAgentYtdScore(request);
    return new ResponseEntity(pList, HttpStatus.OK);
  }
  
  @PostMapping(path = {"/getCRScoreCard/tl"})
  @ResponseBody
  public ResponseEntity<Object> getCRTLScorecard(@RequestBody CSIndRequest request, HttpSession session, HttpServletResponse httpServletResponse, HttpServletRequest httpServletRequest) {
    List<CRTLResponse> pList = null;
    pList = this.crService.getCRTLScore(request);
    return new ResponseEntity(pList, HttpStatus.OK);
  }
  
  @PostMapping(path = {"/getCRScoreCard/tl/ytd"})
  @ResponseBody
  public ResponseEntity<Object> getCRTLYtdScores(@RequestBody CSIndRequest request, HttpSession session, HttpServletResponse httpServletResponse, HttpServletRequest httpServletRequest) {
    List<CRTLYtdResponse> pList = null;
    pList = this.crService.getCRTLYtScore(request);
    return new ResponseEntity(pList, HttpStatus.OK);
  }
}
