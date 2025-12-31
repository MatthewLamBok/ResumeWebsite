import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'MATLAB']
    },
    {
      category: 'AI & Machine Learning',
      skills: ['PyTorch', 'Deep Learning', 'Computer Vision', 'Multi-Instance Learning', 'Medical Imaging']
    },
    {
      category: 'Web Development',
      skills: ['React', 'Node.js', 'REST APIs', 'Cloud Storage', 'Full-Stack Development']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Unix/Linux', 'Vite', 'SOLIDWORKS']
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="skill-category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
