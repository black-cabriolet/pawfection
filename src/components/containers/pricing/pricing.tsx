'use client'
import Link from 'next/link'
import '@/components/containers/pricing/styles.scss'

const Pricing = () => {
  const plans = [
    {
      title: 'Basic Groom',
      price: 'KSh 800',
      features: ['Bath & Brush', 'Nail Trim', 'Ear Cleaning'],
    },
    {
      title: 'Premium Groom',
      price: 'KSh 1,500',
      features: ['Full Grooming', 'Styling & Finishing', 'Teeth Cleaning'],
      popular: true,
    },
    {
      title: 'Deluxe Pamper',
      price: 'KSh 2,000',
      features: ['All Premium Services', 'Massage Bath', 'Scented Finish'],
    },
  ]

  return (
    <section className="pricing-preview">
      <div className="container">
        <h2>Pricing</h2>
        <p className="intro">
          Affordable grooming packages designed to fit every pup’s needs 🐕
        </p>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <span className="badge">Most Popular</span>}
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
              <Link href="/pricing" className="btn-outline">
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="more">
          <Link href="/pricing" className="btn-primary">
            See All Packages
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Pricing
