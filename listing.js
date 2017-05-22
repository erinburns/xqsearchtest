// Js file for add-listing.html
"use strict";

(function () {
    // initialize firebase
    const config = {
            apiKey: "AIzaSyC1PKNs7ifneJGXEib55zvkMHc93JD4r4E",
            authDomain: "authtest-54513.firebaseapp.com",
            databaseURL: "https://authtest-54513.firebaseio.com",
            projectId: "authtest-54513",
            storageBucket: "authtest-54513.appspot.com",
            messagingSenderId: "1081226378409"
          };
          firebase.initializeApp(config);
    
    // Reference to the events object in your Firebase database
var events = firebase.database().ref("events");
    
    // Save a new event to the database, using the input in the form
var submitEvent = function () {
    // Get input values from each of the form elements
    var title = $("#eventtitle").val();
    var description = $("#desc").val();
    var begTime = $("#starttime").val();
    var finTime = $("#endtime").val();
    var cost = $("#price").val();
    
    // Push a new event to the database using those values
  events.push({
        "title": title,
        "description": description,
        "starttime": begTime,
        "endtime": finTime,
        "price": cost
        });
    };  // end submitEvent function

    
$(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#listingform").submit(submitEvent);

}); // end window load
    
})(); // end file wrapper