"use client";

import { ProjectCard, projects } from "./ProjectCard";

export default function ProjectsGrid() {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          githubLink={project.githubLink}
          websiteLink={project.websiteLink}
          images={project.images}
        />
      ))}
    </>
  );
}
