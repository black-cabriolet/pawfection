"use client";

import React from "react";
import "./styles.scss";
import { useForm, ValidationError } from "@formspree/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwprwvok");

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="overlay">
          <h1>Get in Touch with Pawfection</h1>
          <p>
            Have questions or want to book a grooming session?
            We’d love to hear from you — your pet deserves Pawfection!
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            Reach out to us through any of the channels below or drop by for a friendly visit!
          </p>

          <div className="info-grid">
            <div className="info-card">
              <FaPhoneAlt className="icon" />
              <h3>Call Us</h3>
              <p>+254 716 777 956</p>
            </div>

            <div className="info-card">
              <FaEnvelope className="icon" />
              <h3>Email</h3>
              <p>hello@pawfection.co.ke</p>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="icon" />
              <h3>Visit Us</h3>
              <p>Pawfection Grooming Studio, Westlands, Nairobi</p>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="contact-form">
          <h2>Send a Message</h2>

          {state.succeeded ? (
            <p className="success-message">🎉 Thanks for reaching out! We’ll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Type your message" required></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button type="submit" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <iframe
          title="Pawfection Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7306571792915!2d36.72996097592613!3d-1.3378830356866673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b29c76c3e45%3A0x1f41bde049d4f561!2sKenya%20Society%20for%20the%20Protection%20%26%20Care%20of%20Animals%20(KSPCA)!5e0!3m2!1sen!2ske!4v1760304174501!5m2!1sen!2ske"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
};

export default Contact;
