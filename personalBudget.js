
function setCurrentDate()
{
	var today = new Date();
	var date = today.toISOString().substr(0, 10);
	
	$("#date").val(date);
}



google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() 
{
var data = google.visualization.arrayToDataTable
([
	['Category', 'Amount'],
	['Jedzenie', 1200],
	['Mieszkanie', 521.94],
	['Transport', 194.06],
	['Rozrywka', 21.23],
]);

var options = 
{
	title: 'Wydatki',
	backgroundColor: 'none',
	titleFontSize: 20,
	legendFontSize: 16,
	width: 700,
	height: 250,
	marginBottom: 0,
	is3D: true,
};

var chart = new google.visualization.PieChart(document.getElementById('pieChart'));
chart.draw(data, options);
}