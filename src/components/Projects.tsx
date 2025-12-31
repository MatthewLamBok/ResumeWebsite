import { useState } from 'react';
import type { ProjectItem } from '../types';
import projectsData from '../content/json/projects.json';
import { markdownToHtml } from '../utils/textFormat';

const Projects: React.FC = () => {
  const projects = projectsData as ProjectItem[];
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY = 4;
  
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_DISPLAY);
  const hasMore = projects.length > INITIAL_DISPLAY;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-date">{project.date}</p>
                <p className="project-description">{project.description}</p>
                
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="project-highlights">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: markdownToHtml(highlight) }} />
                    ))}
                  </ul>
                )}
                
                <div className="project-tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.github && project.github !== '#' && (
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.live && project.live !== '#' && (
                    <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="see-more-container">
            <button 
              className="btn btn-secondary see-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'See Less' : `See More (${projects.length - INITIAL_DISPLAY} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
