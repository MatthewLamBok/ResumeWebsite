import React from 'react';
import type { Certification } from '../types';
import certificationsData from '../content/json/certifications.json';

const Certifications: React.FC = () => {
  const certifications = certificationsData as Certification[];

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications & Awards</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <h3 className="certification-name">{cert.name}</h3>
              <p className="certification-issuer">{cert.issuer}</p>
              <p className="certification-date">{cert.date}</p>
              {cert.description && (
                <p className="certification-description">{cert.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
