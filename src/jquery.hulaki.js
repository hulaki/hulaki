/*
 * hulaki
 * https://github.com/hulaki/hulaki
 *
 * Copyright (c) 2016 hulaki
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.hulaki = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.hulaki = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.hulaki.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.hulaki.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].hulaki = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
