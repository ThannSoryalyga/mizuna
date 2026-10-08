import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid #e2e8f0',
        borderRadius: '18px',
        padding: '1.25rem',
        margin: '1rem 0',
        boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)'
      }}
    >
      <h3 style={{ margin: '0 0 0.75rem', color: '#0f172a' }}>{project.title}</h3>
      <p style={{ color: '#475569', lineHeight: 1.7 }}>{project.description}</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '1rem 0' }}>
        {project.tech.map((tech, idx) => (
          <span key={idx} style={{ background: '#e0f2fe', color: '#0f766e', padding: '0.35rem 0.7rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 600 }}>
            {tech}
          </span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
      </div>
    </article>
  );
}