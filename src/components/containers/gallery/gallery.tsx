'use client'
import Link from 'next/link'
import '@/components/containers/gallery/styles.scss'

const Gallery = () => {
  const images = [
    { id: 1, emoji: '🐕', alt: 'Golden Retriever after grooming' },
    { id: 2, emoji: '🐩', alt: 'Poodle styled and trimmed' },
    { id: 3, emoji: '🐾', alt: 'Happy paws after a clean bath' },
    { id: 4, emoji: '🦮', alt: 'Stylish cut for large breeds' },
    { id: 5, emoji: '🐶', alt: 'Small breed fresh look' },
    { id: 6, emoji: '🐕‍🦺', alt: 'Ready for a walk!' },
  ]

  return (
    <section className="gallery-preview">
      <div className="container">
        <h2>Our Gallery</h2>
        <p className="intro">See some of our happy, freshly groomed pups 🐶</p>

        <div className="gallery-grid">
          {images.map((img) => (
            <div className="img-card" key={img.id} title={img.alt}>
              <span>{img.emoji}</span>
            </div>
          ))}
        </div>

        <div className="more">
          <Link href="/gallery" className="btn-primary">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery
