import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom';

const NavBar = () => {
    return(
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <a class="navbar-brand" href="#">CBTor</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
            </nav>
        </React.Fragment>
    )
}

export default NavBar;