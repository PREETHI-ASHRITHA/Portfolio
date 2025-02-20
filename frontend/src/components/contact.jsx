import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',  
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm(
      'service_9m626qf', 
      'template_n0zfqrs', 
      form.current, 
      'yNRc1sQnXHH1k5wid'
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setStatus('success');
      setFormData({
        user_name: '',  
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => {
        setStatus('');
      }, 5000);
    })
    .catch((error) => {
      console.error('Error sending email:', error.text);
      setStatus('error');
      
      setTimeout(() => {
        setStatus('');
      }, 5000);
    });
  };

  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-heading">Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <i className="icon email-icon"></i>
            <h3>Email</h3>
            <p>preethiashrithagunnam@gmail.com</p>
          </div>
          
          <div className="info-item">
            <i className="icon location-icon"></i>
            <h3>Location</h3>
            <p>Kakinada, India</p>
          </div>
        </div>
        
        <form className="contact-form" ref={form} onSubmit={handleSubmit}>
          {status === 'success' && (
            <div className="success-message">Message sent successfully!</div>
          )}
          {status === 'error' && (
            <div className="error-message">Failed to send message. Please try again.</div>
          )}
          {status === 'sending' && (
            <div className="sending-message">Sending message...</div>
          )}
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="user_name">Your Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"  
                value={formData.user_name}  
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Enter subject"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="submit-button" 
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;