"use client";

import React from "react";
import "./styles.scss";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Top 5 Grooming Tips for a Healthy, Happy Dog",
      excerpt:
        "Discover essential grooming habits that keep your furry friend clean, confident, and comfortable every day.",
      image: "/blog/groomingtips.jpeg",
      date: "October 8, 2025",
      author: "Tyreek Kinyanjui",
    },
    {
      id: 2,
      title: "Why Regular Grooming Is More Than Just a Bath",
      excerpt:
        "From coat care to emotional well-being — learn why grooming is a vital part of your pet’s happiness.",
      image: "/blog/bath.jpeg",
      date: "September 20, 2025",
      author: "Lewis Kiprop",
    },
    {
      id: 3,
      title: "The Pawfection Touch: Our Favorite Transformations",
      excerpt:
        "See how love, care, and a perfect trim bring out each dog’s unique beauty and personality.",
      image: "/blog/transformation.jpeg",
      date: "August 30, 2025",
      author: "Brian",
    },
  ];

  return (
    <main className="blog-page">
      {/* HERO */}
      <section className="blog-hero">
        <div className="overlay">
          <h1>Pet Care & Grooming Insights</h1>
          <p className="subtitle">
            Stories, advice, and tips from the heart of Pawfection — for pets who deserve nothing less.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="blog-section">
        <h2>Latest from Our Blog</h2>
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p className="excerpt">{post.excerpt}</p>
                <div className="meta">
                  <span>{post.author}</span> • <span>{post.date}</span>
                </div>
                <button className="read-more">Read More</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
