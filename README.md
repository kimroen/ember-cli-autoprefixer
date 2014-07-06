# Autoprefixer for Ember CLI
This addon runs the styles of your EmberCLI-project through
`autoprefixer`.

*NB*: This addon requires Ember CLI version `0.0.39` or newer.

## Install
To install, run

```
npm install ember-cli-autoprefixer --save-dev
```

## Options
You can configure what browsers to target by specifying them in your
`Brocfile.js`. An example:

```js
var app = new EmberApp({
  autoprefixer: {
    browsers: ['last 2 ios version']
  }
});
```

This would prefix styles as required by the two latest version of ios.

The default value for `browsers` are `['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']`.

You can read more about this setting [over on the autoprefixer page](https://github.com/ai/autoprefixer#browsers).

## References
- [Autoprefixer](https://github.com/ai/autoprefixer)
- [broccoli-autoprefixer](https://github.com/sindresorhus/broccoli-autoprefixer)
