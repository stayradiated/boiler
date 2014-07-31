var React = require('react');

var Header = require('./header.react');

var App = React.createClass({

  render: function () {
    /* jshint ignore: start */
    return (
      <div className='app'>
        <Header />
      </div>
    );
    /* jshint ignore: end */
  }

});

module.exports = App;
