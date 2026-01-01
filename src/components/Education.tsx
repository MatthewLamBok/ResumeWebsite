import { useState } from 'react';
import type { Education as EducationType } from '../types';
import educationData from '../content/json/education.json';

const Education: React.FC = () => {
  const education = educationData as EducationType[];
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY = 2;
  
  const displayedEducation = showAll ? education : education.slice(0, INITIAL_DISPLAY);
  const hasMore = education.length > INITIAL_DISPLAY;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {displayedEducation.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-date">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
              <div className="education-info-row">
                <div>
                  <h4 className="education-school">{edu.school}</h4>
                  <p className="education-location">{edu.location}</p>
                </div>
                {edu.gpa && <p className="education-gpa">GPA: {edu.gpa}</p>}
              </div>
              
              {edu.thesis && (
                <div className="education-thesis">
                  <strong>Thesis:</strong> {edu.thesis}
                </div>
              )}
              
              {edu.additionalInfo && edu.additionalInfo.length > 0 && (
                <ul className="education-info">
                  {edu.additionalInfo.map((info, idx) => (
                    <li key={idx}>{info}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="see-more-container">
            <button 
              className="btn btn-secondary see-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'See Less' : `See More (${education.length - INITIAL_DISPLAY} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
