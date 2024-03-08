$(document).ready(function(){
	var creditscore=[];
	var creditTarget=[];
	var qualityscore=[];
	var qualityTarget=[];
	var stellascore=[];
	var stellaTarget=[];
	var sascore=[];
	var saTarget=[];
	var ahtscore=[];
	var ahtTarget=[];
	var cmsscore=[];
	var cmsTarget=[];
	var months=['Jan'];
	var bgColor=[];
	var bgColor1=[];
	var bgColor2=[];
	var bgColor3=[];
	var bgColor4=[];
	var bgColor5=[];
	let chrt=null;
	let chrt1=null;
	let chrt2=null;
	let chrt3=null;
	let chrt4=null;
	var options = {
		    responsive: false,
		    barPercentage: 0.8,
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
		        intersect: false,
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
	                /*formatter: (value, ctx) => {
	                  let sum = 0;
	                  let dataArr = scores;
	                  //let scores = (value)+"%";
	                  return scores;
	                },*/
	                color: '#0A0B0B',
	                     }
		    }
		};
	$('html,body').css('cursor','wait');
	$.get("http://localhost:8080/ScorecardDashboard/api/scorecard/", function(data, status){
		console.log(status);
		console.log(data);	
		/*assesorEmail=data["EmailId"];
			$('#assessor').val(data["Name"]);
			$('#dept').val(data["Department"]);
			$('#location').val(data["Location"]);*/
				var dataMarkers = { "Month": "2024-01-01","FusionId":"106052"};
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
					    	debugger;
					    	console.log(dta);
					    	for (var i = 0, len = dta.length; i < len; i++) {
								var row = "<tr>";
						        row += "<td>" + dta[i]['Month'] + "</td>";
						       // row += "<td>" + dta[i]['UcId'] + "</td>";
						        row += "<td>" + dta[i]['EmpId'] + "</td>"
						        row += "<td>" + dta[i]['Name'] + "</td>";
						        row += "<td>" + dta[i]['Tl'] + "</td>";
						      //  row += "<td>" + dta[i]['Location'] + "</td>";
						        row += "<td>" + dta[i]['Dept'] + "</td>";
						        row += "<td>" + dta[i]['GlobalRank'] + "</td>";
						      //  row += "<td>" + dta[i]['TotalPoints'] + "</td>";
						        row += "<td>" + dta[i]['CreditPerHr'] + "</td>";
						       // row += "<td>" + dta[i]['CreditRank'] + "</td>";
						       // row += "<td>" + dta[i]['CreditScore'] + "</td>";
						        creditscore.push(dta[i]['CreditPerHr']);
						        row += "<td>" + dta[i]['CreditsTarget'] + "</td>";
						        creditTarget.push(dta[i]['CreditsTarget']);
						        if(dta[i]['CreditsTarget']>dta[i]['CreditPerHr'])
						        	bgColor.push('red');
						        else
						        	bgColor.push('green');
						        row += "<td>" + dta[i]['QAScore'] + "</td>";
						      //  row += "<td>" + dta[i]['QARank'] + "</td>";
						      //  row += "<td>" + dta[i]['QA_Score'] + "</td>";
						        qualityscore.push(dta[i]['QAScore']);
						        row += "<td>" + dta[i]['QATarget'] + "</td>";
						        qualityTarget.push(dta[i]['QATarget']);
						        if(dta[i]['QATarget']>dta[i]['QAScore'])
						        	bgColor1.push('red');
						        else
						        	bgColor1.push('green');
						        row += "<td>" + dta[i]['Stellarating'] + "</td>";
						      //  row += "<td>" + dta[i]['StellaRank'] + "</td>";
						        //row += "<td>" + dta[i]['StellaScore'] + "</td>";
						        stellascore.push(dta[i]['Stellarating']);
						        row += "<td>" + dta[i]['StellaTarget'] + "</td>";
						        stellaTarget.push(dta[i]['StellaTarget']);
						        if(dta[i]['StellaTarget']>dta[i]['Stellarating'])
						        	bgColor2.push('red');
						        else
						        	bgColor2.push('green');
						        row += "<td>" + dta[i]['SA'] + "</td>";
						       // row += "<td>" + dta[i]['SARank'] + "</td>";
						        //row += "<td>" + dta[i]['SAScore'] + "</td>";
						        sascore.push(dta[i]['SA']);
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
						        row += "<td>" + dta[i]['AHTTarget'] + "</td>";
						        ahtTarget.push(dta[i]['AHTTarget']);
						        if(dta[i]['AHTTarget']>dta[i]['AHT'])
						        	bgColor4.push('red');
						        else
						        	bgColor4.push('green');
						        row += "<td>" + dta[i]['CMSDefectPer'] + "</td>";
						       // row += "<td>" + dta[i]['CMSRank'] + "</td>";
						        //row += "<td>" + dta[i]['CMSScore'] + "</td>";
						        cmsscore.push(dta[i]['CMSDefectPer']);
						        row += "<td>" + dta[i]['CMSTarget'] + "</td>";
						        cmsTarget.push(dta[i]['CMSTarget']);
						        if(dta[i]['CMSTarget']>dta[i]['CMSDefectPer'])
						        	bgColor5.push('red');
						        else
						        	bgColor5.push('green');
						       // row += "<td>" + dta[i]['OutOf'] + "</td>";
						        row += "</tr>";
						        $('#data').append(row);
						        $('html,body').css('cursor','default');
					    	  }
					    	
					    	const ctx=$('#myChart')[0].getContext("2d");
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
					                    fillColor: "rgba(220,220,220,0.2)",
					                    strokeColor: "rgba(220,220,220,1)",
					                    pointColor: "rgba(220,220,220,1)",
					                    pointStrokeColor: "#fff",
					                    pointHighlightFill: "#fff",
					                    pointHighlightStroke: "rgba(220,220,220,1)",
					                    //barPercentage: 0.2,
					                   // categoryPercentage: 1.0
					                },
					                {
						    	        label: 'Credits',
						    	        data: creditscore,
						    	        borderWidth: 1,
						    	        borderColor: "red",
						    	        backgroundColor: bgColor,
					                	//barPercentage: 0.2,
					                	//categoryPercentage: 1.0
					                	}
					                ]
					    	    },
					    	    options: options
					    	  });
					    	
					    	const ctx1=$('#myChart1')[0].getContext("2d");
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
						                    label: 'Target %', 
						                    data: qualityTarget, 
						                    type: 'bar', 
						                    fillColor: "rgba(220,220,220,0.2)",
						                    strokeColor: "rgba(220,220,220,1)",
						                    pointColor: "rgba(220,220,220,1)",
						                    pointStrokeColor: "#fff",
						                    pointHighlightFill: "#fff",
						                    pointHighlightStroke: "rgba(220,220,220,1)",
						                    //barPercentage: 0.2
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
					    	
					    	const ctx2=$('#myChart2')[0].getContext("2d");
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
						                    fillColor: "rgba(220,220,220,0.2)",
						                    strokeColor: "rgba(220,220,220,1)",
						                    pointColor: "rgba(220,220,220,1)",
						                    pointStrokeColor: "#fff",
						                    pointHighlightFill: "#fff",
						                    pointHighlightStroke: "rgba(220,220,220,1)",
						                    //barPercentage: 0.2
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
					    	
					    	const ctx3=$('#myChart3')[0].getContext("2d");
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
						                    fillColor: "rgba(220,220,220,0.2)",
						                    strokeColor: "rgba(220,220,220,1)",
						                    pointColor: "rgba(220,220,220,1)",
						                    pointStrokeColor: "#fff",
						                    pointHighlightFill: "#fff",
						                    pointHighlightStroke: "rgba(220,220,220,1)",
						                    //barPercentage: 0.2
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
					    	
					    	const ctx4=$('#myChart4')[0].getContext("2d");
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
						                    fillColor: "rgba(220,220,220,0.2)",
						                    strokeColor: "rgba(220,220,220,1)",
						                    pointColor: "rgba(220,220,220,1)",
						                    pointStrokeColor: "#fff",
						                    pointHighlightFill: "#fff",
						                    pointHighlightStroke: "rgba(220,220,220,1)",
						                    //barPercentage: 0.2
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
					    	
					    	const ctx5=$('#myChart5')[0].getContext("2d");
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
						                    fillColor: "rgba(220,220,220,0.2)",
						                    strokeColor: "rgba(220,220,220,1)",
						                    pointColor: "rgba(220,220,220,1)",
						                    pointStrokeColor: "#fff",
						                    pointHighlightFill: "#fff",
						                    pointHighlightStroke: "rgba(220,220,220,1)",
						                    //barPercentage: 0.2
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
					    	
					    	$('html,body').css('cursor','default');
					    	},
					    error: function(errMsg) {
					    	alert(errMsg);
					    	$('html,body').css('cursor','default');
					    }
			    	});
			})
			.fail(function(xhr, status, error) {
				debugger;
				alert(xhr.responseText);
				/*$('#dialogText').text(xhr.responseJSON['Message']);
		    	$('#dialog').dialog("open");*/
				$('html,body').css('cursor','default');
		  //});	
	});
  
});

	