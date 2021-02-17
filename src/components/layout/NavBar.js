import React from 'react'
// import { Link as RouterLink } from 'react-router-dom';


function NavBar() {

    return (
        <nav className="menu-wrapper">
            {/* <RouterLink to="/"> */}
                <button className="menu-buttons">About</button>
            {/* </RouterLink> */}

            <button className="menu-buttons">Portfolio</button>
            <button className="menu-buttons">Blog</button>
            <button className="menu-buttons">Contact</button>
        </nav>
    )
}

export default NavBar