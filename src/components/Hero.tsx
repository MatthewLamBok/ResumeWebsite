import React from 'react';
import heroData from '../content/json/heroprofile.json';
import profileImage from '../static/images/profile.png';
import linkedinIcon from '../static/icons/linkedin.svg';
import githubIcon from '../static/icons/github.svg';
import PhoneIcon from '../static/icons/phone.svg';
import EmailIcon from '../static/icons/email.svg';

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
        <h1 className="hero-title">{heroData.title}</h1>
        <h2 className="hero-subtitle">{heroData.subtitle}</h2>
        <p className="hero-description">{heroData.description}</p>
        <div className="hero-contact">
          <a href={`mailto:${heroData.Email}`} className="contact-link contact-info" title="Email">
            <img src={EmailIcon} alt="Email" className="contact-icon-img" />
            <span className="contact-text">{heroData.Email}</span>
          </a>
          <span className="contact-divider">|</span>
          <a href={`tel:${heroData.Phone}`} className="contact-link contact-info" title="Phone">
            <img src={PhoneIcon} alt="Phone" className="contact-icon-img" />
            <span className="contact-text">{heroData.Phone}</span>
          </a>
          <span className="contact-divider">|</span>
          <a href={heroData.LinkedIn} target="_blank" rel="noopener noreferrer" className="contact-link contact-social" title="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href={heroData.Github} target="_blank" rel="noopener noreferrer" className="contact-link contact-social" title="GitHub">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
        </div>
        <div className="hero-cta">
          <a href="#experience" className="btn btn-primary">View Experience</a>
          <a href="#projects" className="btn btn-secondary">See Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
