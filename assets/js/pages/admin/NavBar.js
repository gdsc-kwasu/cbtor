import React from 'react'
import NavbarLink from './NavbarLink'

const NavBar = () => {
    return(
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar__header navbar-light bg-blue">
                <a class="navbar-brand navbar__title text-white" href="#">CBTor</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    <NavbarLink />
                </div>
            </nav>
        </React.Fragment>
    )
}

export default NavBar;