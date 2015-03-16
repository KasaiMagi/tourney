var React = require('react'),
    _ = require('lodash');

var RoundRobinPlayerRow = React.createClass({

    render: function() {
        var player = this.props.player,
            matches = [],
            totalScore = 0;
        _.forEach(this.props.opponents, function(o) {
            var score = '';
            if (o.id == player.id) {
                score = '-';
            }
            if (player.matchWinner[o.id]) {
                score = '0-1';
                if (player.matchWinner[o.id] == player.id) {
                    totalScore++;
                    score = '1-0';
                }
            }
            matches.push(<td>{score}</td>);
        });
        return (
            <tr>
                <td>{player.name}</td>
                {matches}
                <td>{totalScore}</td>
            </tr>
        );
    }

});

module.exports = RoundRobinPlayerRow;