import React from 'react'
import FeaturedProjects from './FeaturedProjects'
import ProjectLink from './ProjectLink'

function Projects() {

    return (
      <div id="projects">
        <p className="section-title">featured projects</p>
        <div className="projects-container">
          <FeaturedProjects />
          <ProjectLink />
        </div>
      </div>
    )
}

export default Projects