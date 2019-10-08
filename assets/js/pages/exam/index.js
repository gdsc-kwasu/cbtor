import React from 'react';
import Exam from './Exam';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/exam/:id" component={Exam} />
            </Switch>
        </BrowserRouter>
    );
};
ReactDOM.render(<App />, document.querySelector('#app'));