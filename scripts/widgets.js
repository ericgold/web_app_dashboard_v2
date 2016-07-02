// GLOBAL CHART.JS CONFIGURATIONS

Chart.defaults.global.defaultFontColor = 'gray';
Chart.defaults.global.defaultFontFamily = 'HelveticaNeue';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontStyle = 'normal';
Chart.defaults.global.responsive = true;
Chart.defaults.global.responsiveAnimationDuration = 0;
Chart.defaults.global.maintainAspectRatio = true;

// TRAFFIC LINE WIDGET 


//move these defaults to widget branch if they work
Chart.defaults.global.title.display = true;
Chart.defaults.global.title.position = 'top';

var trafficLineWidget = document.getElementById("traffic-line");

var trafficLineData = {

	labels: ["16-22",
			 "23-29", 
			 "30-5", 
			 "6-12", 
			 "13-19", 
			 "20-26", 
			 "27-3", 
			 "4-10", 
			 "11-17", 
			 "18-24", 
			 "25-31"],
	datasets: [
		{
			label: "label",
			fill: true,
			lineTension: 0,
			backgroundColor: '#E2E3F5',
			borderWidth: 0,
			pointBorderColor: '#7379BD',
			pointBorderWidth: 2,
			pointRadius: 4,
			pointStyle: 'circle',
			showLines: true,
			data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250]
		}
	]
};

var trafficLine = new Chart(trafficLineWidget, {
	type: 'line',
	data: trafficLineData,
	options: {
		title: {
			display: true,
			text: 'Traffic',
			fullWidth: true
		}
	}
	
});

