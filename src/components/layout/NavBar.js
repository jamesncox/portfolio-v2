import React from 'react'
import {Link} from 'react-scroll'

function NavBar() {

    return (
        <nav className="menu-wrapper">
            <button className="menu-buttons"><Link activeClass="active" to="about" spy={true} smooth={true} offset={-100}>About</Link></button>
            <button className="menu-buttons"><Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100}>Projects</Link></button>
            <button className="menu-buttons"><Link activeClass="active" to="blog" spy={true} smooth={true} offset={-100}>Blog</Link></button>
            <button className="menu-buttons"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100}>Contact</Link></button>
        </nav>
    )
}

export default NavBar