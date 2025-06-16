'use client'

import { motion } from 'framer-motion'
import { Bath, ChefHat, Grid, Wrench, Home, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon: Bath,
    title: 'Bathroom Fitting',
    description: 'Complete bathroom renovations with premium fixtures, modern designs, and expert installation.',
    features: ['Custom tile work', 'Premium fixtures', 'Waterproofing', 'Modern designs'],
    color: 'from-sky-400 to-blue-500'
  },
  {
    icon: ChefHat,
    title: 'Kitchen Renovation',
    description: 'Transform your kitchen with contemporary designs, quality appliances, and functional layouts.',
    features: ['Custom cabinets', 'Stone countertops', 'Modern appliances', 'Smart storage'],
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Grid,
    title: 'Tiling Services',
    description: 'Professional tiling for floors, walls, and backsplashes with precision and attention to detail.',
    features: ['Floor tiling', 'Wall tiles', 'Backsplashes', 'Mosaic work'],
    color: 'from-cyan-400 to-blue-600'
  },
  {
    icon: Wrench,
    title: 'Plumbing',
    description: 'Expert plumbing services for installations, repairs, and upgrades throughout your home.',
    features: ['Pipe installation', 'Leak repairs', 'Fixture upgrades', 'Emergency service'],
    color: 'from-sky-500 to-blue-600'
  },
  {
    icon: Home,
    title: 'Home Upgrades',
    description: 'Comprehensive home improvement services to enhance comfort, functionality, and value.',
    features: ['Interior design', 'Lighting upgrades', 'Flooring', 'Paint & finishes'],
    color: 'from-blue-500 to-indigo-500'
  }
]

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to completion, we deliver exceptional home renovation services 
            that exceed expectations and transform your living spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group"
              >
                <div className={`service-card h-full ${
                  hoveredCard === index ? 'scale-105' : ''
                } transition-all duration-300`}>
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:animate-float shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${service.color} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>

                  {/* Hover effect overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Ready to transform your space? Let's discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+1234567890"
              className="bg-white/10 dark:bg-dark-800/30 backdrop-blur-sm border-2 border-sky-400/50 dark:border-sky-400/50 text-gray-900 dark:text-white hover:bg-sky-400 hover:text-white hover:border-sky-400 inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Call Now</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 