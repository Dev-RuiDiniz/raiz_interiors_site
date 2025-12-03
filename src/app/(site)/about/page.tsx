'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Instagram, Linkedin } from 'lucide-react'
import { FaPinterestP } from 'react-icons/fa'
import { ArtisticText } from '@/components/ui/artistic-text'

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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-cormorant text-5xl lg:text-7xl font-light text-stone-900 leading-tight">
                About <span className="italic">Us</span>
              </h1>
              <p className="mt-6 font-inter text-base text-stone-600 leading-relaxed">
                RAIZ Interiors is a design studio founded on the belief that spaces 
                should tell stories. We create environments that reflect the unique 
                personality and lifestyle of each client, blending functionality 
                with aesthetics to craft timeless interiors.
              </p>
              <p className="mt-4 font-inter text-base text-stone-600 leading-relaxed">
                Based in Portugal, we bring a Mediterranean sensibility to our work – 
                an appreciation for light, natural materials, and the art of living well.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
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

      {/* Philosophy Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="font-inter text-xs tracking-[0.3em] uppercase text-stone-500">
              Our Philosophy
            </span>
            <div className="mt-8">
              <ArtisticText
                as="h2"
                highlightWords={['INTERIORS', 'DESIGNED', 'SENSES', 'EMOTIONS', 'EXPERIENCES', 'RITUALS', 'LIVING']}
                className="font-inter text-xl sm:text-2xl lg:text-3xl font-light text-stone-800 leading-relaxed"
                highlightClassName="text-stone-600"
              >
                Our INTERIORS are DESIGNED to stimulate the SENSES awaken EMOTIONS and CREATE new EXPERIENCES and RITUALS — inspiring NEW WAYS of LIVING.
              </ArtisticText>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Founder */}
      <section className="py-20 lg:py-32 bg-stone-50">
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
              <h2 className="mt-4 font-cormorant text-4xl lg:text-5xl font-light text-stone-900 leading-tight">
                The Vision Behind <br />
                <span className="italic">Our Designs</span>
              </h2>
              <p className="mt-8 font-inter text-base text-stone-600 leading-relaxed">
                With over a decade of experience in architecture and interior design, 
                our founder brings a refined aesthetic sensibility and deep understanding 
                of how spaces shape our daily experiences.
              </p>
              <p className="mt-4 font-inter text-base text-stone-600 leading-relaxed">
                Trained in classical architecture with a passion for contemporary design, 
                she bridges tradition and innovation to create spaces that feel both 
                timeless and fresh.
              </p>
              <p className="mt-4 font-inter text-base text-stone-600 leading-relaxed">
                "I believe that the best interiors are those that evolve with their 
                inhabitants, that tell a story and invite new chapters to be written."
              </p>

              {/* Social Links */}
              <div className="mt-8 flex gap-4">
                <a
                  href="https://instagram.com/raiz.interiors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-stone-300 flex items-center justify-center text-stone-500 hover:text-stone-900 hover:border-stone-900 transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://pinterest.com/raizinteriors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-stone-300 flex items-center justify-center text-stone-500 hover:text-stone-900 hover:border-stone-900 transition-all"
                >
                  <FaPinterestP size={18} />
                </a>
                <a
                  href="https://linkedin.com/company/raiz-interiors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-stone-300 flex items-center justify-center text-stone-500 hover:text-stone-900 hover:border-stone-900 transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-stone-900">
              Our <span className="italic">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <h3 className="font-cormorant text-2xl text-stone-900 mb-4">
                  {value.title}
                </h3>
                <p className="font-inter text-sm text-stone-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 lg:py-32 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <ArtisticText
              as="h2"
              highlightWords={['INSPIRATION', 'DESIGN', 'WORLD', 'INSPIRED']}
              className="font-inter text-xl sm:text-2xl font-light text-stone-800 leading-relaxed max-w-2xl mx-auto"
              highlightClassName="text-stone-600"
            >
              INSPIRATION through DESIGN. Welcome to our WORLD and get INSPIRED...
            </ArtisticText>

            <a
              href="https://instagram.com/raiz.interiors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-6 font-inter text-xs tracking-[0.2em] uppercase text-stone-500 hover:text-stone-900 transition-colors"
            >
              <Instagram size={18} />
              @raiz.interiors
            </a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4">
            {instagramPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href="https://instagram.com/raiz.interiors"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group block relative aspect-square overflow-hidden bg-stone-200"
              >
                <Image
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <Instagram
                    size={24}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-stone-900">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-white mb-6">
              Let's Create Something <span className="italic">Beautiful</span>
            </h2>
            <p className="font-inter text-sm text-white/60 max-w-md mx-auto mb-10">
              Ready to transform your space? We'd love to hear about your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-stone-900 font-inter text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
