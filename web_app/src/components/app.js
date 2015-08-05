'use strict';

var React = require('react');
var { RouteHandler } = require("react-router");

var Header = require('./header');

var App = React.createClass({

  render: function () {
    return (
      <div className='app'>
        <Header />
        <RouteHandler />
      </div>
    );
  },

});

module.exports = App;
