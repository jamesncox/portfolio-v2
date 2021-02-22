import React from 'react'
import FeaturedProjects from './FeaturedProjects'
import ProjectLink from './ProjectLink'

function Projects() {

    return (
      <>
        <p className="section-title">featured projects</p>
        <div className="projects-container" id="projects">
          <FeaturedProjects />
          <ProjectLink />
        </div>
      </>
    )
}

export default Projects