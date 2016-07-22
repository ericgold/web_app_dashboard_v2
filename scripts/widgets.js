// GLOBAL CHART.JS CONFIGURATIONS

Chart.defaults.global.defaultFontColor = 'gray';
Chart.defaults.global.defaultFontFamily = 'HelveticaNeue';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontStyle = 'normal';
Chart.defaults.global.responsive = true;
Chart.defaults.global.responsiveAnimationDuration = 0;
Chart.defaults.global.maintainAspectRatio = true;
Chart.defaults.global.legend.display = false;


// *** SETTINGS WIDGET ***

// local storage

var emailSwitch = document.getElementById("email-switch");
var emailSetting = emailSwitch.value;

var publicSwitch = document.getElementById("public-switch");
var publicSetting = publicSwitch.value;

var timeZoneSelect = document.getElementById("timezone");
var timeZoneSetting = timeZoneSelect.value;


var saveSettingsButton = document.getElementById("save-settings-button");
var cancelSettingsButton = document.getElementById("cancel-settings-button");

//saves current settings to local storage
function saveSettings() {
	localStorage.setItem('email', emailSetting);
	localStorage.setItem('publicpro', publicSetting);
	localStorage.setItem('tzone', timeZoneSetting);
	console.log(localStorage);
}

//clears local storage and sets controls to defaults
function resetSettings() {
	console.log("clearing storage");
	localStorage.clear();
	console.log("setting defaults");
	setDefaultSettings();
	console.log(localStorage);
}

//sets variable to the value of the switch
function updateEmail() {
	if (emailSwitch.value === "on") {
		emailSwitch.value = "off";
		emailSwitch.setAttribute("value", "off");
		emailSwitch.setAttribute("checked", false);
	} else {
		emailSwitch.value = "on";
		emailSwitch.setAttribute("value", "on")
		emailSwitch.setAttribute("checked", true);
	}
	emailSetting = emailSwitch.value;
}

//sets variable to the value of the switch
function updatePublic() {
	if (publicSwitch.value === "on") {
		publicSwitch.value = "off";
		publicSwitch.setAttribute("value", "off");
		publicSwitch.setAttribute("checked", false);
	} else {
		publicSwitch.value = "on";
		publicSwitch.setAttribute("value", "on")
		publicSwitch.setAttribute("checked", true);
	}
	publicSetting = publicSwitch.value;
	
}

//sets variable to value of the select
function updateTimeZone() {
	timeZoneSetting = timeZoneSelect.value;
}

//matches switch "checked" attribute to value state
function matchEmail() {
	if (emailSetting === "on") {
			emailSwitch.setAttribute("checked", "checked");
		} else if (emailSetting === "off") {
			emailSwitch.removeAttribute("checked");
	}
}

//sets default value of email switch to "on"
function setDefaultEmail() {
	emailSwitch.value = "on";
	emailSetting = emailSwitch.value;
	emailSwitch.setAttribute("value", emailSetting);
	matchEmail();
}

//checks for email switch value in local storage
//if present, sets switch to stored value
//otherwise, sets to default value
function checkForEmail() {
	if (localStorage.email) {
		console.log("email detected");
		emailSwitch.value = localStorage.getItem("email");
		emailSetting = emailSwitch.value;
		emailSwitch.setAttribute("value", emailSetting);
		matchEmail();

	} else {
		console.log("no email detected");
		setDefaultEmail();
	}
}

//matches switch "checked" attribute to value state
function matchPublic() {
	if (publicSetting === "on") {
			publicSwitch.setAttribute("checked", "checked");
		} else if (publicSetting === "off") {
			publicSwitch.removeAttribute("checked");
		}
}

//sets default value of public profile switch to "on"
function setDefaultPublic() {
	publicSwitch.value = "on";
	publicSetting = publicSwitch.value;
	publicSwitch.setAttribute("value", publicSetting);
	matchPublic();
}

//checks for public profile switch value in local storage
//if present, sets switch to stored value
//otherwise, sets to default value
function checkForPublic() {
	if (localStorage.publicpro) {
		console.log("public detected");
		publicSwitch.value = localStorage.getItem("publicpro");
		publicSetting = publicSwitch.value;
		publicSwitch.setAttribute("value", publicSetting);
		matchPublic();
		
	} else {
		console.log("no public detected");
		setDefaultPublic();
	}
}

//sets default time zone of Pacific
function setDefaultTimeZone() {
	console.log("setting default time zone");
	timeZoneSelect.value = "-8";
	timeZoneSetting = timeZoneSelect.value;
}

//checks for time zone in local storage
//if present, sets time zone to stored value
//otherwise, sets default time zone
function checkForTimeZone() {
	console.log("checking for time zone");
	if (localStorage.tzone) {
		console.log("time zone detected");
		timeZoneSelect.value = localStorage.getItem("tzone");
		timeZoneSetting = timeZoneSelect.value;
	} else {
		console.log("no time zone detected");
		setDefaultTimeZone;
	}
}

//checks for values in local storage
function checkForSettings() {
	checkForEmail();
	checkForPublic();
	checkForTimeZone();
}

//sets default values for the 3 controls
function setDefaultSettings() {
	setDefaultEmail();
	setDefaultPublic();
	setDefaultTimeZone();
}

// checks to see if local storage is supported
function checkLocalStorage() {
	console.log("checking local storage");
	//check if local storage is supported
	if (window.localStorage){
		console.log("storage detected");
		checkForSettings();
		
	} else {
		console.log("no storage detected");
		setDefaultSettings();
	}
}

// Settings Widget Event Listners

emailSwitch.addEventListener("change", updateEmail);
publicSwitch.addEventListener("change", updatePublic);
timeZoneSelect.addEventListener("change", updateTimeZone);

saveSettingsButton.addEventListener("click", saveSettings);
cancelSettingsButton.addEventListener("click", resetSettings);

window.addEventListener("load", checkLocalStorage);
