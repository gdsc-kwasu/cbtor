import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <NavBar />
                { /* Sidebar goes in here */}
                <SideBar/>
                <div className="row justify-content-end">
                    <div className="col-12 col-md-9">
                        <TopBar />
                        <MainContent />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Dashboard />, document.querySelector('#app'));