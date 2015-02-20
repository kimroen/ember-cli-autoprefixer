import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

function getCssProperty(element, property) {
  var elem = document.getElementById(element);
  return window.getComputedStyle(elem, null).getPropertyValue(property);
}

module('Acceptance: Application (Chrome Only)', {
  beforeEach: function() {
    application = startApp();
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

/**
  Execute this test in Chrome or PhantomJS for correct results
*/
test('Verify correct webkit vendor prefix from autoprefixer', function(assert) {
  var webkitUserSelect;

  assert.expect(3);

  visit('/');
  andThen(function() {
    webkitUserSelect = getCssProperty('title', '-webkit-user-select');

    assert.equal(currentPath(), 'index', "On the index page");
    assert.equal(find('#title').length, 1, "Page contains a header title");
    assert.equal(webkitUserSelect, 'none', "");
  });
});
