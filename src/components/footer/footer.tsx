"use client";
import React from "react";
import './styles.scss'
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                 {/* Quick Links */}
                <div className="section">
                    <h3>Quick Links</h3>

                    <ul>
                        <li><Link href={'/'} className={'links'}>HOME</Link></li>
                        <li><Link href={'/about'} className={'links'}>ABOUT</Link></li>
                        <li><Link href={'/services'} className={'links'}>SERVICES</Link></li>
                        <li><Link href={'/pricing'} className={'links'}>PRICING</Link></li>
                        <li><Link href={'/blog'} className={'links'}>BLOG</Link></li>
                        <li><Link href={'/gallery'} className={'links'}>GALLERY</Link></li>
                    </ul>
                </div>


                {/* Our Services */}
                <div className="section">
                    <h3>Our Services</h3>

                    <ul>
                        <li><Link href={'#'} className={'links'}>Full Grooming</Link></li>
                        <li><Link href={'#'} className={'links'}>Bath & Brush</Link></li>
                        <li><Link href={'#'} className={'links'}>Nail Trimming</Link></li>
                        <li><Link href={'#'} className={'links'}>Ear Cleaning</Link></li>
                        <li><Link href={'#'} className={'links'}>Mobile Grooming</Link></li>
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
                        <Link href={'#'}><FaFacebookF/></Link>
                        <Link href={'#'}><FaInstagram/></Link>
                        <Link href={'#'}><FaTwitter/></Link>
                        <Link href={'#'}><FaWhatsapp/></Link>
                    </div>
                </div>
            </div>

             <div className={'bottom'}>
                <p>© {new Date().getFullYear()} Pawfection Grooming. All Rights Reserved.</p>
             </div>
        </footer>
    )
}
export default Footer
