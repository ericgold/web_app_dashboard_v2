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


// Traffic Line Navigation

function toggleActive() {
	for (var i=0; i<trafficLineButton.length; i++){
		if (trafficLineButton[i].classList.contains("active")) {
			trafficLineButton[i].classList.remove("active");
		}
	}
	this.classList.add("active");
	
}

function prepActive() {
	console.log('prepping');
	for (var i=0; i<trafficLineButton.length; i++) {
		trafficLineButton[i].addEventListener("click", toggleActive);
	}
}

trafficNav.addEventListener("mouseover", prepActive);

// Traffic Line Chart

var trafficLineData = {

	labels: [
			 "0",
			 "16-22",
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
			data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000]
		}
	]
};

var trafficLineOptions = {
	
	scales: {
		
		xAxes: [{
			ticks: {
				display: true,
				//labelOffset: -35
						
			},
			gridLines: {
				drawTicks: false,
				
			}
			
		}],

		yAxes: [{
			ticks: {
				display: true,
				stepSize: 500,
				max: 2500,
				
			},
			gridLines: {
				drawTicks: false,
				
			}
			
		}]
	}	
}

var trafficLine = new Chart(trafficLineWidget, {
	type: 'line',
	data: trafficLineData,
	options: trafficLineOptions
	
});





