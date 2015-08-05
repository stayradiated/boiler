'use strict';

var React = require('react');

var flux = require('../flux');
var App = require('../modules/app');

var Header = React.createClass({
    displayName: 'Header',

    mixins: [flux.ReactMixin],

    getDataBindings() {
        return {
            name: App.getters.name,
        };
    },

    render() {
        return (
            <header className="component--header">
                <h1>{this.state.name}</h1>
                <button onClick={this.onClickButton}>
                    Change Name
                </button>
            </header>
        );
    },

    onClickButton () {
        var name = prompt('Enter a new name');
        if (name.length <= 0) {
            return;
        }
        App.actions.changeName(name);
    },

});

module.exports = Header;
