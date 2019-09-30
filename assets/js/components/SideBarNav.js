import React from 'react';
import { NavLink} from "react-router-dom";

const SideBarNav = () => {
    return (
        <React.Fragment>
            <div className="sidebar__top-spacer">
                <ul className="sidebar__list">
                    <li>
                        <NavLink to="/dashboard" activeClassName="active">
                            Take Exam
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/wallet" activeClassName="active">
                            Wallet
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/score" activeClassName="active">
                            Score
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/feedback" activeClassName="active">
                            Feedback
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/password" activeClassName="active">
                            Change Password
                        </NavLink>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default SideBarNav;
