google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){

	$.ajax({
		url: "js/data.json",
		beforeSend: function(xhr){
			if(xhr.overrideMimeType){
				xhr.overrideMimeType("application/json");
			}
		},
		contentType: "application/json",
		dataType: "json",
		success: function(DataFromJSON){
			var data = new google.visualization.DataTable();
			data.addColumn('number', 'Age');
			data.addColumn('number', 'Weight');
			for (var i = 0; i < DataFromJSON.length; i++) {
				data.addRow([DataFromJSON[i].age , DataFromJSON[i].weight]);
			};

			var options = {
				width:800,
				height:500,
				chart: {
					title: "Age vs Weight",
					subtitle: "based on 100 test subjects"
				},
				hAxis: {
					title: "Age"
				},
				vAxis: {
					title: "Weight"
				}
			}

			var chart = new google.visualization.ScatterChart(document.getElementById('chart'));
			chart.draw(data, options);
		},
		error: function(){
			console.log("error");
		}
	});

}


