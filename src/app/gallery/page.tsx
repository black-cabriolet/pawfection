"use client";

import React from "react";
import "./styles.scss";
import Image from "next/image";

const Gallery: React.FC = () => {
  const images = [
    { src: "/gallery/cutedog.jpeg", alt: "Happy groomed labrador" },
    { src: "/gallery/poodle.png", alt: "Stylish poodle trim" },
    { src: "/gallery/whitelabrado.jpeg", alt: "Golden retriever spa day" },
    { src: "/gallery/whiteolof.png", alt: "Cocker spaniel after grooming" },
    { src: "/gallery/cutewhite.jpeg", alt: "Chihuahua nail care" },
    { src: "/gallery/sausagedog.jpeg", alt: "German shepherd bath" },
    { src: "/gallery/cutedog.jpeg", alt: "Fluffy pomeranian" },
    { src: "/gallery/whitelabradoforstory.png", alt: "Dog spa towel wrap" },
    { src: "/gallery/doggrooming.png", alt: "Clean and glowing husky" },
    { src: "/gallery/cutewhite.jpeg", alt: "Clean and glowing husky" },
  ];

  return (
    <main className="gallery-page">
      {/* HERO */}
      <section className="gallery-hero">
        <div className="overlay">
          <h1>Our Work Speaks Pawfection</h1>
          <p className="subtitle">
            A glimpse into the transformations, smiles, and moments of pure joy
            from our furry clients.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="gallery-section">
        <h2>Captured Moments</h2>
        <p className="intro-text">
          Every photo tells a story of care, style, and love. Browse through
          Pawfection’s best looks.
        </p>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <Image src={image.src} alt={image.alt} className="gallery-image" />
              <div className="overlay">
                <p>{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
