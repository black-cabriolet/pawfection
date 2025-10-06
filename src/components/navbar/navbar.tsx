import React from 'react'
import './styles.scss'
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link href={'/'} className={'pawfection'}>PawFection</Link>
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
