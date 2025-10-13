"use client";

import React from "react";
import Link from "next/link";
import "./styles.scss";

const Services = () => {
  const services = [
    {
      icon: "✂️",
      title: "Full Grooming",
      desc: "A luxurious full grooming session — from bathing to trimming — to keep your pet fresh, stylish, and happy.",
    },
    {
      icon: "🛁",
      title: "Bath & Brush",
      desc: "Gentle wash and brush-out using premium pet-safe products for that healthy, glossy coat.",
    },
    {
      icon: "🐾",
      title: "Nail Trimming",
      desc: "Safe, comfortable nail trimming that keeps your pet’s paws clean and pain-free.",
    },
    {
      icon: "💎",
      title: "Styling & Finishing",
      desc: "Custom coat styling and finishing touches to match your pet’s personality and breed.",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="intro-text">
          <h1>Our Premium Services</h1>
          <p>
            At <strong>PawFection</strong>, we offer a full range of grooming experiences that
            combine care, comfort, and style — ensuring your pet looks and feels their best.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="cta-wrapper">
          <Link href="/bookings" className="btn-primary">
            Book a Session
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
