$(document).ready(function(){
	var errorType=0;
	var urlStr="http://awswauto01d:8080/ScorecardDashboard/api/";
	var ytdAllAgents;
	var curUserId;
	var ytdPos;
	var ytdOutOf;
	var ytdPosStr;
	var sumFrac;
	var gcd;
	var dept;
	var creditscore=[];
	var creditTarget=[];
	var creditYtdTarget=[];
	var qualityscore=[];
	var qualityYtdTarget=[];
	var qualityTarget=[];
	var stellascore=[];
	var stellaTarget=[];
	var stellaYtdTarget=[];
	var vocYtdTarget=[];
	var ytdIcw=[];
	var sascore=[];
	var saTarget=[];
	var saYtdTarget=[];
	var ahtscore=[];
	var ahtTarget=[];
	var ahtYtdTarget=[];
	var ocrYtdTarget=[];
	var icwYtdTarget=[];
	var ytdSkillport=[];
	var skillportYtdTarget=[];
	var ytdVoc=[];
	var ytdCms=[];
	var cmsscore=[];
	var cmsTarget=[];
	var cmsYtdTarget=[];
	var callMonYtdTarget=[];
	var collModelDefect=[];
	var collModelDefectTarget=[];
	var collModelDefectYtdTarget=[];
	var ocrscore=[];
	var ocrTarget=[];
	var skillportscore=[];
	var skillportTarget=[];
	var vocscore=[];
	var vocTarget=[];
	var icwscore=[];
	var icwTarget=[];
	var months=[];
	var bgColor=[];
	var bgYColor=[];
	var bgColor1=[];
	var bgYColor1=[];
	var bgColor2=[];
	var bgYColor2=[];
	var bgColor3=[];
	var bgYColor3=[];
	var bgColor4=[];
	var bgYColor4=[];
	var bgColor5=[];
	var bgColor6=[];
	var bgColor7=[];
	var bgColor8=[];
	var bgYColor5=[];
	var bgYColor6=[];
	var bgYColor7=[];
	var bgYColor8=[];
	let chrt=null;
	let chrt1=null;
	let chrt2=null;
	let chrt3=null;
	let chrt4=null;
	let chrt5=null;
	let chrt6=null;
	let chrt7=null;
	let chrt8=null;
	var ytdQA=[];
	var ytdStella=[];
	var ytdSA=[];
	var ytdAht=[];
	var ytdOcr=[];
	var ytdCms=[];
	var ytdSkillport=[];
	var ytdVoc=[];
	var ytdIcw=[];
	var totalCredits;
	var totalCreditTarget;
	var totalQA;
	var totalStella;
	var totalSA;
	var totalAht;
	var totalCms;
	var ctx;
	var ctx1;
	var ctx2;
	var ctx3;
	var ctx4;
	var ctx5;
	var ctx6;
	var ctx7;
	var ctx8;
	var targetCollection=[];
	var ytdCollection=[];
	var outOf=[];
	var globalRank=[];
	var selectedUser;
	var sumOfRanks=0;
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	Chart.defaults.color = '#000';
	var options = { 
            plugins: { 
                title: { 
                    display: true, 
                    text: '' 
                }, 
            }, 
            scales: { 
                x: { 
                    stacked: true, 
                    maxBarThickness: 2,
                    ticks: { color: "red"},
                }, 
                y: { 
                    stacked: true,
                    maxBarThickness: 2,
                    ticks: { color: "red", beginAtZero: true },
                } 
            } 
        } ;
	$('html,body').css('cursor','wait');
	$( function() {
	    $( "#dialog" ).dialog({ 'autoOpen': false,buttons: {  
            OK: function() {$(this).dialog("close");
            //debugger;
            console.log($('#dialogText').text());
            if(errorType ==1)
            	window.location = "http://awswauto01d:8080/ScorecardDashboard/";
            }  
        },  
        title: "Scorecard",
        position: {  
           my: "center center",  
           at: "center center"  
        }   });
	  } );
	
	var month = (new Date()).getMonth();
	for (i=0,j=1; i<=month; i++,j++) {
		  $('#cboMonth').append('<option  value = ' + j + '> '+ monthNames[i] + '</option>');
		}
	var num = $('#mnth option').length;
	$('#mnth').prop('selectedIndex', num-1);
	$('#mainDiv').hide();
	$('#divcharts').hide();
	$('#lblBifor').hide();
	$('#cboBifor').hide();
	$('#divYtdcharts').hide();
	totalCredits=0;
	totalQA=0;
	totalStella=0;
	totalSA=0;
	totalCreditTarget=0;
	totalAht=0;
	totalCms=0;
	$('html,body').css('cursor','wait');
	$.get("http://awswauto01d:8080/ScorecardDashboard/api/scorecard/", function(data, status){
		console.log(status);
		console.log(data);	
		debugger;
		/*assesorEmail=data["EmailId"];
			$('#assessor').val(data["Name"]);
			$('#dept').val(data["Department"]);
			$('#location').val(data["Location"]);*/
				//var dataMarkers = { "Month": null,"FusionId":"197043"};
			if(data.FusionId == '103009' || data.FusionId == '109944' || data.FusionId == '104086' || data.FusionId == '195760'){
				var dataMarkers = { "Month": null,"FusionId":null};
				urlStr = urlStr + "scorecard/getRevAgentScoreCard/tl";
			}
			else if(data.Department == 'Reverse CS')
			{
				if(data.Designation=='Agent'){
					window.location = "http://awswauto01d:8080/ScorecardDashboard/ReverseCSAgent.jsp";
				}
				else if(data.Designation=='Team Lead'){
					//$('#amScorecard').hide();
					var dataMarkers = { "Month": null,"FusionId":data.FusionId};
				}
				else
					var dataMarkers = { "Month": null,"FusionId":null};
				urlStr = urlStr + "scorecard/getRevAgentScoreCard/tl";
			}				
				else
					{ 
					debugger;
						window.location = "http://awswauto01d:8080/ScorecardDashboard/CSScoreAgentCard.jsp";
					}
					$.ajax({
					    type: "POST",
					    url: urlStr,
					    // The key needs to match your method's input parameter (case-sensitive).
					    data: JSON.stringify(dataMarkers),
					    contentType: "application/json",
					    //dataType: "json",
					    success: function(dta){
					    	debugger;
					    	curUserId=dta[0]['empId'];
					    	$('#heading').text("Reverses CS Scorecard for " + dta[0]['name']);
					    	updateTopTen(dta);
					    	populateCRAgentPeers();
					    	console.log(dta);
					    	selectedUser=dta[0]['empId']
					    	renderTeamData(new Date().getFullYear()+"-01-01",dta[0]['empId']);
					    	},
					    error: function(errMsg) {
					    	debugger;
					    	$('#dialogText').text(errMsg.responseJSON['Message'])
				        	$('#dialog').dialog("open");
					    	//alert(errMsg);
					    	$('html,body').css('cursor','default');
					    }
			    	});
					
			})
			.fail(function(xhr, status, error) {
				debugger;
				//alert(xhr.responseText);
				$('#dialogText').text(xhr.responseJSON['Message']);
		    	$('#dialog').dialog("open");
				$('html,body').css('cursor','default');
		  //});	
	});
	
	
	function  updateTopTen(x)
	{
		var dataMarkers = {"FusionId":null};
		$.ajax({
		    type: "POST",
		    url: "http://awswauto01d:8080/ScorecardDashboard/api/scorecard/getRevAgentScoreCard/tl/ytd",
		    // The key needs to match your method's input parameter (case-sensitive).
		    data: JSON.stringify(dataMarkers),
		    contentType: "application/json",
		    //dataType: "json",
		    success: function(dta){
		    	debugger;
		    	var array=[];
		    	array=dta;
		    	debugger;
		    	array.sort(function(a, b) {
		    	    return parseInt(a.globalRank) - parseInt(b.globalRank);
		    	});
		    	ytdAllAgents=dta;
		    	var str="Our Top Ten Performers : ";
		    	$('html,body').css('cursor','wait');
		    	for (var i = 0, len = array.length; i < array.length; i++) {
		    		if(array[i].globalRank <=10)
		    			{
		    				str=str + "  " + array[i].globalRank + ". " +  array[i].name.toUpperCase() + " - " + array[i].dept + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
		    			}
		    			
				}
		    	$("#topTen").text(str);
		    	renderCR(x);
		    	$('html,body').css('cursor','default');
		    	},
		    error: function(errMsg) {
		    	$('#dialogText').text(errMsg.responseJSON['Message'])
	        	$('#dialog').dialog("open");
		    	//alert(errMsg);
		    	$('html,body').css('cursor','default');
		    }
    	});
	}
	
	function renderTeamData(mnth,fusionId){
		var dataMarkers = { "Month": mnth,"FusionId":fusionId};
		debugger;
		$.ajax({
		    type: "POST",
		    url: "http://awswauto01d:8080/ScorecardDashboard/api/scorecard/getRevAgentScoreCard/tl/agents",
		    // The key needs to match your method's input parameter (case-sensitive).
		    data: JSON.stringify(dataMarkers),
		    contentType: "application/json",
		    //dataType: "json",
		    success: function(dta){
		    	debugger;
		    	$("#teamData tr").remove();
				for (var i = 0, len = dta.length; i < len; i++) {
					var row = "<tr>";
			        row += "<td>" + dta[i]['Month'] + "</td>";
			        row += "<td>" + dta[i]['EmpId'] + "</td>"
			        row += "<td>" + dta[i]['Name'] + "</td>";
			        row += "<td>" + dta[i]['Tl'] + "</td>";
			      //  row += "<td>" + dta[i]['Location'] + "</td>";
			        row += "<td>" + dta[i]['Dept'] + "</td>";
			        row += "<td>" + dta[i]['GlobalRank'] + " of " + dta[i]['OutOf']  +  "</td>";
			        row += "<td>" + dta[i]['SA'].toFixed(3) + "</td>";
			       // row += "<td>" + dta[i]['CreditRank'] + "</td>";
			       // row += "<td>" + dta[i]['CreditScore'] + "</td>";
			        row += "<td>" + dta[i]['SATarget'].toFixed(3) + "</td>";
			        row += "<td>" + dta[i]['AHT'] + "</td>";
			      //  row += "<td>" + dta[i]['QARank'] + "</td>";
			      //  row += "<td>" + dta[i]['QA_Score'] + "</td>";
			        row += "<td>" + dta[i]['AHTTarget'] + "</td>";
			        row += "<td>" + dta[i]['OCR'] + "</td>";
			      //  row += "<td>" + dta[i]['StellaRank'] + "</td>";
			        //row += "<td>" + dta[i]['StellaScore'] + "</td>";
			        row += "<td>" + dta[i]['OCRTarget'] + "</td>";
			        row += "<td>" + dta[i]['QA'] + "</td>";
			       // row += "<td>" + dta[i]['SARank'] + "</td>";
			        //row += "<td>" + dta[i]['SAScore'] + "</td>";
			        row += "<td>" + dta[i]['QATarget'] + "</td>";
			        row += "<td>" + dta[i]['Stella'] + "</td>";
			       // row += "<td>" + dta[i]['AHTRAnk'] + "</td>";
			       // row += "<td>" + dta[i]['AHTScore'] + "</td>";
			        row += "<td>" + dta[i]['StellaTarget'] + "</td>";
			        row += "<td>" + dta[i]['Skillport'] + "</td>";
			        row += "<td>" + dta[i]['SkillportTarget'] + "</td>";
			        row += "<td>" + dta[i]['VOC'] + "</td>";
			        row += "<td>" + dta[i]['VOCTarget'] + "</td>";
			        row += "<td>" + dta[i]['CMS'] + "</td>";
			        row += "<td>" + dta[i]['CMSTarget'] + "</td>";
			        row += "<td>" + dta[i]['ICW'] + "</td>";
			        row += "<td>" + dta[i]['ICWTarget'] + "</td>";
			        row += "</tr>";
			        $('#teamData').append(row);
				}
		    	$('html,body').css('cursor','default');
		    	},
		    error: function(errMsg) {
		    	$('#dialogText').text(errMsg.responseJSON['Message'])
	        	$('#dialog').dialog("open");
		    	//alert(errMsg);
		    	$('html,body').css('cursor','default');
		    }
    	});
	}
	
	function fetchYtdGlobalrank(empId)
	{
		var glblRnk=0;
		debugger;
		for (var i = 0; i < ytdAllAgents.length; i++)
		{ 
			if(ytdAllAgents[i]['empId']==empId){
				glblRnk=ytdAllAgents[i]['globalRank'];
				break;
			}
		}
		return glblRnk;
	}
	
	function fetchYtdCredits(empId)
	{
		debugger;
		for (var i = 0; i < ytdAllAgents.length; i++)
		{ 
			if(ytdAllAgents[i]['empId']==empId){
				debugger;
				ytdSA.push(ytdAllAgents[i]['sa']);
		    	if(ytdSA<85) //Tier5
		        	bgYColor.push('red');
		        else if(ytdSA>=85 && ytdSA<87.5) //Tier4
		        	bgYColor.push('#EF6C00');
		        else if(ytdSA>=87.5 && ytdSA<90)  //Tier3
		        	bgYColor.push('green');
		        else 
		        	bgYColor.push('#74c474');//Tier 2
		    	
				ytdAht.push(ytdAllAgents[i]['aht']);
				if(ytdAht>610) //Tier5
		        	bgYColor1.push('red');
		        else if(ytdAht<=610 && ytdAht>595) //Tier4
		        	bgYColor1.push('#EF6C00');
		        else if(ytdAht<=595 && ytdAht>550)  //Tier3
		        	bgYColor1.push('green');
		        else 
		        	bgYColor1.push('#74c474');//Tier 2
				
				ytdOcr.push(ytdAllAgents[i]['ocr']);
				if(ytdOcr<80) //Tier5
		        	bgYColor2.push('red');
		        else if(ytdOcr>=80 && ytdOcr<85 ) //Tier4
		        	bgYColor2.push('#EF6C00');
		        else if(ytdOcr>=85 && ytdOcr<93 ) //Tier3
		        	bgYColor2.push('green');
		        else if(ytdOcr>=93 ) //Tier2
		        	bgYColor2.push('#74c474');
				
				ytdQA.push(ytdAllAgents[i]['qScore']);
				if(ytdQA<94) //Tier5
		        	bgYColor3.push('red');
		        else if(ytdQA>=94 && ytdQA<95 ) //Tier4
		        	bgYColor3.push('#EF6C00');
		        else if(ytdQA>=95 && ytdQA<97 ) //Tier3
		        	bgYColor3.push('green');
		        else
		        	bgYColor3.push('#74c474');
				
				ytdStella.push(ytdAllAgents[i]['stella']);
				if(ytdStella<4.25)  //Tier5
		        	bgYColor4.push('red');
		        else if((ytdStella>=4.25) && (ytdStella<4.30)) //Tier4
		        	bgYColor4.push('#EF6C00');
		        else if((ytdStella>=4.30) && (ytdStella<4.35)) //Tier3
		        		bgYColor4.push('green');
		        else
		        	bgYColor4.push('#74c474'); //Tier2
				
				ytdSkillport.push(ytdAllAgents[i]['skillport']);
				if(ytdSkillport >1.5) //Tier5
		        	bgYColor5.push('red');
		        else if(ytdSkillport <=1.5 && ytdSkillport >1.00) //Tier4
		        	bgYColor5.push('#EF6C00');
		        else if(ytdSkillport <=1.0 && ytdSkillport >0.5) //Tier3
		        	bgYColor5.push('green');
		        else
		        	bgYColor5.push('#74c474');
				
				ytdVoc.push(ytdAllAgents[i]['voc']);
				if(ytdVoc <87) //Tier5
		        	bgYColor6.push('red');
		        else if(ytdVoc >=87 && ytdVoc <90) //Tier4
		        	bgYColor6.push('#EF6C00');
		        else if(ytdVoc >=90 && ytdVoc <95) //Tier3
		        	bgYColor6.push('green');
		        else
		        	bgYColor6.push('#74c474');
				
				ytdCms.push(ytdAllAgents[i]['cmsDefectPer']);
				if(ytdCms <50) //Tier5
		        	bgYColor7.push('red');
		        else if(ytdCms >=50 && ytdCms <75) //Tier4
		        	bgYColor7.push('#EF6C00');
		        else if(ytdCms >=75 && ytdCms <100) //Tier3
		        	bgYColor7.push('green');
		        else
		        	bgYColor7.push('#74c474');
				
				ytdIcw.push(ytdAllAgents[i]['icw']);
				if(ytdIcw <94) //Tier5
		        	bgYColor8.push('red');
		        else if(ytdIcw >=94 && ytdIcw <95) //Tier4
		        	bgYColor8.push('#EF6C00');
		        else if(ytdIcw >=95 && ytdIcw <97) //Tier3
		        	bgYColor8.push('green');
		        else
		        	bgYColor8.push('#74c474');
				
				break;
			}
		}
		
	}
	
	function fetchTier(empId)
	{
		debugger;
		var tier=0;
		for (var i = 0; i < ytdAllAgents.length; i++)
		{ 
			if(ytdAllAgents[i]['empId']==empId){
				tier=ytdAllAgents[i]['tier'];
				break;
			}
		}
		return tier;
	}
	
	
	$("#cboMonth").change(function(){
		//alert($("#cboMonth").val());
		var dt=new Date();
		var period=dt.getFullYear() + '-' + $("#cboMonth").val() + "-1"
		renderTeamData(period,selectedUser);
	});
	
	$("#cboPeers").change(function(){
		$('html,body').css('cursor','wait');
		var dataMarkers = { "Month": null,"FusionId":$('#cboPeers').val()};
		$.ajax({
		    type: "POST",
		    url: urlStr,
		    // The key needs to match your method's input parameter (case-sensitive).
		    data: JSON.stringify(dataMarkers),
		    contentType: "application/json",
		    //dataType: "json",
		    success: function(dta){
		    	debugger;
		    	console.log(dta);
		    	var dt=new Date();
		    	$("#cboPeers").val("1");
				var period=dt.getFullYear() + "-01-01"
		    	selectedUser=dta[0]['empId'];
		    	renderTeamData(period,dta[0]['empId']);
		    	$('#heading').text("CR Scorecard for " + dta[0]['name']);
		    	var ti=fetchTier(dta[0]['empid']);
		    	if(ti == 1)
		        	$('#logo').attr("src","Gold.png");
		    	else if(ti ==2)
		    		$('#logo').attr("src","Silver.png");
		    	else
		    		$('#logo').attr("src","Bronze.png");
		    	$('#cboView').val('Graphs');
		    	$('#cboBifor').val('Monthly');
		    	while(months.length > 0) {
		    		months.pop();
				}
		    	while(creditscore.length > 0) {
		    		creditscore.pop();
				}
		    	while(creditTarget.length > 0) {
		    		creditTarget.pop();
				}
		    	while(bgColor.length > 0) {
		    		bgColor.pop();
				}
		    	while(bgYColor.length > 0) {
		    		bgYColor.pop();
				}
		    	while(qualityscore.length > 0) {
		    		qualityscore.pop();
				}
		    	while(qualityTarget.length > 0) {
		    		qualityTarget.pop();
				}
		    	while(bgColor1.length > 0) {
		    		bgColor1.pop();
				}
		    	while(bgYColor1.length > 0) {
		    		bgYColor1.pop();
				}
		    	while(stellascore.length > 0) {
		    		stellascore.pop();
				}
		    	while(stellaTarget.length > 0) {
		    		stellaTarget.pop();
				}
		    	while(bgColor2.length > 0) {
		    		bgColor2.pop();
				}
		    	
		    	while(bgYColor2.length > 0) {
		    		bgYColor2.pop();
				}
		    	
		    	while(sascore.length > 0) {
		    		sascore.pop();
				}
		    	
		    	while(saTarget.length > 0) {
		    		saTarget.pop();
				}
		    	
		    	while(bgColor3.length > 0) {
		    		bgColor3.pop();
				}
		    	
		    	while(ahtscore.length > 0) {
		    		ahtscore.pop();
				}
		    	
		    	while(ahtTarget.length > 0) {
		    		ahtTarget.pop();
				}
		    	
		    	while(bgColor4.length > 0) {
		    		bgColor4.pop();
				}
		    	
		    	while(cmsscore.length > 0) {
		    		cmsscore.pop();
				}
		    	
		    	while(cmsTarget.length > 0) {
		    		cmsTarget.pop();
				}
		    	
		    	while(bgColor5.length > 0) {
		    		bgColor5.pop();
				}
		    	
		    	
		    	
		    	while(ytdCollection.length > 0) {
		    		ytdCollection.pop();
				}
		    	
		    	while(creditYtdTarget.length > 0) {
		    		creditYtdTarget.pop();
				}
		    	
		    	while(targetCollection.length > 0) {
		    		targetCollection.pop();
				}
	        	
		    	while(ytdQA.length > 0) {
		    		ytdQA.pop();
				}
		    	
		    	while(ytdCollection.length > 0) {
		    		ytdCollection.pop();
				}
		    	
		    	while(qualityYtdTarget.length > 0) {
		    		qualityYtdTarget.pop();
				}
		    	
		    	while(targetCollection.length > 0) {
		    		targetCollection.pop();
				}
		    	
		    	while(ytdStella.length > 0) {
		    		ytdStella.pop();
				}
		    	
		    	while(ytdCollection.length > 0) {
		    		ytdCollection.pop();
				}
		    	
		    	while(stellaYtdTarget.length > 0) {
		    		stellaYtdTarget.pop();
				}
	
		    	while(stellaYtdTarget.length > 0) {
		    		stellaYtdTarget.pop();
				}
		    	
				while(targetCollection.length > 0) {
		    		targetCollection.pop();
				}
		    	
				while(ytdSA.length > 0) {
					ytdSA.pop();
				}
				
				while(ytdCollection.length > 0) {
					ytdCollection.pop();
				}
				
				while(saYtdTarget.length > 0) {
					saYtdTarget.pop();
				}
	        	
				while(targetCollection.length > 0) {
					targetCollection.pop();
				}
				
				while(ytdAht.length > 0) {
					ytdAht.pop();
				}
				
				while(ytdCollection.length > 0) {
					ytdCollection.pop();
				}
				
				while(ahtYtdTarget.length > 0) {
					ahtYtdTarget.pop();
				}
				
				while(targetCollection.length > 0) {
					targetCollection.pop();
				}
	        	
				while(ytdCms.length > 0) {
					ytdCms.pop();
				}
				
				while(ytdCollection.length > 0) {
					ytdCollection.pop();
				}
				
				while(cmsYtdTarget.length > 0) {
					cmsYtdTarget.pop();
				}
				
				while(ytdVoc.length>0){
					ytdVoc.pop();
				}
				while(targetCollection.length > 0) {
					targetCollection.pop();
				}
				
				while(globalRank.length > 0) {
					globalRank.pop();
				}
	        	
				while(outOf.length > 0) {
					outOf.pop();
				}
				
				while(ytdSkillport.length>0){
					ytdSkillport.pop();
				}
				
				while(ytdIcw.length>0){
					ytdIcw.pop();
				}
	        	
		    	//populateCRAgentPeers();
		    	console.log(dta);
		    	if (chrt) {
		    	    chrt.destroy();
		    	}
		    	if (chrt1) {
		    	    chrt1.destroy();
		    	}
		    	if (chrt2) {
		    	    chrt2.destroy();
		    	}
		    	if (chrt3) {
		    	    chrt3.destroy();
		    	}
		    	if (chrt4) {
		    	    chrt4.destroy();
		    	}
		    	if (chrt5) {
		    	    chrt5.destroy();
		    	}
		    	if (chrt6) {
		    	    chrt6.destroy();
		    	}
		    	
		    	if(chrt7){
		    		chrt7.destroy();
		    	}
		    	
		    	if(chrt8){
		    		chrt8.destroy();
		    	}
		    	renderCR(dta);
		    	$('html,body').css('cursor','default');
		    	},
		    error: function(errMsg) {
		    	$('#dialogText').text(errMsg.responseJSON['Message'])
	        	$('#dialog').dialog("open");
		    	//alert(errMsg);
		    	$('html,body').css('cursor','default');
		    }
    	});
	});
	
	function populateCRAgentPeers(){
		var dataMarkers = { "FusionId":null};
		$.ajax({
		    type: "POST",
		    url: "http://awswauto01d:8080/ScorecardDashboard/api/scorecard/getRevAgentScoreCard/tl/ytd",
		    // The key needs to match your method's input parameter (case-sensitive).
		    data: JSON.stringify(dataMarkers),
		    contentType: "application/json",
		    //dataType: "json",
		    success: function(dta){
		    	$('html,body').css('cursor','wait');
		    	//$("#cboPeers").empty();
		    	for (var i = 0, len = dta.length; i < len; i++) {
					$("#cboPeers").append('<option value="' + dta[i]['empId'] + '">' + dta[i]['name'] + '</option>');
				}
		    	
		    	var ti=fetchTier(curUserId);
		    	debugger;
		    	if(ti == 1 || ti ==0){
		        	$('#logo').attr("src","Gold.png");
		    	}
		    	else if(ti ==2)
		    		$('#logo').attr("src","Silver.png");
		    	else
		    		$('#logo').attr("src","Bronze.png");
		    	$('html,body').css('cursor','default');
		    	if(ti==0)
		    		$("#cboPeers").val($("#cboPeers option:first").val());
		    	else
		    		$("#cboPeers").val(curUserId);
		    	},
		    error: function(errMsg) {
		    	$('#dialogText').text(errMsg.responseJSON['Message'])
	        	$('#dialog').dialog("open");
		    	//alert(errMsg);
		    	$('html,body').css('cursor','default');
		    }
    	});
	}
	
	function renderCR(dta)
	{
		debugger;
		$('html,body').css('cursor','wait');
		$("#data tr").remove();
		$("#data1 tr").remove();
    	for (var i = 0, len = dta.length; i < len; i++) {
    		
    		var row = "<tr>";
	        row += "<td>" + dta[i]['month'] + "</td>";
	        months.push(dta[i]['month']);
	       // row += "<td>" + dta[i]['UcId'] + "</td>";
	        row += "<td>" + dta[i]['empId'] + "</td>"
	        row += "<td>" + dta[i]['name'] + "</td>";
	        row += "<td>" + dta[i]['tl'] + "</td>";
	      //  row += "<td>" + dta[i]['Location'] + "</td>";
	        row += "<td>" + dta[i]['dept'] + "</td>";
	        row += "<td>" + dta[i]['globalRank'] + " of " + dta[i]['outOf']  +  "</td>";
	        sumOfRanks = sumOfRanks + (dta[i]['globalRank'] / dta[i]['outOf']);
	        row += "<td>" + dta[i]['sa'].toFixed(3) + "</td>";
	       // row += "<td>" + dta[i]['CreditRank'] + "</td>";
	       // row += "<td>" + dta[i]['CreditScore'] + "</td>";
	        sascore.push(dta[i]['sa'].toFixed(3));
	        //totalCredits=totalCredits+dta[i]['SA'];
	        //totalCreditTarget=totalCreditTarget+dta[i]['CreditsTarget'];
	        //totalCreditTarget=dta[i]['SATarget'];
	        
	        row += "<td>" + dta[i]['saTarget'].toFixed(3) + "</td>";
	        saTarget.push(dta[i]['saTarget'].toFixed(3));
	        /*if(dta[i]['SATarget']>dta[i]['SA'])
	        	bgColor.push('red');
	        else
	        	bgColor.push('green');
	        if(dta[i]['SATarget']>(totalCredits/(i+1)).toFixed(3))
	        	bgYColor.push('red');
	        else
	        	bgYColor.push('#9FFF33');*/
	        
	        if(dta[i]['sa']<85) //Tier5
	        	bgColor.push('red');
	        else if(dta[i]['sa']>=85 && dta[i]['sa']<87.5) //Tier4
	        	bgColor.push('#EF6C00');
	        else if(dta[i]['sa']>=87.5 && dta[i]['sa']<90)  //Tier3
	        	bgColor.push('green');
	        else 
	        	bgColor.push('#74c474');//Tier 2
	        
	        row += "<td>" + dta[i]['aht'] + "</td>";
	      //  row += "<td>" + dta[i]['QARank'] + "</td>";
	      //  row += "<td>" + dta[i]['QA_Score'] + "</td>";
	        ahtscore.push(dta[i]['aht']);
	        //totalQA=totalQA+dta[i]['AHT'];
	       // row += "<td>" + (totalQA/(i+1)).toFixed(3) + "</td>"
	        row += "<td>" + dta[i]['ahtTarget'] + "</td>";
	        ahtTarget.push(dta[i]['ahtTarget']);
	        if(dta[i]['aht']>610) //Tier5
	        	bgColor1.push('red');
	        else if(dta[i]['aht']<=610 && dta[i]['aht']>595) //Tier4
	        	bgColor1.push('#EF6C00');
	        else if(dta[i]['aht']<=595 && dta[i]['aht']>550)  //Tier3
	        	bgColor1.push('green');
	        else 
	        	bgColor1.push('#74c474');//Tier 2
	        
	        						        
	        if(dta[i]['ahtTarget']>(totalQA/(i+1)).toFixed(3))
	        	bgYColor1.push('red');
	        else
	        	bgYColor1.push('#9FFF33');
	        row += "<td>" + dta[i]['ocr'] + "</td>";
	      //  row += "<td>" + dta[i]['StellaRank'] + "</td>";
	        //row += "<td>" + dta[i]['StellaScore'] + "</td>";
	        ocrscore.push(dta[i]['ocr']);
	        //totalStella=totalStella+dta[i]['OCR'];
	        //row += "<td>" + (totalStella/(i+1)).toFixed(3) + "</td>"
	        row += "<td>" + dta[i]['ocrTarget'] + "</td>";
	        ocrTarget.push(dta[i]['ocrTarget']);
	        if(dta[i]['ocr']<80) //Tier5
	        	bgColor2.push('red');
	        else if(dta[i]['ocr']>=80 && dta[i]['ocr']<85 ) //Tier4
	        	bgColor2.push('#EF6C00');
	        else if(dta[i]['ocr']>=85 && dta[i]['ocr']<93 ) //Tier3
	        	bgColor2.push('green');
	        else if(dta[i]['ocr']>=93 ) //Tier2
	        	bgColor2.push('#74c474');
	        row += "<td>" + dta[i]['qScore'] + "</td>";
	        qualityscore.push(dta[i]['qScore']);
	        row += "<td>" + dta[i]['qaTarget'] + "</td>";
	        qualityTarget.push(dta[i]['qaTarget']);
	        if(dta[i]['qScore']<94) //Tier5
	        	bgColor3.push('red');
	        else if(dta[i]['qScore']>=94 && dta[i]['qScore']<95 ) //Tier4
	        	bgColor3.push('#EF6C00');
	        else if(dta[i]['qScore']>=95 && dta[i]['qScore']<97 ) //Tier3
	        	bgColor3.push('green');
	        else
	        	bgColor3.push('#74c474');
	        
	        row += "<td>" + dta[i]['stella'] + "</td>";
	        stellascore.push(dta[i]['stella']);
	        row += "<td>" + dta[i]['stellaTarget'] + "</td>";
	        stellaTarget.push(dta[i]['stellaTarget']);
	        if(dta[i]['stella']<4.25)  //Tier5
	        	bgColor4.push('red');
	        else if((dta[i]['stella']>=4.25) && (dta[i]['stella']<4.30)) //Tier4
	        	bgColor4.push('#EF6C00');
	        else if((dta[i]['stella']>=4.30) && (dta[i]['stella']<4.35)) //Tier3
	        		bgColor4.push('green');
	        else
	        	bgColor4.push('#74c474'); //Tier2
				
				
	        row += "<td>" + dta[i]['skillport'] + "</td>";
	        skillportscore.push(dta[i]['skillport']);
	        row += "<td>" + dta[i]['skillportTarget'] + "</td>";
	        skillportTarget.push(dta[i]['skillportTarget']);
	        if(dta[i]['skillport'] <75) //Tier5
	        	bgColor5.push('red');
	        else if(dta[i]['skillport'] >=75 && dta[i]['skillport'] <99.99) //Tier4
	        	bgColor5.push('#EF6C00');
	        else
	        	bgColor5.push('#74c474');
	        
	        row += "<td>" + dta[i]['voc'] + "</td>";
		        vocscore.push(dta[i]['voc']);
		        row += "<td>" + dta[i]['vocTarget'] + "</td>";
		        vocTarget.push(dta[i]['vocTarget']);
		        if(dta[i]['voc'] <87) //Tier5
		        	bgColor6.push('red');
		        else if(dta[i]['voc'] >=87 && dta[i]['voc'] <90) //Tier4
		        	bgColor6.push('#EF6C00');
		        else if(dta[i]['voc'] >=90 && dta[i]['voc'] <95) //Tier3
		        	bgColor6.push('green');
		        else
		        	bgColor6.push('#74c474');
		        
		        row += "<td>" + dta[i]['cmsDefectPer'] + "</td>";
			        cmsscore.push(dta[i]['cmsDefectPer']);
			        row += "<td>" + dta[i]['cmsTarget'] + "</td>";
			        cmsTarget.push(dta[i]['cmsTarget']);
			        if(dta[i]['cmsDefectPer'] <50) //Tier5
			        	bgColor7.push('red');
			        else if(dta[i]['cmsDefectPer'] >=50 && dta[i]['cmsDefectPer'] <75) //Tier4
			        	bgColor7.push('#EF6C00');
			        else if(dta[i]['cmsDefectPer'] >=75 && dta[i]['cmsDefectPer'] <100) //Tier3
			        	bgColor7.push('green');
			        else
			        	bgColor7.push('#74c474');
			        
			        row += "<td>" + dta[i]['icw'] + "</td>";
				        icwscore.push(dta[i]['icw']);
				        row += "<td>" + dta[i]['icwTarget'] + "</td>";
				        icwTarget.push(dta[i]['icwTarget']);
				        if(dta[i]['icw'] <94) //Tier5
				        	bgColor8.push('red');
				        else if(dta[i]['icw'] >=94 && dta[i]['icw'] <95) //Tier4
				        	bgColor8.push('#EF6C00');
				        else if(dta[i]['icw'] >=95 && dta[i]['icw'] <97) //Tier3
				        	bgColor8.push('green');
				        else
				        	bgColor8.push('#74c474');
		        
	       // row += "<td>" + dta[i]['OutOf'] + "</td>";
	        row += "</tr>";
	        
	        if(i==len-1){
	        	debugger;
	        	fetchYtdCredits(dta[i]['empId']);
	        	var row1 = "<tr>";
	        	ytdCollection.push((totalCredits/(i+1)).toFixed(3));
	        	targetCollection.push((totalCreditTarget/(i+1)).toFixed(3));
	        	row1 += "<td>" + dta[i]['empId'] + "</td>"
	        	row1 += "<td>" + dta[i]['name'] + "</td>";
	        	row1 += "<td>" + dta[i]['tl'] + "</td>";
	        	row1 += "<td>" + dta[i]['dept'] + "</td>";
	        	row1 += "<td>" +  fetchYtdGlobalrank(dta[i]['empId']) + "</td>";
	        	//$('#headingGR').text("Global Rank " + dta[i]['YTDGlobalRank'])
	        	$('#headingGR').text("Global Rank " + fetchYtdGlobalrank(dta[i]['empId']));
		        ytdCollection.push((totalQA/(i+1)).toFixed(3));
		        row1 += "<td>" + ytdSA[0] + "</td>";
		        saYtdTarget.push(dta[i]['saTarget'].toFixed(3))
	        	targetCollection.push(dta[i]['saTarget'].toFixed(3));
	        	//ytdStella.push((totalStella/(i+1)).toFixed(3));
	        	ytdCollection.push((ytdAht/(i+1)).toFixed(3));
	        	row1 += "<td>" + ytdAht[0] + "</td>";
	        	ahtYtdTarget.push(dta[i]['ahtTarget'].toFixed(3));
	        	targetCollection.push(dta[i]['ahtTarget'].toFixed(3));
	        	//ytdSA.push((totalSA/(i+1)).toFixed(3));
	        	ytdCollection.push((totalSA/(i+1)).toFixed(3));
	        	row1 += "<td>" + ytdOcr[0] + "</td>";
	        	ocrYtdTarget.push(dta[i]['ocrTarget']);
	        	targetCollection.push(dta[i]['ocrTarget'])
	        	//ytdAht.push((totalAht/(i+1)).toFixed(3));
	        	ytdCollection.push((totalAht/(i+1)).toFixed(3));
	        	row1 += "<td>" + ytdQA[0] + "</td>";
	        	qualityYtdTarget.push(dta[i]['q_target']);
	        	targetCollection.push(dta[i]['q_target']);
	        	//ytdCms.push((totalCms/(i+1)).toFixed(3));
	        	ytdCollection.push((totalCms/(i+1)).toFixed(3));
	        	row1 += "<td>" + ytdStella[0] + "</td>";
	        	stellaYtdTarget.push(dta[i]['stellaTarget']);
	        	targetCollection.push(dta[i]['stellaTarget']);
	        	row1 += "<td>" + ytdSkillport[0] + "</td>";
	        	skillportYtdTarget.push(dta[i]['skillportTarget']);
	        	targetCollection.push(dta[i]['skillportTarget']);
	        	row1 += "<td>" + ytdVoc[0] + "</td>";
	        	vocYtdTarget.push(dta[i]['vocTarget']);
	        	row1 += "<td>" + ytdCms[0] + "</td>";
	        	cmsYtdTarget.push(dta[i]['cmsTarget']);
	        	row1 += "<td>" + ytdIcw[0] + "</td>";
	        	icwYtdTarget.push(dta[0]['icwTarget']);
	        	row1 += "</tr>";
	        	globalRank.push(dta[i]['globalRank']);
	        	outOf.push(dta[i]['outOf']);
	        }
	        
	        $('#data').append(row);
	        $('#data1').append(row1);
	        $('html,body').css('cursor','default');
    	  }
    	
    	ctx=$('#myChart')[0].getContext("2d");
    	Chart.defaults.set("plugins.datalabels", {
    	      color: "#000",
    	    });
    	Chart.register(ChartDataLabels);
    	chrt=new Chart(ctx, {
    	    type: 'bar',
    	    plugins: [ChartDataLabels],
    	    data: {
    	      labels: months,
    	      datasets: [{ 
                    label: 'Target', 
                    data: saTarget, 
                   // type: 'line', 
                    backgroundColor: '#2E86C1',
                    //barPercentage: 0.2,
                   // categoryPercentage: 1.0
                },
                {
	    	        label: 'Adherence',
	    	        type: 'bar',
	    	        data: sascore,
	    	        borderWidth: 0,
	    	        borderColor: 'black',
	    	        backgroundColor: bgColor,
                	//barPercentage: 0.2,
                	//categoryPercentage: 1.0
                	},
                ]
    	    },
    	    options: options
    	  });
    	
    	 ctx1=$('#myChart1')[0].getContext("2d");
    	/*Chart.defaults.set("plugins.datalabels", {
    	      color: "#FE777B",
    	    });
    	Chart.register(ChartDataLabels);*/
    	chrt1=new Chart(ctx1, {
    	    type: 'bar',
    	    plugins: [ChartDataLabels],
    	    data: {
    	      labels: months,
    	      datasets: [
    	    	  { 
    	    		  label: 'Target', 
	                    data: ahtTarget, 
	                   // type: 'line', 
	                    backgroundColor: '#2E86C1',
	                    //barPercentage: 0.2,
	                   // categoryPercentage: 1.0
	                    font: {
			                color: 'black',
			                weight:'bold'
			              }
	                },
    	    	  {
    	        label: 'AHT',
    	        data: ahtscore,
    	        borderWidth: 0,
    	        borderColor: "black",
    	        backgroundColor: bgColor1,
    	       // barPercentage: 0.2
    	      }
                ]
    	    },
    	    options: options
    	  });
    	ctx2=$('#myChart2')[0].getContext("2d");
    	chrt2=new Chart(ctx2, {
    	    type: 'bar',
    	    plugins: [ChartDataLabels],
    	    data: {
    	      labels: months,
    	      datasets: [
    	    	  { 
    	    		  label: 'Target', 
	                    data: ocrTarget, 
	                    //type: 'line', 
	                    backgroundColor: '#2E86C1',
	                    //barPercentage: 0.2,
	                   // categoryPercentage: 1.0
	                    font: {
			                color: 'black',
			                weight:'bold'
			              }
	                },
    	    	  {
    	        label: 'OCR',
    	        data: ocrscore,
    	        borderWidth: 0,
    	        borderColor: "black",
    	        backgroundColor: bgColor2,
    	       // barPercentage: 0.2
    	      }
                ]
    	    },
    	    options: options
    	  });
    	
    	 ctx3=$('#myChart3')[0].getContext("2d");
    	chrt3=new Chart(ctx3, {
    	    type: 'bar',
    	    plugins: [ChartDataLabels],
    	    data: {
    	      labels: months,
    	      datasets: [
    	    	  { 
    	    		  label: 'Target', 
	                    data: qualityTarget, 
	                    //type: 'line', 
	                    backgroundColor: '#2E86C1',
	                    //barPercentage: 0.2,
	                   // categoryPercentage: 1.0
	                    font: {
			                color: 'black',
			                weight:'bold'
			              }
	                },
    	    	  {
    	        label: 'Quality',
    	        data: qualityscore,
    	        borderWidth: 0,
    	        borderColor: "black",
    	        backgroundColor: bgColor3,
    	       // barPercentage: 0.2
    	      }
                ]
    	    },
    	    options: options
    	  });
    	
    	 ctx4=$('#myChart4')[0].getContext("2d");
    	/*Chart.defaults.set("plugins.datalabels", {
    	      color: "#FE777B",
    	    });
    	Chart.register(ChartDataLabels);*/
    	chrt4=new Chart(ctx4, {
    	    type: 'bar',
    	    plugins: [ChartDataLabels],
    	    data: {
    	      labels: months,
    	      datasets: [
    	    	  { 
    	    		  label: 'Target', 
	                    data: stellaTarget, 
	                    //type: 'line', 
	                    backgroundColor: '#2E86C1',
	                    //barPercentage: 0.2,
	                   // categoryPercentage: 1.0
	                    font: {
			                color: 'black',
			                weight:'bold'
			              }
	                },
    	    	  {
    	        label: 'Stella Star',
    	        data: stellascore,
    	        borderWidth: 0,
    	        borderColor: "black",
    	        backgroundColor: bgColor4,
    	       // barPercentage: 0.2
    	      }
                ]
    	    },
    	    options: options
    	  });
    	
    	 ctx5=$('#myChart5')[0].getContext("2d");
    	chrt5=new Chart(ctx5, {
    	    type: 'bar',
    	    plugins: [ChartDataLabels],
    	    data: {
    	      labels: months,
    	      datasets: [
    	    	  { 
    	    		  label: 'Target', 
	                    data: skillportTarget, 
	                    //type: 'line', 
	                    backgroundColor: '#2E86C1',
	                    //barPercentage: 0.2,
	                   // categoryPercentage: 1.0
	                    font: {
			                color: 'black',
			                weight:'bold'	
			              }
	                },
    	    	  {
    	        label: 'Skillport Completion%',
    	        data: skillportscore,
    	        borderWidth: 0,
    	        borderColor: "black",
    	        backgroundColor: bgColor5,
    	       // barPercentage: 0.2
    	      }
                ]
    	    },
    	    options: options
    	  });
    	
    	ctx6=$('#myChart6')[0].getContext("2d");
    	chrt6=new Chart(ctx6, {
    	    type: 'bar',
    	    plugins: [ChartDataLabels],
    	    data: {
    	      labels: months,
    	      datasets: [
    	    	  { 
    	    		  label: 'Target', 
	                    data: vocTarget, 
	                    //type: 'line', 
	                    backgroundColor: '#2E86C1',
	                    //barPercentage: 0.2,
	                   // categoryPercentage: 1.0
	                    font: {
			                color: 'black',
			                weight:'bold'	
			              }
	                },
    	    	  {
    	        label: 'VOC',
    	        data: vocscore,
    	        borderWidth: 0,
    	        borderColor: "black",
    	        backgroundColor: bgColor6,
    	       // barPercentage: 0.2
    	      }
                ]
    	    },
    	    options: options
    	  });
    	
    	ctx7=$('#myChart7')[0].getContext("2d");
    	chrt7=new Chart(ctx7, {
    	    type: 'bar',
    	    plugins: [ChartDataLabels],
    	    data: {
    	      labels: months,
    	      datasets: [
    	    	  { 
    	    		  label: 'Target', 
	                    data: cmsTarget, 
	                    //type: 'line', 
	                    backgroundColor: '#2E86C1',
	                    //barPercentage: 0.2,
	                   // categoryPercentage: 1.0
	                    font: {
			                color: 'black',
			                weight:'bold'	
			              }
	                },
    	    	  {
    	        label: 'CMS',
    	        data: cmsscore,
    	        borderWidth: 0,
    	        borderColor: "black",
    	        backgroundColor: bgColor7,
    	       // barPercentage: 0.2
    	      }
                ]
    	    },
    	    options: options
    	  });
    	
    	ctx8=$('#myChart8')[0].getContext("2d");
    	chrt8=new Chart(ctx8, {
    	    type: 'bar',
    	    plugins: [ChartDataLabels],
    	    data: {
    	      labels: months,
    	      datasets: [
    	    	  { 
    	    		  label: 'Target', 
	                    data: icwTarget, 
	                    //type: 'line', 
	                    backgroundColor: '#2E86C1',
	                    //barPercentage: 0.2,
	                   // categoryPercentage: 1.0
	                    font: {
			                color: 'black',
			                weight:'bold'	
			              }
	                },
    	    	  {
    	        label: 'ICW',
    	        data: icwscore,
    	        borderWidth: 0,
    	        borderColor: "black",
    	        backgroundColor: bgColor8,
    	       // barPercentage: 0.2
    	      }
                ]
    	    },
    	    options: options
    	  });
    	
    	//chrt.update();
    	//document.getElementById('myChart').width = 200;
    	$('#mainDiv').show();
    	$('#divcharts').show();
    	$('#lblBifor').show();
    	$('#cboBifor').show();
    	$('.fixTableHead').hide();
	}
	
	
	
	
	$("#cboView").change(function(){
		var status = this.value;
	    if(status=='Graphs'){
	    	$('#divcharts').show();
	    	$('#lblBifor').show();
	    	$('#cboBifor').show();
	    	$('.fixTableHead').hide();
	    }
	    else
	    	{
		    	$('#divcharts').hide();
		    	$('#lblBifor').hide();
		    	$('#cboBifor').hide();
		    	$('.fixTableHead').show();
	    	}
	});
  
	$("#cboBifor").change(function(){
		var status = this.value;
		if(status=='Monthly'){
	    	debugger;
	    	//$('#divYtdcharts').hide();
	    	chrt.data.datasets[1].data=sascore;
	    	chrt.data.datasets[0].data = saTarget;
	    	//chrt.data.datasets[0].type = 'line';
	    	chrt.data.labels=months;
	    	chrt.data.datasets[1].backgroundColor=bgColor;
	    	
	    	chrt1.data.datasets[1].data=ahtscore;
	    	chrt1.data.datasets[0].data=ahtTarget;
	    	//chrt1.data.datasets[0].type = 'line';
	    	chrt1.data.labels=months;
	    	chrt1.data.datasets[1].backgroundColor=bgColor1;
	    	
	    	chrt2.data.datasets[1].data=ocrscore;
	    	chrt2.data.datasets[0].data=ocrTarget;
	    	//chrt2.data.datasets[0].type = 'line';
	    	chrt2.data.labels=months;
	    	chrt2.data.datasets[1].backgroundColor=bgColor2;
	    	
	    	chrt3.data.datasets[1].data=qualityscore;
	    	chrt3.data.datasets[0].data=qualityTarget
	    	//chrt3.data.datasets[0].type = 'line';
	    	chrt3.data.labels=months;
	    	chrt3.data.datasets[1].backgroundColor=bgColor3;
	    	
	    	chrt4.data.datasets[1].data=stellascore;
	    	chrt4.data.datasets[0].data=stellaTarget
	    	//chrt4.data.datasets[0].type = 'line';
	    	chrt4.data.labels=months;
	    	chrt4.data.datasets[1].backgroundColor=bgColor4;
	    	
	    	chrt5.data.datasets[1].data=skillportscore;
	    	chrt5.data.datasets[0].data=skillportTarget;
	    	//chrt5.data.datasets[0].type = 'line';
	    	chrt5.data.labels=months;
	    	chrt5.data.datasets[1].backgroundColor=bgColor5;
	    	
	    	chrt6.data.datasets[1].data=vocscore;
	    	chrt6.data.datasets[0].data=vocTarget;
	    	//chrt6.data.datasets[0].type = 'bar';
	    	chrt6.data.labels=months;
	    	chrt6.data.datasets[1].backgroundColor=bgColor6;
	    	
	    	chrt7.data.datasets[1].data=cmsscore;
	    	chrt7.data.datasets[0].data=cmsTarget;
	    	//chrt7.data.datasets[0].type = 'bar';
	    	chrt7.data.labels=months;
	    	chrt7.data.datasets[1].backgroundColor=bgColor7;
	    	
	    	chrt8.data.datasets[1].data=icwscore;
	    	chrt8.data.datasets[0].data=icwTarget;
	    	//chrt8.data.datasets[0].type = 'bar';
	    	chrt8.data.labels=months;
	    	chrt8.data.datasets[1].backgroundColor=bgColor8;
	    	chrt.update();
	    	chrt1.update();
	    	chrt2.update();
	    	chrt3.update();
	    	chrt4.update();
	    	chrt5.update();
	    	chrt6.update();
	    	chrt7.update();
	    	chrt8.update();
	    	$('#divcharts').show();
	    }
	    else if(status=='YTD')
	    	{
	    		//$('#divYtdcharts').hide();
	    	debugger;
	    	chrt.data.datasets[1].data=ytdSA;
	    	chrt.data.datasets[0].data = saYtdTarget;
	    	chrt.data.datasets[0].type = 'bar';
	    	chrt.data.labels=['YTD'];
	    	chrt.data.datasets[1].backgroundColor=bgYColor;
	    	
	    	chrt1.data.datasets[1].data=ytdAht;
	    	chrt1.data.datasets[0].data = ahtYtdTarget;
	    	chrt1.data.datasets[0].type = 'bar';
	    	chrt1.data.labels=['YTD'];
	    	chrt1.data.datasets[1].backgroundColor=bgYColor1;
	    	
	    	chrt2.data.datasets[1].data=ytdOcr;
	    	chrt2.data.datasets[0].data=ocrYtdTarget;
	    	chrt2.data.datasets[0].type = 'bar';
	    	chrt2.data.labels=['YTD'];
	    	chrt2.data.datasets[1].backgroundColor=bgYColor2;
	    	
	    	chrt3.data.datasets[1].data=ytdQA;
	    	chrt3.data.datasets[0].data=qualityYtdTarget;
	    	chrt3.data.datasets[0].type = 'bar';
	    	chrt3.data.labels=['YTD'];
	    	chrt3.data.datasets[1].backgroundColor=bgYColor3;
	    	
	    	chrt4.data.datasets[1].data=ytdStella;
	    	chrt4.data.datasets[0].data=stellaYtdTarget;
	    	chrt4.data.datasets[0].type = 'bar';
	    	chrt4.data.labels=['YTD'];
	    	chrt4.data.datasets[1].backgroundColor=bgYColor4;
	    	
	    	chrt5.data.datasets[1].data=ytdSkillport;
	    	chrt5.data.datasets[0].data=skillportYtdTarget;
	    	chrt5.data.datasets[0].type = 'bar';
	    	chrt5.data.labels=['YTD'];
	    	chrt5.data.datasets[1].backgroundColor=bgYColor5;
	    	
	    	chrt6.data.datasets[1].data=ytdVoc;
	    	chrt6.data.datasets[0].data=vocYtdTarget;
	    	chrt6.data.datasets[0].type = 'bar';
	    	chrt6.data.labels=['YTD'];
	    	chrt6.data.datasets[1].backgroundColor=bgYColor6;
	    	
	    	chrt7.data.datasets[1].data=ytdCms;
	    	chrt7.data.datasets[0].data=cmsYtdTarget;
	    	chrt7.data.datasets[0].type = 'bar';
	    	chrt7.data.labels=['YTD'];
	    	chrt7.data.datasets[1].backgroundColor=bgYColor7;
	    	
	    	chrt8.data.datasets[1].data=ytdIcw;
	    	chrt8.data.datasets[0].data=icwYtdTarget;
	    	chrt8.data.datasets[0].type = 'bar';
	    	chrt8.data.labels=['YTD'];
	    	chrt8.data.datasets[1].backgroundColor=bgYColor8;
	    	
	    	if(ytdIcw <94) //Tier5
	        	bgColor8.push('red');
	        else if(ytdIcw >=94 && ytdIcw <95) //Tier4
	        	bgColor8.push('#EF6C00');
	        else if(ytdIcw >=95 && ytdIcw <97) //Tier3
	        	bgColor8.push('green');
	        else
	        	bgColor8.push('#74c474');
	    	chrt.update();
	    	chrt1.update();
	    	chrt2.update();
	    	chrt3.update();
	    	chrt4.update();
	    	chrt5.update();
	    	chrt6.update();
	    	chrt7.update();
	    	chrt8.update();
	    	$('#divcharts').show();
	    	}
	    /*else
	    	{
	    		$('#divcharts').hide();
	    		$('#divYtdcharts').show();
	    	}*/
	});
	
	function gcd(a, b)
	{
	    if (a == 0)
	        return b;
	    else if (b == 0)
	        return a;
	    if (a < b)
	        return gcd(a, b % a);
	    else
	        return gcd(b, a % b);
	}
	
	function decimalToFraction(number)
	{
	    
	    // Fetch letegral value of the decimal
	    let letVal = Math.floor(number);
	   
	    // Fetch fractional part of the decimal
	    let fVal = number - letVal;
	   
	    // Consider precision value to
	    // convert fractional part to
	    // letegral equivalent
	    let pVal = 1000000000;
	   
	    // Calculate GCD of letegral
	    // equivalent of fractional
	    // part and precision value
	    let gcdVal = gcd(Math.round(
	                      fVal * pVal), pVal);
	    
	    // Calculate num and deno
	    let num = Math.round(fVal * pVal) / gcdVal;
	    let deno = pVal / gcdVal;
	   
	    ytdPos=(letVal * deno) + num;
	    ytdOutOf = deno;
	    ytdPosStr = (letVal * deno) +  num + "/" + deno;
	    // Print the fraction
	    //document.write((letVal * deno) +
	                         //  num + "/" + deno);
	}
	
	
	$("#agentScorecard").click(function() {
		window.location = "http://awswauto01d:8080/ScorecardDashboard/ReverseCSAgent.jsp";
    });
	$("#amScorecard").click(function() {
		window.location = "http://awswauto01d:8080/ScorecardDashboard/AMScoreCard.jsp";
    });
});

	