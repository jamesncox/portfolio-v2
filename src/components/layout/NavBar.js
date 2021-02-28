import React from 'react'
import {Link} from 'react-scroll'

function NavBar() {

    return (
      <nav className="menu-wrapper">
        <h2
          className="menu"
        >
          <Link
            activeClass="selected-menu"
            to="about"
            spy={true}
            smooth={true}
            offset={-120}
          >
            ABOUT
          </Link>
        </h2>
        <h2
          className="menu"
        >
          <Link
            activeClass="selected-menu"
            to="projects"
            spy={true}
            smooth={true}
            offset={-120}
          >
            PROJECTS
          </Link>
        </h2>
        <h2 
          className="menu"
        >
          <Link
            activeClass="selected-menu"
            to="blog"
            spy={true}
            smooth={true}
            offset={-120}
          >
            BLOG
          </Link>
        </h2>
        <h2
          className="menu"
        >
          <Link
            activeClass="selected-menu"
            to="contact"
            spy={true}
            smooth={true}
            offset={-120}
          >
            CONTACT
          </Link>
        </h2>
      </nav>
    );
}

export default NavBar