'use strict';

var path = require('path');
var fs = require('fs');
var autoprefixer = require('broccoli-autoprefixer');

function AutoprefixerPlugin(options) {
  this.name = 'ember-cli-autoprefixer';
  this.ext = 'css';
  this.options = options || {};
}

AutoprefixerPlugin.prototype.toTree = function(tree) {
  return autoprefixer(tree, this.options);
};

function EmberCLIAutoprefixer(project) {
  this.project = project;
  this.name = 'Ember CLI Autoprefixer';
}

EmberCLIAutoprefixer.prototype.treeFor = function treeFor() {
};

EmberCLIAutoprefixer.prototype.included = function included(app) {
  var registry = app.registry;
  this.app = app;

  var plugin = new AutoprefixerPlugin(this.app.options.autoprefixerOptions);

  registry.add('css', plugin);
};

module.exports = EmberCLIAutoprefixer;
