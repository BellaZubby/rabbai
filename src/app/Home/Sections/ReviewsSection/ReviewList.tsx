"use client"

import React from 'react'
import Image, { StaticImageData } from 'next/image'


type Props = {
    image: StaticImageData;
    name: string;
    date: string;
    rating: JSX.Element;
    description: string
}

const ReviewList = ({image, name, date, rating, description}: Props) => {
  return (
    <>
      <div className='flex items-center gap-3 md:gap-5 ml-3 md:ml-9 mt-6'>
        <div>
          <Image src={image} alt='reviewer' className='rounded-full w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover'></Image>
        </div>
        <div>
          <h4 className='text-[#313130] font-bold text-sm md:text-lg'>{name}</h4>
          <h5 className='text-[#313130] text-sm md:text-lg'>{date}</h5>
        </div>
      </div>  
      <div className='mt-3 ml-3 md:ml-9'>
        <h5 className='mb-3'>{rating}</h5>
        <p className='md:pr-5 text-xs sm:text-[15px] md:text-[18px] leading-normal'>{description}</p>
      </div>
    </>
  )
}

export default ReviewList