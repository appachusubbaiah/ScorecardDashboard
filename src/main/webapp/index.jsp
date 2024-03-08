<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script src=
"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
    </script>
 
<title>CS India Scorecard</title>
<link rel="stylesheet" href=css/SC.css>
</head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
         rel = "stylesheet">
<script type="text/JavaScript">
</script>
<script src="js/SC.js"></script> 
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.0.0/dist/chart.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.2.0/chartjs-plugin-datalabels.min.js"></script>
<body id="pgeBody" style="background-color:powderblue;">
<div class="fixTableHead">
<table id = 'tbl' style="width: 100%;border:1px solid black">
				<caption class = 'capClass' >CR Scorecard</caption>
		<thead>
				<tr>
					<th>Month&nbsp;</th>
				<!--	<th  width="150px">UC ID</th> -->
					<th>Employee Id</th>
					<th>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
					<th>Team Leader</th>
				<!-- <th>Location</th> -->
					<th>Dept</th>
					<th>Global rank</th>
				<!-- <th>Total Points</th> -->
					<th>Credits Per Hour</th>
				<!-- <th>Credit Rank</th>
					<th>Credit Score</th>  -->
					<th>Credit Target</th>
					<th>Quality Score</th>
				<!-- <th>Quality Rank</th>
					<th>Quality_Score</th>  -->
					<th>Quality Target</th>
					<th>Stella Star Rating</th>
				<!-- <th>Star Rating Rank</th>
					<th>Star Rating Score</th>  -->
					<th>Star Target</th>
					<th>Schedule Adherence</th>
				<!-- <th>Schedule Adherence Rank</th>
					<th>Schedule Adherence Score</th>  -->
					<th>Schedule Adherence Target</th>
					<th>I/B AHT</th>
				<!-- <th>I/B AHT Rank</th>
					<th>I/B AHT Score</th> -->
					<th>I/B AHT Target</th>
					<th>CMS Defect %</th>
				<!-- <th>CMS Defect Rank</th>
					<th>CMS Defect Score</th> -->
					<th>CMS Defect Target</th>
				<!-- 	<th>Out of</th> -->
				</tr>
		</thead>
		<tbody  id = 'data'>
		</tbody >
	</table>
</div>
<div style="margin-top: 30px;height:60%;display: inline-flex">
		<canvas id='myChart' style="width:50%;max-width:300px;height:50%;background: #E9F1F9;padding: 8px;margin-left: 10px"></canvas>
		<canvas id='myChart1' style="width:50%;max-width:300px;height:50%;background: #E9F1F9;padding: 8px;margin-left: 10px"></canvas>
		<canvas id='myChart2' style="width:50%;max-width:300px;height:50%;background: #E9F1F9;padding: 8px;margin-left: 10px"></canvas>
		<canvas id='myChart3' style="width:50%;max-width:300px;height:50%;background: #E9F1F9;padding: 8px;margin-left: 10px"></canvas>
	</div>
	<div style="margin-top: 30px;height:60%;display: inline-flex"	>
		<canvas id='myChart4' style="width:50%;max-width:300px;height:50%;background: #E9F1F9;padding: 8px;margin-left: 10px"></canvas>
		<canvas id='myChart5' style="width:50%;max-width:300px;height:50%;background: #E9F1F9;padding: 8px;margin-left: 10px"></canvas>
	</div>
</body>
</html>