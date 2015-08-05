var flux = require('../../flux');

flux.registerStores({
    user: require('./stores/user'),
});

module.exports = {
    actions: require('./actions'),
    getters: require('./getters')
};
