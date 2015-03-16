var React = require('react'),
    RoundRobinTable = require('./RoundRobinTable.react');

var TourneyApp = React.createClass({

    render: function() {
        return (
            <div className="tourneyapp">
                <div className="row">
                    <div className="large-12 columns">
                        <h1>Red Arrow Cup Spring'15</h1>
                    </div>
                </div>

                <RoundRobinTable />

                <footer className="row">
                    <div className="large-12 columns">
                        <hr/>
                        <div className="row">
                            <div className="large-6 columns">
                                <p>© Copyright no one at all. Go to town.</p>
                            </div>
                            <div className="large-6 columns">
                                <ul className="inline-list right">
                                    <li><a href="#">Link 1</a></li>
                                    <li><a href="#">Link 2</a></li>
                                    <li><a href="#">Link 3</a></li>
                                    <li><a href="#">Link 4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
});

module.exports = TourneyApp;