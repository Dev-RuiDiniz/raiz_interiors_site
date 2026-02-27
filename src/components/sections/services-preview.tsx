/*
Arquivo: src/components/sections/services-preview.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ArtisticText } from '@/components/ui/artistic-text'

export function ServicesPreview() {
  return (
    <section className="bg-[#e3dfdc] py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-inter text-xs tracking-[0.3em] uppercase text-stone-500">
              Our Services
            </span>
            
            <div className="mt-6">
              <ArtisticText
                as="h2"
                highlightWords={['DESIGN', 'STUDIO', 'BESPOKE', 'QUALITY', 'PRECISION', 'PROFESSIONALISM']}
                className="font-inter text-xl sm:text-2xl lg:text-3xl font-light text-stone-900 leading-relaxed"
                highlightClassName="text-stone-600"
              >
                We are a DESIGN STUDIO dedicated to delivering a BESPOKE start-to-finish DESIGN SERVICE, crafted with QUALITY, PRECISION and PROFESSIONALISM.
              </ArtisticText>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-3 font-inter text-xs tracking-[0.2em] uppercase text-stone-600 hover:text-stone-900 transition-colors group"
              >
                <span>Explore Services</span>
                <ArrowRight
                  size={16}
                  className="text-stone-500 group-hover:text-stone-900 transform group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Service List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-0"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between py-6 border-b border-stone-400/40 hover:border-stone-500/60 transition-colors"
                >
                  <span className="font-cormorant text-xl lg:text-2xl text-stone-900/90 group-hover:text-stone-900 transition-colors">
                    {service.title}
                  </span>
                  <ArrowRight
                    size={20}
                    className="text-stone-500 group-hover:text-stone-900 transform group-hover:translate-x-2 transition-all"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const services = [
  { title: 'Architecture', slug: 'architecture' },
  { title: 'Interior Design', slug: 'interior-design' },
  { title: 'Decoration', slug: 'decoration' },
  { title: 'Consultancy', slug: 'consultancy' },
  { title: 'Staging', slug: 'staging' },
]

