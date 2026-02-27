/*
Arquivo: src/app/(site)/about/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { InstagramFeed } from '@/components/sections/instagram-feed'

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
                The essence of our work lies in the art of thinking and designing spaces 
                with a particular and personal narrative in each project. We believe in an 
                empathetic, intimate approach, carefully tailored to each individual, their 
                story, and their connections.
              </p>
              <p className="mt-3 font-inter text-sm text-stone-600 leading-relaxed">
                With a sensory and emotional perspective, we craft humanized, functional, 
                coherent, and balanced designs, shaping environments that radiate harmony, 
                well-being, and serenity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src="/2026/ABOUT US/LIVE-BEAUTIFUL-Interior-Design-by-RAIZ.jpg"
                alt="RAIZ Interiors - Live Beautiful"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values - Movido para cima */}
      <section className="py-12 lg:py-16 bg-[#E3DFDD]">
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
                src="/2026/ABOUT US/IMG_3574.jpg"
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


      {/* Instagram Feed - Auto-scroll carrossel */}
      <InstagramFeed />

      {/* CTA Section - Altura reduzida */}
      <section className="py-10 lg:py-12 bg-[#d1c9c7]">
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

