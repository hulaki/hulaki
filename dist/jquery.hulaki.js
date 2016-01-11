/*! Hulaki - v0.1.0 - 2016-01-11
* https://github.com/hulaki/hulaki
* Copyright (c) 2016 hulaki; Licensed MIT */
(function($) {

  // Collection method.
  $.fn.hulaki = function() {
	  // Override default options with passed-in options.
      // var settings = $.extend({}, $.hulaki.options, options);
	  
	  return this.each(function() {
		  // Do something awesome to each selected element.
		  var element = $(this);
		  if(element.hasClass('hulaki')){
			  element.append('HULAKI');
		  }
	  });
  };
  
  // Plugin defaults – added as a property on our plugin function.
  // $.hulaki.defaults = {
 //      type: "map"
 //  };

}(jQuery));
