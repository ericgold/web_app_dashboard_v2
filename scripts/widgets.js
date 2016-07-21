// GLOBAL CHART.JS CONFIGURATIONS

Chart.defaults.global.defaultFontColor = 'gray';
Chart.defaults.global.defaultFontFamily = 'HelveticaNeue';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontStyle = 'normal';
Chart.defaults.global.responsive = true;
Chart.defaults.global.responsiveAnimationDuration = 0;
Chart.defaults.global.maintainAspectRatio = true;
Chart.defaults.global.legend.display = false;

// TRAFFIC LINE WIDGET 

var trafficLineWidget = document.getElementById('traffic-line');

var trafficLineButton = document.getElementsByClassName('traffic-line-button');
var trafficNav = document.getElementById('traffic-line-nav');

var hourlyButton = document.getElementById('hourly-button');
var dailyButton = document.getElementById('daily-button');
var weeklyButton = document.getElementById('weekly-button');
var monthlyButton = document.getElementById('monthly-button');

// Traffic Line Navigation

function toggleTrafficActive(btn) {
	for (var i=0; i<trafficLineButton.length; i++){
		if (trafficLineButton[i].classList.contains("traffic-active")) {
			trafficLineButton[i].classList.remove("traffic-active");
		}
	}
	btn.classList.add("traffic-active");
	
}


// Traffic Line Chart

// Traffic Line Data

var hourlyData = [0, 2, 5, 7, 10, 12, 16, 18, 15, 14, 13, 8, 4];
var dailyData = [110, 120, 325, 410, 80, 70, 130, 196, 120, 278, 400, 110, 143];
var weeklyData = [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000];
var monthlyData = [0, 1900, 3500, 3000, 4500, 4800, 5000, 4700, 3900, 2600, 2050, 2100, 3700];

var hourlyStepSize = 5;
var hourlyMax = 20;

var dailyStepSize = 100;
var dailyMax = 500; 

var weeklyStepSize = 500;
var weeklyMax = 2500

var monthlyStepSize = 2000;
var monthlyMax = 10000;

var hourlyLabels = ["12am",
					 "2am",
					 "4am", 
					 "6am", 
					 "8am", 
					 "10am", 
					 "12pm", 
					 "2pm", 
					 "4pm", 
					 "6pm",
					 "8pm", 
					 "10pm"
					];
var dailyLabels = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
var weeklyLabels = [ "0",
					 "16-22",
					 "23-29", 
					 "30-5", 
					 "6-12", 
					 "13-19", 
					 "20-26", 
					 "27-3", 
					 "4-10", 
					 "11-17",
					 "19-24", 
					 "25-31"
					];
var monthlyLabels = ["J", "A", "S", "O", "N", "D", "J", "F", "M", "A", "M", "J"];

//default data for the traffic line chart, including weekly defaults
var trafficLineData = {

	labels: weeklyLabels,

	datasets: [
		{
			fill: true,
			lineTension: 0,
			backgroundColor: '#E2E3F5',
			pointBackgroundColor: '#FFFFFF',
			borderWidth: 1,
			borderColor: '#7379BD',
			pointBorderColor: '#7379BD',
			pointBorderWidth: 2,
			pointRadius: 4,
			pointHoverRadius: 10,
			pointHitRadius: 10,
			pointStyle: 'circle',
			showLines: true,	
			data: weeklyData
		}
	]
};

//default options for the traffic line chart, including weekly defaults
var trafficLineOptions = {
	scales: {
		
		xAxes: [{
			ticks: {
				display: true			
			},
			gridLines: {
				drawTicks: false
			}	
		}],

		yAxes: [{
			ticks: {
				display: true,
				stepSize: weeklyStepSize,
				max: weeklyMax,		
			},
			gridLines: {
				drawTicks: false,
			}		
		}]
	}	
};

// Create the traffic line chart with weekly data and options
var trafficLine = new Chart(trafficLineWidget, {
	type: 'line',
	data: trafficLineData,
	options: trafficLineOptions
});

// Functions and event listeners for refreshing the chart
function hourlyTraffic() {
	//highlight Hourly button
	toggleTrafficActive(hourlyButton);
	//set data array in trafficLine chart 
	trafficLine.data.datasets[0].data = hourlyData;
	//set labels as hourly labels
	trafficLine.data.labels = hourlyLabels;
	//set y-axis step size and max
	trafficLine.options.scales.yAxes[0].ticks.stepSize = hourlyStepSize;
	trafficLine.options.scales.yAxes[0].ticks.max = hourlyMax;
	//redraw chart with new data
	trafficLine.update();
}

function dailyTraffic() {
	toggleTrafficActive(dailyButton);
	trafficLine.data.datasets[0].data = dailyData;
	trafficLine.data.labels = dailyLabels;
	trafficLine.options.scales.yAxes[0].ticks.stepSize = dailyStepSize;
	trafficLine.options.scales.yAxes[0].ticks.max = dailyMax;
	trafficLine.update();
}

function weeklyTraffic() {
	toggleTrafficActive(weeklyButton);
	trafficLine.data.datasets[0].data = weeklyData;
	trafficLine.data.labels = weeklyLabels;
	trafficLine.options.scales.yAxes[0].ticks.stepSize = weeklyStepSize;
	trafficLine.options.scales.yAxes[0].ticks.max = weeklyMax;
	trafficLine.update();
}

function monthlyTraffic() {
	toggleTrafficActive(monthlyButton);
	trafficLine.data.datasets[0].data = monthlyData;
	trafficLine.data.labels = monthlyLabels;
	trafficLine.options.scales.yAxes[0].ticks.stepSize = monthlyStepSize;
	trafficLine.options.scales.yAxes[0].ticks.max = monthlyMax;
	trafficLine.update();
}

// Traffic Line Chart navigation event listeners

hourlyButton.addEventListener("click", hourlyTraffic);
dailyButton.addEventListener("click", dailyTraffic);
weeklyButton.addEventListener("click", weeklyTraffic);
monthlyButton.addEventListener("click", monthlyTraffic);


