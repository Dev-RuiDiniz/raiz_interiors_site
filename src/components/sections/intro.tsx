'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ArtisticText } from '@/components/ui/artistic-text'

export function IntroSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ArtisticText
              as="h2"
              highlightWords={['INTERIORS', 'DESIGNED', 'SENSES', 'EMOTIONS', 'EXPERIENCES', 'RITUALS', 'LIVING']}
              className="font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-stone-800 leading-relaxed tracking-wide"
              highlightClassName="text-stone-600"
            >
              Our INTERIORS are DESIGNED to stimulate the SENSES awaken EMOTIONS and CREATE new EXPERIENCES and RITUALS — inspiring NEW WAYS of LIVING.
            </ArtisticText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 font-inter text-xs tracking-[0.2em] uppercase text-stone-600 hover:text-stone-900 transition-colors group"
            >
              <span>Discover More</span>
              <ArrowRight
                size={16}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
