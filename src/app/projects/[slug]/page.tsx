'use client'

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

// Dados mockados (virão do banco depois)
const projectsData: Record<string, ProjectDetail> = {
  'summer-house-comporta': {
    id: '2',
    slug: 'summer-house-comporta',
    title: 'Summer House in Comporta',
    subtitle: 'Comporta Retreat',
    location: 'Comporta, Portugal',
    category: 'RESIDENTIAL',
    year: '2023',
    area: '280 m²',
    client: 'Private Client',
    description: `This summer retreat in Comporta embodies the essence of coastal living, 
    where natural materials meet contemporary design. The project celebrates the 
    connection between indoor and outdoor spaces, creating a seamless flow that 
    invites the Portuguese landscape inside.
    
    Every element was carefully selected to reflect the serene atmosphere of the 
    Alentejo coast, from the warm wood tones to the neutral palette that mirrors 
    the sandy dunes outside.`,
    credits: 'RAIZ Interiors (co-autoria Carla Belo)',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    images: [
      { id: '1', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80', orientation: 'landscape' },
      { id: '2', url: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80', orientation: 'portrait' },
      { id: '3', url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80', orientation: 'portrait' },
      { id: '4', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80', orientation: 'landscape' },
      { id: '5', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', orientation: 'portrait' },
      { id: '6', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80', orientation: 'landscape' },
    ],
    prevProject: { slug: 'beach-house-troia', title: 'Beach House in Troia' },
    nextProject: { slug: 'contemporary-city-house', title: 'Contemporary City House' },
  },
  'contemporary-city-house': {
    id: '3',
    slug: 'contemporary-city-house',
    title: 'Contemporary City House',
    subtitle: 'Urban Living',
    location: 'Almada, Portugal',
    category: 'RESIDENTIAL',
    year: '2022',
    area: '320 m²',
    client: 'Private Client',
    description: `A contemporary urban residence that challenges conventional city living. 
    This project transforms a traditional townhouse into a modern sanctuary, 
    balancing privacy with openness and tradition with innovation.
    
    The design language speaks to the rhythm of city life while providing 
    moments of calm and reflection throughout the space.`,
    credits: 'RAIZ Interiors',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    images: [
      { id: '1', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80', orientation: 'landscape' },
      { id: '2', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', orientation: 'portrait' },
      { id: '3', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', orientation: 'portrait' },
      { id: '4', url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80', orientation: 'landscape' },
    ],
    prevProject: { slug: 'summer-house-comporta', title: 'Summer House in Comporta' },
    nextProject: { slug: 'elegant-timeless-duplex', title: 'Elegant & Timeless Duplex' },
  },
}

// Default fallback para qualquer slug não encontrado
const defaultProject: ProjectDetail = {
  id: '1',
  slug: 'beach-house-troia',
  title: 'Beach House in Troia',
  subtitle: 'Pestana Troia Eco Resort',
  location: 'Troia, Portugal',
  category: 'RESIDENTIAL',
  year: '2024',
  area: '350 m²',
  client: 'Private Client',
  description: `A stunning beachfront property that embraces the natural beauty of Troia's coastline. 
  This project represents the perfect harmony between luxury and nature, 
  creating spaces that breathe with the ocean air.
  
  The design philosophy centers on bringing the outside in, with expansive 
  windows framing the Atlantic and natural materials echoing the surrounding landscape.`,
  credits: 'RAIZ Interiors (co-autoria Carla Belo)',
  coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
  images: [
    { id: '1', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80', orientation: 'landscape' },
    { id: '2', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', orientation: 'portrait' },
    { id: '3', url: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80', orientation: 'portrait' },
    { id: '4', url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80', orientation: 'landscape' },
    { id: '5', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80', orientation: 'portrait' },
    { id: '6', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80', orientation: 'landscape' },
  ],
  prevProject: null,
  nextProject: { slug: 'summer-house-comporta', title: 'Summer House in Comporta' },
}

interface ProjectDetail {
  id: string
  slug: string
  title: string
  subtitle: string
  location: string
  category: string
  year: string
  area: string
  client: string
  description: string
  credits: string
  coverImage: string
  images: { id: string; url: string; orientation: 'landscape' | 'portrait' }[]
  prevProject: { slug: string; title: string } | null
  nextProject: { slug: string; title: string } | null
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = use(params)
  const project = projectsData[slug] || defaultProject

  return (
    <>
      {/* Hero Cover */}
      <section className="relative h-[70vh] lg:h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex flex-col justify-end pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-inter text-xs tracking-[0.3em] uppercase text-white/70">
              {project.category}
            </span>
            <h1 className="mt-4 font-cormorant text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-tight">
              {project.title}
            </h1>
            <p className="mt-3 font-inter text-lg text-white/80">
              {project.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-stone-900 mb-8">
                About the <span className="italic">Project</span>
              </h2>
              <div className="font-inter text-base text-stone-600 leading-relaxed whitespace-pre-line">
                {project.description}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-inter text-xs tracking-[0.2em] uppercase text-stone-500 mb-6">
                Project Details
              </h3>
              <div className="space-y-6">
                <DetailItem label="Location" value={project.location} />
                <DetailItem label="Year" value={project.year} />
                <DetailItem label="Area" value={project.area} />
                <DetailItem label="Client" value={project.client} />
                <DetailItem label="Credits" value={project.credits} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8 lg:py-16 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {project.images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={
                  image.orientation === 'landscape' ? 'md:col-span-2' : ''
                }
              >
                <div
                  className={`relative overflow-hidden bg-stone-200 ${
                    image.orientation === 'landscape'
                      ? 'aspect-[16/9]'
                      : 'aspect-[3/4]'
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 lg:py-24 bg-white border-t border-stone-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            {/* Back to Projects */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 font-inter text-xs tracking-[0.2em] uppercase text-stone-600 hover:text-stone-900 transition-colors group"
            >
              <ArrowLeft
                size={16}
                className="transform group-hover:-translate-x-1 transition-transform"
              />
              <span>Back to Projects</span>
            </Link>

            {/* Prev / Next */}
            <div className="flex items-center gap-8">
              {project.prevProject && (
                <Link
                  href={`/projects/${project.prevProject.slug}`}
                  className="text-right group"
                >
                  <span className="block font-inter text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-1">
                    Previous
                  </span>
                  <span className="font-cormorant text-lg text-stone-600 group-hover:text-stone-900 transition-colors">
                    {project.prevProject.title}
                  </span>
                </Link>
              )}

              {project.nextProject && (
                <Link
                  href={`/projects/${project.nextProject.slug}`}
                  className="text-left group"
                >
                  <span className="block font-inter text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-1">
                    Next
                  </span>
                  <span className="font-cormorant text-lg text-stone-600 group-hover:text-stone-900 transition-colors">
                    {project.nextProject.title}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-stone-200 pb-4">
      <span className="block font-inter text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-1">
        {label}
      </span>
      <span className="font-inter text-sm text-stone-800">{value}</span>
    </div>
  )
}
