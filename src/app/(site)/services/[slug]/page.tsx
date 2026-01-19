'use client'

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'

const servicesData: Record<string, ServiceDetail> = {
  'architecture': {
    slug: 'architecture',
    title: 'Architecture',
    subtitle: 'Shaping Spaces, Defining Experiences',
    description: `Our architectural services encompass the complete journey from initial concept 
    to final construction. We believe that great architecture emerges from a deep understanding 
    of how people live, work, and interact with their environments.
    
    Every project begins with listening – to your aspirations, your lifestyle, and your vision 
    for the space. From there, we develop solutions that are both functionally excellent and 
    aesthetically inspiring.`,
    features: [
      'New construction design',
      'Renovations and extensions',
      'Spatial planning and optimization',
      'Building permit documentation',
      'Construction supervision',
      'Sustainable design solutions',
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    ],
  },
  'interior-design': {
    slug: 'interior-design',
    title: 'Interior Design',
    subtitle: 'Creating Environments That Inspire',
    description: `Interior design is where vision meets reality. We create cohesive, thoughtful 
    interiors that reflect your personality while optimizing functionality and flow.
    
    Our approach combines careful space planning with a keen eye for materials, colors, and 
    textures. The result is spaces that feel both curated and lived-in, sophisticated yet 
    welcoming.`,
    features: [
      'Space planning and layout design',
      'Material and finish selection',
      'Custom furniture design',
      'Lighting design',
      'Color consultation',
      'Art and accessory curation',
    ],
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
  },
  'decoration': {
    slug: 'decoration',
    title: 'Decoration',
    subtitle: 'The Art of Personal Expression',
    description: `Decoration is the layer that brings personality and warmth to any space. 
    We source and curate furniture, art, textiles, and objects that tell your story and 
    create an atmosphere uniquely yours.
    
    Whether refreshing a single room or styling an entire home, we bring an expert eye 
    and access to exclusive sources to elevate your interiors.`,
    features: [
      'Furniture selection and sourcing',
      'Art advisory and acquisition',
      'Textile and soft furnishing selection',
      'Decorative object curation',
      'Antique and vintage sourcing',
      'Final styling and installation',
    ],
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
    ],
  },
  'consultancy': {
    slug: 'consultancy',
    title: 'Consultancy',
    subtitle: 'Expert Guidance, Tailored Solutions',
    description: `Not every project requires full-service design. Our consultancy service 
    provides expert advice and direction for clients who want professional input on specific 
    aspects of their project.
    
    Whether you need help with a challenging layout, material decisions, or a second opinion 
    on your design direction, we're here to guide you.`,
    features: [
      'Design direction and concept development',
      'Material and color consultation',
      'Spatial problem-solving',
      'Vendor and contractor recommendations',
      'Budget planning and optimization',
      'Project timeline guidance',
    ],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    ],
  },
  'staging': {
    slug: 'staging',
    title: 'Staging',
    subtitle: 'Maximizing Property Potential',
    description: `First impressions matter. Our staging service transforms properties to 
    showcase their full potential, helping sellers achieve faster sales and better prices.
    
    We understand what buyers are looking for and create environments that allow them 
    to envision themselves in the space. Strategic styling that makes all the difference.`,
    features: [
      'Property assessment and strategy',
      'Furniture rental and placement',
      'Accessory styling',
      'Photography preparation',
      'Open house styling',
      'Vacant and occupied staging',
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    ],
  },
}

interface ServiceDetail {
  slug: string
  title: string
  subtitle: string
  description: string
  features: string[]
  images: string[]
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = use(params)
  const service = servicesData[slug] || servicesData['interior-design']

  return (
    <>
      {/* Hero Section - Menor */}
      <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 bg-[#E3DFDD]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.15em] uppercase text-stone-500 hover:text-stone-700 transition-colors mb-6"
            >
              <ArrowLeft size={12} />
              All Services
            </Link>

            <h1 className="font-cormorant text-3xl lg:text-4xl font-light text-stone-800 leading-tight">
              {service.title}
            </h1>
            <p className="mt-2 font-cormorant text-base lg:text-lg text-stone-600 italic">
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-[#E3DFDD]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-cormorant text-xl lg:text-2xl font-light text-stone-800 mb-6">
                What We <span className="italic">Offer</span>
              </h2>
              <div className="font-inter text-sm text-stone-600 leading-relaxed whitespace-pre-line">
                {service.description}
              </div>
            </motion.div>

            {/* Right: Features - Pontinhos em vez de viñetas */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-inter text-[10px] tracking-[0.2em] uppercase text-stone-500 mb-6">
                Services Include
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    {/* Pontinho minimalista */}
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-500 shrink-0" />
                    <span className="font-inter text-xs text-stone-700">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="py-8 lg:py-12 bg-[#CFCAC7]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] overflow-hidden bg-stone-300"
              >
                <Image
                  src={image}
                  alt={`${service.title} example ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Menos agressivo */}
      <section className="py-16 lg:py-24 bg-[#B4ADA8]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-cormorant text-xl lg:text-3xl font-light text-white italic mb-6">
              Let's create something beautiful together...
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
