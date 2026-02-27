/*
Arquivo: src/components/sections/about-preview.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function AboutPreview() {
  return (
    <section className="bg-[#d1c9c7] py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
              alt="RAIZ Interiors - Live Beautiful"
              fill
              className="object-cover"
            />
            {/* Overlay com texto */}
            <div className="absolute inset-0 bg-stone-900/30 flex items-end justify-center pb-8">
              <span className="font-cormorant text-xl lg:text-2xl text-white italic tracking-wide">
                Live Beautiful
              </span>
            </div>
          </motion.div>

          {/* Right: Content - Frase em vez de h1 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <p className="font-cormorant text-lg sm:text-xl lg:text-2xl font-light text-stone-800 leading-relaxed">
              We don't just create <span className="uppercase">beautiful homes</span>,{' '}
              we design <span className="uppercase">meaningful</span> spaces that tell{' '}
              <span className="uppercase">your story</span>, and inspire{' '}
              <span className="uppercase">experiences</span> where{' '}
              <span className="uppercase">memories</span> are built.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.2em] uppercase text-stone-600 hover:text-stone-800 transition-colors group"
              >
                <span>Learn More</span>
                <ArrowRight
                  size={12}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

