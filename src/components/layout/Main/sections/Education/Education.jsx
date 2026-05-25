import React, { useEffect } from 'react';
import './Education.css';
import { portfolioData } from '../../../../../data/portfolioData';
import ScrollReveal from 'scrollreveal';

const Education = () => {
  const { education, educationBg } = portfolioData;

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'left',
      distance: '60px',
      duration: 1000,
      delay: 200,
      reset: false
    });

    sr.reveal('.Education .section-tittle', {});
    sr.reveal('.institute-card', { interval: 200, origin: 'right' });
    sr.reveal('.image-e', { delay: 400, origin: 'left' });
  }, []);

  return (
    <section id="profile" className='Education'>
      <div className='section-tittle excep'>Perfil Profesional</div>
      <div className="content-e">
        <div className="image-e">
          <img src={educationBg} alt="Professional Profile Illustration" />
        </div>
        <div className="info-e">
          {education.map((item, index) => (
            <div key={index} className="institute-card">
              <div className="card-header">
                <img className="institute-logo" src={item.logo} alt={item.institute} />
                <h3 className="institute-name">{item.institute}</h3>
              </div>
              <div className="card-body">
                <div className="career-name">{item.degree}</div>
                <div className="career-date">{item.date}</div>
                {item.description.length > 0 && (
                  <ul className="career-list">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
