/* jshint node: true */
'use strict';

var autoprefixer = require('broccoli-autoprefixer');
var defaults = require('lodash').defaults;
var includes = require('lodash').includes;

module.exports = {
    name: 'ember-cli-autoprefixer',
    init: function() {
        this.options = null;
    },
    included: function(app, parentAddon) {
        this._super.included(app);
        this.app = app;
		// Only process app options the first time
        if (this.options === null) {
            this.options = defaults(this.app.options.autoprefixer || {}, {
                enabled: true,
                autoprefixedTrees: ['all', 'style']
            });
            this.enabled = this.options.enabled;
            this.autoprefixedTrees = this.options.autoprefixedTrees;
            delete this.options.enabled;
            delete this.options.autoprefixedTrees;
        }
    },
    postprocessTree: function(type, tree) {
        if ((includes(this.autoprefixedTrees,type)) && this.enabled) {
            tree = autoprefixer(tree, this.options);
        }

        return tree;
    }
};
