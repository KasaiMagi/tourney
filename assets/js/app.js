var _  = require('lodash');
var io = require('./dependencies/sails.io.js')();
var React = require('react');
var TourneyApp = require('./components/TourneyApp.react');

_.each([1,2,3,4,5], function(value){
  console.log(value);
});

console.log('Sails.sockets.io', io);
var PLAYERS = [
    {
        name: 'Tom'
    },
    {
        name: 'Alex'
    }
];
React.render(
  <TourneyApp players={PLAYERS} />,
  document.getElementById('main-container')
);