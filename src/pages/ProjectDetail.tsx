import { useParams, Navigate } from 'react-router-dom';
import projectsData from '../content/json/projects.json';
import type { ProjectItem } from '../types';
import { markdownToHtml } from '../utils/textFormat';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projects = projectsData as ProjectItem[];
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="main-content">
      <section className="section project-detail-section">
        <div className="container">
          <div className="project-detail">
            <h1 className="project-detail-title">{project.name}</h1>
            <p className="project-detail-date">{project.date}</p>
            
            {project.image && project.image !== '#' && (
              <div className="project-detail-image">
                <img src={project.image} alt={project.name} />
              </div>
            )}
            
            <div className="project-detail-content">
              <h2>Overview</h2>
              <p className="project-detail-description">{project.description}</p>
              
              {project.highlights && project.highlights.length > 0 && (
                <div className="project-detail-highlights">
                  <h2>Key Highlights</h2>
                  <ul>
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: markdownToHtml(highlight) }} />
                    ))}
                  </ul>
                </div>
              )}
              
              {project.notes && (
                <div className="project-detail-notes">
                  <h2>Additional Notes</h2>
                  <div className="notes-content" dangerouslySetInnerHTML={{ __html: markdownToHtml(project.notes) }} />
                </div>
              )}
              
              {project.images && project.images.length > 0 && (
                <div className="project-detail-gallery">
                  <h2>Gallery</h2>
                  <div className="project-gallery-grid">
                    {project.images.map((img, idx) => (
                      <div key={idx} className="gallery-item">
                        <img src={img} alt={`${project.name} - Image ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {project.pdfs && project.pdfs.length > 0 && (
                <div className="project-detail-pdfs">
                  <h2>Documents</h2>
                  {project.pdfs.map((pdf, idx) => {

                    return (
                      <div key={idx} className="pdf-viewer-container">
                        <h3 className="pdf-title">{pdf.name}</h3>
                        <iframe
                          src={pdf.url}
                          className="pdf-viewer"
                          title={pdf.name}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
              
              <div className="project-detail-technologies">
                <h2>Technologies Used</h2>
                <div className="tech-badges">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-detail-links">
                {project.github && project.github !== '#' && (
                  <a href={project.github} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                )}
                {project.live && project.live !== '#' && (
                  <a href={project.live} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    View Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
