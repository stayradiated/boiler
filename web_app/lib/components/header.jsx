'use strict';

var React = require('react');

var Header = React.createClass({
  
  propTypes: {
    name: React.PropTypes.string.isRequired,
    onChangeName: React.PropTypes.func.isRequired,
  },

  render: function () {
    return (
      <header>
        <h1>{this.props.name}</h1>
        <button onClick={this.onClickButton}>
          Change Name
        </button>
      </header>
    );
  },

  onClickButton: function () {
    this.props.onChangeName();
  },

});

module.exports = Header;
