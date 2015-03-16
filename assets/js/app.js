var _ = require('lodash');
var io = require('./io');
var React = require('react');
var TourneyApp = require('./components/TourneyApp.react');

io.socket.on('/player', function(resData, jwres) {
    console.log(resData);
});

React.render(<TourneyApp />,
    document.getElementById('main-container')
);