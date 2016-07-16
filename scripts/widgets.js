// GLOBAL CHART.JS CONFIGURATIONS

Chart.defaults.global.defaultFontColor = 'gray';
Chart.defaults.global.defaultFontFamily = 'HelveticaNeue';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontStyle = 'normal';
Chart.defaults.global.responsive = true;
Chart.defaults.global.responsiveAnimationDuration = 0;
Chart.defaults.global.maintainAspectRatio = true;
Chart.defaults.global.legend.display = false;

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
