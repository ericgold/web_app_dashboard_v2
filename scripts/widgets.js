// GLOBAL CHART.JS CONFIGURATIONS

Chart.defaults.global.defaultFontColor = 'gray';
Chart.defaults.global.defaultFontFamily = 'HelveticaNeue';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontStyle = 'normal';
Chart.defaults.global.responsive = true;
Chart.defaults.global.responsiveAnimationDuration = 0;
Chart.defaults.global.maintainAspectRatio = true;
Chart.defaults.global.legend.display = false;



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

// set up alert div with two alert boxes inside
// need to DRY this up with a loop? 
// maybe also add alert from alert bar on cancel to this loop,
// so it shows up in the alert div after the bar is closed
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
}

// event listeners for adding and removing the alert div
bellIcon.addEventListener("click", dropAlertDiv);
alertDiv.addEventListener("click", hideAlertDiv);

//*** Alert Bar Cancel ***

// variables for alert bar cancel
var alertBar = document.getElementById('alert');
var alertX = document.getElementById('alert-x');

// remove alert bar
function hideAlert() {
	alertBar.style.display = "none";
}

//event listener for alert bar x
alertX.addEventListener("click", hideAlert);
