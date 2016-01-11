(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#hulaki', {
    // This will run before each test in this module.
    setup: function() {
		this.hulakiElement = $('#qunit-fixture').find('.hulaki');
		this.nhulakiElement = $('#quint-fixture').find('.not-hulaki');
    }
  });

  test('is chainable', function() {
    expect(2);
    // Not a bad test to run on collection methods.
    strictEqual(this.hulakiElement.hulaki(), this.hulakiElement, 'should be chainable');
	strictEqual(this.nhulakiElement.hulaki(), this.nhulakiElement, 'should be chainable');
  });
  
  test ('is hulaki', function() {
	  expect(2);
	  strictEqual(this.hulakiElement.hulaki().text(), 'HULAKIHULAKI', 'should be hulaki');
	  notStrictEqual(this.nhulakiElement.hulaki().text(), 'HULAKIHULAKI', 'should not be hulaki');
  });
  
  // check for options
  // module('jQuery.hulaki');
 //
 //  test('is awesome', function() {
 // 	  expect(2);
 //      strictEqual($.hulaki(), 'awesome.', 'should be awesome');
 //      strictEqual($.hulaki({punctuation: '!'}), 'awesome!', 'should be thoroughly awesome');
 //  });

}(jQuery));
