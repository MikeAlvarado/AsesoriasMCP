


var clientId = '438104599988-sakcod306o4eq2fa3592chpcke79j1r9.apps.googleusercontent.com';
var apiKey = 'AIzaSyCWuJFEVvoVqBhyPGC5KYHiMMn2bhfiN-8';
var discoveryDocs = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
var scopes = 'https://www.googleapis.com/auth/calendar';

function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  //window.setTimeout(checkAuth,1);
  //checkAuth();
}

function checkAuth() {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true},
      handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById('authorize-button');
  if (authResult) {
   // authorizeButton.style.visibility = 'hidden';
    makeApiCall();
  } else {
    //authorizeButton.style.visibility = '';
    authorizeButton.onclick = handleAuthClick;
   }
}

function handleAuthClick(event) {
  gapi.auth.authorize(
      {client_id: clientId, scope: scopes, immediate: false},
      handleAuthResult);
  return false;
}


function makeApiCall() {

gapi.client.load('calendar', 'v3', function() {
	var clase = document.getElementById("class_name").value;
	var location = document.getElementById("place").value;
	var prof = document.getElementById("teacher").value;
	var date = document.getElementById("fecha").value;
	var detalles = document.getElementById("detalles").value;
	var time = document.getElementById("hora_inicio").value;
	
	var startTimeDate = Date.parseString(date + " " + time,'d MMM, yyyy H:m')  //2017-11-14T10:00:00.000-07:00
	var endTimeDate = Date.parseString(date + " " + time,'d MMM, yyyy H:m').add('h',1);
	var starTimeFormat = startTimeDate.format('yyyy-MM-ddTHH:mm:00.000-06:00');
	var endTimeFormat = endTimeDate.format('yyyy-MM-ddTHH:mm:00.000-06:00');
	
		
	var resource = {
		  "summary": clase,
		  "location": location,
		  "start": {
			"dateTime": starTimeFormat
		  },
		  "end": {
			"dateTime": endTimeFormat
		  },
		  "description": detalles
		};
		var request = gapi.client.calendar.events.insert({
		  'calendarId': 'primary',
		  'resource': resource
		});
		request.execute(function(resp) {
		  console.log(resp);
		});
    });
  


  // gapi.client.load('calendar', 'v3', function() {
    // var request = gapi.client.calendar.events.list({
      // 'calendarId': 'primary'
    // });
          
    // request.execute(function(resp) {
      // for (var i = 0; i < resp.items.length; i++) {
        // var li = document.createElement('li');
        // li.appendChild(document.createTextNode(resp.items[i].summary));
        // document.getElementById('events').appendChild(li);
      // }
    // });
  // });


}