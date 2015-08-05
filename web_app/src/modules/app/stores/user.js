'use strict';

var Nuclear = require('nuclear-js');
var actionTypes = require('../action-types');

function setName(state, name) {
    return state.set('name', name);
}

module.exports = new Nuclear.Store({

  getInitialState() {
    return Nuclear.toImmutable({
        name: '',
    });
  },

  initialize() {
    this.on(actionTypes.ChangeName, setName);
  },

});
