'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// Projetos na ordem exata definida pela cliente
const allProjects = [
  {
    id: '1',
    slug: 'pombaline-restoration-principe-real',
    title: 'POMBALINE RESTORATION',
    subtitle: 'in Príncipe Real',
    location: 'LISBOA',
    category: 'RESIDENTIAL',
    status: 'WORK_IN_PROGRESS',
    coverImage: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80',
  },
  {
    id: '2',
    slug: 'beach-house-troia',
    title: 'BEACH HOUSE',
    subtitle: 'in Troia',
    location: 'PESTANA TROIA ECO RESORT',
    category: 'RESIDENTIAL',
    status: 'WORK_IN_PROGRESS',
    coverImage: '/beach-house-troia.jpg',
  },
  {
    id: '3',
    slug: 'summer-house-comporta',
    title: 'SUMMER HOUSE',
    subtitle: 'in Comporta',
    location: 'COMPORTA RETREAT',
    category: 'RESIDENTIAL',
    status: 'PUBLISHED',
    coverImage: '/comporta-summer-house.jpg',
  },
  {
    id: '4',
    slug: 'contemporary-city-house',
    title: 'CONTEMPORARY CITY HOUSE',
    subtitle: '',
    location: 'ALMADA',
    category: 'RESIDENTIAL',
    status: 'PUBLISHED',
    coverImage: '/contemporary-city-house.jpg',
  },
  {
    id: '5',
    slug: 'elegant-timeless-duplex',
    title: 'ELEGANT & TIMELESS DUPLEX',
    subtitle: '',
    location: 'BRAGA',
    category: 'RESIDENTIAL',
    status: 'PUBLISHED',
    coverImage: '/elegant-duplex-braga.jpg',
  },
  {
    id: '6',
    slug: 'store-restauration-atelier',
    title: 'STORE & RESTAURATION ATELIER',
    subtitle: '',
    location: 'ALMADA',
    category: 'COMMERCIAL',
    status: 'PUBLISHED',
    coverImage: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&q=80',
  },
  {
    id: '7',
    slug: 'rural-retreat',
    title: 'RURAL RETREAT',
    subtitle: '',
    location: 'SERRA DA LOUSÃ',
    category: 'RESIDENTIAL',
    status: 'WORK_IN_PROGRESS',
    coverImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
  },
  {
    id: '8',
    slug: 'weekend-family-house',
    title: 'WEEKEND FAMILY HOUSE',
    subtitle: '',
    location: 'AROEIRA',
    category: 'RESIDENTIAL',
    status: 'COMING_SOON',
    coverImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
  },
  {
    id: '9',
    slug: 'beach-house-troia-ii',
    title: 'BEACH HOUSE',
    subtitle: 'in Troia II',
    location: 'PESTANA TROIA ECO RESORT',
    category: 'RESIDENTIAL',
    status: 'COMING_SOON',
    coverImage: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
  },
  {
    id: '10',
    slug: 'young-soul-city-apartment',
    title: 'YOUNG SOUL CITY APARTMENT',
    subtitle: '',
    location: 'MIREAR TERRACES',
    category: 'RESIDENTIAL',
    status: 'COMING_SOON',
    coverImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
  },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section - Frase minimalista */}
      <section className="relative pt-32 pb-8 lg:pt-40 lg:pb-12 bg-[#E3DFDD]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-cormorant text-base sm:text-lg lg:text-xl font-light text-stone-600 leading-relaxed">
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

  const statusLabel = isComingSoon 
    ? 'Coming soon' 
    : isWorkInProgress 
      ? 'work in progress' 
      : null

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
              ? 'bg-stone-900/50'
              : 'bg-stone-900/20 group-hover:bg-stone-900/30'
          )}
        />
      </div>

      {/* Content - Centrado, títulos menores */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
        <h3 className="font-cormorant text-sm sm:text-base lg:text-lg font-light text-white leading-tight tracking-wide">
          {project.title} {project.subtitle && <span className="italic">{project.subtitle}</span>}
        </h3>
        <p className="font-inter text-[8px] sm:text-[9px] tracking-[0.12em] uppercase text-white/70 mt-1.5">
          {project.location}
        </p>
        
        {/* Status Badge */}
        {statusLabel && (
          <span className="mt-1 font-inter text-[7px] sm:text-[8px] tracking-[0.1em] lowercase text-white/60 italic">
            {statusLabel}
          </span>
        )}
      </div>
    </Link>
  )
}
