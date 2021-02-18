import React from 'react'
import Toggle from './Toggle'
import NavBar from './NavBar'

function Header() {

    return (
        <>
            <header className="navbar-wrapper">
                <p className="my-name">James (me)</p>
                <Toggle />
            </header>
            <NavBar />
        </>
    )
}

export default Header