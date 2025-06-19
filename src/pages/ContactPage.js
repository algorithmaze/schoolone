import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactPage.css'; // Will create this file next

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="contact-page">
      <h2 data-aos="fade-down">Contact Us</h2>

      <div className="contact-content-wrapper">
        <div className="contact-details" data-aos="fade-right">
          <h3>Get in Touch</h3>
          <p>
            <strong>Address:</strong><br />
            123 School Street, Anytown, ST 00000, USA
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+0000000000">(000) 000-0000 (Placeholder)</a>
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:contact@yourschoolwebsite.com">contact@yourschoolwebsite.com (Placeholder)</a>
          </p>
          <p>
            <strong>Office Hours:</strong><br />
            Monday - Friday: 8:00 AM - 4:00 PM
          </p>
        </div>

        <div className="contact-form-placeholder" data-aos="fade-left" data-aos-delay="100">
          <h3>Send Us a Message</h3>
          <form onSubmit={(e) => e.preventDefault()}> {/* Prevent actual submission */}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your Full Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Reason for contacting" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      <div className="map-section" data-aos="fade-up" data-aos-delay="200">
        <h3>Our Location</h3>
        <p style={{textAlign: "center", fontStyle: "italic"}}>Note: Map is a placeholder. Please update with your school's actual location.</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12090.34994401182!2d-74.0059413!3d40.7127837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a318e6379d1%3A0x40e0d0f97198add9!2sNew%20York%20City%20Hall!5e0!3m2!1sen!2sus!4v1670000000000!5m2!1sen!2sus"
          width="100%"
          height="400" // Increased height a bit
          style={{ border:0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="School Location Map - Placeholder (New York City Hall)"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
