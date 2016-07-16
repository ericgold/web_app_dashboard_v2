// GLOBAL CHART.JS CONFIGURATIONS

Chart.defaults.global.defaultFontColor = 'gray';
Chart.defaults.global.defaultFontFamily = 'HelveticaNeue';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontStyle = 'normal';
Chart.defaults.global.responsive = true;
Chart.defaults.global.responsiveAnimationDuration = 0;
Chart.defaults.global.maintainAspectRatio = true;
Chart.defaults.global.legend.display = false;

// *** Message User ***

var userInput = document.getElementById("user-input");
var userMessage = document.getElementById("user-message");
var messageButton = document.getElementById("message-button");




var users = [];

function User(firstName, lastName, email, joinDate) {
	//constructor function for user objects
	this.firstName = firstName;
	this.lastName = lastName;
	this.joinDate = joinDate;
	this.email = email;
	users.push(this);
}

//users 
var user1 = new User('Hart', 'Love', 'hlove@emotion.com', '6/3/16');
var user2 = new User('Ashley', 'Pike', 'ashp@saranrae.com', '7/6/16');
var user3 = new User('Dan', 'Mann', 'd.mann@qmail.com', '7/7/16');
var user4 = new User('Alice', 'Inwonderland', 'alice@rabbithole.com', '7/13/16');





function userSearch() {
	//filters the input so only matched users display
	var query = userInput.value;
	//set variable for contents of users first name and last name
	
	//compare query to that variable

	//if query is in the array (!== -1) 
		//add that user's name to the dropdown
	
}


function noUser() {
	//runs if no user has been entered when button is pressed
	var query = userInput.value;
	if (query === null || query === "") {
		alert("please choose a user to message");
	} else {
		noMessage();
	}
}

function noMessage() {
	//runs if user but no message has been entered when button is pressed
	var message = userMessage.value;
	if (message === null || message === "") {
		alert("please enter a message");
	} else {
		messageSend();
	}
}

function messageSend() {
	//sends message, clearing both form fields
	userInput.value = "";
	userMessage.value = "";
	alert("message sent");
}

function messageCheck() {
	//checks if input and message fields have been filled
	noUser();
}

messageButton.addEventListener("click", messageCheck);
userInput.addEventListener("keypress", userSearch);
