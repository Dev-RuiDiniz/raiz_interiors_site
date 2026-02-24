'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Páginas com hero escuro (texto branco no header) - apenas Home tem hero com imagem
  const darkHeroPages = ['/']
  const hasDarkHero = darkHeroPages.includes(pathname)

  // Se não tem hero escuro, sempre usar texto escuro
  const useDarkText = !hasDarkHero || isScrolled || isOpen

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-[#CFCAC7] backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo white - visível quando no topo (home sem scroll) */}
                <Image
                  src="/raizlogo-white.png"
                  alt="RAIZ Interiors"
                  width={220}
                  height={80}
                  className={cn(
                    'object-contain transition-all duration-500 absolute top-1/2 -translate-y-1/2',
                    useDarkText ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  )}
                />
                {/* Logo preta - visível no scroll e páginas internas */}
                <Image
                  src="/raizlogo-preta.png"
                  alt="RAIZ Interiors"
                  width={220}
                  height={80}
                  className={cn(
                    'object-contain transition-all duration-500',
                    useDarkText ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-12">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'relative font-inter text-xs tracking-[0.2em] uppercase transition-colors duration-300 group',
                      pathname === item.href
                        ? useDarkText
                          ? 'text-stone-900'
                          : 'text-white'
                        : useDarkText
                          ? 'text-stone-600 hover:text-stone-900'
                          : 'text-white/80 hover:text-white'
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        'absolute -bottom-1 left-0 h-px bg-current transition-all duration-300',
                        pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                      )}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'lg:hidden relative z-50 p-2 transition-colors duration-300',
                useDarkText ? 'text-stone-900' : 'text-white'
              )}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className="absolute inset-0 bg-white"
            >
              <div className="flex flex-col items-center justify-center h-full">
                <nav className="flex flex-col items-center gap-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'font-cormorant text-3xl tracking-[0.15em] transition-colors duration-300',
                          pathname === item.href
                            ? 'text-stone-900'
                            : 'text-stone-400 hover:text-stone-900'
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
