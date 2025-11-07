"use client"

import { projects } from "@/lib/projects"
import { ProjectCard } from "./ProjectCard"

export default function ProjectsGrid() {
  return (
    <ul className="flex w-full flex-col gap-8">
      {projects.map((project) => (
        <li key={project.title}>
          <ProjectCard
            title={project.title}
            description={project.description}
            image={project.image}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
            images={project.images}
          />
        </li>
      ))}
    </ul>
  )
}
