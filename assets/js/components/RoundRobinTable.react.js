var React = require('react'),
    RoundRobinPlayerRow = require('./RoundRobinPlayerRow.react');

var RoundRobinTable = React.createClass({

    render: function() {
        var rows = [],
            headers = [];
        this.props.players.forEach(function(player) {
            headers.push(<th>{player.name}</th>);
            rows.push(<RoundRobinPlayerRow player={player} key={player.name} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>-</th>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }

});

module.exports = RoundRobinTable;