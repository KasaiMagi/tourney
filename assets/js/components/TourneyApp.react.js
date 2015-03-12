var React = require('react'),
    RoundRobinTable = require('./RoundRobinTable.react');

var TourneyApp = React.createClass({

    render: function() {
        return (
            <div className="tourneyapp">
                <RoundRobinTable players={this.props.players} />
            </div>
        );
    }
});

module.exports = TourneyApp;