$(document).ready(function(){
	
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
					    	debugger;
					    	console.log(dta);
					    	for (var i = 0, len = dta.length; i < len; i++) {
								var row = "<tr>";
						        row += "<td>" + dta[i]['Month'] + "</td>";
						        row += "<td>" + dta[i]['UcId'] + "</td>";
						        row += "<td>" + dta[i]['EmpId'] + "</td>"
						        row += "<td>" + dta[i]['Name'] + "</td>";
						        row += "<td>" + dta[i]['Tl'] + "</td>";
						        row += "<td>" + dta[i]['Location'] + "</td>";
						        row += "<td>" + dta[i]['Dept'] + "</td>";
						        row += "<td>" + dta[i]['GlobalRank'] + "</td>";
						        row += "<td>" + dta[i]['TotalPoints'] + "</td>";
						        row += "<td>" + dta[i]['CreditPerHr'] + "</td>";
						        row += "<td>" + dta[i]['CreditRank'] + "</td>";
						        row += "<td>" + dta[i]['CreditScore'] + "</td>";
						        row += "<td>" + dta[i]['QAScore'] + "</td>";
						        row += "<td>" + dta[i]['QARank'] + "</td>";
						        row += "<td>" + dta[i]['QA_Score'] + "</td>";
						        row += "<td>" + dta[i]['Stellarating'] + "</td>";
						        row += "<td>" + dta[i]['StellaRank'] + "</td>";
						        row += "<td>" + dta[i]['StellaScore'] + "</td>";
						        row += "<td>" + dta[i]['SA'] + "</td>";
						        row += "<td>" + dta[i]['SARank'] + "</td>";
						        row += "<td>" + dta[i]['SAScore'] + "</td>";
						        row += "<td>" + dta[i]['AHT'] + "</td>";
						        row += "<td>" + dta[i]['AHTRAnk'] + "</td>";
						        row += "<td>" + dta[i]['AHTScore'] + "</td>";
						        row += "<td>" + dta[i]['CMSDefectPer'] + "</td>";
						        row += "<td>" + dta[i]['CMSRank'] + "</td>";
						        row += "<td>" + dta[i]['CMSScore'] + "</td>";
						        row += "<td>" + dta[i]['OutOf'] + "</td>";
						        row += "</tr>";
						        $('#data').append(row);
						        $('html,body').css('cursor','default');
					    	  }
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
		    	$('#dialog').dialog("open");
				$('html,body').css('cursor','default');*/
		  //});	
	});
  
});

	