import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Wallet from '../components/dashboard/Wallet';
import Scores from '../components/dashboard/Scores';
import Feedback from '../components/dashboard/Feedback';
import TakeExam from '../components/dashboard/TakeExam';
import Password from '../components/dashboard/Password';
import Profile from '../components/dashboard/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
        }
    }

    componentDidMount() {
        fetch('/api/me')
            .then(data => data.json())
            .then(user => this.setState({ user }))
    }

    render() {
        const { user } = this.state;
        return (
            <div className="container-fluid">
                <Router>
                    <NavBar user={user}/>
                    { /* Sidebar goes in here */}
                    <SideBar admin={user.isAdmin} />
                    <div className="row justify-content-end">
                        <div className="col-12 col-md-9">
                            <TopBar user={user} />
                            <Route path="/dashboard" component={TakeExam} exact/>
                            <Route path="/wallet" component={Wallet} exact/>
                            <Route path="/score" component={Scores} exact/>
                            <Route path="/feedback" component={Feedback} exact/>
                            <Route path="/password" component={Password} exact/>
                            <Route path="/profile" component={Profile} exact/>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

ReactDOM.render(<Dashboard />, document.querySelector('#app'));