import React from 'react';
import './contact.css'; // Import your CSS file for styling
import contact from '../../assets/contact.png';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="container-con">
        <div className="form-container">
          <h2>Contact Me</h2>
          <form action="https://formsubmit.co/tsmane8787@gmail.com" method="POST">
          <input type="hidden" name="_captcha" value="false" />
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your email" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="image-container">
          <img src={contact} alt="Contact" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
