'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ArtisticText } from '@/components/ui/artistic-text'

const services = [
  {
    slug: 'architecture',
    title: 'Architecture',
    description: 'From concept to completion, we design architectural solutions that balance form and function.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    slug: 'interior-design',
    title: 'Interior Design',
    description: 'Creating cohesive interior environments that reflect your lifestyle and aspirations.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
  },
  {
    slug: 'decoration',
    title: 'Decoration',
    description: 'Curating furniture, art, and accessories to bring your space to life with personality.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
  {
    slug: 'consultancy',
    title: 'Consultancy',
    description: 'Expert guidance on design decisions, materials, and spatial planning for your project.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    slug: 'staging',
    title: 'Staging',
    description: 'Transforming properties for sale or rent with strategic styling that maximizes appeal.',
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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-stone-900">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="font-cormorant text-5xl lg:text-7xl font-light text-white leading-tight">
              Our <span className="italic">Services</span>
            </h1>
            <div className="mt-8">
              <ArtisticText
                as="p"
                highlightWords={['DESIGN', 'STUDIO', 'BESPOKE', 'QUALITY', 'PRECISION', 'PROFESSIONALISM']}
                className="font-inter text-lg lg:text-xl font-light text-white/80 leading-relaxed max-w-2xl"
                highlightClassName="text-white"
                animate={false}
              >
                We are a DESIGN STUDIO dedicated to delivering a BESPOKE start-to-finish DESIGN SERVICE, crafted with QUALITY, PRECISION and PROFESSIONALISM.
              </ArtisticText>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200 mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    
                    {/* Title Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="font-cormorant text-3xl lg:text-4xl text-white tracking-wide">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="font-inter text-sm text-stone-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.15em] uppercase text-stone-500 group-hover:text-stone-900 transition-colors">
                    Learn More
                    <ArrowRight
                      size={14}
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-24"
          >
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-stone-900">
              Our <span className="italic">Process</span>
            </h2>
            <p className="mt-4 font-inter text-sm text-stone-500 max-w-lg mx-auto">
              A transparent, collaborative approach that ensures your vision is realized at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-stone-300" />
                )}

                <div className="relative bg-white p-8 lg:p-6 text-center">
                  <span className="font-cormorant text-4xl lg:text-5xl font-light text-stone-300">
                    {step.number}
                  </span>
                  <h4 className="mt-4 font-cormorant text-xl text-stone-900">
                    {step.title}
                  </h4>
                  <p className="mt-3 font-inter text-xs text-stone-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
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
              Ready to Start Your <span className="italic">Project</span>?
            </h2>
            <p className="font-inter text-sm text-white/60 max-w-md mx-auto mb-10">
              Let's discuss how we can transform your space into something extraordinary.
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
