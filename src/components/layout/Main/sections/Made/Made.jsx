import React, { useEffect } from 'react';
import './Made.css';
import ReactAnimate from '../../../../common/Others/React/ReactAnimate';
import { portfolioData } from '../../../../../data/portfolioData';
import ScrollReveal from 'scrollreveal';

function Made() {
  const { madeWithText } = portfolioData;

  useEffect(() => {
    ScrollReveal().reveal('.Made', {
      origin: 'bottom',
      distance: '40px',
      duration: 1000,
      delay: 200,
      reset: false
    });
  }, []);

  return (
    <section className="Made">
        <div className="text-made">{madeWithText}</div>
        <div className="react-animation">
            <ReactAnimate/>
        </div>
    </section>
  );
}

export default Made;
