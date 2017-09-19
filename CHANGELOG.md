## master


### 0.8.1
+ Fix issue with asset fingerprinting not taking autoprefixing into account [#39](https://github.com/kimroen/ember-cli-autoprefixer/pull/39)

## 0.8.0
+ Update `broccoli-autoprefixer` dependency. This also updates Autoprefixer to
  v7.0.0 and requires Node version 4 or later. [#37](https://github.com/kimroen/ember-cli-autoprefixer/pull/37) and [#36](https://github.com/kimroen/ember-cli-autoprefixer/pull/36)

## 0.7.0
+ Support for the new `targets` feature coming in Ember-CLI 2.13. Read all about it [on @rwjblue's blog](http://rwjblue.com/2017/04/21/ember-cli-targets/). Thanks to [@rwjblue](https://github.com/rwjblue) and [@cibernox](https://github.com/cibernox) for working on it. [#34](https://github.com/kimroen/ember-cli-autoprefixer/pull/34)

## 0.6.0
+ Updated structure to the newest ember-cli project structures [#22](https://github.com/kimroen/ember-cli-autoprefixer/pull/22) and [#29](https://github.com/kimroen/ember-cli-autoprefixer/pull/29)
+ Allow using this addon inside other addons directly [#27](https://github.com/kimroen/ember-cli-autoprefixer/pull/27)
+ Updated `lodash` and `broccoli-autoprefixer` dependencies [#29](https://github.com/kimroen/ember-cli-autoprefixer/pull/29)

## 0.5.0
+ Updated to the latest Autoprefixer (v6.0). See [their changelog](https://github.com/postcss/autoprefixer/releases/tag/6.0.0)

### 0.4.1
+ Ignored the tmp-folder when publishing to npm
  [#15](https://github.com/kimroen/ember-cli-autoprefixer/pull/16).

## 0.4.0
+ Updated `broccoli-autoprefixer` dependency. It is now running
  autoprefixer through PostCSS, which gets rid of the deprecation
warnings.
[#14](https://github.com/kimroen/ember-cli-autoprefixer/pull/14)

## 0.3.0
+ Added support for disabling autoprefixer. [#7](https://github.com/kimroen/ember-cli-autoprefixer/pull/7).
+ Updated version of `broccoli-autoprefixer`, which in turn updates Autoprefixer
core to `5.0.0`. You can [read more about the changes here](https://github.com/postcss/autoprefixer/releases/tag/5.0.0).

## 0.2.0
+ Updated version of `broccoli-autoprefixer`, which in turn updates Autoprefixer
core to `4.0.0`. You can [read more about the changes here](https://github.com/postcss/autoprefixer/releases/tag/4.0.0).
