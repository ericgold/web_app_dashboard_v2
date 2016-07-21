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
var timeZoneSelected = timeZoneSelect.value;
var timeZoneSetting = timeZoneSelected;
//var timeZoneSelected = timeZoneSelect.options[timeZoneSelect.selectedIndex];
//var timeZoneSetting = timeZoneSelected.value;


var saveSettingsButton = document.getElementById("save-settings-button");
var cancelSettingsButton = document.getElementById("cancel-settings-button");

function saveSettings() {
	localStorage.setItem('email', emailSetting);
	localStorage.setItem('public', publicSetting);
	localStorage.setItem('tzone', timeZoneSetting);
	console.log(localStorage);
}

function resetSettings() {
	localStorage.clear();
	console.log(localStorage);
}

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

function updateTimeZone() {
	//timeZoneSelected.value = timeZoneSelect.options[timeZoneSelect.selectedIndex];
	//timeZoneSetting = timeZoneSelected.value;
	timeZoneSelected = timeZoneSelect.value;
	timeZoneSetting = timeZoneSelected;
	//saveSettings();
}

function initializeSettings() {
	console.log("initializing");
	//check if local storage is supported
	if (window.localStorage){
		console.log("storage detected");
		//check if it has values
		if (localStorage.email) {
			console.log("email detected");
			emailSwitch.value = localStorage.getItem("email");
			emailSetting = emailSwitch.value;
			emailSwitch.setAttribute("value", emailSetting);
			if (emailSetting = "on") {
				emailSwitch.setAttribute("checked", true);
			} else if (emailSetting = "off") {
				emailSwitch.setAttribute("checked", false);
			}
		} else {
			console.log("setting default email value of on")
			emailSwitch.value = "on";
			emailSwitch.setAttribute("value", "on");
			emailSwitch.setAttribute("checked", true);
			emailSetting = emailSwitch.value;
		}

		if (localStorage.public) {
			console.log("public detected");
			publicSwitch.value = localStorage.getItem("public");
			publicSetting = publicSwitch.value;
			publicSwitch.setAttribute("value", publicSetting);
			if (publicSetting = "on") {
				publicSwitch.setAttribute("checked", true);
			} else if (publicSetting = "off") {
				publicSwitch.setAttribute("checked", false);
			}

		} else {
			console.log("setting default public value of on");
			publicSwitch.value = "on";
			publicSwitch.setAttribute("value", "on");
			publicSwitch.setAttribute("checked", true);
			publicSetting = publicSwitch.value;
		}

		if (localStorage.tzone) {
			console.log("time zone detected");
			timeZoneSelect.value = localStorage.getItem("tzone");
			timeZoneSelected = timeZoneSelect.value;
			timeZoneSetting = timeZoneSelected;
		} else {
			console.log("setting default time zone to Pacific");
			timeZoneSelect.value = "-8";
			timeZoneSelected = timeZoneSelect.value;
			timeZoneSetting = timeZoneSelected;
		}
	}

}



emailSwitch.addEventListener("change", updateEmail);
publicSwitch.addEventListener("change", updatePublic);
timeZoneSelect.addEventListener("change", updateTimeZone);

saveSettingsButton.addEventListener("click", saveSettings);
cancelSettingsButton.addEventListener("click", resetSettings);

window.addEventListener("load", initializeSettings);
