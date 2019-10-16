import React from 'react';
import Course from './Course';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Course} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
