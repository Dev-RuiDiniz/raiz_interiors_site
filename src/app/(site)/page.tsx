import { Hero } from '@/components/sections/hero'
import { IntroSection } from '@/components/sections/intro'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { ServicesPreview } from '@/components/sections/services-preview'
import { AboutPreview } from '@/components/sections/about-preview'

// Selected Projects - Imagens da cliente
const featuredProjects = [
  {
    id: '1',
    slug: 'summer-house-comporta',
    title: 'Summer House in Comporta',
    location: 'Comporta Retreat',
    coverImage: '/galeriaInicial/selectProjects/beautiful and timeless comporta summer house interior design by RAIZ.jpg',
    status: 'PUBLISHED' as const,
  },
  {
    id: '2',
    slug: 'contemporary-city-house',
    title: 'Contemporary City House',
    location: 'Almada, Portugal',
    coverImage: '/galeriaInicial/selectProjects/contemporary minimalist living room suspended staircase and fireplace interior design by RAIZ .jpg',
    status: 'PUBLISHED' as const,
  },
  {
    id: '3',
    slug: 'beach-house-troia',
    title: 'Beach House in Troia',
    location: 'Pestana Troia Eco Resort',
    coverImage: '/galeriaInicial/selectProjects/contemporary-beach-house-living-room-with-fireplace-interior-design-by-RAIZ.jpg',
    status: 'WORK_IN_PROGRESS' as const,
  },
  {
    id: '4',
    slug: 'elegant-timeless-duplex',
    title: 'Elegant & Timeless Duplex',
    location: 'Braga, Portugal',
    coverImage: '/galeriaInicial/selectProjects/elegant timeless luxury master suite interior design by RAIZ.jpg',
    status: 'PUBLISHED' as const,
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <FeaturedProjects projects={featuredProjects} />
      <ServicesPreview />
      <AboutPreview />
    </>
  )
}
