'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// Slideshow images para o Hero
const heroImages = [
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
  'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1920&q=80',
]

interface HeroProps {
  videoUrl?: string
  imageUrl?: string
  title?: string
  subtitle?: string
  slideshow?: boolean
}

export function Hero({
  videoUrl,
  imageUrl = heroImages[0],
  title = "Creating spaces that tell your story",
  subtitle = "Architecture • Interior Design • Decoration",
  slideshow = true,
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Slideshow effect
  useEffect(() => {
    if (!slideshow || videoUrl) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Troca a cada 5 segundos

    return () => clearInterval(interval)
  }, [slideshow, videoUrl])

  useEffect(() => {
    // Se não tiver vídeo, considerar carregado após um delay
    if (!videoUrl) {
      const timer = setTimeout(() => setIsLoaded(true), 300)
      return () => clearTimeout(timer)
    }
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [videoUrl])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Media */}
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
        ) : slideshow ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImageIndex]}
                alt="RAIZ Interiors"
                fill
                priority
                className="object-cover"
                onLoad={() => setIsLoaded(true)}
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <Image
            src={imageUrl}
            alt="RAIZ Interiors"
            fill
            priority
            className="object-cover"
            onLoad={() => setIsLoaded(true)}
          />
        )}

        {/* Overlay Gradient - Escuro no topo para destacar o menu */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="max-w-5xl"
        >
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-16 h-px bg-white/50 mx-auto mb-8"
          />

          {/* Main Title - Artistic Typography */}
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.1] tracking-wide">
            <span className="block">Creating</span>
            <span className="block italic font-cormorant mt-2">spaces that tell</span>
            <span className="block mt-2">your <em className="font-cormorant">story</em></span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10 font-inter text-xs sm:text-sm tracking-[0.3em] uppercase text-white/70"
          >
            {subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12"
          >
            <a
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-inter text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-stone-900 transition-all duration-300"
            >
              Explore Our Work
            </a>
          </motion.div>
        </motion.div>
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
