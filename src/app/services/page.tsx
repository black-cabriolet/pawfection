"use client";

import React from "react";
import "./styles.scss";

// Separate imports for FontAwesome 6 icons
import { FaScissors } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { FaDog } from "react-icons/fa6";
import { FaPaw } from "react-icons/fa6";

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaScissors className="service-icon" />,
      title: "Professional Grooming",
      desc: "From stylish trims to breed-specific cuts, we make your dog look and feel flawless.",
    },
    {
      icon: <FaBath className="service-icon" />,
      title: "Luxury Bath & Spa",
      desc: "Gentle shampoos, coat conditioning, and spa treatments for total relaxation.",
    },
    {
      icon: <FaDog className="service-icon" />,
      title: "Puppy Care",
      desc: "Gentle, safe, and fun grooming designed specifically for your puppy’s first experiences.",
    },
    {
      icon: <FaPaw className="service-icon" />,
      title: "Health & Hygiene",
      desc: "Nail trimming, ear cleaning, and coat checks to keep your furry friend healthy and happy.",
    },
  ];

  return (
    <main className="services-page">
      {/* HERO SECTION */}
      <section className="services-hero">
        <div className="overlay">
          <h1>Where Style Meets Care</h1>
          <p className="subtitle">
            Discover Pawfection’s premium grooming and wellness experiences for your pets.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <p className="intro-text">
            Every service at Pawfection is designed to bring out your pet’s inner sparkle while
            ensuring comfort, safety, and joy in every visit.
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                {service.icon}
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready for the Pawfection Experience?</h2>
          <p>
            Treat your pet to the care they deserve — book a grooming session and see the
            difference.
          </p>
          <button className="cta-button">Book Now</button>
        </div>
      </section>
    </main>
  );
};

export default Services;
