import React from 'react';
import profileImage from '../static/images/profile.png';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-profile">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="hero-profile-img"
          />
        </div>
        <h1 className="hero-title">Graduate Researcher & AI Engineer</h1>
        <h2 className="hero-subtitle">Biomedical Engineering | Machine Learning</h2>
        <p className="hero-description">
          Specialized in developing AI-powered medical imaging solutions and full-stack web platforms
          for digital pathology diagnosis.
        </p>
        <div className="hero-cta">
          <a href="#experience" className="btn btn-primary">View Experience</a>
          <a href="#projects" className="btn btn-secondary">See Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
