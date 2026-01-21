'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const values = [
  {
    title: 'Authenticity',
    description: 'Every project is a unique reflection of its inhabitants. We listen deeply to create spaces that feel genuinely yours.',
  },
  {
    title: 'Quality',
    description: 'We believe in investing in materials, craftsmanship, and details that stand the test of time.',
  },
  {
    title: 'Collaboration',
    description: 'Design is a dialogue. We work closely with clients, artisans, and craftspeople to realize exceptional results.',
  },
  {
    title: 'Sustainability',
    description: 'Thoughtful design considers its impact. We prioritize materials and practices that respect our environment.',
  },
]

const instagramPosts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80' },
  { id: 2, image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&q=80' },
  { id: 3, image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80' },
  { id: 4, image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80' },
  { id: 5, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80' },
  { id: 6, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Menor */}
      <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 bg-[#E3DFDD]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-cormorant text-3xl lg:text-4xl font-light text-stone-800 leading-tight">
                About <span className="italic">Us</span>
              </h1>
              <p className="mt-4 font-inter text-sm text-stone-600 leading-relaxed">
                RAIZ Interiors is a design studio founded on the belief that spaces 
                should tell stories. We create environments that reflect the unique 
                personality and lifestyle of each client, blending functionality 
                with aesthetics to craft timeless interiors.
              </p>
              <p className="mt-3 font-inter text-sm text-stone-600 leading-relaxed">
                Based in Portugal, we bring a Mediterranean sensibility to our work – 
                an appreciation for light, natural materials, and the art of living well.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                alt="RAIZ Interiors Studio"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values - Movido para cima */}
      <section className="py-12 lg:py-16 bg-[#CFCAC7]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-cormorant text-xl lg:text-2xl font-light text-stone-800">
              Our <span className="italic">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-cormorant text-base lg:text-lg text-stone-800 mb-2">
                  {value.title}
                </h3>
                <p className="font-inter text-[10px] lg:text-xs text-stone-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Founder */}
      <section className="py-12 lg:py-16 bg-[#E3DFDD]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] overflow-hidden order-2 lg:order-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Founder of RAIZ Interiors"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="font-inter text-xs tracking-[0.3em] uppercase text-stone-500">
                The Founder
              </span>
              <h2 className="mt-4 font-cormorant text-2xl lg:text-3xl font-light text-stone-900 leading-tight">
                The Vision Behind <span className="italic">Our Designs</span>
              </h2>
              <p className="mt-6 font-inter text-sm text-stone-600 leading-relaxed">
                With over a decade of experience in architecture and interior design, 
                our founder brings a refined aesthetic sensibility and deep understanding 
                of how spaces shape our daily experiences.
              </p>
              <p className="mt-3 font-inter text-sm text-stone-600 leading-relaxed">
                Trained in classical architecture with a passion for contemporary design, 
                she bridges tradition and innovation to create spaces that feel both 
                timeless and fresh.
              </p>
              <p className="mt-3 font-inter text-sm text-stone-600 leading-relaxed">
                "I believe that the best interiors are those that evolve with their 
                inhabitants, that tell a story and invite new chapters to be written."
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Instagram Section */}
      <section className="py-12 lg:py-16 bg-[#CFCAC7]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="font-inter text-sm text-stone-600">
              INSPIRATION through DESIGN. Welcome to our WORLD and get INSPIRED...
            </p>
          </motion.div>

          <a 
            href="https://www.instagram.com/raiz.interiors.living"
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4 group"
          >
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden bg-stone-200"
              >
                <Image
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </a>
        </div>
      </section>

      {/* CTA Section - Altura reduzida */}
      <section className="py-10 lg:py-12 bg-[#B4ADA8]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-cormorant text-xl lg:text-2xl font-light text-white italic mb-6">
              Let us be part of your story...
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border border-white/50 text-white font-inter text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-stone-800 transition-all duration-300"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
