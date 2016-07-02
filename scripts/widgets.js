// GLOBAL CHART.JS CONFIGURATIONS

Chart.defaults.global.defaultFontColor = 'gray';
Chart.defaults.global.defaultFontFamily = 'HelveticaNeue';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontStyle = 'normal';
Chart.defaults.global.responsive = true;
Chart.defaults.global.responsiveAnimationDuration = 0;
Chart.defaults.global.maintainAspectRatio = true;


// Daily Traffic Widget (Bar Chart)

var trafficDaily = document.getElementById('traffic-bar');


var trafficDailyData = {
		labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		datasets: [ 
			{
				backgroundColor: '#7379BD',
				data: [75, 100, 175, 125, 225, 200, 100],
			}
		]
}

var trafficDailyChart = new Chart(trafficDaily, {
	type: 'bar',
	data: trafficDailyData
});