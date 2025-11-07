"use client"

import { projects } from "@/lib/projects"
import { ProjectCard } from "./ProjectCard"

export default function ProjectsGrid() {
  return (
    <div className="flex w-full flex-col gap-8" role="list">
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
    </div>
  )
}
