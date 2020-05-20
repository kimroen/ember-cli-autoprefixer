'use strict';

const Autoprefixer = require('broccoli-autoprefixer');

const treesToProcess = ['css', 'less', 'styl', 'scss', 'sass'];

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
        overrideBrowserslist: this.project.targets && this.project.targets.browsers,
        enabled: true
      },
      this.app.options.autoprefixer || {}
    );

    this.enabled = this.options.enabled;
    delete this.options.enabled;
  },

  postprocessTree: function(type, tree) {
    if (this.enabled && treesToProcess.includes(type)) {
      tree = new Autoprefixer(tree, this.options);
    }

    return tree;
  }
};
