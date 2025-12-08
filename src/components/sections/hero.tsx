'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// Slides com imagem e conteúdo único
const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80',
    title: ['Creating', 'spaces that tell', 'your story'],
    subtitle: 'Architecture • Interior Design • Decoration',
    cta: 'Explore Our Work',
    ctaLink: '/projects',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    title: ['Timeless', 'elegance in', 'every detail'],
    subtitle: 'Bespoke Interiors • Curated Design',
    cta: 'View Projects',
    ctaLink: '/projects',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    title: ['Where', 'design meets', 'emotion'],
    subtitle: 'Residential • Commercial • Hospitality',
    cta: 'Our Services',
    ctaLink: '/services',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
    title: ['Crafting', 'spaces with', 'purpose'],
    subtitle: 'Consultancy • Staging • Decoration',
    cta: 'Get In Touch',
    ctaLink: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    title: ['Modern', 'living', 'redefined'],
    subtitle: 'Contemporary Design • Natural Materials',
    cta: 'Discover More',
    ctaLink: '/about',
  },
  {
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1920&q=80',
    title: ['Your', 'vision', 'realized'],
    subtitle: 'Full Service Design Studio',
    cta: 'Start Your Project',
    ctaLink: '/contact',
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

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

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
                  alt={`RAIZ Interiors - ${slide.title.join(' ')}`}
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
            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-16 h-px bg-white/50 mx-auto mb-8"
            />

            {/* Main Title - Artistic Typography */}
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.1] tracking-wide">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block"
              >
                {currentSlide.title[0]}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block italic font-cormorant mt-2"
              >
                {currentSlide.title[1]}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block mt-2"
              >
                {currentSlide.title[2].split(' ')[0]}{' '}
                <em className="font-cormorant">{currentSlide.title[2].split(' ').slice(1).join(' ') || currentSlide.title[2]}</em>
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 font-inter text-xs sm:text-sm tracking-[0.3em] uppercase text-white/70"
            >
              {currentSlide.subtitle}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              <a
                href={currentSlide.ctaLink}
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-inter text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-stone-900 transition-all duration-300"
              >
                {currentSlide.cta}
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-inter text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={24} strokeWidth={1} />
        </motion.div>
      </motion.button>
    </section>
  )
}
