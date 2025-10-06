import React from 'react'
import Link from 'next/link'
import '@/components/containers/aboutus/styles.scss'

const AboutUs = () => {
    return (
        <>
            <div className="about">
                <div className="aboutContent">
                    <h1>About Us</h1>
                    <p>At PawFection, we believe every dog deserves to look and feel their best. With expert grooming, gentle care, and a whole lot of love, we create a stress-free experience for pets while giving owners peace of mind.</p>
                    <Link href="/about" className="btn-primary">Learn More</Link>
                </div>
            </div>
        </>
    )
}
export default AboutUs
