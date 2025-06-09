import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='work' className='w-full px-[12%] py-10 scroll-mt-20'
      >

        <motion.h2 
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.5}}
          className='text-center text-5xl font-Ovo'
          >
            My Portfolio
        </motion.h2>


        <motion.p 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.7}}
          className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
          >
          Welcome to my portfolio! Feel free to browse through the projects I've worked on.
        </motion.p>

        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            className={`flex flex-col md:flex-row items-center gap-10 my-16 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <motion.div 
              className='w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              >
              <img
                src={project.bgImage}
                alt={project.title}
                width={800}
                height={500}
                className='w-full h-auto object-cover rounded-xl'
              />
            </motion.div>

            {/* Text Content */}
            <div className={`w-full md:w-1/2 font-Ovo text-left ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
              <h3 className='text-2xl font-semibold mb-4 text-gray-800 dark:text-white'>{project.title}</h3>
              <p className='mb-4 text-gray-600 dark:text-white/80'>{project.description}</p>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline'
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}

    </motion.div>
  )
}

export default Work