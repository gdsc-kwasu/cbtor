import React from 'react';
import NavBar from './NavBar';
import Course from './Course';
import Account from './Account';
import User from './User';
import Credit from './Credit';
import ReactDOM from 'react-dom';
import ReactNotification from 'react-notifications-component';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-notifications-component/dist/theme.css";

const App = () => {
    return (
        <React.Fragment>
            <ReactNotification />
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" component={Course} />
                    <Route path="/account" component={Account} />
                    <Route path="/user" component={User} />
                    <Route path="/credit" component={Credit} />
                </Switch>
            </Router>
        </React.Fragment>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
