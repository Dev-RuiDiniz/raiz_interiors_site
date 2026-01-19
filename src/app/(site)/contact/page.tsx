'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, MapPin, Phone, Send, Instagram, Linkedin } from 'lucide-react'
import { FaPinterestP } from 'react-icons/fa'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  subject: z.string().min(2, 'Please enter a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@raiz-interiors.com',
    href: 'mailto:info@raiz-interiors.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lisbon, Portugal',
    href: null,
  },
]

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/raiz.interiors.living/?hl=pt', label: 'Instagram' },
  { icon: FaPinterestP, href: 'https://pinterest.com/raizinteriors', label: 'Pinterest' },
  { icon: Linkedin, href: 'https://linkedin.com/company/raiz-interiors', label: 'LinkedIn' },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <>
      {/* Hero Section - Menor */}
      <section className="relative pt-28 pb-8 lg:pt-36 lg:pb-12 bg-[#E3DFDD]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="font-cormorant text-3xl lg:text-4xl font-light text-stone-800 leading-tight">
              Get in <span className="italic">Touch</span>
            </h1>
            <p className="mt-4 font-inter text-sm text-stone-600 leading-relaxed max-w-lg">
              We'd love to hear about your project. Whether you're ready to start 
              or just exploring possibilities, let's begin a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-16 bg-[#E3DFDD]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-cormorant text-xl lg:text-2xl font-light text-stone-800 mb-6">
                Contact <span className="italic">Information</span>
              </h2>

              <div className="space-y-8 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-stone-100 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-stone-600" />
                    </div>
                    <div>
                      <span className="block font-inter text-xs tracking-[0.15em] uppercase text-stone-400 mb-1">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-inter text-base text-stone-800 hover:text-stone-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-inter text-base text-stone-800">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="font-inter text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-900 hover:border-stone-900 transition-all"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-12 p-8 bg-stone-50"
              >
                <h3 className="font-inter text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 font-inter text-sm text-stone-600">
                  <p>Monday – Friday: 9:00 – 18:00</p>
                  <p>Saturday: By appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-cormorant text-xl lg:text-2xl font-light text-stone-800 mb-6">
                Send a <span className="italic">Message</span>
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-green-50 border border-green-200 text-center"
                >
                  <h3 className="font-cormorant text-2xl text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="font-inter text-sm text-green-700">
                    Your message has been sent. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-inter text-xs tracking-[0.15em] uppercase text-stone-500 mb-2">
                        Name *
                      </label>
                      <Input
                        {...register('name')}
                        placeholder="Your name"
                        className={cn(
                          'h-12 bg-stone-50 border-stone-200 focus:border-stone-400 rounded-none font-inter text-sm',
                          errors.name && 'border-red-400'
                        )}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-inter text-xs tracking-[0.15em] uppercase text-stone-500 mb-2">
                        Email *
                      </label>
                      <Input
                        {...register('email')}
                        type="email"
                        placeholder="your@email.com"
                        className={cn(
                          'h-12 bg-stone-50 border-stone-200 focus:border-stone-400 rounded-none font-inter text-sm',
                          errors.email && 'border-red-400'
                        )}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-inter text-xs tracking-[0.15em] uppercase text-stone-500 mb-2">
                        Phone
                      </label>
                      <Input
                        {...register('phone')}
                        placeholder="+351 XXX XXX XXX"
                        className="h-12 bg-stone-50 border-stone-200 focus:border-stone-400 rounded-none font-inter text-sm"
                      />
                    </div>

                    <div>
                      <label className="block font-inter text-xs tracking-[0.15em] uppercase text-stone-500 mb-2">
                        Subject *
                      </label>
                      <Input
                        {...register('subject')}
                        placeholder="Project inquiry"
                        className={cn(
                          'h-12 bg-stone-50 border-stone-200 focus:border-stone-400 rounded-none font-inter text-sm',
                          errors.subject && 'border-red-400'
                        )}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block font-inter text-xs tracking-[0.15em] uppercase text-stone-500 mb-2">
                      Message *
                    </label>
                    <Textarea
                      {...register('message')}
                      placeholder="Tell us about your project..."
                      rows={6}
                      className={cn(
                        'bg-stone-50 border-stone-200 focus:border-stone-400 rounded-none font-inter text-sm resize-none',
                        errors.message && 'border-red-400'
                      )}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto h-14 px-10 bg-stone-900 text-white font-inter text-xs tracking-[0.2em] uppercase hover:bg-stone-800 rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send size={14} />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

    </>
  )
}
