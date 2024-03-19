"use client"
import React from 'react'
import { StaticImageData } from 'next/image'
import  Image  from 'next/image'

type Props = {
    image: StaticImageData;
    title: string;
    description: string
}

const HowTo = ({image, title, description}: Props) => {
  return (
    <div>
        <Image src={image} alt='image' className='mb-3'></Image>
        <h4 className='text-[#172041] mb-3 text-lg font-bold'>{title}</h4>
        <p className='text-justify text-[#7B7A79] text-[15px]'>{description}</p>
    </div>
  )
}

export default HowTo