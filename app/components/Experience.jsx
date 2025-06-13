import { workExperience } from '@/assets/assets'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const { role, company, duration, details, projects } = workExperience[activeIndex]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='experience' 
      className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center mb-14 text-5xl font-Ovo'>
        Where I've Worked
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='flex flex-col md:flex-row gap-10 mt-10 mb-20'>

        {/* Sidebar */}
        <div className='flex md:flex-col gap-4 md:w-1/4 w-full md:border-r border-gray-300 dark:border-white'>
          {workExperience.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-left px-4 py-2 rounded transition-colors duration-300 ${
                activeIndex === index
                  ? 'bg-lightHover dark:bg-darkHover/50 font-bold'
                  : 'hover:bg-gray-100 dark:hover:bg-white/10'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className='flex-1 border max-w-3xl border-gray-400 rounded-lg px-8 py-12 dark:border-white'>
          <h3 className='text-2xl font-bold text-primary mb-1 dark:text-white'>
            {company}
          </h3>
          <h4 className='text-xl font-semibold text-gray-800 dark:text-gray-300 mb-1'>
            {role}
          </h4>
          <p className='text-sm text-gray-800 dark:text-gray-300 mb-4'>
            {duration}
          </p>
          <ul className='list-disc ml-6'>
            {details.map((detail, idx) => (
              <li key={idx} className='mt-2'>
                {detail}
              </li>
            ))}
          </ul>
          <ul>
            {/* Projects Section */}
            {projects?.length > 0 && (
              <div className='mt-8'>
                <h4 className='text-lg font-semibold mb-4 text-gray-800 dark:text-white'>
                  Key Projects
                </h4>

                <a 
                  href="#work" 
                  className='block cursur-pointer'
                  >
                  <ul className='space-y-3'>
                  {projects.map((project, index) => (
                    <li
                      key={index}
                      className='border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-zinc-800/30 shadow-sm'
                    >
                      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                        <span className='text-md font-medium text-gray-900 dark:text-white'>
                          {project.name}
                        </span>
                        <span className='text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0 italic'>
                          {project.techStack}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                </a>

                
              </div>
            )}
          </ul>
        </div>
        
      </motion.div>
    </motion.div>
  )
}

export default Experience
