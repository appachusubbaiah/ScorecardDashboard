$(document).ready(function(){
	var urlStr="http://localhost:8080/ScorecardDashboard/api/";
	var ytdAllAgents;
	var curUserId;
	var ytdPos;
	var ytdOutOf;
	var ytdPosStr;
	var sumFrac;
	var gcd;
	var dept;
	var ocrscore=[];
	var ocrTarget=[];
	var ocrYtdTarget=[];
	var qualityscore=[];
	var qualityYtdTarget=[];
	var qualityTarget=[];
	var stellascore=[];
	var stellaTarget=[];
	var stellaYtdTarget=[];
	var sascore=[];
	var saTarget=[];
	var saYtdTarget=[];
	var ahtscore=[];
	var ahtTarget=[];
	var ahtYtdTarget=[];
	var cmsscore=[];
	var cmsTarget=[];
	var cmsYtdTarget=[];
	var vocscore=[];
	var vocTarget=[];
	var vocYtdTarget=[];
	var icwscore=[];
	var icwTarget=[];
	var icwYtdTarget=[];
	var skillportscore=[];
	var skillportTarget=[];
	var skillportYtdTarget=[];
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
	var bgYColor5=[];
	var bgColor6=[];
	var bgYColor6=[];
	var bgColor7=[];
	var bgYColor7=[];
	var bgColor8=[];
	var bgYColor8=[];
	let chrt=null;
	let chrt1=null;
	let chrt2=null;
	let chrt3=null;
	let chrt4=null;
	let chrt5=null;
	let chrt6=null;
	
	var ytdSA=[];
	var ytdAht=[];
	var ytdOcr=[];
	var ytdQA=[];
	var ytdStella=[];
	var ytdSkillport=[];
	var ytdVoc=[];
	var ytdCms=[];
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
	var targetCollection=[];
	var ytdCollection=[];
	var outOf=[];
	var globalRank=[];
	var sumOfRanks=0;
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	Chart.defaults.color = '#000';
	var options = { 
            plugins: { 
                title: { 
                    display: true, 
                    text: ''
                }
			
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
            }  
        },  
        title: "Scorecard",
        position: {  
           my: "center center",  
           at: "center center"  
        }   });
	  } );
	$("#mainDiv").hide();
	$('#divcharts').hide();
	$('#lblBifor').hide();
	$('#cboBifor').hide();
	//$('#divYtdcharts').hide();
	totalCredits=0;
	totalQA=0;
	totalStella=0;
	totalSA=0;
	totalCreditTarget=0;
	totalAht=0;
	totalCms=0;
	$('html,body').css('cursor','wait');
	$.get("http://localhost:8080/ScorecardDashboard/api/scorecard/", function(data, status){
		console.log(status);
		console.log(data);	
		debugger;
		/*assesorEmail=data["EmailId"];
			$('#assessor').val(data["Name"]);
			$('#dept').val(data["Department"]);
			$('#location').val(data["Location"]);*/
				//var dataMarkers = { "Month": null,"FusionId":"197043"};
			if(data.FusionId == '109944' || data.FusionId == '104086' || data.FusionId == '195911' || data.FusionId == '195760'){
				var dataMarkers = { "Month": null,"FusionId":null};
				urlStr = urlStr + "scorecard/getRevAgentScoreCard";
			}
			else if(data.Department == 'Reverse CS')
			{
				if(data.Designation=='Agent'){
					var dataMarkers = { "Month": null,"FusionId":data.FusionId};
					$('#tlScorecard').hide();
					$('#amScorecard').hide();
				}
				else if(data.Designation=='Team Lead'){
					$('#amScorecard').hide();
					var dataMarkers = { "Month": null,"FusionId":null};
				}
				else
					var dataMarkers = { "Month": null,"FusionId":null};
				urlStr = urlStr + "scorecard/getRevAgentScoreCard";
			}
				else
					{ 
						/*$('#dialogText').text("Score card for " + data.Department + " is under construction!");
				    	$('#dialog').dialog("open");	
						$('html,body').css('cursor','default');
						return;*/
					debugger;
						window.location = "http://localhost:8080/ScorecardDashboard/CSScoreAgentCard.jsp";
					}
					debugger;
					$.ajax({
						type: "POST",
					    url: urlStr,
					    // The key needs to match your method's input parameter (case-sensitive).
					    data: JSON.stringify(dataMarkers),
					    contentType: "application/json",
					    //dataType: "json",
					    success: function(dta){
					    	curUserId=dta[0]['EmpId'];
					    	$('#heading').text("Reverse CS Scorecard for " + dta[0]['Name']);
					    	updateTopTen(dta);
					    	populateCRAgentPeers();
					    	console.log(dta);
					    	
					    	},
					    error: function(errMsg) {
					    	debugger;
					    	$('#dialogText').text(errMsg.responseText)
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
		    url: "http://localhost:8080/ScorecardDashboard/api/scorecard/getRevAgentScoreCard/agent/ytd",
		    // The key needs to match your method's input parameter (case-sensitive).
		    data: JSON.stringify(dataMarkers),
		    contentType: "application/json",
		    //dataType: "json",
		    success: function(dta){
		    	
		    	var array=[];
		    	array=dta;
		    	debugger;
		    	array.sort(function(a, b) {
		    	    return parseInt(a.GlobalRank) - parseInt(b.GlobalRank);
		    	});
		    	ytdAllAgents=dta;
		    	var str="Our Top Ten Performers : ";
		    	$('html,body').css('cursor','wait');
		    	for (var i = 0, len = array.length; i < array.length; i++) {
		    		if(array[i].GlobalRank <=10)
		    			{
		    				str=str + "  " + array[i].GlobalRank + ". " +  array[i].Name.toUpperCase()   + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
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
	
	function fetchYtdGlobalrank(EmpId)
	{
		var glblRnk=0;
		for (var i = 0; i < ytdAllAgents.length; i++)
		{ 
			if(ytdAllAgents[i]['EmpId']==EmpId){
				debugger;
				glblRnk=ytdAllAgents[i]['GlobalRank'];
				break;
			}
		}
		return glblRnk;
		
	}
	
	function fetchYtdCredits(EmpId)
	{
		for (var i = 0; i < ytdAllAgents.length; i++)
		{ 
			if(ytdAllAgents[i]['EmpId']==EmpId){
				debugger;
				ytdSA.push(ytdAllAgents[i]['SA']);
		    	if(ytdSA<85) //Tier5
		        	bgYColor.push('red');
		        else if(ytdSA>=85 && ytdSA<87.5) //Tier4
		        	bgYColor.push('#EF6C00');
		        else if(ytdSA>=87.5 && ytdSA<90)  //Tier3
		        	bgYColor.push('green');
		        else 
		        	bgYColor.push('#74c474');//Tier 2
		    	
				ytdAht.push(ytdAllAgents[i]['AHT']);
				if(ytdAht>610) //Tier5
		        	bgYColor1.push('red');
		        else if(ytdAht<=610 && ytdAht>595) //Tier4
		        	bgYColor1.push('#EF6C00');
		        else if(ytdAht<=595 && ytdAht>550)  //Tier3
		        	bgYColor1.push('green');
		        else 
		        	bgYColor1.push('#74c474');//Tier 2
				
				ytdOcr.push(ytdAllAgents[i]['OCR']);
				if(ytdOcr<80) //Tier5
		        	bgYColor2.push('red');
		        else if(ytdOcr>=80 && ytdOcr<85 ) //Tier4
		        	bgYColor2.push('#EF6C00');
		        else if(ytdOcr>=85 && ytdOcr<93 ) //Tier3
		        	bgYColor2.push('green');
		        else if(ytdOcr>=93 ) //Tier2
		        	bgYColor2.push('#74c474');
				
				ytdQA.push(ytdAllAgents[i]['QA']);
				if(ytdQA<94) //Tier5
		        	bgYColor3.push('red');
		        else if(ytdQA>=94 && ytdQA<95 ) //Tier4
		        	bgYColor3.push('#EF6C00');
		        else if(ytdQA>=95 && ytdQA<97 ) //Tier3
		        	bgYColor3.push('green');
		        else
		        	bgYColor3.push('#74c474');
				
				ytdStella.push(ytdAllAgents[i]['Stella']);
				if(ytdStella<4.25)  //Tier5
		        	bgYColor4.push('red');
		        else if((ytdStella>=4.25) && (ytdStella<4.30)) //Tier4
		        	bgYColor4.push('#EF6C00');
		        else if((ytdStella>=4.30) && (ytdStella<4.35)) //Tier3
		        		bgYColor4.push('green');
		        else
		        	bgYColor4.push('#74c474'); //Tier2
				
				ytdSkillport.push(ytdAllAgents[i]['Skillport']);
				if(ytdSkillport >1.5) //Tier5
		        	bgYColor5.push('red');
		        else if(ytdSkillport <=1.5 && ytdSkillport >1.00) //Tier4
		        	bgYColor5.push('#EF6C00');
		        else if(ytdSkillport <=1.0 && ytdSkillport >0.5) //Tier3
		        	bgYColor5.push('green');
		        else
		        	bgYColor5.push('#74c474');
				
				ytdVoc.push(ytdAllAgents[i]['VOC']);
				if(ytdVoc <87) //Tier5
		        	bgYColor6.push('red');
		        else if(ytdVoc >=87 && ytdVoc <90) //Tier4
		        	bgYColor6.push('#EF6C00');
		        else if(ytdVoc >=90 && ytdVoc <95) //Tier3
		        	bgYColor6.push('green');
		        else
		        	bgYColor6.push('#74c474');
				
				ytdCms.push(ytdAllAgents[i]['CMS']);
				if(ytdCms <50) //Tier5
		        	bgYColor7.push('red');
		        else if(ytdCms >=50 && ytdCms <75) //Tier4
		        	bgYColor7.push('#EF6C00');
		        else if(ytdCms >=75 && ytdCms <100) //Tier3
		        	bgYColor7.push('green');
		        else
		        	bgYColor7.push('#74c474');
				
				ytdIcw.push(ytdAllAgents[i]['ICW']);
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
	
	function fetchTier(EmpId)
	{
		debugger;
		var tier=0;
		for (var i = 0; i < ytdAllAgents.length; i++)
		{ 
			if(ytdAllAgents[i]['EmpId']==EmpId){
				tier=ytdAllAgents[i]['tier'];
				break;
			}
		}
		return tier;
	}
	
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
		    	$('#heading').text("Reverse CS Scorecard for " + dta[0]['Name']);
		    	var ti=fetchTier(dta[0]['EmpId']);
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
		    	while(sascore.length > 0) {
		    		sascore.pop();
				}
		    	while(saTarget.length > 0) {
		    		saTarget.pop();
				}
		    	while(bgColor.length > 0) {
		    		bgColor.pop();
				}
		    	while(bgYColor.length > 0) {
		    		bgYColor.pop();
				}
		    	while(ahtscore.length > 0) {
		    		ahtscore.pop();
				}
		    	while(ahtTarget.length > 0) {
		    		ahtTarget.pop();
				}
		    	while(bgColor1.length > 0) {
		    		bgColor1.pop();
				}
		    	while(bgYColor1.length > 0) {
		    		bgYColor1.pop();
				}
		    	while(ocrscore.length > 0) {
		    		ocrscore.pop();
				}
		    	while(ocrTarget.length > 0) {
		    		ocrTarget.pop();
				}
		    	while(bgColor2.length > 0) {
		    		bgColor2.pop();
				}
		    	
		    	while(bgYColor2.length > 0) {
		    		bgYColor2.pop();
				}
		    	
		    	while(qualityscore.length > 0) {
		    		qualityscore.pop();
				}
		    	
		    	while(qualityTarget.length > 0) {
		    		qualityTarget.pop();
				}
		    	
		    	while(bgColor3.length > 0) {
		    		bgColor3.pop();
				}
		    	while(bgYColor3.length > 0) {
		    		bgYColor3.pop();
				}
		    	while(stellascore.length > 0) {
		    		stellascore.pop();
				}
		    	
		    	while(stellaTarget.length > 0) {
		    		stellaTarget.pop();
				}
		    	
		    	while(bgColor4.length > 0) {
		    		bgColor4.pop();
				}
		    	while(bgYColor4.length > 0) {
		    		bgYColor4.pop();
				}
		    	while(skillportscore.length > 0) {
		    		skillportscore.pop();
				}
		    	
		    	while(skillportTarget.length > 0) {
		    		skillportTarget.pop();
				}
		    	
		    	while(bgColor5.length > 0) {
		    		bgColor5.pop();
				}
		    	while(bgYColor5.length > 0) {
		    		bgYColor5.pop();
				}
		    	while(bgColor6.length > 0) {
		    		bgColor6.pop();
				}
		    	while(bgYColor6.length > 0) {
		    		bgYColor6.pop();
				}
		    	while(vocscore.length > 0) {
		    		vocscore.pop();
				}
		    	
		    	while(cmsscore.length > 0) {
		    		cmsscore.pop();
				}
		    	
		    	while(bgColor7.length > 0) {
		    		bgColor7.pop();
				}
		    	while(bgYColor7.length > 0) {
		    		bgYColor7.pop();
				}
		    	while(bgColor8.length > 0) {
		    		bgColor8.pop();
				}
		    	while(bgYColor8.length > 0) {
		    		bgYColor8.pop();
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
		    	
		    	while(ytdOcr.length > 0) {
		    		ytdOcr.pop();
				}
		    	
		    	while(ocrYtdTarget.length > 0) {
		    		ocrYtdTarget.pop();
				}
		    	
		    	while(ytdCollection.length > 0) {
		    		ytdCollection.pop();
				}
		    	
		    	while(ytdQA.length > 0) {
		    		ytdQA.pop();
				}
		    	
		    	while(qualityTarget.length > 0) {
		    		qualityTarget.pop();
				}
	
		    	while(ytdStella.length > 0) {
		    		ytdStella.pop();
				}
		    	
		    	while(stellaYtdTarget.length > 0) {
		    		stellaYtdTarget.pop();
				}
		    	
				while(targetCollection.length > 0) {
		    		targetCollection.pop();
				}
		    	
				while(ytdSkillport.length > 0) {
					ytdSkillport.pop();
				}
				
				while(skillportYtdTarget.length > 0) {
					skillportYtdTarget.pop();
				}
				
				while(ytdCollection.length > 0) {
					ytdCollection.pop();
				}
				
				while(ytdVoc.length > 0) {
					ytdVoc.pop();
				}
	        	
				while(vocYtdTarget.length > 0) {
					vocYtdTarget.pop();
				}
				
				while(targetCollection.length > 0) {
					targetCollection.pop();
				}
				
				while(ytdCms.length > 0) {
					ytdCms.pop();
				}
				
				while(cmsTarget.length > 0) {
					cmsTarget.pop();
				}
				
				while(ytdCollection.length > 0) {
					ytdCollection.pop();
				}
				
				while(icwscore.length > 0) {
					icwscore.pop();
				}
				
				while(icwYtdTarget.length > 0) {
					icwYtdTarget.pop();
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
				
				while(targetCollection.length > 0) {
					targetCollection.pop();
				}
				
				while(globalRank.length > 0) {
					globalRank.pop();
				}
	        	
				while(outOf.length > 0) {
					outOf.pop();
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
		    	if (chrt7) {
		    	    chrt7.destroy();
		    	}
		    	if (chrt8) {
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
		    url: "http://localhost:8080/ScorecardDashboard/api/scorecard/getRevAgentScoreCard/agent/ytd",
		    // The key needs to match your method's input parameter (case-sensitive).
		    data: JSON.stringify(dataMarkers),
		    contentType: "application/json",
		    //dataType: "json",
		    success: function(dta){
		    	$('html,body').css('cursor','wait');
		    	//$("#cboPeers").empty();
		    	for (var i = 0, len = dta.length; i < len; i++) {
					$("#cboPeers").append('<option value="' + dta[i]['EmpId'] + '">' + dta[i]['Name'] + '</option>');
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
		Chart.defaults.color = '#000';
		$('html,body').css('cursor','wait');
		$("#data tr").remove();
		$("#data1 tr").remove();
    	for (var i = 0, len = dta.length; i < len; i++) {
    		
			var row = "<tr>";
	        row += "<td>" + dta[i]['Month'] + "</td>";
	        months.push(dta[i]['Month']);
	       // row += "<td>" + dta[i]['UcId'] + "</td>";
	        row += "<td>" + dta[i]['EmpId'] + "</td>"
	        row += "<td>" + dta[i]['Name'] + "</td>";
	        row += "<td>" + dta[i]['Tl'] + "</td>";
	      //  row += "<td>" + dta[i]['Location'] + "</td>";
	        row += "<td>" + dta[i]['Dept'] + "</td>";
	        row += "<td>" + dta[i]['GlobalRank'] + " of " + dta[i]['OutOf']  +  "</td>";
	        sumOfRanks = sumOfRanks + (dta[i]['GlobalRank'] / dta[i]['OutOf']);
	        row += "<td>" + dta[i]['SA'].toFixed(3) + "</td>";
	       // row += "<td>" + dta[i]['CreditRank'] + "</td>";
	       // row += "<td>" + dta[i]['CreditScore'] + "</td>";
	        sascore.push(dta[i]['SA'].toFixed(3));
	        //totalCredits=totalCredits+dta[i]['SA'];
	        //totalCreditTarget=totalCreditTarget+dta[i]['CreditsTarget'];
	        //totalCreditTarget=dta[i]['SATarget'];
	        
	        row += "<td>" + dta[i]['SATarget'].toFixed(3) + "</td>";
	        saTarget.push(dta[i]['SATarget'].toFixed(3));
	        /*if(dta[i]['SATarget']>dta[i]['SA'])
	        	bgColor.push('red');
	        else
	        	bgColor.push('green');
	        if(dta[i]['SATarget']>(totalCredits/(i+1)).toFixed(3))
	        	bgYColor.push('red');
	        else
	        	bgYColor.push('#9FFF33');*/
	        
	        if(dta[i]['SA']<85) //Tier5
	        	bgColor.push('red');
	        else if(dta[i]['SA']>=85 && dta[i]['SA']<87.5) //Tier4
	        	bgColor.push('#EF6C00');
	        else if(dta[i]['SA']>=87.5 && dta[i]['SA']<90)  //Tier3
	        	bgColor.push('green');
	        else 
	        	bgColor.push('#74c474');//Tier 2
	        
	        row += "<td>" + dta[i]['AHT'] + "</td>";
	      //  row += "<td>" + dta[i]['QARank'] + "</td>";
	      //  row += "<td>" + dta[i]['QA_Score'] + "</td>";
	        ahtscore.push(dta[i]['AHT']);
	        //totalQA=totalQA+dta[i]['AHT'];
	       // row += "<td>" + (totalQA/(i+1)).toFixed(3) + "</td>"
	        row += "<td>" + dta[i]['AHTTarget'] + "</td>";
	        ahtTarget.push(dta[i]['AHTTarget']);
	        if(dta[i]['AHT']>610) //Tier5
	        	bgColor1.push('red');
	        else if(dta[i]['AHT']<=610 && dta[i]['AHT']>595) //Tier4
	        	bgColor1.push('#EF6C00');
	        else if(dta[i]['AHT']<=595 && dta[i]['AHT']>550)  //Tier3
	        	bgColor1.push('green');
	        else 
	        	bgColor1.push('#74c474');//Tier 2
	        
	        						        
	        if(dta[i]['AHTTarget']>(totalQA/(i+1)).toFixed(3))
	        	bgYColor1.push('red');
	        else
	        	bgYColor1.push('#9FFF33');
	        row += "<td>" + dta[i]['OCR'] + "</td>";
	      //  row += "<td>" + dta[i]['StellaRank'] + "</td>";
	        //row += "<td>" + dta[i]['StellaScore'] + "</td>";
	        ocrscore.push(dta[i]['OCR']);
	        //totalStella=totalStella+dta[i]['OCR'];
	        //row += "<td>" + (totalStella/(i+1)).toFixed(3) + "</td>"
	        row += "<td>" + dta[i]['OCRTarget'] + "</td>";
	        ocrTarget.push(dta[i]['OCRTarget']);
	        if(dta[i]['OCR']<80) //Tier5
	        	bgColor2.push('red');
	        else if(dta[i]['OCR']>=80 && dta[i]['OCR']<85 ) //Tier4
	        	bgColor2.push('#EF6C00');
	        else if(dta[i]['OCR']>=85 && dta[i]['OCR']<93 ) //Tier3
	        	bgColor2.push('green');
	        else if(dta[i]['OCR']>=93 ) //Tier2
	        	bgColor2.push('#74c474');
	        	
	        
	        /*if(dta[i]['StellaTarget']>(totalStella/(i+1)).toFixed(3))
	        	bgYColor2.push('red');
	        else
	        	bgYColor2.push('#9FFF33');*/
	        row += "<td>" + dta[i]['QA'] + "</td>";
	       // row += "<td>" + dta[i]['SARank'] + "</td>";
	        //row += "<td>" + dta[i]['SAScore'] + "</td>";
	        qualityscore.push(dta[i]['QA']);
	        //totalSA=totalSA+dta[i]['QA'];
	        
	        //row += "<td>" + (totalSA/(i+1)).toFixed(3) + "</td>"
	        row += "<td>" + dta[i]['QATarget'] + "</td>";
	        qualityTarget.push(dta[i]['QATarget']);
	        if(dta[i]['QA']<94) //Tier5
	        	bgColor3.push('red');
	        else if(dta[i]['QA']>=94 && dta[i]['QA']<95 ) //Tier4
	        	bgColor3.push('#EF6C00');
	        else if(dta[i]['QA']>=95 && dta[i]['QA']<97 ) //Tier3
	        	bgColor3.push('green');
	        else
	        	bgColor3.push('#74c474');
	        
	        row += "<td>" + dta[i]['Stella'] + "</td>";
	       // row += "<td>" + dta[i]['AHTRAnk'] + "</td>";
	       // row += "<td>" + dta[i]['AHTScore'] + "</td>";
	        stellascore.push(dta[i]['Stella']);
	        //totalAht=totalAht+dta[i]['Stella'];
	        row += "<td>" + dta[i]['StellaTarget'] + "</td>";
	        stellaTarget.push(dta[i]['StellaTarget']);
	        if(dta[i]['Stella']<4.25)  //Tier5
	        	bgColor4.push('red');
	        else if((dta[i]['Stella']>=4.25) && (dta[i]['Stella']<4.30)) //Tier4
	        	bgColor4.push('#EF6C00');
	        else if((dta[i]['Stella']>=4.30) && (dta[i]['Stella']<4.35)) //Tier3
	        		bgColor4.push('green');
	        else
	        	bgColor4.push('#74c474'); //Tier2
				
				
	        row += "<td>" + dta[i]['Skillport'] + "</td>";
	       // row += "<td>" + dta[i]['CMSRank'] + "</td>";
	        //row += "<td>" + dta[i]['CMSScore'] + "</td>";
	        skillportscore.push(dta[i]['Skillport']);
	        //totalCms=totalCms+dta[i]['Skillport'];
	        row += "<td>" + dta[i]['SkillportTarget'] + "</td>";
	        skillportTarget.push(dta[i]['SkillportTarget']);
	        if(dta[i]['Skillport'] <75) //Tier5
	        	bgColor5.push('red');
	        else if(dta[i]['Skillport'] >=75 && dta[i]['Skillport'] <99.99) //Tier4
	        	bgColor5.push('#EF6C00');
	        //else if(dta[i]['Skillport'] <=1.0 && dta[i]['Skillport'] >0.5) //Tier3
	        //	bgColor5.push('green');
	        else
	        	bgColor5.push('#74c474');
	        
	        row += "<td>" + dta[i]['VOC'] + "</td>";
		       // row += "<td>" + dta[i]['CMSRank'] + "</td>";
		        //row += "<td>" + dta[i]['CMSScore'] + "</td>";
		        vocscore.push(dta[i]['VOC']);
		        //totalCms=totalCms+dta[i]['VOC'];
		        row += "<td>" + dta[i]['VOCTarget'] + "</td>";
		        vocTarget.push(dta[i]['VOCTarget']);
		        if(dta[i]['VOC'] <87) //Tier5
		        	bgColor6.push('red');
		        else if(dta[i]['VOC'] >=87 && dta[i]['VOC'] <90) //Tier4
		        	bgColor6.push('#EF6C00');
		        else if(dta[i]['VOC'] >=90 && dta[i]['VOC'] <95) //Tier3
		        	bgColor6.push('green');
		        else
		        	bgColor6.push('#74c474');
		        
		        row += "<td>" + dta[i]['CMS'] + "</td>";
			       // row += "<td>" + dta[i]['CMSRank'] + "</td>";
			        //row += "<td>" + dta[i]['CMSScore'] + "</td>";
			        cmsscore.push(dta[i]['CMS']);
			        //totalCms=totalCms+dta[i]['VOC'];
			        row += "<td>" + dta[i]['CMSTarget'] + "</td>";
			        cmsTarget.push(dta[i]['CMSTarget']);
			        if(dta[i]['CMS'] <50) //Tier5
			        	bgColor7.push('red');
			        else if(dta[i]['CMS'] >=50 && dta[i]['CMS'] <75) //Tier4
			        	bgColor7.push('#EF6C00');
			        else if(dta[i]['CMS'] >=75 && dta[i]['CMS'] <100) //Tier3
			        	bgColor7.push('green');
			        else
			        	bgColor7.push('#74c474');
			        
			        row += "<td>" + dta[i]['ICW'] + "</td>";
				       // row += "<td>" + dta[i]['CMSRank'] + "</td>";
				        //row += "<td>" + dta[i]['CMSScore'] + "</td>";
				        icwscore.push(dta[i]['ICW']);
				        //totalCms=totalCms+dta[i]['VOC'];
				        row += "<td>" + dta[i]['ICWTarget'] + "</td>";
				        icwTarget.push(dta[i]['ICWTarget']);
				        if(dta[i]['ICW'] <94) //Tier5
				        	bgColor8.push('red');
				        else if(dta[i]['ICW'] >=94 && dta[i]['ICW'] <95) //Tier4
				        	bgColor8.push('#EF6C00');
				        else if(dta[i]['ICW'] >=95 && dta[i]['ICW'] <97) //Tier3
				        	bgColor8.push('green');
				        else
				        	bgColor8.push('#74c474');
		        
	       // row += "<td>" + dta[i]['OutOf'] + "</td>";
	        row += "</tr>";
	        
	        if(i==len-1){
	        	debugger;
	        	fetchYtdCredits(dta[i]['EmpId']);
	        	var row1 = "<tr>";
	        	//ytdCredits.push(fetchYtdCredits(dta[i]['EmpId']));
	        	ytdCollection.push((totalCredits/(i+1)).toFixed(3));
	        	//creditYtdTarget.push((totalCreditTarget/(i+1)).toFixed(3));
	        	//creditYtdTarget.push(totalCreditTarget.toFixed(3));
	        	targetCollection.push((totalCreditTarget/(i+1)).toFixed(3));
	        	//row1 += "<td>" + dta[i]['Month'] + "</td>";
	        	row1 += "<td>" + dta[i]['EmpId'] + "</td>"
	        	row1 += "<td>" + dta[i]['Name'] + "</td>";
	        	row1 += "<td>" + dta[i]['Tl'] + "</td>";
	        	row1 += "<td>" + dta[i]['Dept'] + "</td>";
	        	//decimalToFraction(sumOfRanks/(i+1));
	        	//row1 += "<td>" +  dta[i]['YTDGlobalRank'] + "</td>";
	        	row1 += "<td>" +  fetchYtdGlobalrank(dta[i]['EmpId']) + "</td>";
	        	//$('#headingGR').text("Global Rank " + dta[i]['YTDGlobalRank'])
	        	$('#headingGR').text("Global Rank " + fetchYtdGlobalrank(dta[i]['EmpId']));
		        //row1 += "<td>" + ytdCredits[0] + "</td>";
		        //ytdQA.push((totalQA/(i+1)).toFixed(3));
		        ytdCollection.push((totalQA/(i+1)).toFixed(3));
		        row1 += "<td>" + ytdSA[0] + "</td>";
		        saYtdTarget.push(dta[i]['SATarget'].toFixed(3))
	        	targetCollection.push(dta[i]['SATarget'].toFixed(3));
	        	//ytdStella.push((totalStella/(i+1)).toFixed(3));
	        	ytdCollection.push((ytdAht/(i+1)).toFixed(3));
	        	row1 += "<td>" + ytdAht[0] + "</td>";
	        	ahtYtdTarget.push(dta[i]['AHTTarget'].toFixed(3));
	        	targetCollection.push(dta[i]['AHTTarget'].toFixed(3));
	        	//ytdSA.push((totalSA/(i+1)).toFixed(3));
	        	ytdCollection.push((totalSA/(i+1)).toFixed(3));
	        	row1 += "<td>" + ytdOcr[0] + "</td>";
	        	ocrYtdTarget.push(dta[i]['OCRTarget']);
	        	targetCollection.push(dta[i]['OCRTarget'])
	        	//ytdAht.push((totalAht/(i+1)).toFixed(3));
	        	ytdCollection.push((totalAht/(i+1)).toFixed(3));
	        	row1 += "<td>" + ytdQA[0] + "</td>";
	        	qualityYtdTarget.push(dta[i]['QATarget']);
	        	targetCollection.push(dta[i]['QATarget']);
	        	//ytdCms.push((totalCms/(i+1)).toFixed(3));
	        	ytdCollection.push((totalCms/(i+1)).toFixed(3));
	        	row1 += "<td>" + ytdStella[0] + "</td>";
	        	stellaYtdTarget.push(dta[i]['StellaTarget']);
	        	targetCollection.push(dta[i]['StellaTarget']);
	        	row1 += "<td>" + ytdSkillport[0] + "</td>";
	        	skillportYtdTarget.push(dta[i]['SkillportTarget']);
	        	targetCollection.push(dta[i]['SkillportTarget']);
	        	row1 += "<td>" + ytdVoc[0] + "</td>";
	        	vocYtdTarget.push(dta[i]['VOCTarget']);
	        	row1 += "<td>" + ytdCms[0] + "</td>";
	        	cmsYtdTarget.push(dta[i]['CMSTarget']);
	        	row1 += "<td>" + ytdIcw[0] + "</td>";
	        	icwYtdTarget.push(dta[0]['ICWTarget']);
	        	row1 += "</tr>";
	        	globalRank.push(dta[i]['GlobalRank']);
	        	outOf.push(dta[i]['OutOf']);
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
    	$("#mainDiv").show();
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
	
	$("#tlScorecard").click(function() {
		window.location = "http://localhost:8080/ScorecardDashboard/CRTLScorecard.jsp";
    });
	
	$("#amScorecard").click(function() {
		window.location = "http://localhost:8080/ScorecardDashboard/AMScoreCard.jsp";
    });
});

	