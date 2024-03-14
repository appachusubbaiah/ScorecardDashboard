$(document).ready(function(){
	var urlStr="http://localhost:8080/ScorecardDashboard/api/";
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
		    barPercentage: 0.8,
            categoryPercentage: 0.5,
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
	$.get("http://localhost:8080/ScorecardDashboard/api/scorecard/", function(data, status){
		console.log(status);
		console.log(data);	
		debugger;
		/*assesorEmail=data["EmailId"];
			$('#assessor').val(data["Name"]);
			$('#dept').val(data["Department"]);
			$('#location').val(data["Location"]);*/
				var dataMarkers = { "Month": null,"FusionId":"197043"};
				$('#heading').text($('#heading').text() + " for " + data.Name)
				if(data.Department == 'Reverse CS')
					urlStr = urlStr + "scorecard/";
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
					    url: "http://localhost:8080/ScorecardDashboard/api/scorecard/getCRScoreCard",
					    // The key needs to match your method's input parameter (case-sensitive).
					    data: JSON.stringify(dataMarkers),
					    contentType: "application/json",
					    //dataType: "json",
					    success: function(dta){
					    	/*while(scores.length > 0) {
								scores.pop();
							}*/
					    	
					    	console.log(dta);
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
						        if(dta[i]['QATarget']>dta[i]['QAScore'])
						        	bgColor1.push('red');
						        else
						        	bgColor1.push('green');
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
						        if(dta[i]['StellaTarget']>dta[i]['Stellarating'])
						        	bgColor2.push('red');
						        else
						        	bgColor2.push('green');
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
						        if(dta[i]['SATarget']>dta[i]['SA'])
						        	bgColor3.push('red');
						        else
						        	bgColor3.push('green');
						        row += "<td>" + dta[i]['AHT'] + "</td>";
						       // row += "<td>" + dta[i]['AHTRAnk'] + "</td>";
						       // row += "<td>" + dta[i]['AHTScore'] + "</td>";
						        ahtscore.push(dta[i]['AHT']);
						        totalAht=totalAht+dta[i]['AHT'];
						        row += "<td>" + dta[i]['AHTTarget'] + "</td>";
						        ahtTarget.push(dta[i]['AHTTarget']);
						        if(dta[i]['AHT']>dta[i]['AHTTarget'])
						        	bgColor4.push('red');
						        else if((dta[i]['AHT']<=660) && (dta[i]['AHT']>630))
						        	bgColor4.push('#ec6c04');
						        else if((dta[i]['AHT']<=630) && (dta[i]['AHT']>600))
						        		bgColor4.push('green');
						        else
						        	bgColor4.push('blue');
						        row += "<td>" + dta[i]['CMSDefectPer'] + "</td>";
						       // row += "<td>" + dta[i]['CMSRank'] + "</td>";
						        //row += "<td>" + dta[i]['CMSScore'] + "</td>";
						        cmsscore.push(dta[i]['CMSDefectPer']);
						        totalCms=totalCms+dta[i]['CMSDefectPer'];
						        row += "<td>" + dta[i]['CMSTarget'] + "</td>";
						        cmsTarget.push(dta[i]['CMSTarget']);
						        if(dta[i]['CMSTarget']<dta[i]['CMSDefectPer'])
						        	bgColor5.push('red');
						        else
						        	bgColor5.push('green');
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
						        	row1 += "<td>" + sumOfRanks/(i+1) + "</td>";
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
					                    type: 'line', 
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
						    	        borderColor: "red",
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
						                    type: 'line', 
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
					    	        borderColor: "red",
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
						                    type: 'line', 
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
					    	        borderColor: "red",
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
						                    type: 'line', 
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
					    	        borderColor: "red",
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
						                    type: 'line', 
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
					    	        borderColor: "red",
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
						                    type: 'line', 
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
					    	        borderColor: "red",
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
					    	        borderColor: "red",
					    	        backgroundColor: bgColor5,
					    	       // barPercentage: 0.2
					    	      }
					                ]
					    	    },
					    	    options: options
					    	  });
					    	
					    	chrt.update();
					    	$('html,body').css('cursor','default');
					    	document.getElementById('myChart').width = 200;
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

	