import { Hero } from '@/components/sections/hero'
import { IntroSection } from '@/components/sections/intro'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { ServicesPreview } from '@/components/sections/services-preview'
import { AboutPreview } from '@/components/sections/about-preview'

// Projetos de exemplo (depois virão do banco de dados)
const featuredProjects = [
  {
    id: '1',
    slug: 'beach-house-troia',
    title: 'Beach House in Troia',
    location: 'Pestana Troia Eco Resort',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    status: 'WORK_IN_PROGRESS' as const,
  },
  {
    id: '2',
    slug: 'summer-house-comporta',
    title: 'Summer House in Comporta',
    location: 'Comporta Retreat',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    status: 'PUBLISHED' as const,
  },
  {
    id: '3',
    slug: 'contemporary-city-house',
    title: 'Contemporary City House',
    location: 'Almada, Portugal',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    status: 'PUBLISHED' as const,
  },
  {
    id: '4',
    slug: 'elegant-timeless-duplex',
    title: 'Elegant & Timeless Duplex',
    location: 'Braga, Portugal',
    coverImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    status: 'PUBLISHED' as const,
  },
]

export default function Home() {
  return (
    <>
      <Hero
        imageUrl="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
        title="It's not about interior design itself"
        subtitle="It's about you, your story, your connections..."
      />
      <IntroSection />
      <FeaturedProjects projects={featuredProjects} />
      <ServicesPreview />
      <AboutPreview />
    </>
  )
}
