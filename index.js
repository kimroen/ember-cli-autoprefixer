/* jshint node: true */
'use strict';

var autoprefixer = require('broccoli-autoprefixer');
var defaults     = require('lodash/defaults');

module.exports = {
  name: 'ember-cli-autoprefixer',
  included: function(app, parentAddon) {
    this.app = app;

    if (typeof app.import !== 'function' && app.app) {
      this.app = app = app.app;
    }

    this._super.included.apply(this, arguments);
    this.options = defaults(this.app.options.autoprefixer || {}, {
      enabled: true
    });
    this.enabled = this.options.enabled;
    delete this.options.enabled;
  },
  postprocessTree: function(type, tree) {
    if ((type === 'all' || type === 'styles') && this.enabled) {
      tree = autoprefixer(tree, this.options);
    }

    return tree;
  }
};
