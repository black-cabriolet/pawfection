"use client";
import React from "react";
import "./styles.scss";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const socialLinks = {
  facebook: "https://www.facebook.com/pawfectiongrooming",
  instagram: "https://www.instagram.com/pawfectiongrooming_services?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  x: "https://www.threads.com/@pawfectiongrooming_services",
  whatsapp: "https://www.instagram.com/p/DPWqX41Dlst/?igsh=YzAyMDM1MGJkZA==", // ✅ WhatsApp direct chat link
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Quick Links */}
        <div className="section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/services">SERVICES</Link></li>
            <li><Link href="/pricing">PRICING</Link></li>
            <li><Link href="/blog">BLOG</Link></li>
            <li><Link href="/gallery">GALLERY</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="section">
          <h3>Our Services</h3>
          <ul>
            <li><Link href="#">Full Grooming</Link></li>
            <li><Link href="#">Bath & Brush</Link></li>
            <li><Link href="#">Nail Trimming</Link></li>
            <li><Link href="#">Ear Cleaning</Link></li>
            <li><Link href="#">Mobile Grooming</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="section">
          <h3>Contact Info</h3>
          <p>📍 Mobile Service – We Come to You!</p>
          <p>📞 (254) 716-777956</p>
          <p>✉️ bookings@pawfectiongrooming.com</p>
        </div>

        {/* Social Media */}
        <div className="section">
          <h3>Follow Us</h3>
          <div className="socials">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="bottom">
        <p>
          © {new Date().getFullYear()} Pawfection Grooming. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
