'use client';

import React from 'react';
import Image from 'next/image';
import './styles.scss';

const AboutUs = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p className="subtitle">
            Dedicated to making every pet feel pampered, loved, and absolutely pawfect!
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At <strong>Pawfection</strong>, we believe every pet deserves exceptional care and
                love. Our mission is to provide top-quality grooming and wellness services that keep
                your furry companions happy, healthy, and looking their best — every single visit.
              </p>
            </div>
            <div className="mission-image">
              <div className="image-placeholder">
                <Image
                  src="/team/teampic.jpeg"
                  alt="Pawfection grooming team"
                  width={500}
                  height={350}
                  className="rounded-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Compassion</h3>
              <p>We treat every pet with patience, kindness, and unconditional love.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Excellence</h3>
              <p>Every service is delivered with attention to detail and the highest standards.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🐾</div>
              <h3>Trust</h3>
              <p>Your pet’s safety and comfort are our number one priority, always.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Grooming Experts</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <Image
                  src="/team/team1.jpeg"
                  alt="Lead Groomer"
                  width={200}
                  height={200}
                  className="rounded-image"
                />
              </div>
              <h3>Lewis Kiprop</h3>
              <p className="role">Lead Groomer</p>
            </div>

            <div className="team-member">
              <div className="member-image">
                <Image
                  src="/team/team3.png"
                  alt="Pet Stylist"
                  width={200}
                  height={200}
                  className="rounded-image"
                />
              </div>
              <h3>Tyreek Kinyanjui</h3>
              <p className="role">Pet Stylist</p>
            </div>

            <div className="team-member">
              <div className="member-image">
                <Image
                  src="/team/team2.jpeg"
                  alt="Pet Care Specialist"
                  width={200}
                  height={200}
                  className="rounded-image"
                />
              </div>
              <h3>Brian</h3>
              <p className="role">Pet Care Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Pamper Your Pet?</h2>
          <p>Book your grooming session today and experience the Pawfection touch!</p>
          <button className="cta-button">Book Now</button>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
