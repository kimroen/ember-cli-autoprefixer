import { currentRouteName, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

function getCssProperty(element, property) {
  var elem = document.getElementById(element);
  return window.getComputedStyle(elem, null).getPropertyValue(property);
}

module('Acceptance: Application (Chrome Only)', function(hooks) {
  setupApplicationTest(hooks);

  /**
    Execute this test in Chrome or PhantomJS for correct results
  */
  test('Verify correct webkit vendor prefix from autoprefixer', async function(assert) {
    assert.expect(3);

    await visit('/');
    const webkitUserSelect = getCssProperty('title', '-webkit-user-select');

    assert.equal(currentRouteName(), 'index', "On the index page");
    assert.dom('#title').exists({ count: 1 }, "Page contains a header title");
    assert.equal(webkitUserSelect, 'none', "");
  });
});
