import React from 'react'
import './styles.scss'
import Link from 'next/link';
import Image from 'next/image'
const Navbar = () => {
    return (
        <nav className="navbar">
             {/* Logo */}
        <div className="logo">
        <Link href="/" className="logo-link">
          <Image
            src="/paw.png" // image should be in /public/paw.png
            alt="PawFection Logo"
            width={80}
            height={80}
            priority
            className="logo-img"
          />
          <span className="brand-name">PawFection</span>
        </Link>
      </div>

            <ul className="nav-links">
                <li><Link href={'/'}>HOME</Link></li>
                <li><Link href={'/about'}>ABOUT US</Link></li>
                <li><Link href={'/services'}>SERVICES</Link></li>
                <li><Link href={'/pricing'}>PRICING</Link></li>
                <li><Link href={'/gallery'}>GALLERY</Link></li>
                <li><Link href={'/blog'}>BLOG</Link></li>
                <li><Link href={'/contact'}>CONTACT</Link></li>
            </ul>

            <div className="bookings">
                <Link href={'/bookings'}>BOOKING</Link>
            </div>
        </nav>
    )
}
export default Navbar
