import React from 'react';
import SideBarTitle from './SideBarTitle';
import SideBarNav from './SideBarNav';

const SideBar = (props) => {
    return (
        <div className="row">
            <div className="col-12 col-md-3 sidebar">
                <SideBarTitle />
                <SideBarNav />
                { /* Spacer to logout option */}
                <div className="sidebar__padded">
                    <div className="sidebar__padded sidebar__divider">
                    </div>
                </div>
                {
                    (props.admin === true) &&
                    <div>
                        <ul className="sidebar__list my-0">
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
        </div>
    );
};

export default SideBar;