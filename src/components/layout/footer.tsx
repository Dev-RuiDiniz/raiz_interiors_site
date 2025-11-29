'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { FaPinterestP } from 'react-icons/fa'

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/raiz.interiors', label: 'Instagram' },
  { icon: FaPinterestP, href: 'https://pinterest.com/raizinteriors', label: 'Pinterest' },
  { icon: Linkedin, href: 'https://linkedin.com/company/raiz-interiors', label: 'LinkedIn' },
]

const navLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-cormorant text-3xl lg:text-4xl font-light mb-4">
                Stay <span className="italic">Inspired</span>
              </h3>
              <p className="font-inter text-sm text-white/60 max-w-md">
                Subscribe to our newsletter for exclusive insights, design inspiration, 
                and updates on our latest projects.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border border-white/20 px-6 py-4 font-inter text-sm placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-stone-900 font-inter text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <span className="font-cormorant text-2xl tracking-[0.2em]">RAIZ</span>
              <span className="block font-inter text-[10px] tracking-[0.3em] text-white/50 mt-1">
                INTERIORS & LIVING STUDIO
              </span>
            </Link>
            <p className="font-inter text-sm text-white/50 leading-relaxed">
              Creating meaningful spaces that tell your story through thoughtful design 
              and attention to detail.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-inter text-xs tracking-[0.2em] uppercase mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-inter text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-inter text-xs tracking-[0.2em] uppercase mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@raiz-interiors.com"
                className="flex items-center gap-3 font-inter text-sm text-white/50 hover:text-white transition-colors"
              >
                <Mail size={16} />
                hello@raiz-interiors.com
              </a>
              <a
                href="tel:+351912345678"
                className="flex items-center gap-3 font-inter text-sm text-white/50 hover:text-white transition-colors"
              >
                <Phone size={16} />
                +351 912 345 678
              </a>
              <div className="flex items-start gap-3 font-inter text-sm text-white/50">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Lisbon, Portugal</span>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-inter text-xs tracking-[0.2em] uppercase mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-xs text-white/40">
              © {currentYear} RAIZ Interiors. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="font-inter text-xs text-white/40 hover:text-white/60 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-inter text-xs text-white/40 hover:text-white/60 transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
