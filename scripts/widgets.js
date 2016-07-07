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
		"Phones",
		"Tablets",
		"Desktop"
	],
	datasets: [
		{
			data: [150, 70, 50],
			backgroundColor: [
				"#7379BD",
				"#83C891",
				"#76B1BE"
			]
		}
	]
};

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
