"use client";


import ReactParticles from "@/components/reactparticles/particles";
import "./styles.scss";
import AboutUs from "@/components/containers/aboutus/aboutUs";
import Services from "@/components/containers/services/services";
import Gallery from "@/components/containers/gallery/gallery";
import Pricing from "@/components/containers/pricing/pricing";
import Contact from "@/components/containers/contact/contact";
import Blog from "@/components/containers/blog/blog";
import Link from "next/link";


export default function Home() {
  return (
      <>
        <section id="heroSection" className="heroSection">
            <div className="reactParticles">
              <ReactParticles />
            </div>

            <div className="homePageContents">
              <div className="logo">PawFection</div>
              <div className="slogan">Professional Dog Grooming & Care</div>
              <Link href="/about" className="book">
                Learn More
              </Link>
            </div>
        </section>

        <section className="aboutus" id="aboutus">
            <AboutUs />
        </section>

         <section className="services" id="services">
            <Services />
        </section>

         <section className="gallery" id="gallery">
            <Gallery />
         </section>

         <section id="pricing" className='pricing'>
           <Pricing/>
         </section>

          <section id="contact" className={'contact'}>
            <Contact/>
          </section>

          <section id="blog" className={'blog'}>
            <Blog/>
          </section>

      </>

  )
}