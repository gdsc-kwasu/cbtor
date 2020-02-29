import React from 'react';
import Course from './Course';
import NavBar from './NavBar';
import ReactDOM from 'react-dom';
import ReactNotification from 'react-notifications-component';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-notifications-component/dist/theme.css";

const App = () => {
    return (
        <React.Fragment>
            <ReactNotification />
            <Router>
                <Switch>
                    <Route path="/" component={NavBar} />
                </Switch>
            </Router>
        </React.Fragment>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
