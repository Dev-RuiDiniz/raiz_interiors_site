/*
Arquivo: src/components/sections/hero.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

// Slides com imagem e conteúdo único - 6 slides no total
const heroSlides = [
  {
    image: '/2026/HOME/GALERIA INICIAL/beautiful and timeless comporta summer house interior design by RAIZ.jpg',
    line1: "It's not about interior design itself",
    line2: "It's about you, your story, your connections...",
    link: '/projects',
  },
  {
    image: '/2026/HOME/GALERIA INICIAL/contemporary minimalist living room suspended staircase and fireplace interior design by RAIZ .jpg',
    line1: 'CRAFTING SPACES',
    line2: 'with PURPOSE',
    link: '/projects',
  },
  {
    image: '/2026/HOME/GALERIA INICIAL/contemporary-beach-house-living-room-with-fireplace-interior-design-by-RAIZ.jpg',
    line1: 'Where DESIGN',
    line2: 'meets your SOUL',
    link: '/projects',
  },
  {
    image: '/2026/HOME/GALERIA INICIAL/elegant timeless luxury master suite interior design by RAIZ.jpg',
    line1: 'BESPOKE SPACES',
    line2: 'that tell your story',
    link: '/projects',
  },
  {
    image: '/2026/HOME/GALERIA INICIAL/IMG_0820_SnapseedCopy.jpg',
    line1: 'TIMELESS ELEGANCE',
    line2: 'in every detail',
    link: '/projects',
  },
  {
    image: '/2026/HOME/GALERIA INICIAL/SUITE 4K.jpg',
    line1: 'LIVE',
    line2: 'BEAUTIFUL',
    link: '/about',
  },
]

interface HeroProps {
  videoUrl?: string
  slideshow?: boolean
}

export function Hero({
  videoUrl,
  slideshow = true,
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Slideshow effect
  useEffect(() => {
    if (!slideshow || videoUrl) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length)
    }, 6000) // Troca a cada 6 segundos

    return () => clearInterval(interval)
  }, [slideshow, videoUrl])

  useEffect(() => {
    if (!videoUrl) {
      const timer = setTimeout(() => setIsLoaded(true), 300)
      return () => clearTimeout(timer)
    }
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [videoUrl])

  const currentSlide = heroSlides[currentIndex]

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images - Crossfade real */}
      <div className="absolute inset-0">
        {videoUrl ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setIsLoaded(true)}
            className="h-full w-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <>
            {/* Todas as imagens empilhadas com opacidade controlada */}
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: index === currentIndex ? 1 : 0 }}
              >
                <Image
                  src={slide.image}
                  alt={`RAIZ Interiors - ${slide.line1}`}
                  fill
                  priority={index === 0}
                  className="object-cover scale-105"
                  onLoad={() => index === 0 && setIsLoaded(true)}
                />
                {/* Zoom suave na imagem ativa */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: index === currentIndex ? [1, 1.05] : 1,
                  }}
                  transition={{
                    duration: 6,
                    ease: 'linear',
                  }}
                />
              </div>
            ))}
          </>
        )}

        {/* Overlay Gradient - Escuro no topo para destacar o menu */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/50" />
      </div>

      {/* Content - Animado por slide */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-5xl"
          >
            {/* Main Title - 2 linhas, tamanho menor */}
            <Link href={currentSlide.link} className="block group">
              <h1 className="font-cormorant text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-[1.3] tracking-wide">
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="block"
                >
                  {currentSlide.line1}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="block italic text-white/90 mt-1"
                >
                  {currentSlide.line2}
                </motion.span>
              </h1>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators - Bolinhas */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

