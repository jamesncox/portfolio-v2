import React from 'react'
// import { Link as RouterLink } from 'react-router-dom';


function NavBar() {

    return (
        <nav className="menu-wrapper">
            {/* <RouterLink to="/"> */}
                <a>About</a>
            {/* </RouterLink> */}

            <a>Portfolio</a>
            <a>Blog</a>
            <a>Contact</a>
        </nav>
    )
}

export default NavBar