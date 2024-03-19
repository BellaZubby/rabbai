"use client"
import { StaticImageData } from 'next/image'
import React from 'react'
import  Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
    image: StaticImageData;
    title: string;
    description: string
}

const Featured = ({image, title, description}: Props) => {
  return (
    <div>
        <div className='mt-6'>
            <motion.div
            className='w-[95%] mx-auto'
                whileHover={{
                    scale: 1.1,
                    origin: 0,
                    transition: {
                        duration: 0.3,
                    }
                }}
                
            >
                <Image src={image} alt='logo'></Image>
            </motion.div>
            <div className='mt-5'>
                <h1 className='font-bold mb-3'>{title}</h1>
                <p>{description}</p>
                <button 
                    className='text-[#07CA9E] border-[#07CA9E] border-[1.5px] px-5 py-1 rounded-md mt-3'>
                    Explore
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured