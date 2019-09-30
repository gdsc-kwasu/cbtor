import React from 'react';
import './LinkButton';
import LinkButton from "./LinkButton";

const TopBar = (props) => {
    return (
        <div className="topbar">
            <div className="row align-items-center">
                <div className="col-6">
                    <div className="d-flex">
                        <img src="/images/mario.svg" alt="User name is here" className="user-avatar"/>
                        <div className="pt-3 pl-3">
                            <h5 className="font-weight-bold mb-0">
                                Jimoh Lawal Olafimihan
                            </h5>
                            <small>cyberphym707@gmail.com 50 Exams taken</small>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <LinkButton href="#" margin="mx-2">
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

export default TopBar;
