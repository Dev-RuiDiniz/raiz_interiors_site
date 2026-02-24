'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ArtisticText } from '@/components/ui/artistic-text'

export function IntroSection() {
  return (
    <section className="bg-[#e3dfdc] py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ArtisticText
              as="p"
              highlightWords={['INTERIORS', 'DESIGNED', 'SENSES', 'EMOTIONS', 'CREATE', 'EXPERIENCES', 'RITUALS', 'LIVING']}
              className="font-cormorant text-base sm:text-lg md:text-xl lg:text-2xl font-light text-stone-700 leading-relaxed"
              highlightClassName="uppercase text-stone-600"
            >
              Our INTERIORS are DESIGNED to stimulate the SENSES awaken EMOTIONS and CREATE new EXPERIENCES and RITUALS — inspiring NEW WAYS of LIVING.
            </ArtisticText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 font-inter text-[10px] tracking-[0.2em] uppercase text-stone-500 hover:text-stone-700 transition-colors group"
            >
              <span>Discover More</span>
              <ArrowRight
                size={14}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
