// Js file for add-listing.html
"use strict";

(function () {
	// variable declarations
	var 
	 searchnav = document.getElementById('searchnav'),
	 span = "",
	 form = document.getElementById("search"),
	 i = 0;
	
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
    // TODO: find out how to link to the user's profile - might need to bind to a hidden form field
var submitEvent = function () {
    // Get input values from each of the form elements
    var title = $("#eventtitle").val();
    var description = $("#desc").val();
    var begTime = $("#starttime").val();
    var finTime = $("#endtime").val();
    var place = $("#city").val();
    var cost = $("#price").val();
    
    // Push a new event to the database using those values
  events.push({  // items on left are db labels right are variable names
        "title": title,
        "description": description,
        "starttime": begTime,
        "endtime": finTime,
        "city": place, // TODO add city province field to form
        "price": cost
        });
    };  // end submitEvent function
    
    
        // displays event listings on browse.html
        events.limitToLast(1).on('child_added', function(childSnapshot) { 

            // retrieves data from db
            event = childSnapshot.val(); // note there is no 's' at end of this event

            // Display the event data in HTML
            // items on left are IDs from HTML items on right are db labels
           $("#browsetitle").html(event.title)
            $("#browsecity").html(event.city)
            $("#browsedate").html(event.starttime)
            $("#browseprice").html(event.price) 

            // TODO: find out how to link to the listing details from db ID
            // Make the link actually work and direct to the URL provided
            // $("#link").attr("href", event.link) 
        }); 

        // search box 
        
        
       events.limitToLast(1).on('child_added', function(childSnapshot) {
           // retrieves data from db
            event = childSnapshot.val();
           searchnav.addEventListener('input', function() {
			   if (searchnav.value.substring(0,3) === childSnapshot.val().city.substring(0,3)) { // type the first 3 characters to reeal the cities
				   console.log(childSnapshot.val().city);
				   createSearchUI(childSnapshot.val().city.toUpperCase()); // display the search result on the page
                }
				else if (searchnav.value.length == 0) {
					var searchEL = document.querySelector(".searchUI");
					searchEL.parentNode.removeChild(searchEL);
				}
            });
        });
		
		// UI for the search result
		var createSearchUI = function (showProp) { 
			span = '<span class="searchUI">' + showProp + '</span>';
			searchnav.insertAdjacentHTML("afterend", span);	
		};
    
    $(window).load(function () {

      // Find the HTML element with the id recommendationForm, and when the submit
      // event is triggered on that element, call submitRecommendation.
      $("#listingform").submit(submitEvent);

    }); // end window load
    
})(); // end file wrapper