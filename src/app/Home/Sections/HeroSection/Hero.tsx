"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    image: StaticImageData
}


const Hero = ({image}: Props) => {

  return (
    <div>
        <div>
            <div className='flex items-center flex-row-reverse m-12'>
              <div>
              <Image src={image} alt={'photo'} className='w-[700px] h-[400px] object-contain'></Image></div>

              <div><h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, ullam.</h1></div>
            </div>
        </div>
    </div>
  )
}

export default Hero