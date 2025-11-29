'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface HeroProps {
  videoUrl?: string
  imageUrl?: string
  title?: string
  subtitle?: string
}

export function Hero({
  videoUrl,
  imageUrl = '/images/hero-placeholder.jpg',
  title = "It's not about interior design itself",
  subtitle = "It's about you, your story, your connections...",
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

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
        ) : (
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageUrl})` }}
            onLoad={() => setIsLoaded(true)}
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-wide">
            <span className="italic">{title}</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 font-cormorant text-xl sm:text-2xl md:text-3xl font-light text-white/90 italic tracking-wide"
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </motion.button>
    </section>
  )
}
