// GLOBAL CHART.JS CONFIGURATIONS

Chart.defaults.global.defaultFontColor = 'gray';
Chart.defaults.global.defaultFontFamily = 'HelveticaNeue';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontStyle = 'normal';
Chart.defaults.global.responsive = true;
Chart.defaults.global.responsiveAnimationDuration = 0;
Chart.defaults.global.maintainAspectRatio = true;
Chart.defaults.global.legend.display = false;

// Mobile User Doughnut Chart

var mobileUsers = document.getElementById('mobile-users');

var mobileUsersData = {
	labels: [
		"Desktop",
		"Tablets",
		"Phones",
		"Other"
	],
	datasets: [
		{
			data: [150, 70, 50, 20],
			backgroundColor: [
				"#7379BD",
				"#83C891",
				"#76B1BE",
				"#4D4D71"
			]

// Daily Traffic Widget (Bar Chart)

var trafficDaily = document.getElementById('traffic-bar');

var trafficDailyData = {
		labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		datasets: [ 
			{
				label: 'Desktop',
				backgroundColor: '#7379BD',
				data: [75, 100, 175, 125, 225, 200, 100],
			},

			{
				label: 'Tablets',
				backgroundColor: '#83C891',
				data: [60, 80, 120, 70, 180, 150, 70],
			},
			
			{
				label: 'Phones',
				backgroundColor: '#76B1BE',
				data: [80, 20, 40, 80, 80, 70, 90],
			}

		]
}

var trafficDailyOptions = {
	legend: {
		display: true,
		position: 'bottom',
	},
		
	
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


// Main Navigation
var navButton = document.getElementsByClassName("nav-icon");
var dashboardIcon = document.getElementById("dashboard-icon");
var membersIcon = document.getElementById("members-icon");
var visitsIcon = document.getElementById("visits-icon");
var settingsIcon = document.getElementById("settings-icon");

function toggleNavActive() {
	
	for (var i=0; i<navButton.length; i++){
		if (navButton[i].classList.contains("nav-icon-active")) {
			navButton[i].classList.remove("nav-icon-active");
		}
	}

	for (var i=0; i<navButton.length; i++){
		if (navButton[i].parentNode.classList.contains("nav-container-active")) {
			navButton[i].parentNode.classList.remove("nav-container-active");
		}
	}
	this.classList.add("nav-icon-active");
	this.parentNode.classList.add("nav-container-active");
	
	
}

dashboardIcon.addEventListener("click", toggleNavActive);
membersIcon.addEventListener("click", toggleNavActive);
visitsIcon.addEventListener("click", toggleNavActive);
settingsIcon.addEventListener("click", toggleNavActive);

// *** Alert Display ***

// Variables for alert display
var mainHeader = document.getElementById("main-header");

//the alert dropdown container
var alertDiv = document.createElement("div");

//individual alerts in the dropdown
var alertBox1 = document.createElement("div");
var alertBox2 = document.createElement("div");

var bellContainer = document.getElementById("bell-container");
var bellIcon = document.getElementById("bell-icon");

//contents for the sample alerts
var alert1 = "Ashley Pike signed up";
var alert2 = "Hart Love commented";

//variables for green dot on bell icon
var newNotification = true;

function showDot() {
	if (newNotification) {
		bellContainer.classList.add("notification");
	} else {
		bellContainer.classList.remove("notification");
	}
}

document.addEventListener("DOMContentLoaded", showDot);

// set up alert div with two alert boxes inside
// need to DRY this up with a loop? 

function setupAlertDiv() {
	alertDiv.setAttribute("id", "alert-div");

	alertBox1.classList.add("alert-box");
	alertBox1.textContent = alert1;
	alertDiv.appendChild(alertBox1);

	alertBox2.classList.add("alert-box");
	alertBox2.textContent = alert2;
	alertDiv.appendChild(alertBox2);
}

// insert alert div into main header before the bell container
function dropAlertDiv() {
	setupAlertDiv();
	mainHeader.insertBefore(alertDiv, bellContainer);
}

// remove alert div from the main header
function hideAlertDiv() {
	mainHeader.removeChild(alertDiv);
	newNotification = false;
	showDot();
}

// event listeners for adding and removing the alert div
bellIcon.addEventListener("click", dropAlertDiv);
alertDiv.addEventListener("click", hideAlertDiv);

//*** Alert Bar Cancel ***

// variables for alert bar cancel
var alertBar = document.getElementById('alert');
var alertText = document.getElementById('alert-text');
var alertX = document.getElementById('alert-x');


var trafficLineButton = document.getElementsByClassName('traffic-line-button');
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
>>>>>>> widgets
		}
	]
};

<<<<<<< HEAD
var mobileUsersOptions = {
	legend: {
		display: true,
		position: 'bottom'
	}
};

var mobileUserChart = new Chart(mobileUsers, {
	type: 'doughnut',
	data: mobileUsersData,
	options: mobileUsersOptions
});
=======
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
var trafficLineWidget = document.getElementById('traffic-line');

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


// transfer alert from bar to dropdown
function moveAlert() {
	alertBox3 = document.createElement("div");
	alert3 = alertText.textContent;
	alertBox3.classList.add("alert-box");
	alertBox3.textContent = alert3;
	alertDiv.appendChild(alertBox3);
}

// remove alert bar
function hideAlert() {
	moveAlert();
	alertBar.style.display = "none";
}

//event listener for alert bar x
alertX.addEventListener("click", hideAlert);


