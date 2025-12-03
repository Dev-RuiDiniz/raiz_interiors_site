'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// Dados mockados (virão do banco depois)
const allProjects = [
  {
    id: '1',
    slug: 'beach-house-troia',
    title: 'Beach House in Troia',
    subtitle: 'Pestana Troia Eco Resort',
    location: 'Troia, Portugal',
    category: 'RESIDENTIAL',
    status: 'WORK_IN_PROGRESS',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    id: '2',
    slug: 'summer-house-comporta',
    title: 'Summer House in Comporta',
    subtitle: 'Comporta Retreat',
    location: 'Comporta, Portugal',
    category: 'RESIDENTIAL',
    status: 'PUBLISHED',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: '3',
    slug: 'contemporary-city-house',
    title: 'Contemporary City House',
    subtitle: 'Urban Living',
    location: 'Almada, Portugal',
    category: 'RESIDENTIAL',
    status: 'PUBLISHED',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    id: '4',
    slug: 'elegant-timeless-duplex',
    title: 'Elegant & Timeless Duplex',
    subtitle: 'Classic Refinement',
    location: 'Braga, Portugal',
    category: 'RESIDENTIAL',
    status: 'PUBLISHED',
    coverImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
  {
    id: '5',
    slug: 'gift-store-almada',
    title: 'Gift Store',
    subtitle: 'Retail Experience',
    location: 'Almada, Portugal',
    category: 'RETAIL',
    status: 'PUBLISHED',
    coverImage: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&q=80',
  },
  {
    id: '6',
    slug: 'weekend-family-house',
    title: 'Weekend Family House',
    subtitle: 'Family Retreat',
    location: 'Aroeira, Portugal',
    category: 'RESIDENTIAL',
    status: 'PUBLISHED',
    coverImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
  },
  {
    id: '7',
    slug: 'beach-house-troia-ii',
    title: 'Beach House in Troia II',
    subtitle: 'Pestana Troia Eco Resort',
    location: 'Troia, Portugal',
    category: 'RESIDENTIAL',
    status: 'COMING_SOON',
    coverImage: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
  },
  {
    id: '8',
    slug: 'young-soul-apartment',
    title: 'Young Soul City Apartment',
    subtitle: 'Mirear Terraces',
    location: 'Lisboa, Portugal',
    category: 'RESIDENTIAL',
    status: 'COMING_SOON',
    coverImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
  },
  {
    id: '9',
    slug: 'residential-building-principe-real',
    title: 'Residential Building',
    subtitle: 'Príncipe Real',
    location: 'Lisboa, Portugal',
    category: 'RESIDENTIAL',
    status: 'WORK_IN_PROGRESS',
    coverImage: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80',
  },
  {
    id: '10',
    slug: 'rural-retreat-gardunha',
    title: 'Rural Retreat',
    subtitle: 'Serra da Gardunha',
    location: 'Serra da Gardunha, Portugal',
    category: 'RESIDENTIAL',
    status: 'WORK_IN_PROGRESS',
    coverImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
  },
]

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Residential', value: 'RESIDENTIAL' },
  { label: 'Commercial', value: 'COMMERCIAL' },
  { label: 'Retail', value: 'RETAIL' },
  { label: 'Hospitality', value: 'HOSPITALITY' },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-cormorant text-5xl lg:text-7xl font-light text-stone-900 leading-tight">
              Our <span className="italic">Projects</span>
            </h1>
            <p className="mt-6 font-inter text-base text-stone-600 leading-relaxed max-w-xl">
              A curated collection of our work, each project reflecting our commitment 
              to creating meaningful spaces that tell unique stories.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={cn(
                  'px-5 py-2.5 font-inter text-xs tracking-[0.15em] uppercase transition-all duration-300 border',
                  cat.value === 'all'
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-transparent text-stone-600 border-stone-300 hover:border-stone-900 hover:text-stone-900'
                )}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

interface ProjectCardProps {
  project: typeof allProjects[0]
}

function ProjectCard({ project }: ProjectCardProps) {
  const isComingSoon = project.status === 'COMING_SOON'
  const isWorkInProgress = project.status === 'WORK_IN_PROGRESS'

  const statusLabel = isComingSoon 
    ? 'Coming Soon' 
    : isWorkInProgress 
      ? 'Work in Progress' 
      : null

  return (
    <Link
      href={isComingSoon ? '#' : `/projects/${project.slug}`}
      className={cn(
        'group block relative overflow-hidden bg-stone-200 aspect-[4/3]',
        isComingSoon && 'cursor-default'
      )}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className={cn(
            'object-cover transition-transform duration-700',
            !isComingSoon && 'group-hover:scale-105'
          )}
        />
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            isComingSoon
              ? 'bg-black/50'
              : 'bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80'
          )}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6 lg:p-8">
        {/* Status Badge */}
        {statusLabel && (
          <span className="absolute top-6 left-6 lg:top-8 lg:left-8 font-inter text-[10px] tracking-[0.2em] uppercase text-white/90 bg-white/20 backdrop-blur-sm px-3 py-1.5">
            {statusLabel}
          </span>
        )}

        {/* Category Badge */}
        <span className="absolute top-6 right-6 lg:top-8 lg:right-8 font-inter text-[10px] tracking-[0.15em] uppercase text-white/70">
          {project.category}
        </span>

        <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
          <h3 className="font-cormorant text-2xl lg:text-3xl font-light text-white leading-tight">
            {project.title}
          </h3>
          <p className="mt-1 font-inter text-sm text-white/70">
            {project.subtitle}
          </p>
          <p className="mt-3 font-inter text-xs tracking-[0.15em] uppercase text-white/50">
            {project.location}
          </p>
        </div>
      </div>
    </Link>
  )
}
