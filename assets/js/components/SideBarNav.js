import React from 'react';

const SideBarNav = () => {
    return (
        <React.Fragment>
            <div className="sidebar__top-spacer">
                <ul className="sidebar__list">
                    <li className="active"><a href="#">Take Exam</a></li>
                    <li><a href="#">Wallet</a></li>
                    <li><a href="#">Scores</a></li>
                    <li><a href="#">Feedback</a></li>
                    <li><a href="#">Change Password</a></li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default SideBarNav;
