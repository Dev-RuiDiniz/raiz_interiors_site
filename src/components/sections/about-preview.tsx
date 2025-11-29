'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function AboutPreview() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              alt="RAIZ Interiors Designer"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-inter text-xs tracking-[0.3em] uppercase text-stone-500">
              About Us
            </span>

            <h2 className="mt-6 font-cormorant text-4xl lg:text-5xl font-light text-stone-900 leading-tight">
              The Vision Behind <br />
              <span className="italic">Our Designs</span>
            </h2>

            <p className="mt-8 font-inter text-sm text-stone-600 leading-relaxed">
              RAIZ Interiors is a design studio founded on the belief that spaces 
              should tell stories. We create environments that reflect the unique 
              personality and lifestyle of each client, blending functionality 
              with aesthetics to craft timeless interiors.
            </p>

            <p className="mt-4 font-inter text-sm text-stone-600 leading-relaxed">
              With a meticulous attention to detail and a passion for quality, 
              we transform spaces into sanctuaries that inspire and nurture 
              those who inhabit them.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 font-inter text-xs tracking-[0.2em] uppercase text-stone-600 hover:text-stone-900 transition-colors group"
              >
                <span>Learn More</span>
                <ArrowRight
                  size={16}
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
