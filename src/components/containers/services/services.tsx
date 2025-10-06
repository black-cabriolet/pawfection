import React from 'react'
import Link from 'next/link'
import '@/components/containers/services/styles.scss'

const Services = () => {
  const services = [
    { icon: '✂️', title: 'Full Grooming', desc: 'Professional grooming from head to tail.' },
    { icon: '🛁', title: 'Bath & Brush', desc: 'Gentle wash and brush-out to make coats shine.' },
    { icon: '🐾', title: 'Nail Trimming', desc: 'Safe, comfortable trimming for healthy paws.' },
    { icon: '💎', title: 'Styling & Finishing', desc: 'Customized trims and finishing touches.' },
  ]

  return (
    <section className="services">
      <div className="servicesContent">
        <h1>Our Services</h1>
        <div className="servicesGrid">
          {services.map((service, index) => (
            <div key={index} className="serviceCard">
              <span className="icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <Link href="/services" className="btn-primary">Learn More</Link>
      </div>
    </section>
  )
}

export default Services
