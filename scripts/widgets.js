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

//variables for message user search dropdown 
var userDiv = document.createElement("div");

var userBoxes = document.getElementsByClassName("user-box");

//array to hold users
var users = [];

//array to hold users that match the search
var matchedUsers = [];

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

//error and confirmation messages
var userError = "Please choose a user to message";
var messageError = "Please enter a message";
var sendConfirm = "Message sent";

//* functions for error and confirmation messages *
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

//* functions for user search and suggestions *

//create a div to hold the list of suggestions
function setupUserDiv() {
	userDiv.setAttribute("id", "user-div");
}

//create divs to hold individual suggestions
function setupUserBox(suggestion) {
	var userBox = document.createElement("div");
	userBox.classList.add("user-box");
	userBox.textContent = suggestion.firstName + " " + suggestion.lastName;
	userDiv.appendChild(userBox);
}


//display the list of suggested users based on search term
function showUserDiv() {
	messageUserWidget.insertBefore(userDiv, userMessage);
}

//remove user suggestions
function removeUserDiv() {
	clearUserDiv();
	messageUserWidget.removeChild(userDiv);
	matchedUsers = [];
	matchedUsers.length = 0;
}

function clearUserDiv() {
	for (i = 0; i < userDiv.childNodes.length; i++) {
		userDiv.removeChild[i]
	}	
}

// enter selected suggestion into input field and remove suggestions
function userSelect() {
	userInput.value = this.textContent.toString();
	removeUserDiv();
}

function activateSelect() {
	for (var i = 0; i < userBoxes.length; i++) {
		userBoxes[i].addEventListener('click', userSelect);
	}
}

function matchUsers(arg) {
	
	//check each user in users
	for (var i = 0; i < users.length; i++) {
			var firstIndex = users[i].firstName.toLowerCase().indexOf(arg);
			var lastIndex = users[i].lastName.toLowerCase().indexOf(arg);
			//if the query is present in first name or last name of that user
			if (firstIndex !== -1 || lastIndex !== -1) {
				//add that user to matchedUsers
				matchedUsers.push(users[i]);
				
			//otherwise	
			} else {
				//remove that user from matchedUsers
				matchedUsers.pop(users[i]);
			}
		}
}

function addMatchedUsers() {
	//for each user in matchedUsers
	for (var i = 0; i < matchedUsers.length; i++) {
			//set up a userBox and add it to the userDiv
			setupUserBox(matchedUsers[i]);
		}
}

function userSearch() {
	
	var query = userInput.value.toLowerCase();
	
	//if there is a query
	if(query) {
		//check for users matching the query
		matchUsers(query);
		//create container for user suggestions
		setupUserDiv();
		//add each matched users to a userBox
		addMatchedUsers();
		//show the populated userDiv
		showUserDiv();	
	} else {
		//if there is no query, remove the userDiv
		removeUserDiv();
	}
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
userInput.addEventListener("keyup", userSearch);
messageDiv.addEventListener("click", hideMessage);

userDiv.addEventListener("mouseover", activateSelect);
