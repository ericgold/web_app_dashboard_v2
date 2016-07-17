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

//variables for the message user widget
var messageUserWidget = document.getElementById("message-user");
var userInput = document.getElementById("user-input");
var userMessage = document.getElementById("user-message");
var messageButton = document.getElementById("message-button");

//array to hold users
var users = [];

//constructor function for users
function User(firstName, lastName, email, joinDate) {
	//constructor function for user objects
	this.firstName = firstName;
	this.lastName = lastName;
	this.joinDate = joinDate;
	this.email = email;
	users.push(this);
}

//variables for users
var user1 = new User('Hart', 'Love', 'hlove@emotion.com', '6/3/16');
var user2 = new User('Ashley', 'Pike', 'ashp@saranrae.com', '7/6/16');
var user3 = new User('Dan', 'Mann', 'd.mann@qmail.com', '7/7/16');
var user4 = new User('Alice', 'Inwonderland', 'alice@rabbithole.com', '7/13/16');

//*alert and confirmation div*

//popup container for message widget errors and confirmations
var messageDiv = document.createElement("div");
//container for an individual error or confirmation message
var messageBox = document.createElement("div");
var userError = "Please choose a user to message";
var messageError = "Please enter a message";
var sendConfirm = "Message sent";

function setupMessageDiv() {
	messageDiv.setAttribute("id", "message-div");
}

function setupMessageBox(arg) {
	messageBox.classList.add("message-box");
	messageBox.textContent = arg;
}

function showMesssageDiv() {
	messageDiv.appendChild(messageBox);
	messageUserWidget.insertBefore(messageDiv, userInput);
}


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
		
		setupMessageDiv();
		setupMessageBox(userError);
		showMesssageDiv();
	} else {
		noMessage();
	}
}

function noMessage() {
	//runs if user but no message has been entered when button is pressed
	var message = userMessage.value;
	if (message === null || message === "") {
		
		setupMessageDiv();
		setupMessageBox(messageError);
		showMesssageDiv();

	} else {
		messageSend();
	}
}

function messageSend() {
	//sends message, clearing both form fields
	userInput.value = "";
	userMessage.value = "";
	
	setupMessageDiv();
	setupMessageBox(sendConfirm);
	showMesssageDiv();
	
}

function messageCheck() {
	//checks if input and message fields have been filled
	noUser();
}

function hideMessage() {
	messageUserWidget.removeChild(messageDiv);
}

messageButton.addEventListener("click", messageCheck);
userInput.addEventListener("keypress", userSearch);
messageDiv.addEventListener("click", hideMessage);
