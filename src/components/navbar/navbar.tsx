"use client"; // <- THIS MAKES THE FILE A CLIENT COMPONENT

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import './styles.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link href="/" className="logo-link">
          <Image src="/paw.png" className={'logo-img'} alt="PawFection Logo" width={80} height={80} />
          <span className="brand-name">PawFection</span>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/about">ABOUT US</Link></li>
        <li><Link href="/services">SERVICES</Link></li>
        <li><Link href="/pricing">PRICING</Link></li>
        <li><Link href="/gallery">GALLERY</Link></li>
        <li><Link href="/blog">BLOG</Link></li>
        <li><Link href="/contact">CONTACT</Link></li>

          <div className="bookings">
              <Link href="/bookings">BOOKING</Link>
          </div>
      </ul>


    </nav>
  );
};

export default Navbar;
