"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    image: StaticImageData
}


const Hero = ({image}: Props) => {

  return (
    <div>
        <div>
            <div className='flex items-center justify-center flex-row-reverse'>
              <div className='basis-1/2'>
                <Image src={image} alt={'photo'} className=''></Image>
              </div>
              <div className='basis-[30%] text-[#313130] mt-14'>
                 <div className='w-full'>
                    <p className='text-[45px]'>Redefining</p>
                    <p className='text-[45px] font-bold'>Success <span className='font-normal'>in</span></p>
                    <p className='text-[45px] font-bold'>Every Click!</p>
                 </div>
                 <div>
                  <p className='w-full text-justify text-[12px] mr-24px'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse beatae atque porro eligendi vero 
                    eaque omnis in ut ad, odio dolores! Atque dolorum sed tempora incidunt provident eveniet ipsum, aliquam quos amet cumque assumenda perspiciatis pariatur nostrum earum ad itaque.</p>
                 </div>
                 <motion.button
                    className='bg-gradient-btn mt-6 w-full py-2 rounded-lg text-[#FFF] font-medium'
                    whileHover={{
                      scale: 1.1,
                      origin: 0,
                      transition: {
                          duration: 0.4,
                      }
                  }}
                 >
                    Get started
                 </motion.button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero