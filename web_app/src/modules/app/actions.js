'use strict';

var $ = require('jquery');
var flux = require('../../flux');
var actionTypes = require('./action-types');
var getters = require('./getters');

exports.changeName = function (name) {
    flux.dispatch(actionTypes.ChangeName, name);
};
