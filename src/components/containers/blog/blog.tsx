'use client'
import Link from 'next/link'
import '@/components/containers/blog/styles.scss'

const Blog = () => {
  const posts = [
    {
      title: '5 Grooming Tips for a Healthier Coat',
      desc: 'Learn simple daily routines that keep your dog’s fur shiny, soft, and tangle-free.',
    },
    {
      title: 'How to Make Grooming Stress-Free',
      desc: 'Turn grooming sessions into a bonding experience for you and your furry friend.',
    },
    {
      title: 'Choosing the Right Grooming Style',
      desc: 'From trims to full makeovers — find the perfect look for your pet’s breed and lifestyle.',
    },
  ]

  return (
    <section className="blog-preview">
      <div className="container">
        <h2>From Our Blog</h2>
        <p className="intro">
          Tips, tricks, and stories for happy, healthy dogs 📝
        </p>

        <div className="blogGrid">
          {posts.map((post, index) => (
            <div className="blogCard" key={index}>
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <Link href="/blog" className="readMore">Read More →</Link>
            </div>
          ))}
        </div>

        <div className="more">
          <Link href="/blog" className="btn-primary">View All Posts</Link>
        </div>
      </div>
    </section>
  )
}

export default Blog
