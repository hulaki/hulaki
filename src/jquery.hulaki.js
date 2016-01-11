/*
 * hulaki
 * https://github.com/hulaki/hulaki
 *
 * Copyright (c) 2016 hulaki
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.hulaki = function(options) {
	  // Override default options with passed-in options.
      var settings = $.extend({}, $.hulaki.options, options);
	  
	  return this.each(function() {
		  // Do something awesome to each selected element.
		  var element = $(this);
		  var email = $('#'+settings.emailHolder);
		  var locationField = $('#'+settings.locationField);
		  var token = settings.token;
		  if(element.hasClass('hulaki') && email && email.val() && token && locationField){
			  element.html('Share delivery location from hulaki');
			  element.click(callHulaki({email: email.val()}, token, element, locationField));
		  }
	  });
  };
  
  function callHulaki(data, token, element, saveLocationField){
	  var request = $.ajax({
	    url: "https://hulaki.herokuapp.com/delivery-location",
	    method: "POST",
	    data: data,
	    dataType: "json",
		headers: { 'AUTH': token }
	  });
 
	  request.done(function( msg ) {
		  if(msg == "UserFound"){ // user found, show delivery locations
		  	
		  }else if(msg == "UserNotFound"){
			  newUserSetup(data, token, element);
		  }else{
		  	//saved to db get unique number to the owner in saveLocationField
		  }
	  });
 
	  request.fail(function( jqXHR, textStatus ) {
		  // handle error
	  });
  };
  
  function newUserSetup(data, token, element){
	  var userSetup = "<div style='display:none;' class='newUserModal'>You seem to be a new user. Please choose your delivery location.<button class='currentLocationButton'>Use my current location</button></div>";
	  element.append(userSetup);
	  $('.currentLocationButton').click(getCurrentUserLocation('currentLocationButton', data, token, element));
	  element.find('.newUserModal').modal();
	  element.find('.newUserModal').show();
  }
  
  function getCurrentUserLocation(button, data, token, element){
	  if (navigator.geolocation) {
		  var position = navigator.geolocation.getCurrentPosition();
		  callHulaki({email: data.email, longitude: position.coords.longitude, latitude: position.coords.latitude}, token, element);
	  } else { 
		  $('.'+button).html("Geolocation is not supported by this browser.");
	  }
  }
  
  // Plugin defaults – added as a property on our plugin function.
  $.hulaki.defaults = {
      token: "YOUR AUTH TOKEN",
	  emailHolder: "emailHolder",
	  locationField: "locationField"
  };

}(jQuery));
