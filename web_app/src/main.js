'use strict';

var React  = require('react');
var Router = require('react-router');
var flux   = require('./flux');
var App    = require('./modules/app');

var { Route } = Router;

var App = require('./components/app');

require('./style/index.scss');

// export for http://fb.me/react-devtools
window.React = React;

var routes = (
    <Route path='/' handler={App}></Route>
);

Router.run(routes, Router.HashLocation, (Root, state) => {
    React.render(<Root />, document.getElementById('react'));
});
