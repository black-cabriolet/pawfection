"use client";

import React from "react";
import "./styles.scss";

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Basic Grooming",
      price: "Ksh 1,500",
      desc: "Perfect for regular clean-ups and maintenance.",
      features: [
        "Gentle bath & shampoo",
        "Blow dry & brush out",
        "Nail trim & ear cleaning",
      ],
      highlight: false,
    },
    {
      name: "Deluxe Spa",
      price: "Ksh 2,800",
      desc: "A complete spa experience for your furry friend.",
      features: [
        "Everything in Basic",
        "De-shedding & coat conditioning",
        "Paw massage & scented spray",
      ],
      highlight: true,
    },
    {
      name: "Royal Treatment",
      price: "Ksh 4,000",
      desc: "The ultimate grooming indulgence for your pet.",
      features: [
        "Everything in Deluxe",
        "Teeth cleaning",
        "Custom styling & accessories",
      ],
      highlight: false,
    },
  ];

  return (
    <main className="pricing-page">
      {/* HERO */}
      <section className="pricing-hero">
        <div className="overlay">
          <h1>Affordable Luxury for Every Pet</h1>
          <p className="subtitle">
            Choose the perfect package — because your furry friend deserves nothing less than Pawfection.
          </p>
        </div>
      </section>

      {/* PRICING GRID */}
      <section className="pricing-section">
        <div className="container">
          <h2>Our Packages</h2>
          <p className="intro-text">
            Transparent pricing, unmatched care. Pick a plan that suits your pet’s needs and your lifestyle.
          </p>

          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
              >
                <h3>{plan.name}</h3>
                <p className="price">{plan.price}</p>
                <p className="desc">{plan.desc}</p>
                <ul>
                  {plan.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <button className="cta-button">Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
