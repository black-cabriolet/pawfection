"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./styles.scss";

const Booking = () => {
  const [state, handleSubmit] = useForm("meorpegn"); // your Formspree ID

  if (state.succeeded) {
    return (
      <div className="booking-success">
        <h2>Thank You! 🎉</h2>
        <p>Your booking has been received. We’ll contact you shortly to confirm the details!</p>
      </div>
    );
  }

  return (
    <main className="booking-page">
      {/* HERO SECTION */}
      <section className="booking-hero">
        <div className="overlay">
          <h1>Book Your Pawfection Appointment 🐾</h1>
          <p>Because your furry friend deserves nothing but the best!</p>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="booking-section">
        <h2>Book a Grooming Session</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" name="name" required placeholder="Enter your full name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" name="email" required placeholder="Enter your email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" name="phone" required placeholder="e.g. +254 700 123 456" />
          </div>

          <div className="form-group">
            <label htmlFor="pet_name">Pet’s Name</label>
            <input id="pet_name" type="text" name="pet_name" placeholder="What’s your pet’s name?" />
          </div>

          <div className="form-group">
            <label htmlFor="breed">Pet Breed</label>
            <input id="breed" type="text" name="breed" placeholder="e.g. Golden Retriever" />
          </div>

          <div className="form-group">
            <label htmlFor="service">Select Service</label>
            <select id="service" name="service" required>
              <option value="">Choose a service</option>
              <option value="Full Groom">Full Groom</option>
              <option value="Bath & Brush">Bath & Brush</option>
              <option value="Nail Trim">Nail Trim</option>
              <option value="De-shedding">De-shedding</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input id="date" type="date" name="date" required />
          </div>

          <div className="form-group">
            <label htmlFor="time">Preferred Time</label>
            <input id="time" type="time" name="time" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Notes</label>
            <textarea id="message" name="message" placeholder="Tell us if your pet has any special needs..."></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Booking;
