import React from 'react';
import { projectsData } from '../data/project';
import ProjectCard from '../components/ProjectCard';

export default function ProjectSection() {
  return (
    <section id="projects" style={{ padding: '2rem 0' }}>
      <h2>Featured Projects</h2>
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}