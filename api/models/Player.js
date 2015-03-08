/**
* Player.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        name: {
            type: 'string'
        },

        matches: {
            collection: 'Match',
            via: 'players'
        },

        wins:{
            collection: 'Match',
            via: 'winner'
        }


  }
};

