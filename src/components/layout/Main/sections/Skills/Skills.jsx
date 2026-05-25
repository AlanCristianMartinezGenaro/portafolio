import React, { useEffect } from 'react';
import './Skills.css';
import { portfolioData } from '../../../../../data/portfolioData';
import ScrollReveal from 'scrollreveal';

function Skills() {
  const { skillCategories } = portfolioData;

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1000,
      delay: 200,
      reset: false 
    });

    sr.reveal('.Skills .section-tittle', {});
    sr.reveal('.skill-category', { interval: 200 });
  }, []);

  return (
    <section id="skills" className='Skills'>
      <div className='section-tittle excep'>Habilidades</div>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.name}</h3>
            <div className="icons-tech">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <img src={skill.icon} alt={skill.name} title={skill.name} />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
