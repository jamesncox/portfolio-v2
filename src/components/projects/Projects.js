import FeaturedProjects from "./FeaturedProjects";
import ProjectLink from "./ProjectLink";

function Projects() {
  return (
    <div id="projects">
      <h2 className="section-title">featured projects</h2>
      <div className="projects-container">
        <FeaturedProjects />
        <ProjectLink />
      </div>
    </div>
  );
}

export default Projects;
