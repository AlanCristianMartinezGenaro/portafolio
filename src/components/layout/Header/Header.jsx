import React, { useState, useEffect } from 'react';
import './Header.css';
import { portfolioData } from '../../../data/portfolioData';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false);
  const [enableAnimations, setEnableAnimations] = useState(true);

  const { personalInfo, navLinks, socialLinks } = portfolioData;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setEnableAnimations(window.innerWidth > 1040);
      if (window.innerWidth > 1040) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const timer = setTimeout(() => {
      setAnimationEnded(true);
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const navbar = document.querySelector('header');
    const originalPosition = navbar?.offsetTop || 0;

    const handleScroll = () => {
      if (window.pageYOffset > originalPosition) {
        navbar.classList.add('fixed');
      } else {
        navbar.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={animationEnded || !enableAnimations ? '' : 'animate__animated animate__bounceInLeft animate__delay-0.5s'}>
      <div className="navbar">
        <div className="logo"><img src={personalInfo.logo} alt="Logo" /></div>
        
        <div className={`menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} onClick={closeMenu}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="social">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              className={animationEnded || !enableAnimations ? '' : `animate__animated animate__bounceInRight animate__delay-${index + 1}s`} 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={social.icon} alt={social.name} />
            </a>
          ))}
        </div>

        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
