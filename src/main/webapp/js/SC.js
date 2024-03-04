$(document).ready(function(){
	/*var dataMarkers = { "Month":"2024-01-01","FusionId":null}
	$('html,body').css('cursor','wait');
	$.ajax({
	    type: "POST",
	    url: "http://awswauto01d:8080/ScorecardDashboard/api/scorecard/",
	    // The key needs to match your method's input parameter (case-sensitive).
	    data: JSON.stringify(dataMarkers),
	    contentType: "application/json",
	    //dataType: "json",
	    success: function(dta){
	    	$('html,body').css('cursor','default');
	    	console.log(dta);
	    	for (var i = 0, len = dta.length; i < len; i++) {
				var row = "<tr>";
		        row += "<td>" + dta[i]['Month'] + "</td>";
		        row += "<td>" + dta[i]['UCId'] + "</td>";
		        row += "<td>" + dta[i]['EmpId'] + "</td>"
		        row += "<td>" + dta[i]['Name'] + "</td>";
		        row += "<td>" + dta[i]['TeamLeader'] + "</td>";
		        row += "<td>" + dta[i]['Region'] + "</td>";
		        row += "<td>" + dta[i]['Site'] + "</td>";
		        row += "<td>" + dta[i]['Score'] + "</td>";
		        row += "<td>" + dta[i]['GlobalRank'] + "</td>";
		        row += "<td>" + dta[i]['OCRPercentage'] + "</td>";
		        row += "<td>" + dta[i]['OCRRank'] + "</td>";
		        row += "<td>" + dta[i]['OCRScore'] + "</td>";
		        row += "<td>" + dta[i]['OCRCredits'] + "</td>";
		        row += "<td>" + dta[i]['OCRCreditsRank'] + "</td>";
		        row += "<td>" + dta[i]['OCRCreditScore'] + "</td>";
		        row += "<td>" + dta[i]['QAScore'] + "</td>";
		        row += "<td>" + dta[i]['QARank'] + "</td>";
		        row += "<td>" + dta[i]['QAPoints'] + "</td>";
		        row += "<td>" + dta[i]['StellaStarRating'] + "</td>";
		        row += "<td>" + dta[i]['StellaStarRatingRank'] + "</td>";
		        row += "<td>" + dta[i]['StellaStarRatingScore'] + "</td>";
		        row += "<td>" + dta[i]['ScheduleAdherence'] + "</td>";
		        row += "<td>" + dta[i]['ScheduleAdherenceRank'] + "</td>";
		        row += "<td>" + dta[i]['ScheduleAdherenceScore'] + "</td>";
		        row += "<td>" + dta[i]['AHT'] + "</td>";
		        row += "<td>" + dta[i]['AHTRank'] + "</td>";
		        row += "<td>" + dta[i]['AHTScore'] + "</td>";
		        row += "<td>" + dta[i]['CMSDefectPercentage'] + "</td>";
		        row += "<td>" + dta[i]['CMSDefectRank'] + "</td>";
		        row += "<td>" + dta[i]['CMSDefectScore'] + "</td>";
		        row += "<td>" + dta[i]['SkillPort'] + "</td>";
		        row += "<td>" + dta[i]['SkillPortScore'] + "</td>";
		        row += "<td>" + dta[i]['Nps'] + "</td>";
		        row += "<td>" + dta[i]['NPSRank'] + "</td>";
		        row += "<td>" + dta[i]['NPSScore'] + "</td>";
		        row += "<td>" + dta[i]['RefSoli'] + "</td>";
		        row += "<td>" + dta[i]['RefSoliRank'] + "</td>";
		        row += "<td>" + dta[i]['RefSoliScore'] + "</td>";
		        row += "<td>" + dta[i]['PKT'] + "</td>";
		        row += "<td>" + dta[i]['PKTRank'] + "</td>";
		        row += "<td>" + dta[i]['PKTScore'] + "</td>";
		        row += "<td>" + dta[i]['OutOf'] + "</td>"
		        
		        /*if(data[i]['Compliance']==0)
		        	totalPoints=totalPoints + data[i]['PointsLost'];
		        row += "</tr>";
		        $('#data').append(row);
	    		}
	    	},
	    error: function(errMsg) {
	    	//$('#dialogText').text(errMsg['Message']);
	    	alert(errMsg);
	    	$('html,body').css('cursor','default');
	    }
	});*/	
});


