import React from 'react';
import { NavLink} from "react-router-dom";

const NavbarLink = () => {
    return (
        <ul className='navbar-nav ml-auto'>
            <li className='nav-item mx-3 font-weight-bold'>
                <NavLink to="/course" activeClassName="active" className='text-white text-decoration-none'>
                    HOME
                </NavLink>
            </li>
            <li className='nav-item mx-3 font-weight-bold'>
                <NavLink to="/account" activeClassName="active" className='text-white text-decoration-none'>
                    ACCOUNT
                </NavLink>
            </li>
            <li className='nav-item mx-3 font-weight-bold'>
                <NavLink to="/user" activeClassName="active" className='text-white text-decoration-none'>
                    USER
                </NavLink>
            </li>
            <li className='nav-item mx-3 font-weight-bold'>
                <NavLink to="/credit" activeClassName="active" className='text-white text-decoration-none'>
                    CREDIT
                </NavLink>
            </li>
        </ul>
    )
}

export default NavbarLink;