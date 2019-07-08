'use strict';

var utils = require('handlebars-utils');
var moment = require('moment');

module.exports = function dateHelper(str, pattern, options) {
  if (utils.isOptions(pattern)) {
    options = pattern;
    pattern = null;
  }

  if (utils.isOptions(str)) {
    options = str;
    pattern = null;
    str = null;
  }

  // if no args are passed, return a formatted date
  if (str == null && pattern == null) {
    moment.locale('en');
    return moment().format('MMMM DD, YYYY');
  }

  var defaults = {lang: 'en', date: new Date(str)};
  var opts = utils.context(this, defaults, options);

  // set the language to use
  moment.locale(opts.lang || opts.language);

  return moment(new Date(str)).format(pattern);
};
