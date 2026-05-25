import React, { useState, useEffect } from 'react';
import './Contact.css';
import ArrowButton from '../../../../common/Buttons/arrowButton/multicolorButton';
import ScrollReveal from 'scrollreveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1000,
      delay: 200,
      reset: false
    });

    sr.reveal('.Contact .section-tittle', {});
    sr.reveal('.contact-info', { delay: 400, origin: 'left' });
    sr.reveal('.form-container', { delay: 600, origin: 'right' });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    
    setTimeout(() => {
      console.log('Formulario enviado:', formData);
      setStatus('success');
      setFormData({ email: '', message: '' });
      
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="Contact">
      <div className="section-tittle">Contacto</div>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Hablemos de tu próximo proyecto</h3>
          <p>Actualmente estoy disponible para nuevas oportunidades o proyectos freelance. Si tienes alguna pregunta o simplemente quieres saludar, ¡mi bandeja de entrada siempre está abierta!</p>
        </div>
        
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Correo Electrónico</label>
              <input 
                type="email" 
                name="email"
                placeholder="Tu email" 
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'sending'}
                required
              />
            </div>
            <div className="input-group">
              <label>Mensaje</label>
              <textarea 
                name="message"
                placeholder="Escribe tu mensaje aquí..."
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'sending'}
                required
              ></textarea>
            </div>
            
            <div className="form-action">
              <ArrowButton type="submit" disabled={status === 'sending'} />
            </div>

            {status === 'sending' && <p className="status-msg">Transmitiendo datos...</p>}
            {status === 'success' && <p className="status-msg success">¡Mensaje recibido! Me pondré en contacto pronto.</p>}
            {status === 'error' && <p className="status-msg error">Por favor, rellena todos los campos.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
