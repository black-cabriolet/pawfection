'use client'
import Link from 'next/link'
import Image from 'next/image'
import '@/components/containers/gallery/styles.scss'

const Gallery = () => {
  const images = [
    { id: 1, src: '/gallery/whitelabrado.jpeg', alt: 'Golden Retriever after grooming' },
    { id: 2, src: '/gallery/poodle.png', alt: 'Poodle styled and trimmed' },
    { id: 3, src: '/gallery/cutewhite.jpeg', alt: 'Happy paws after a clean bath' },
    { id: 4, src: '/gallery/whiteolof.png', alt: 'Stylish cut for large breeds' },
    { id: 5, src: '/gallery/sausagedog.jpeg', alt: 'Small breed fresh look' },
    { id: 6, src: '/gallery/cutedog.jpeg', alt: 'Ready for a walk!' },
  ]

  return (
    <section className="gallery-preview">
      <div className="container">
        <h2>Our Gallery</h2>
        <p className="intro">See some of our happy, freshly groomed pups 🐶</p>

        <div className="gallery-grid">
          {images.map((img) => (
            <div className="img-card" key={img.id}>
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={300}
                className="gallery-img"
              />
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
