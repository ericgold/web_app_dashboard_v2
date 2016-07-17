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
var timeZoneSelected = timeZoneSelect.options[timeZoneSelect.selectedIndex];
var timeZoneSetting = timeZoneSelected.value;


var saveSettingsButton = document.getElementById("save-settings-button");
var cancelSettingsButton = document.getElementById("cancel-settings-button");

function saveSettings() {
	localStorage.setItem('email', emailSetting);
	localStorage.setItem('public', publicSetting);
	localStorage.setItem('tzone', timeZoneSetting);
	//console.log(localStorage);
}

function resetSettings() {
	localStorage.clear();
	//console.log(localStorage);
}

//THESE DO NOT UPDATE THE VALUE YET
function updateEmail() {
	emailSetting = emailSwitch.value;
	saveSettings();
}

function updatePublic() {
	publicSetting = publicSwitch.value;
	saveSettings();
}

function updateTimeZone() {
	timeZoneSetting = timeZoneSelected.value;
	saveSettings();
}

emailSwitch.addEventListener('change', updateEmail);
publicSwitch.addEventListener('change', updatePublic);
timeZoneSelect.addEventListener('change', updateTimeZone);

saveSettingsButton.addEventListener("click", saveSettings);
cancelSettingsButton.addEventListener("click", resetSettings);

