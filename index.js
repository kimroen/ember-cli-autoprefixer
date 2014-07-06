'use strict';

var path = require('path');
var fs = require('fs');
var autoprefixer = require('broccoli-autoprefixer');

function EmberCLIAutoprefixer(project) {
  this.project = project;
  this.name = 'Ember CLI Autoprefixer';
}

EmberCLIAutoprefixer.prototype.postprocessTree = function (type, tree) {
  if (type === 'all' || type === 'styles') {
    tree = autoprefixer(tree, this.options);
  }

  return tree;
};

EmberCLIAutoprefixer.prototype.included = function included(app) {
  this.app = app;
  this.options = this.app.options.autoprefixer;
};

EmberCLIAutoprefixer.prototype.treeFor = function treeFor() {};

module.exports = EmberCLIAutoprefixer;
