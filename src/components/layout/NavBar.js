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
          >
            ABOUT
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
          >
            PROJECTS
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
          >
            BLOG
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
          >
            CONTACT
          </Link>
        </div>
      </nav>
    );
}

export default NavBar