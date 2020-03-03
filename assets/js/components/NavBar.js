import React from 'react';
import SideBarNav from './SideBarNav';
import PulseLoader from '../components/PulseLoader';

/*
* Shows the user information on a small screen sidebar.
* */
const UserInfo = ({ firstName, lastName, email, examTaken }) => {
    return (
        <div className="pt-4">
            <div className='d-flex justify-content-center'>
                <img src="/images/user.png" alt={ firstName } className="user-avatar bg-white"/>
            </div>
            <div className="text-center user--details pt-2">
                <h5 className="font-weight-bold mb-0">
                    { `${firstName} ${lastName}` }
                </h5>
                <small>{ email } | {examTaken} { (examTaken<=1) ? 'exam' : 'exams' } taken</small>
            </div>
        </div>
    );
};

/*
* Navgiation sidebar on a small and extra small
* screens.
* */
const NavBar = ({ user }) => {
    const { email, firstName, lastName, examTaken, isAdmin } = user;
    return (
        <React.Fragment>
            <nav className="navbar navbar-light navbar--none">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navBarDashboard" aria-controls="navBarDashboard" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="fa fa-bars" />
                </button>
                <a className="navbar-brand" href="#">
                    <span className='fa fa-bell alarm-icon'></span>
                    <small className="badge badge-danger">7</small>
                </a>

                <div className="collapse navbar-collapse--none px-0 py-0 mb-0" id="navBarDashboard">
                    <div className='d-flex justify-content-end mb-0'>
                        <button className="navbar-toggler text-white" type="button" data-toggle="collapse"
                        data-target="#navBarDashboard" aria-controls="navBarDashboard" aria-expanded="false"
                        aria-label="Toggle navigation">
                            <span className="fa fa-times" />
                        </button>
                    </div>
                    { /* element here. */ }
                    { user.email
                        ? <UserInfo firstName={firstName} lastName={lastName} email={email} examTaken={examTaken} />
                        : <PulseLoader color="#fff" />
                    }
                    <div className="sidebar__padded">
                        <div className="sidebar__padded sidebar__divider">
                        </div>
                    </div>
                    <SideBarNav />
                    <div className="sidebar__padded">
                        <div className="sidebar__padded sidebar__divider">
                        </div>
                    </div>
                    {
                        (isAdmin === true) &&
                        <div className='mt-0'>
                            <ul className="sidebar__list">
                                <li>
                                    <a href="/manage">Admin</a>
                                </li>
                            </ul>
                        </div>
                    }
                    <div>
                        <ul className="sidebar__list">
                            <li><a href="#" data-toggle="modal" data-target="#logout-modal">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default NavBar;
