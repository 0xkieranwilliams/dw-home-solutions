'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Home, Wrench } from 'lucide-react'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      
      setMousePosition({ x, y })
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)
      return () => heroElement.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div 
          className="absolute inset-0 opacity-35"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
              rgba(56, 189, 248, 0.4) 0%, 
              rgba(14, 165, 233, 0.3) 25%, 
              rgba(6, 182, 212, 0.25) 50%, 
              rgba(103, 232, 249, 0.15) 75%,
              transparent 85%)`
          }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full blur-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.3) 0%, rgba(14, 165, 233, 0.2) 100%)'
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 rounded-lg rotate-45 blur-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(125, 211, 252, 0.3) 0%, rgba(56, 189, 248, 0.2) 100%)'
          }}
          animate={{
            y: [0, 15, 0],
            rotate: [45, 65, 45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full blur-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.25) 0%, rgba(6, 182, 212, 0.2) 100%)'
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 rounded-xl rotate-12 blur-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.3) 0%, rgba(59, 130, 246, 0.2) 100%)'
          }}
          animate={{
            rotate: [12, 32, 12],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-sky-400/40 dark:text-sky-300/40"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Home size={32} />
      </motion.div>
      
      <motion.div
        className="absolute top-1/3 right-1/3 text-cyan-500/40 dark:text-cyan-400/40"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Wrench size={28} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 text-blue-400/40 dark:text-blue-300/40"
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Sparkles size={24} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-16 sm:pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6 sm:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
                         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
               <span className="gradient-text block">DW Home Solutions</span>
               <span className="text-gray-800 dark:text-white block mt-1 sm:mt-2">
                 Transform Your Home
               </span>
             </h1>
            
            {/* Decorative elements around title */}
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-sky-400/60"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-500/60"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>

                     <motion.p 
             className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.7 }}
           >
            Premium bathroom fitting, kitchen renovations, tiling, plumbing, and home improvement services that bring your vision to life with exceptional craftsmanship.
          </motion.p>

                     <motion.div 
             className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.9 }}
           >
             <motion.a
               href="#contact"
               className="btn-primary group inline-flex items-center space-x-2 sm:space-x-3 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <span>Get Free Quote</span>
               <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
             </motion.a>
             
             <motion.button 
               className="bg-white/10 dark:bg-dark-800/30 backdrop-blur-sm border-2 border-sky-400/50 dark:border-sky-400/50 text-gray-900 dark:text-white hover:bg-sky-400 hover:text-white hover:border-sky-400 group inline-flex items-center space-x-2 sm:space-x-3 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <Play className="w-4 sm:w-5 h-4 sm:h-5" />
               <span>View Portfolio</span>
             </motion.button>
           </motion.div>

                     {/* Stats or Features */}
           <motion.div
             className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 max-w-3xl mx-auto"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 1.1 }}
           >
                         <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/10 dark:bg-dark-800/30 backdrop-blur-sm border border-white/20 dark:border-dark-600/30">
               <div className="text-2xl sm:text-3xl font-bold text-sky-600 dark:text-sky-400">500+</div>
               <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Projects Completed</div>
             </div>
             <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/10 dark:bg-dark-800/30 backdrop-blur-sm border border-white/20 dark:border-dark-600/30">
               <div className="text-2xl sm:text-3xl font-bold text-sky-600 dark:text-sky-400">15+</div>
               <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Years Experience</div>
             </div>
             <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/10 dark:bg-dark-800/30 backdrop-blur-sm border border-white/20 dark:border-dark-600/30">
               <div className="text-2xl sm:text-3xl font-bold text-sky-600 dark:text-sky-400">100%</div>
               <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Satisfaction Rate</div>
             </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <motion.div
              className="animate-bounce"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-6 h-10 border-2 border-sky-500 rounded-full flex justify-center cursor-pointer hover:border-sky-400 transition-colors">
                <motion.div 
                  className="w-1 h-3 bg-sky-500 rounded-full mt-2"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent dark:from-dark-900/80 pointer-events-none" />
    </section>
  )
} 