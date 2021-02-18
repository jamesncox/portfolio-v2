import React from 'react'
import {Link} from 'react-scroll'

function NavBar() {

    return (
      <nav className="menu-wrapper">
        <div
          className="menu"
        >
          <Link
            activeClass="selected-menu"
            to="about"
            spy={true}
            smooth={true}
            offset={-120}
            duration={400}
          >
            About
          </Link>
        </div>
        <div
          className="menu"
        >
          <Link
            activeClass="selected-menu"
            to="projects"
            spy={true}
            smooth={true}
            offset={-120}
            duration={400}
          >
            Projects
          </Link>
        </div>
        <div 
          className="menu"
        >
          <Link
            activeClass="selected-menu"
            to="blog"
            spy={true}
            smooth={true}
            offset={-120}
            duration={400}
          >
            Blog
          </Link>
        </div>
        <div
          className="menu"
        >
          <Link
            activeClass="selected-menu"
            to="contact"
            spy={true}
            smooth={true}
            offset={-120}
            duration={400}
          >
            Contact
          </Link>
        </div>
      </nav>
    );
}

export default NavBar