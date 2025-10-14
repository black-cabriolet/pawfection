'use client'
import Link from 'next/link'
import Image from 'next/image'
import '@/components/containers/aboutus/styles.scss'

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__image">
          <div className="circle-glow"></div>
          <Image
            src="/gallery/whiteolof.png"
            alt="Happy dog after grooming"
            width={450}
            height={450}
            priority
            className="about__img"
          />
        </div>

        <div className="about__content">
          <h2>About Us</h2>
          <p className="intro">
            At <span className="brand">PawFection</span>, we believe every dog deserves to look and feel their best.
            Our team of certified groomers provides gentle, stress-free grooming sessions — ensuring your furry friend
            not only looks amazing but feels relaxed and loved.
          </p>

          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              To create a grooming experience that celebrates every dog&apos;s unique personality and beauty —
              blending expert care with genuine love and compassion.
            </p>
          </div>

          <Link href="/about" className="btn-primary">Learn More</Link>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
