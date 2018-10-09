Autoprefixer for Ember CLI [![Build Status](https://travis-ci.org/kimroen/ember-cli-autoprefixer.svg?branch=master)](https://travis-ci.org/kimroen/ember-cli-autoprefixer)
==============================================================================

This addon runs the styles of your Ember CLI-project through Autoprefixer.

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-autoprefixer
```


Usage
------------------------------------------------------------------------------

By default ember-cli-autoprefixer passes your projects target browsers (in Ember CLI >= 2.13.0)
to autoprefixer. However, you can manually configure what browsers to target and other options by
specifying them in your `ember-cli-build.js` (or `Brocfile.js`). An example:

```js
var app = new EmberApp(defaults, {
  autoprefixer: {
    browsers: ['last 2 ios version'],
    cascade: false
  }
});
```

This would prefix styles as required by the two latest version of ios, and disable the cascade (see below).

You can disable Autoprefixer by passing in `enabled: false`.

Other options would also go here along with `browsers`, `enabled` and `cascade`.

You can read more about these settings and others [over on the Autoprefixer page](https://github.com/postcss/autoprefixer#options).

## References
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [broccoli-autoprefixer](https://github.com/sindresorhus/broccoli-autoprefixer)


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
