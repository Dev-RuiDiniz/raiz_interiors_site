'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    slug: 'architecture',
    title: 'Architecture',
    excerpt: 'Architectural solutions that create experiences.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    slug: 'interior-design',
    title: 'Interior Design',
    excerpt: 'Interior environments that reflect your lifestyle and soul.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
  },
  {
    slug: 'decoration',
    title: 'Decoration',
    excerpt: 'Curating furniture, art and accessories to bring personality to the space.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
  {
    slug: 'bespoke-furniture',
    title: 'Bespoke Furniture',
    excerpt: 'Custom furniture designed to fit your unique space and style.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  },
  {
    slug: 'consultancy',
    title: 'Consultancy',
    excerpt: 'Personalized expert guidance on Design solutions.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    slug: 'styling-staging',
    title: 'Styling & Staging',
    excerpt: 'Transforming spaces strategically to maximize appeal.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin with an in-depth consultation to understand your vision, lifestyle, and requirements.',
  },
  {
    number: '02',
    title: 'Concept',
    description: 'Our team develops initial concepts, mood boards, and spatial layouts for your approval.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Detailed designs, material selections, and technical drawings bring the vision to life.',
  },
  {
    number: '04',
    title: 'Execution',
    description: 'We oversee every aspect of implementation, ensuring quality and attention to detail.',
  },
  {
    number: '05',
    title: 'Delivery',
    description: 'Final styling and handover of your transformed space, ready to be lived in and loved.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section - Só frase */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 bg-[#E3DFDD]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="font-cormorant text-xl sm:text-2xl lg:text-3xl font-light text-stone-700 leading-relaxed">
              We are a <span className="uppercase">design studio</span> dedicated to delivering a{' '}
              <span className="uppercase">bespoke</span> start-to-finish design service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - 3 colunas, títulos centrados */}
      <section className="py-8 lg:py-12 bg-[#E3DFDD]">
        <div className="px-2 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block relative aspect-[4/3] overflow-hidden bg-stone-300"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  
                  {/* Content - Centrado */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <h3 className="font-cormorant text-2xl lg:text-3xl text-white uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <p className="mt-3 font-inter text-xs text-white/80 max-w-xs leading-relaxed">
                      {service.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Pontinhos */}
      <section className="py-16 lg:py-24 bg-[#CFCAC7]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-stone-800">
              Our <span className="italic">Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                {/* Pontinho */}
                <div className="w-3 h-3 rounded-full bg-stone-600 mx-auto mb-4" />
                <h4 className="font-cormorant text-lg text-stone-800">
                  {step.title}
                </h4>
                <p className="mt-2 font-inter text-xs text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Menos agressivo */}
      <section className="py-20 lg:py-28 bg-[#B4ADA8]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-cormorant text-2xl lg:text-4xl font-light text-white italic mb-8">
              Let us be part of your story...
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border border-white/50 text-white font-inter text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-stone-800 transition-all duration-300"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
