# Autoprefixer for Ember CLI [![Build Status](https://travis-ci.org/kimroen/ember-cli-autoprefixer.svg?branch=master)](https://travis-ci.org/kimroen/ember-cli-autoprefixer)
This addon runs the styles of your EmberCLI-project through
`autoprefixer`.

## Install
To install, run

```
ember install ember-cli-autoprefixer
```

## Options
You can configure what browsers to target and other options by specifying them in your
`ember-cli-build.js` (or `Brocfile.js`). An example:

```js
var app = new EmberApp(defaults, {
  autoprefixer: {
    browsers: ['last 2 ios version'],
    cascade: false
  }
});
```

This would prefix styles as required by the two latest version of ios, and disable the cascade (see below).

You can disable autoprefixer by passing in `enabled: false`.

Other options would also go here along with `browsers`.

You can read more about these settings and others [over on the autoprefixer page](https://github.com/postcss/autoprefixer#options).

## References
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [broccoli-autoprefixer](https://github.com/sindresorhus/broccoli-autoprefixer)
