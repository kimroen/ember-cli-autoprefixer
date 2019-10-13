'use strict';

var autoprefixer = require('broccoli-autoprefixer');

module.exports = {
  name: require('./package').name,
  included: function(app) {
    this.app = app;

    if (typeof app.import !== 'function' && app.app) {
      this.app = app = app.app;
    }

    this._super.included.apply(this, arguments);

    this.options = Object.assign(
      {
        browsers: this.project.targets && this.project.targets.browsers,
        enabled: true
      },
      this.app.options.autoprefixer || {}
    );

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
