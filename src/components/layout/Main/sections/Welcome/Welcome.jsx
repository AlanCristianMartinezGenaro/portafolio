import React, { useState, useEffect } from 'react';
import './Welcome.css';
import GlitchButton from '../../../../common/Buttons/glitchButton/GlitchButton';
import { portfolioData } from '../../../../../data/portfolioData';

function Welcome() {
  const { personalInfo, typewriterWords } = portfolioData;
  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = typewriterWords[wordIndex];

      if (isDeleting) {
        setCurrentText(currentWord.slice(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);
        setSpeed(50);
      } else {
        setCurrentText(currentWord.slice(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
        setSpeed(150);
      }

      if (!isDeleting && letterIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && letterIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % typewriterWords.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(typingTimeout);
  }, [currentText, letterIndex, isDeleting, speed, typewriterWords, wordIndex]);

  return (
    <section id="home" className='Welcome'>
      <div className="welcome-text">
        <div className="w-prof-name">{personalInfo.name}</div>
        <div className="w-tittle">{personalInfo.titlePrefix}</div>
        <div className="w-name">{personalInfo.nameWelcome}</div>
        <div className="w-tittle animated-text">
          {currentText}
          <span className="cursor">|</span>
        </div>
        <div className="w-buttons">
          <GlitchButton text={"Descargar CV"} />
        </div>
      </div>
      <div className="welcome-image">
        <div className="avatar-container">
          <img src={personalInfo.avatar} alt={personalInfo.name} />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
