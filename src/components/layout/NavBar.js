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
            // duration={400}
            isDynamic={true}
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
            // duration={400}
            isDynamic={true}
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
            // duration={400}
            isDynamic={true}
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
            // duration={400}
            isDynamic={true}
          >
            Contact
          </Link>
        </div>
      </nav>
    );
}

export default NavBar