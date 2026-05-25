import React, { useEffect } from 'react';
import './Footer.css';
import ScrollReveal from 'scrollreveal';
import { portfolioData } from '../../../data/portfolioData';
import ReactAnimate from '../../common/Others/React/ReactAnimate';

const Footer = () => {
  const { personalInfo, socialLinks, footerLinks, copyright, madeWithText } = portfolioData;

  useEffect(() => {
    ScrollReveal().reveal('footer', { delay: 100 });
  }, []);

  return (
    <footer className="Footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>{personalInfo.name}</h3>
          <h4>{personalInfo.description}</h4>
          <p>{personalInfo.shortBio}</p>
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
          <div className="made-in-footer">
            <span>{madeWithText}</span>
            <div className="mini-react">
              <ReactAnimate />
            </div>
          </div>
        </div>
        
        <div className="footer-links-container">
          <div className="footer-link-section">
            <h5>General</h5>
            <ul>
              {footerLinks.general.map((link, index) => (
                <li key={index}><a href={link.url}>{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-link-section">
            <h5>Contacto</h5>
            <ul>
              {footerLinks.contact.map((link, index) => (
                <li key={index}><a href={link.url}>{link.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p dangerouslySetInnerHTML={{ __html: copyright }}></p>
      </div>
    </footer>
  );
}

export default Footer;
