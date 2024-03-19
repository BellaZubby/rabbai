"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    image: StaticImageData;
}

const SponsorsList = ({image}: Props) => {
  return (
    <div>
        <Image src={image} alt='sponsor' className='w-[120px] h-[120px] object-contain'></Image>
    </div>
  )
}

export default SponsorsList