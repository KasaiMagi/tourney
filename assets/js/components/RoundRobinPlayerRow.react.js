var React = require('react');

var RoundRobinPlayerRow = React.createClass({

    render: function() {
        var name = this.props.player.name;
        return (
            <tr>
                <td>{name}</td>
                <td>-</td>
                <td>1-0</td>
            </tr>
        );
    }

});

module.exports = RoundRobinPlayerRow;