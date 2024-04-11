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
	var creditscore=[];
	var creditTarget=[];
	var creditYtdTarget=[];
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
	let chrt=null;
	let chrt1=null;
	let chrt2=null;
	let chrt3=null;
	let chrt4=null;
	let chrt5=null;
	let chrt6=null;
	var ytdCredits=[];
	var ytdQA=[];
	var ytdStella=[];
	var ytdSA=[];
	var ytdAht=[];
	var ytdCms=[];
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
	var options = {
		    responsive: true,
		    maintainAspectRatio:true,
		    barPercentage: 1,
            categoryPercentage: 0.3,
		    scales: {
		        yAxes: [{
		            display: true,
		            ticks: {
		                beginAtZero: true,
		                max: 200,
		                min: 0
		            }
		        }],
		        xAxes:[{
		                   gridLines: {
		                   display:false
		               }
		           }]
		    },
		    title: {
		        display: true,
		        text: "Score Card"
		    },
		    tooltips: {
		        mode: 'index',
		        intersect: true,
		    },
		    hover: {
		        mode: 'nearest',
		        intersect: true
		    },
		    legend: { display: false },
		    plugins:{
		    	datalabels: {
		    		anchor: 'center',
		            align: 'top',
		            color:'#130612',
	                /*formatter: (value, ctx) => {
	                  let sum = 0;
	                  let dataArr = scores;
	                  //let scores = (value)+"%";
	                  return scores;
	                },*/
		            font: {
		                weight: 'bold',
		                size: 12.5
		              }
	                     }
		    }
		};
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
	$.get("http://localhost:8080/ScorecardDashboard/api/scorecard/", function(data, status){
		console.log(status);
		console.log(data);	
		debugger;
		/*assesorEmail=data["EmailId"];
			$('#assessor').val(data["Name"]);
			$('#dept').val(data["Department"]);
			$('#location').val(data["Location"]);*/
				//var dataMarkers = { "Month": null,"FusionId":"197043"};
			if(data.FusionId == '103009')
				var dataMarkers = { "Month": null,"FusionId":null};
			else
				var dataMarkers = { "Month": null,"FusionId":data.FusionId};
				//$('#heading').text($('#heading').text() + " for " + data.Name)
				curUserId=data.FusionId;
				if(data.Department == 'CCC-R' || data.FusionId == '103009'){
					if(data.Designation=='Agent' || data.FusionId == '103009')
						urlStr = urlStr + "scorecard/getCRScoreCard";
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
					$.ajax({
					    type: "POST",
					    url: urlStr,
					    // The key needs to match your method's input parameter (case-sensitive).
					    data: JSON.stringify(dataMarkers),
					    contentType: "application/json",
					    //dataType: "json",
					    success: function(dta){
					    	$('#heading').text("CR Scorecard for " + dta[0]['Name']);
					    	populateCRAgentPeers();
					    	updateTopTen();
					    	console.log(dta);
					    	renderCR(dta);
					    	},
					    error: function(errMsg) {
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
	
	
	function updateTopTen()
	{
		var dataMarkers = {"FusionId":null};
		$.ajax({
		    type: "POST",
		    url: "http://localhost:8080/ScorecardDashboard/api/scorecard/getCRScoreCard/agent/ytd",
		    // The key needs to match your method's input parameter (case-sensitive).
		    data: JSON.stringify(dataMarkers),
		    contentType: "application/json",
		    //dataType: "json",
		    success: function(dta){
		    	debugger;
		    	ytdAllAgents=dta;
		    	var str="Our Top Ten Performers : ";
		    	$('html,body').css('cursor','wait');
		    	for (var i = 0, len = dta.length; i < 10; i++) {
		    		str=str + "  " + dta[i].globalRank + ". " +  dta[i].name.toUpperCase() + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
				}
		    	$("#topTen").text(str);
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
		    	$('#heading').text("CR Scorecard for " + dta[0]['Name']);
		    	var ti=fetchTier(dta[0]['EmpId']);
		    	if(ti == 1)
		        	$('#logo').attr("src","Gold.png");
		    	else if(ti ==2)
		    		$('#logo').attr("src","Silver.png");
		    	else
		    		$('#logo').attr("src","Bronze.png");
		    	$('#cboView').val('Graphs');
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
		    	
		    	while(ytdCredits.length > 0) {
		    		ytdCredits.pop();
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
		    url: "http://localhost:8080/ScorecardDashboard/api/scorecard/getCRScoreCard/agent/ytd",
		    // The key needs to match your method's input parameter (case-sensitive).
		    data: JSON.stringify(dataMarkers),
		    contentType: "application/json",
		    //dataType: "json",
		    success: function(dta){
		    	$('html,body').css('cursor','wait');
		    	$("#cboPeers").empty();
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
	        row += "<td>" + dta[i]['CreditPerHr'].toFixed(3) + "</td>";
	       // row += "<td>" + dta[i]['CreditRank'] + "</td>";
	       // row += "<td>" + dta[i]['CreditScore'] + "</td>";
	        creditscore.push(dta[i]['CreditPerHr'].toFixed(3));
	        totalCredits=totalCredits+dta[i]['CreditPerHr'];
	        totalCreditTarget=totalCreditTarget+dta[i]['CreditsTarget'];
	       
	        row += "<td>" + dta[i]['CreditsTarget'].toFixed(3) + "</td>";
	        creditTarget.push(dta[i]['CreditsTarget'].toFixed(3));
	        if(dta[i]['CreditsTarget']>dta[i]['CreditPerHr'])
	        	bgColor.push('red');
	        else
	        	bgColor.push('green');
	        if(dta[i]['CreditsTarget']>(totalCredits/(i+1)).toFixed(3))
	        	bgYColor.push('red');
	        else
	        	bgYColor.push('#9FFF33');
	        row += "<td>" + dta[i]['QAScore'] + "</td>";
	      //  row += "<td>" + dta[i]['QARank'] + "</td>";
	      //  row += "<td>" + dta[i]['QA_Score'] + "</td>";
	        qualityscore.push(dta[i]['QAScore']);
	        totalQA=totalQA+dta[i]['QAScore'];
	       // row += "<td>" + (totalQA/(i+1)).toFixed(3) + "</td>"
	        row += "<td>" + dta[i]['QATarget'] + "</td>";
	        qualityTarget.push(dta[i]['QATarget']);
	        if(dta[i]['QAScore']<90) //Tier5
	        	bgColor1.push('red');
	        else if(dta[i]['QAScore']>=90 && dta[i]['QAScore']<=95) //Tier4
	        	bgColor1.push('ec6c04');
	        else if(dta[i]['QAScore']>95 && dta[i]['QAScore']<=97.5)  //Tier3
	        	bgColor1.push('green');
	        else 
	        	bgColor1.push('#74c474');//Tier 2
	        
	        						        
	        if(dta[i]['QATarget']>(totalQA/(i+1)).toFixed(3))
	        	bgYColor1.push('red');
	        else
	        	bgYColor1.push('#9FFF33');
	        row += "<td>" + dta[i]['Stellarating'] + "</td>";
	      //  row += "<td>" + dta[i]['StellaRank'] + "</td>";
	        //row += "<td>" + dta[i]['StellaScore'] + "</td>";
	        stellascore.push(dta[i]['Stellarating']);
	        totalStella=totalStella+dta[i]['Stellarating'];
	        //row += "<td>" + (totalStella/(i+1)).toFixed(3) + "</td>"
	        row += "<td>" + dta[i]['StellaTarget'] + "</td>";
	        stellaTarget.push(dta[i]['StellaTarget']);
	        if(dta[i]['Stellarating']<4.30) //Tier5
	        	bgColor2.push('red');
	        else if(dta[i]['Stellarating']>=4.3 && dta[i]['Stellarating']<4.40 ) //Tier4
	        	bgColor2.push('ec6c04');
	        else if(dta[i]['Stellarating']>=4.40 && dta[i]['Stellarating']<4.50 ) //Tier3
	        	bgColor2.push('green');
	        else if(dta[i]['Stellarating']>=4.50 ) //Tier2
	        	bgColor2.push('#74c474');
	        	
	        
	        if(dta[i]['StellaTarget']>(totalStella/(i+1)).toFixed(3))
	        	bgYColor2.push('red');
	        else
	        	bgYColor2.push('#9FFF33');
	        row += "<td>" + dta[i]['SA'] + "</td>";
	       // row += "<td>" + dta[i]['SARank'] + "</td>";
	        //row += "<td>" + dta[i]['SAScore'] + "</td>";
	        sascore.push(dta[i]['SA']);
	        totalSA=totalSA+dta[i]['SA'];
	        
	        //row += "<td>" + (totalSA/(i+1)).toFixed(3) + "</td>"
	        row += "<td>" + dta[i]['SATarget'] + "</td>";
	        saTarget.push(dta[i]['SATarget']);
	        if(dta[i]['SA']<87.5) //Tier5
	        	bgColor3.push('red');
	        else if(dta[i]['SA']>=87.5 && dta[i]['SA']<90 ) //Tier4
	        	bgColor3.push('ec6c04');
	        else if(dta[i]['SA']>=90 && dta[i]['SA']<92.5 ) //Tier3
	        	bgColor3.push('green');
	        else
	        	bgColor3.push('#74c474');
	        row += "<td>" + dta[i]['AHT'] + "</td>";
	       // row += "<td>" + dta[i]['AHTRAnk'] + "</td>";
	       // row += "<td>" + dta[i]['AHTScore'] + "</td>";
	        ahtscore.push(dta[i]['AHT']);
	        totalAht=totalAht+dta[i]['AHT'];
	        row += "<td>" + dta[i]['AHTTarget'] + "</td>";
	        ahtTarget.push(dta[i]['AHTTarget']);
	        if(dta[i]['AHT']>660)  //Tier5
	        	bgColor4.push('red');
	        else if((dta[i]['AHT']<=660) && (dta[i]['AHT']>630)) //Tier4
	        	bgColor4.push('#ec6c04');
	        else if((dta[i]['AHT']<=630) && (dta[i]['AHT']>600)) //Tier3
	        		bgColor4.push('green');
	        else
	        	bgColor4.push('#74c474'); //Tier2
				
				
	        row += "<td>" + dta[i]['CMSDefectPer'] + "</td>";
	       // row += "<td>" + dta[i]['CMSRank'] + "</td>";
	        //row += "<td>" + dta[i]['CMSScore'] + "</td>";
	        cmsscore.push(dta[i]['CMSDefectPer']);
	        totalCms=totalCms+dta[i]['CMSDefectPer'];
	        row += "<td>" + dta[i]['CMSTarget'] + "</td>";
	        cmsTarget.push(dta[i]['CMSTarget']);
	        if(dta[i]['CMSDefectPer'] >1.5) //Tier5
	        	bgColor5.push('red');
	        else if(dta[i]['CMSDefectPer'] <=1.5 && dta[i]['CMSDefectPer'] >1.00) //Tier4
	        	bgColor5.push('#ec6c04');
	        else if(dta[i]['CMSDefectPer'] <=1.0 && dta[i]['CMSDefectPer'] >0.5) //Tier3
	        	bgColor5.push('green');
	        else
	        	bgColor5.push('#74c474');
	       // row += "<td>" + dta[i]['OutOf'] + "</td>";
	        row += "</tr>";
	        
	        if(i==len-1){
	        	debugger;
	        	var row1 = "<tr>";
	        	ytdCredits.push((totalCredits/(i+1)).toFixed(3));
	        	ytdCollection.push((totalCredits/(i+1)).toFixed(3));
	        	creditYtdTarget.push((totalCreditTarget/(i+1)).toFixed(3));
	        	targetCollection.push((totalCreditTarget/(i+1)).toFixed(3));
	        	//row1 += "<td>" + dta[i]['Month'] + "</td>";
	        	row1 += "<td>" + dta[i]['EmpId'] + "</td>"
	        	row1 += "<td>" + dta[i]['Name'] + "</td>";
	        	row1 += "<td>" + dta[i]['Tl'] + "</td>";
	        	row1 += "<td>" + dta[i]['Dept'] + "</td>";
	        	decimalToFraction(sumOfRanks/(i+1));
	        	row1 += "<td>" +  dta[i]['YTDGlobalRank'] + "</td>";
	        	$('#headingGR').text("Global Rank " + dta[i]['YTDGlobalRank'])
		        row1 += "<td>" + (totalCredits/(i+1)).toFixed(3) + "</td>";
		        ytdQA.push((totalQA/(i+1)).toFixed(3));
		        ytdCollection.push((totalQA/(i+1)).toFixed(3));
		        row1 += "<td>" + (totalQA/(i+1)).toFixed(3) + "</td>";
	        	qualityYtdTarget.push(dta[i]['QATarget'].toFixed(3))
	        	targetCollection.push(dta[i]['QATarget'].toFixed(3));
	        	ytdStella.push((totalStella/(i+1)).toFixed(3));
	        	ytdCollection.push((totalStella/(i+1)).toFixed(3));
	        	row1 += "<td>" + (totalStella/(i+1)).toFixed(3) + "</td>";
	        	stellaYtdTarget.push(dta[i]['StellaTarget'].toFixed(3));
	        	targetCollection.push(dta[i]['StellaTarget'].toFixed(3));
	        	ytdSA.push((totalSA/(i+1)).toFixed(3));
	        	ytdCollection.push((totalSA/(i+1)).toFixed(3));
	        	row1 += "<td>" + (totalSA/(i+1)).toFixed(3) + "</td>";
	        	saYtdTarget.push(dta[i]['SATarget']);
	        	targetCollection.push(dta[i]['SATarget'])
	        	ytdAht.push((totalAht/(i+1)).toFixed(3));
	        	ytdCollection.push((totalAht/(i+1)).toFixed(3));
	        	row1 += "<td>" + (totalAht/(i+1)).toFixed(3) + "</td>";
	        	ahtYtdTarget.push(dta[i]['AHTTarget']);
	        	targetCollection.push(dta[i]['AHTTarget']);
	        	ytdCms.push((totalCms/(i+1)).toFixed(3));
	        	ytdCollection.push((totalCms/(i+1)).toFixed(3));
	        	row1 += "<td>" + (totalCms/(i+1)).toFixed(3) + "</td>";
	        	cmsYtdTarget.push(dta[i]['CMSTarget']);
	        	targetCollection.push(dta[i]['CMSTarget']);
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
    	      color: "#FE777B",
    	    });
    	Chart.register(ChartDataLabels);
    	chrt=new Chart(ctx, {
    	    type: 'bar',
    	    plugins: [ChartDataLabels],
    	    data: {
    	      labels: months,
    	      datasets: [{ 
                    label: 'Target', 
                    data: creditTarget, 
                    type: 'bar', 
                    backgroundColor: '#8F908B',
                    //barPercentage: 0.2,
                   // categoryPercentage: 1.0
		                color: 'red'
                },
                {
	    	        label: 'Credits',
	    	        type: 'bar',
	    	        data: creditscore,
	    	        borderWidth: 1,
	    	        borderColor: "black",
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
	                    data: qualityTarget, 
	                    type: 'bar', 
	                    backgroundColor: '#8F908B',
	                    //barPercentage: 0.2,
	                   // categoryPercentage: 1.0
	                    font: {
			                color: 'red'
			              }
	                },
    	    	  {
    	        label: 'Quality',
    	        data: qualityscore,
    	        borderWidth: 1,
    	        borderColor: "black",
    	        backgroundColor: bgColor1,
    	       // barPercentage: 0.2
    	      }
                ]
    	    },
    	    options: options
    	  });
    	
    	 ctx2=$('#myChart2')[0].getContext("2d");
    	/*Chart.defaults.set("plugins.datalabels", {
    	      color: "#FE777B",
    	    });
    	Chart.register(ChartDataLabels);*/
    	chrt2=new Chart(ctx2, {
    	    type: 'bar',
    	    plugins: [ChartDataLabels],
    	    data: {
    	      labels: months,
    	      datasets: [
    	    	  { 
    	    		  label: 'Target', 
	                    data: stellaTarget, 
	                    type: 'bar', 
	                    backgroundColor: '#8F908B',
	                    //barPercentage: 0.2,
	                   // categoryPercentage: 1.0
	                    font: {
			                color: 'red'
			              }
	                },
    	    	  {
    	        label: 'Stella Star',
    	        data: stellascore,
    	        borderWidth: 1,
    	        borderColor: "black",
    	        backgroundColor: bgColor2,
    	       // barPercentage: 0.2
    	      }
    	     ]
    	    },
    	    options: options
    	  });
    	
    	 ctx3=$('#myChart3')[0].getContext("2d");
    	/*Chart.defaults.set("plugins.datalabels", {
    	      color: "#FE777B",
    	    });
    	Chart.register(ChartDataLabels);*/
    	chrt3=new Chart(ctx3, {
    	    type: 'bar',
    	    plugins: [ChartDataLabels],
    	    data: {
    	      labels: months,
    	      datasets: [
    	    	  { 
    	    		  label: 'Target', 
	                    data: saTarget, 
	                    type: 'bar', 
	                    backgroundColor: '#8F908B',
	                    //barPercentage: 0.2,
	                   // categoryPercentage: 1.0
	                    font: {
			                color: 'red'
			              }
	                },
    	    	  {
    	        label: 'Schedule Adherence',
    	        data: sascore,
    	        borderWidth: 1,
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
	                    data: ahtTarget, 
	                    type: 'bar', 
	                    backgroundColor: '#8F908B',
	                    //barPercentage: 0.2,
	                   // categoryPercentage: 1.0
	                    font: {
			                color: 'red'
			              }
	                },
    	    	  {
    	        label: 'AHT',
    	        data: ahtscore,
    	        borderWidth: 1,
    	        borderColor: "black",
    	        backgroundColor: bgColor4,
    	       // barPercentage: 0.2
    	      }
                ]
    	    },
    	    options: options
    	  });
    	
    	 ctx5=$('#myChart5')[0].getContext("2d");
    	/*Chart.defaults.set("plugins.datalabels", {
    	      color: "#FE777B",
    	    });
    	Chart.register(ChartDataLabels);*/
    	chrt5=new Chart(ctx5, {
    	    type: 'bar',
    	    plugins: [ChartDataLabels],
    	    data: {
    	      labels: months,
    	      datasets: [
    	    	  { 
    	    		  label: 'Target', 
	                    data: cmsTarget, 
	                    type: 'bar', 
	                    backgroundColor: '#8F908B',
	                    //barPercentage: 0.2,
	                   // categoryPercentage: 1.0
	                    font: {
			                color: 'red'
			              }
	                },
    	    	  {
    	        label: 'CMS Defect%',
    	        data: cmsscore,
    	        borderWidth: 1,
    	        borderColor: "black",
    	        backgroundColor: bgColor5,
    	       // barPercentage: 0.2
    	      }
                ]
    	    },
    	    options: options
    	  });
    	console.log("Scores = " + creditscore);
    	
    	ctx6=$('#myYtdChart')[0].getContext("2d");
    	/*Chart.defaults.set("plugins.datalabels", {
    	      color: "#FE777B",
    	    });
    	Chart.register(ChartDataLabels);*/
    	chrt6=new Chart(ctx6, {
    	    type: 'bar',
    	    plugins: [ChartDataLabels],
    	    data: {
    	      labels: ['Global Rank'],
    	      datasets: [
    	    	  { 
    	    		  label: 'Out of', 
	                    data: outOf, 
	                    type: 'bar', 
	                    backgroundColor: '#8F908B',
	                    //barPercentage: 0.2,
	                   // categoryPercentage: 1.0
	                    font: {
			                color: 'red'
			              }
	                },
	                {
    	        label: 'Global Rank',
    	        data: globalRank,
    	        borderWidth: 1,
    	        borderColor: "black",
    	        backgroundColor: bgColor5,
    	       // barPercentage: 0.2
    	      }
                ]
    	    },
    	    options: options
    	  });
    	
    	//chrt.update();
    	//document.getElementById('myChart').width = 200;
    	
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
	    	//$('#divYtdcharts').hide();
	    	chrt.data.datasets[1].data=creditscore;
	    	chrt.data.datasets[0].data = creditTarget;
	    	chrt.data.labels=months;
	    	chrt1.data.datasets[1].data=qualityscore;
	    	chrt1.data.datasets[0].data=qualityTarget;
	    	chrt1.data.labels=months;
	    	chrt2.data.datasets[1].data=stellascore;
	    	chrt2.data.datasets[0].data=stellaTarget;
	    	chrt2.data.labels=months;
	    	chrt3.data.datasets[1].data=sascore;
	    	chrt3.data.datasets[0].data=saTarget
	    	chrt3.data.labels=months;
	    	chrt4.data.datasets[1].data=ahtscore;
	    	chrt4.data.datasets[0].data=ahtTarget
	    	chrt4.data.labels=months;
	    	chrt5.data.datasets[1].data=cmsscore;
	    	chrt5.data.datasets[0].data=cmsTarget;
	    	chrt5.data.labels=months;
	    	chrt.update();
	    	chrt1.update();
	    	chrt2.update();
	    	chrt3.update();
	    	chrt4.update();
	    	chrt5.update();
	    	$('#divcharts').show();
	    }
	    else if(status=='YTD')
	    	{
	    		//$('#divYtdcharts').hide();
		    	chrt.data.datasets[1].data=ytdCredits;
		    	chrt.data.datasets[0].data = creditYtdTarget;
		    	chrt.data.datasets[0].type = 'bar';
		    	chrt.data.labels=['YTD'];
		    	chrt1.data.datasets[1].data=ytdQA;
		    	chrt1.data.datasets[0].data = qualityYtdTarget;
		    	chrt1.data.datasets[0].type = 'bar';
		    	chrt1.data.labels=['YTD'];
		    	chrt2.data.datasets[1].data=ytdStella;
		    	chrt2.data.datasets[0].data=stellaYtdTarget;
		    	chrt2.data.datasets[0].type = 'bar';
		    	chrt2.data.labels=['YTD'];
		    	chrt3.data.datasets[1].data=ytdSA;
		    	chrt3.data.datasets[0].data=saYtdTarget;
		    	chrt3.data.datasets[0].type = 'bar';
		    	chrt3.data.labels=['YTD'];
		    	chrt4.data.datasets[1].data=ytdAht;
		    	chrt4.data.datasets[0].data=ahtYtdTarget;
		    	chrt4.data.datasets[0].type = 'bar';
		    	chrt4.data.labels=['YTD'];
		    	chrt5.data.datasets[1].data=ytdCms;
		    	chrt5.data.datasets[0].data=cmsYtdTarget;
		    	chrt5.data.datasets[0].type = 'bar';
		    	chrt5.data.labels=['YTD'];
		    	chrt.update();
		    	chrt1.update();
		    	chrt2.update();
		    	chrt3.update();
		    	chrt4.update();
		    	chrt5.update();
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
});

	