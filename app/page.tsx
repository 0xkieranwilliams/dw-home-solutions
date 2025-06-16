'use client'

import { Suspense } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
      
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
} 