import React, {useState } from 'react'
import {Link} from 'react-scroll'

function NavBar() {

    const [aboutActive, setAboutActive] = useState(true)
    const [projectsActive, setProjectsActive] = useState(false)
    const [blogActive, setBlogActive] = useState(false)
    const [contactActive, setContactActive] = useState(false)

    const handleAboutActive = () => {
        setAboutActive(true)
        setProjectsActive(false)
        setBlogActive(false)
        setContactActive(false)
    }

    const handleProjectsActive = () => {
        setAboutActive(false)
        setProjectsActive(true)
        setBlogActive(false)
        setContactActive(false)
    }

    const handleBlogActive = () => {
        setAboutActive(false)
        setProjectsActive(false)
        setBlogActive(true)
        setContactActive(false)
    }

    const handleContactActive = () => {
        setAboutActive(false)
        setProjectsActive(false)
        setBlogActive(false)
        setContactActive(true)
    }

    return (
      <nav className="menu-wrapper">
        <button
          
          className={aboutActive ? "selected-menu" : "menu"}
        >
          <Link
          onClick={(e) => handleAboutActive(e)}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-120}
            duration={400}
          >
            About
          </Link>
        </button>
        <button
          
          className={projectsActive ? "selected-menu" : "menu"}
        >
          <Link
          onClick={(e) => handleProjectsActive(e)}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-120}
            duration={400}
          >
            Projects
          </Link>
        </button>
        <button
          
          className={blogActive ? "selected-menu" : "menu"}
        >
          <Link
          onClick={(e) => handleBlogActive(e)}
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={-120}
            duration={400}
          >
            Blog
          </Link>
        </button>
        <button
          
          className={contactActive ? "selected-menu" : "menu"}
        >
          <Link
          onClick={(e) => handleContactActive(e)}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-120}
            duration={400}
          >
            Contact
          </Link>
        </button>
      </nav>
    );
}

export default NavBar