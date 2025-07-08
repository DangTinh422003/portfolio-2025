"use client";

import ProjectItem from "@/components/ProjectItem";
import { PROJECTS } from "@/constants";

export interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  role: string;
  frontend: string[];
  backend: string[];
  thumbnail: string;
  source?: string;
  demo?: string;
  images: string[];
}

const Projects = () => {
  return (
    <div className="container">
      <div
        className={`
          grid grid-cols-1 gap-4
          md:grid-cols-2
          xl:grid-cols-3
        `}
      >
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
