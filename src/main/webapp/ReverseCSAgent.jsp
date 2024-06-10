<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script src=
"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
    </script>
 
<title>Reverse CS Scorecard</title>
<link rel="stylesheet" href=css/SC.css>
</head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
         rel = "stylesheet">
<script type="text/JavaScript">
</script>
<script src="js/RevCS.js"></script> 
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.0.0/dist/chart.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.2.0/chartjs-plugin-datalabels.min.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<body id="pgeBody" style="background-color:powderblue;">
<div id="dialog" title="Basic dialog">
  <p id="dialogText"></p>
</div>
<div id ='mainDiv'>
 <div id="forwardDashboard" style="overflow-x: hidden;">
			 <div  id= 'tblTop1'>
				<table style="width:100%;font-size: 15px;">
			  	<tr>
			    	<th style="font-size:25px;" colspan="2" id = "heading">Reverse CS Scorecard</th>
			    	<th style="font-size:25px;" colspan="2" id = "headingGR">Global Rank </th>
			    	<th colspan="2" id = "heading"><img id="logo" src=""  width="40" height="40" ></th>
			  	</tr>
			  	<tr>
			    	<td rowspan="2">View</td>
			    	<td rowspan="2"><select style="font-size:15px" name="cboView" id="cboView">
					    	<option>Graphs</option>
					    	<option>Tabular</option>
			    		</select>
			    	</td>
			    	<td id = "lblBifor" rowspan="2">Break up</td>
			    		
			    	<td rowspan="2"><select style="font-size:15px" name="cboBifor" id="cboBifor">
					    	<option>Monthly</option>
					    	<option>YTD</option>
			    		</select>
			    	</td>
			    	
			    	<td id = "lblBifor" rowspan="2">Peers</td>
			    	<td rowspan="2"><select style="font-size:15px" name="cboPeers" id="cboPeers">
			    		<option value="" disabled selected hidden >......Please select the Agent..............</option></select>
			    	</td>
			    	<!-- <td  rowspan="3"><a id = 'tlScorecard' href="#">TL Scorecard</a></td>
			    	<td  rowspan="3"><a id = 'amScorecard' href="#">AM Scorecard</a></td>  
			    	 -->
			  		  </table>
				</div>
			</div>
			
<marquee  id = "topTen" behavior="scroll" direction="left" scrollamount="2">
</marquee>


			
<div class="fixTableHead">
<table id = 'tbl' style="width: 100%;border:1px solid black">
				<caption class = 'capClass' >Reverse CS Monthly Scorecard</caption>
		<thead>
				<tr>
					<th>Month&nbsp;</th>
					<th>Employee Id</th>
					<th>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
					<th>Team Leader</th>
					<th>Dept</th>
					<th>Global Rank</th>
					<th>Adherence</th>
					<th>Adherence Target</th>
					<th>AHT Score</th>
					<th>AHT Target</th>
					<th>OCR</th>
					<th>OCR Target</th>
					<th>QA</th>
					<th>QA Target</th>
					<th>Star Rating</th>
					<th>Star Target</th>
					<th>Skillport Completed %</th>
					<th>Skillport Target</th>
					<th>VOC</th>
					<th>VOC Target</th>
					<th>CMS</th>
					<th>CMS Target</th>
					<th>ICW</th>
					<th>ICW Target</th>
				</tr>
		</thead>
		<tbody  id = 'data'>
		</tbody >
	</table>
	
	<div class="fixTableHead">
		<table id = 'tbl1' style="width: 100%;border:1px solid black">
				<caption class = 'capClass' >CR YTD Scorecard</caption>
				<thead>
				<tr>
				<!--	<th>Month&nbsp;</th> -->
				<!--	<th  width="150px">UC ID</th> -->
					<th>Employee Id</th>
					<th>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
					<th>Team Leader</th>
				<!-- <th>Location</th> -->
					<th>Dept</th>
					<th>Global rank</th>
					<th>YTD Adherence</th>
					<th>YTD AHT</th>
					<th>YTD OCR</th>
					<th>YTD QA</th>
					<th>YTD Star</th>
					<th>YTD Skillport</th>
					<th>YTD VOC</th>
					<th>YTD CMS</th>
					<th>YTD ICW</th>
				</tr>
		</thead>
		
		<tbody  id = 'data1'>
		</tbody >
	</table>
	</div>
</div>
	<div id = 'divcharts'>
		<div style="margin-top: 30px;height:60%;display: inline-flex">
			<canvas id='myChart' style="width:70%;max-width:450px;max-height:200px;height:100%;background: #E9F1F9;padding: 8px;margin-left: 10px"></canvas>
			<canvas id='myChart1' style="width:70%;max-width:450px;max-height:200px;height:100%;background: #E9F1F9;padding: 8px;margin-left: 10px"></canvas>
			<canvas id='myChart2' style="width:70%;max-width:450px;max-height:200px;height:70%;background: #E9F1F9;padding: 8px;margin-left: 10px"></canvas>
		</div>
		<div style="margin-top: 30px;height:60%;display: inline-flex"	>
			<canvas id='myChart4' style="width:70%;max-width:450px;max-height:200px;height:100%;background: #E9F1F9;padding: 8px;margin-left: 10px"></canvas>
			<canvas id='myChart5' style="width:70%;max-width:450px;max-height:200px;height:100%;background: #E9F1F9;padding: 8px;margin-left: 10px"></canvas>
			<canvas id='myChart3' style="width:70%;max-width:450px;max-height:200px;height:100%;background: #E9F1F9;padding: 8px;margin-left: 10px"></canvas>
		</div>
		<div style="margin-top: 30px;height:60%;display: inline-flex"	>
			<canvas id='myChart6' style="width:70%;max-width:450px;max-height:200px;height:100%;background: #E9F1F9;padding: 8px;margin-left: 10px"></canvas>
			<canvas id='myChart7' style="width:70%;max-width:450px;max-height:200px;height:100%;background: #E9F1F9;padding: 8px;margin-left: 10px"></canvas>
			<canvas id='myChart8' style="width:70%;max-width:450px;max-height:200px;height:100%;background: #E9F1F9;padding: 8px;margin-left: 10px"></canvas>
		</div>
	</div>
	
	 
</div>
</body>
</html>