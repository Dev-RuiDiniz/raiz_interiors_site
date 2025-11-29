'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { ArtisticText } from '@/components/ui/artistic-text'

// Placeholder images - will be replaced with Instagram API
const instagramPosts = [
  { id: 1, image: '/images/instagram/1.jpg' },
  { id: 2, image: '/images/instagram/2.jpg' },
  { id: 3, image: '/images/instagram/3.jpg' },
  { id: 4, image: '/images/instagram/4.jpg' },
  { id: 5, image: '/images/instagram/5.jpg' },
  { id: 6, image: '/images/instagram/6.jpg' },
]

export function InstagramFeed() {
  return (
    <section className="bg-stone-50 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <ArtisticText
            as="h2"
            highlightWords={['INSPIRATION', 'DESIGN', 'WORLD', 'INSPIRED']}
            className="font-inter text-xl sm:text-2xl lg:text-3xl font-light text-stone-800 leading-relaxed"
            highlightClassName="text-stone-600"
          >
            INSPIRATION through DESIGN. Welcome to our WORLD and get INSPIRED...
          </ArtisticText>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href="https://instagram.com/raiz.interiors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-inter text-xs tracking-[0.2em] uppercase text-stone-500 hover:text-stone-900 transition-colors"
            >
              <Instagram size={18} />
              <span>@raiz.interiors</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href="https://instagram.com/raiz.interiors"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-square overflow-hidden bg-stone-200"
              >
                <Image
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <Instagram
                    size={24}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
