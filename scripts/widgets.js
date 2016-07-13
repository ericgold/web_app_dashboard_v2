// GLOBAL CHART.JS CONFIGURATIONS

Chart.defaults.global.defaultFontColor = 'gray';
Chart.defaults.global.defaultFontFamily = 'HelveticaNeue';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontStyle = 'normal';
Chart.defaults.global.responsive = true;
Chart.defaults.global.responsiveAnimationDuration = 0;
Chart.defaults.global.maintainAspectRatio = true;
Chart.defaults.global.legend.display = false;


// Daily Traffic Widget (Bar Chart)

var trafficDaily = document.getElementById('traffic-bar');

var trafficDailyData = {
		labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		datasets: [ 
			{
				backgroundColor: '#7379BD',
				data: [75, 100, 175, 125, 225, 200, 100],
			},

			{
				backgroundColor: '#83C891',
				data: [60, 80, 120, 70, 180, 150, 70],
			},
			
			{
				backgroundColor: '#76B1BE',
				data: [80, 20, 40, 80, 80, 70, 90],
			}

		]
}

var trafficDailyOptions = {

	scales: {
		xAxes: [{
			categoryPercentage: 0.8,
			barPercentage: 0.8,
			gridLines: {
				offsetGridLines: true,
				drawTicks: false
			}
		}],
		yAxes: [{
			type: 'linear',
			gridLines: {
				offsetGridLines: true,
				drawTicks: false
			},
			ticks: {
				beginAtZero: false,
				stepSize: 50,
			}
		}]
	}
}

var trafficDailyChart = new Chart(trafficDaily, {
	type: 'bar',
	data: trafficDailyData,
	options: trafficDailyOptions
});

