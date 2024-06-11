$(document).ready(function(){
   
	//$('#ifrm').attr('src','pages/CSScoreAgentCard.jsp');
	
	const route=(event)=>{
		event=event||window.event;
		event.preventDefault();
		window.history.pushState({},"",event.target.href)
		//alert(event.target.href);
		debugger;
		if(event.target.href=="http://localhost:8080/ScorecardDashboard/")
			//$('#ifrm').attr('src','pages/CSScoreAgentCard.jsp');
			//$('#content').load("CRAgentScorecard.jsp");
			window.location.href = 'http://localhost:8080/ScorecardDashboard/';
		else if(event.target.href=="http://localhost:8080/about"){
			//$('#ifrm').remove();
			//$('#ifrm').attr('src','CRAgentScorecard.jsp');
			window.location.href = 'http://localhost:8080/ScorecardDashboard/CRAgentScorecard.jsp';
		}
	}
	window.route=route;
});

