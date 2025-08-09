import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            {/* <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-36 mx-auto mb-2'/> */}
            <a
                href="#top"
                className="text-neutral-800 dark:text-white font-bold text-3xl"
                >
                Jay Nico
            </a>

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail icon' className='w-6'/>
                nicojayolano@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] pt-12 py-6'>
            <p>@ 2025 Jay Nico Olaño. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/jaynico-dev/">Github</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/jaynicoolano/">LinkedIn</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Footer