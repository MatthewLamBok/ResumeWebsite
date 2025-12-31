import { useState } from 'react';
import type { Experience as ExperienceType } from '../types';
import experienceData from '../content/json/experience.json';
import { markdownToHtml } from '../utils/textFormat';

const Experience: React.FC = () => {
  const experiences = experienceData as ExperienceType[];
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY = 4;
  
  const displayedExperiences = showAll ? experiences : experiences.slice(0, INITIAL_DISPLAY);
  const hasMore = experiences.length > INITIAL_DISPLAY;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {displayedExperiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">
                      {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h4>
                    <p className="experience-location">{exp.location}</p>
                  </div>
                  <div className="experience-date">
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                
                {exp.projects && exp.projects.length > 0 && (
                  <div className="projects">
                    {exp.projects.map((project, idx) => (
                      <div key={idx} className="project">
                        <h5 className="project-name">
                          {project.name} <span className="project-tech">({project.tech})</span>
                        </h5>
                        <ul className="responsibilities-list">
                          {project.responsibilities.map((resp, respIdx) => (
                            <li key={respIdx} dangerouslySetInnerHTML={{ __html: markdownToHtml(resp) }} />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: markdownToHtml(resp) }} />
                    ))}
                  </ul>
                )}
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
              {showAll ? 'See Less' : `See More (${experiences.length - INITIAL_DISPLAY} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
