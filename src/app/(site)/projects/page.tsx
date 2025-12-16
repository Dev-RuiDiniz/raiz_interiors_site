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
              A <span className="uppercase">curated</span> selection of our work, each project reflecting our commitment to create{' '}
              <span className="uppercase">meaningful</span> spaces that tell unique{' '}
              <span className="uppercase">stories</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid - 3 colunas, menos espaçamento, até limites do ecrã */}
      <section className="py-8 lg:py-12 bg-[#E3DFDD]">
        <div className="px-2 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
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

  const statusLabel = isWorkInProgress ? 'work in progress' : null

  return (
    <Link
      href={isComingSoon ? '#' : `/projects/${project.slug}`}
      className={cn(
        'group block relative overflow-hidden bg-stone-300 aspect-[4/3]',
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
              : 'bg-black/30 group-hover:bg-black/40'
          )}
        />
      </div>

      {/* Content - Centrado na imagem */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
        <h3 className="font-cormorant text-xl sm:text-2xl lg:text-3xl font-light text-white leading-tight uppercase tracking-wide">
          {project.title.split(' ').slice(0, -1).join(' ')}
        </h3>
        <p className="font-cormorant text-lg sm:text-xl lg:text-2xl italic text-white/90 mt-1">
          {project.title.split(' ').slice(-1).join(' ') === 'Troia' || project.title.split(' ').slice(-1).join(' ') === 'Comporta' 
            ? `in ${project.title.split(' ').slice(-1).join(' ')}`
            : project.subtitle}
        </p>
        
        {/* Status Badge */}
        {statusLabel && (
          <span className="mt-3 font-inter text-[9px] tracking-[0.15em] uppercase text-white/70">
            {statusLabel}
          </span>
        )}
      </div>
    </Link>
  )
}
