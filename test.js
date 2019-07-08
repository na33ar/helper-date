/*!
 * helper-date <https://github.com/helpers/helper-date>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var handlebars = require('handlebars');
var momentjs = require('moment');
var moment = require('./');
var _ = require('lodash');

describe('moment', function() {
  it('should return a default formatted moment date when nothing is passed:', function() {
    assert.deepEqual(moment(), momentjs().format('MMMM DD, YYYY'));
  });
  
});

