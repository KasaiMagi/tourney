var React = require('react'),
    RoundRobinPlayerRow = require('./RoundRobinPlayerRow.react'),
    _ = require('lodash'),
    io = require('../io');

var players = {};

// var MATCHES = [
//     {
//         players: [{
//             name: "Tom",
//             id: 3,
//             createdAt: "2015-03-08T18:54:38.886Z",
//             updatedAt: "2015-03-08T19:15:51.969Z"
//         }, {
//             name: "Alex",
//             id: 4,
//             createdAt: "2015-03-08T19:10:45.820Z",
//             updatedAt: "2015-03-08T19:10:45.820Z"
//         }],
//         winner: {
//             name: "Tom",
//             id: 3,
//             createdAt: "2015-03-08T18:54:38.886Z",
//             updatedAt: "2015-03-08T19:15:51.969Z"
//         },
//         id: 1,
//         createdAt: "2015-03-08T19:15:51.948Z",
//         updatedAt: "2015-03-08T19:15:51.972Z"
//     }
// ];


var RoundRobinTable = React.createClass({
    getInitialState: function() {
        return {
            players: players
        };
    },

    componentWillMount: function() {
        var component = this;
        io.socket.get('/match', function(resData, jwres) {
            if (!resData) { return ; }

            resData.forEach(function(m) {
                var p1 = m.players[0],
                    p2 = m.players[1];

                if (!(p1.id in players)) {
                    players[p1.id] = p1;
                    players[p1.id].matchWinner = {};
                }
                players[p1.id].matchWinner[p2.id] = m.winner.id;

                if (!(p2.id in players)) {
                    players[p2.id] = p2;
                    players[p2.id].matchWinner = {};
                }
                players[p2.id].matchWinner[p1.id] = m.winner.id;
            });

            component.setState(players);
        });
    },

    render: function() {
        var rows = [],
            headers = [],
            players = this.state.players;
        _.forEach(players, function(player) {
            headers.push(<th>{player.name}</th>);
            rows.push(<RoundRobinPlayerRow player={player} opponents={players} key={player.id} />);
        });
        return (
            <div className="row">
                <div className="large-12 columns">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                {headers}
                                <th>score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

});


module.exports = RoundRobinTable;