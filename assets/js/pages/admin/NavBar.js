import React from 'react'
import NavbarLink from './NavbarLink'

const NavBar = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar__header navbar-light bg-blue">
                <a className="navbar-brand navbar__title text-white" href="/">CBTor</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    <NavbarLink />
                </div>
            </nav>
        </React.Fragment>
    )
}

export default NavBar;