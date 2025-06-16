'use client'

import { motion } from 'framer-motion'
import { Award, Users, Clock, ThumbsUp } from 'lucide-react'

const stats = [
  {
    icon: Users,
    number: '500+',
    label: 'Happy Clients',
    description: 'Satisfied homeowners who trust our expertise'
  },
  {
    icon: Award,
    number: '15+',
    label: 'Years Experience',
    description: 'Delivering quality home renovations'
  },
  {
    icon: Clock,
    number: '1000+',
    label: 'Projects Completed',
    description: 'Successful transformations delivered on time'
  },
  {
    icon: ThumbsUp,
    number: '98%',
    label: 'Client Satisfaction',
    description: 'Exceptional service and quality guaranteed'
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Why Choose DW Home Solutions?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We're passionate about transforming homes into beautiful, functional spaces that reflect your unique style and meet your family's needs.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our team of experienced professionals combines traditional craftsmanship with modern techniques to deliver exceptional results that stand the test of time.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-primary-600 rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">Licensed and fully insured professionals</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-primary-600 rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">Premium materials and modern techniques</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-primary-600 rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">Transparent pricing with no hidden costs</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-primary-600 rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">Comprehensive warranty on all work completed</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.description}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">
            Our Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Free in-home consultation to understand your vision and requirements' },
              { step: '02', title: 'Design', description: 'Custom design proposal with 3D visualizations and material selections' },
              { step: '03', title: 'Construction', description: 'Expert installation with minimal disruption to your daily routine' },
              { step: '04', title: 'Completion', description: 'Final walkthrough and warranty documentation for your peace of mind' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {process.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 