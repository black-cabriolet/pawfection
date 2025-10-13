'use client'
import Link from 'next/link'
import '@/components/containers/contact/styles.scss'

const Contact = () => {
  return (
    <section className="contact-preview">
      <div className="container">
        <h2>Get in Touch</h2>
        <p className="intro">
          Have questions or want to book a grooming session? We’d love to hear from you! 🐶✨
        </p>

        <div className="contact-grid">
          <div className="contact-item">
            <span className="icon">📍</span>
            <h3>Visit Us</h3>
            <p>Pawfection Grooming Studio, Westlands, Nairobi</p>
          </div>

          <div className="contact-item">
            <span className="icon">📞</span>
            <h3>Call Us</h3>
            <p>+254 716 777 956</p>
          </div>

          <div className="contact-item">
            <span className="icon">✉️</span>
            <h3>Email</h3>
            <p>hello@pawfection.co.ke</p>
          </div>
        </div>

        <div className="contact-cta">
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contact
