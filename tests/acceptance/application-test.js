import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

function getCssProperty(element, property) {
  var elem = document.getElementById(element);
  return window.getComputedStyle(elem, null).getPropertyValue(property);
}

module('Acceptance: Application (Chrome Only)', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

/**
  Execute this test in Chrome or PhantomJS for correct results
*/
test('Verify correct webkit vendor prefix from autoprefixer', function() {
  var webkitUserSelect;

  expect(3);

  visit('/');
  andThen(function() {
    webkitUserSelect = getCssProperty('title', '-webkit-user-select');

    equal(currentPath(), 'index', "On the index page");
    equal(find('#title').length, 1, "Page contains a header title");
    equal(webkitUserSelect, 'none', "");
  });
});
