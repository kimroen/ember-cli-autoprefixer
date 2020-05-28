'use strict';

const Autoprefixer = require('broccoli-autoprefixer');
const fs = require('fs');

const treesToProcess = ['css', 'less', 'styl', 'scss', 'sass'];

module.exports = {
  name: require('./package').name,
  included: function(app) {
    this.app = app;

    if (typeof app.import !== 'function' && app.app) {
      this.app = app = app.app;
    }

    this._super.included.apply(this, arguments);

    var root = this.project.root;
    var hasRCFile = fs.existsSync(`${root}/.browserslistrc`);
    var hasPkgBrowserList = !!this.project.pkg.browserslist;

    var browserOptions = {};
    if (!hasRCFile && !hasPkgBrowserList) {
      var appOptions = this.app.options || {};
      if (appOptions['autoprefixer'] && appOptions['autoprefixer'].overrideBrowsersList) {
        browserOptions.overrideBrowsersList = appOptions['autoprefixer'].overrideBrowsersList;
      } else if (this.project.targets) {
        browserOptions.overrideBrowsersList = this.project.targets.browsers;
      }
    }


    this.options = Object.assign(
      {
        enabled: true
      },
      browserOptions,
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
