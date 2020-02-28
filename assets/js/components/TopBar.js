import './LinkButton';
import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from "./LinkButton";
import PulseLoader from '../components/PulseLoader';

const UserInfo = ({ firstName, lastName, email, examTaken }) => {
    return (
        <div className="d-flex">
            <img src="/images/adedeji.png" alt={firstName} className="user-avatar"/>
            <div className="pt-3 pl-3">
                <h5 className="font-weight-bold mb-0">
                    { `${firstName} ${lastName}` }
                </h5>
                <small>{ email } {examTaken} Exams taken</small>
            </div>
        </div>
    );
};

const TopBar = ({ user }) => {
    const { firstName, lastName, email, examTaken } = user;
    return (
        <div className="topbar">
            <div className="row align-items-center">
                <div className="col-6">
                    { user.email
                        ? <UserInfo email={email} firstName={firstName} lastName={lastName} examTaken={examTaken} />
                        : <PulseLoader />
                    }
                </div>
                <div className="col-6">
                    <LinkButton href="Profile" margin="mx-2">
                        Edit Profile
                    </LinkButton>
                    <LinkButton href="#" margin="mx-2" type="btn-outline-success">
                        Contact Support
                    </LinkButton>
                    <LinkButton href="#" margin="mx-2" type="btn-outline-success">
                        About
                    </LinkButton>
                </div>
            </div>
        </div>
    );
};

TopBar.propTypes = {
    user: PropTypes.object.isRequired,
};

export default TopBar;
