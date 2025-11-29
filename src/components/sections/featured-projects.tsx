'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Project {
  id: string
  slug: string
  title: string
  location: string
  coverImage: string
  status: 'PUBLISHED' | 'COMING_SOON' | 'WORK_IN_PROGRESS'
}

interface FeaturedProjectsProps {
  projects: Project[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="bg-stone-50 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-stone-900">
              Featured <span className="italic">Projects</span>
            </h2>
            <p className="mt-4 font-inter text-sm text-stone-500 max-w-md">
              A curated selection of our most recent work, showcasing our commitment 
              to thoughtful design and exceptional craftsmanship.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-3 font-inter text-xs tracking-[0.2em] uppercase text-stone-600 hover:text-stone-900 transition-colors group shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight
              size={16}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const isComingSoon = project.status === 'COMING_SOON'
  const isWorkInProgress = project.status === 'WORK_IN_PROGRESS'

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
        {/* Overlay */}
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            isComingSoon
              ? 'bg-black/50'
              : 'bg-black/20 group-hover:bg-black/40'
          )}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6 lg:p-8">
        {/* Status Badge */}
        {(isComingSoon || isWorkInProgress) && (
          <span className="absolute top-6 left-6 lg:top-8 lg:left-8 font-inter text-[10px] tracking-[0.2em] uppercase text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1.5">
            {isComingSoon ? 'Coming Soon' : 'Work in Progress'}
          </span>
        )}

        <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
          <h3 className="font-cormorant text-2xl lg:text-3xl font-light text-white">
            {project.title}
          </h3>
          <p className="mt-2 font-inter text-xs tracking-[0.15em] uppercase text-white/70">
            {project.location}
          </p>
        </div>
      </div>
    </Link>
  )
}
