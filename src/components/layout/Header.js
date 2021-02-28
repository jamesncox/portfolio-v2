import React from 'react'
import Toggle from './Toggle'
import NavBar from './NavBar'

function Header() {

    return (
      <div className="nav-parent">
        <header className="navbar-wrapper">
          <h1 className="my-name">James Cox</h1>
          <Toggle />
        </header>
        <NavBar />
      </div>
    );
}

export default Header