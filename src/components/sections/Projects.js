import React from "react";
import Resume from "../../resume.json";
import Project from "../elements/Project"


function buildProjectsRow(projects, start, end) {
  const batch = projects.slice(start, end);
  let projectsComponents = [];
  batch.forEach((value, indx) => {
    projectsComponents.push(
      <div key={indx} className="column is-3">
        <Project
          text={value.name}
          icon={value.x_icon}
          description={value.x_description}
          website={value.website}
        />
      </div>
    )
  });
  return projectsComponents;
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h1 className="title">Projects</h1>
        <div className="columns">
          {buildProjectsRow(Resume.projects, 0, 4)}
        </div>
        <div className="columns">
          {buildProjectsRow(Resume.projects, 4, 8)}
        </div>
        <div className="columns">
          {buildProjectsRow(Resume.projects, 8, 12)}
        </div>
      </div>
    </section>
  );
}

export default Projects;
