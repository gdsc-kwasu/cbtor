import React from 'react';
import NavBar from './NavBar';
import Course from './Course';
import Account from './Account';
import User from './User';
import Credit from './Credit';
import ReactDOM from 'react-dom';
import CourseSection from './CourseSection'
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
                    <Route path="/manage" component={Course} exact />
                    <Route path="/manage/courses" component={CourseSection} exact />
                    <Route path="/manage/account" component={Account} exact />
                    <Route path="/manage/user" component={User} exact />
                    <Route path="/manage/credit" component={Credit} exact />
                </Switch>
            </Router>
        </React.Fragment>
    );
};

export default App

ReactDOM.render(<App />, document.getElementById('app'));
