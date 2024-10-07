"use client"
import { StaticImageData } from 'next/image'
import React from 'react'
import  Image from 'next/image'
import './featured.css'

type Props = {
    image: StaticImageData
    title: string;
    description: string
}

const Featured = ({image, title, description}: Props) => {
  return (
    <>
        <div 
            className='mt-6 featuredMain'
        >
            <div className='image-container'><Image src={image} alt='logo' className='zoom-img'></Image></div>
            <div className='mt-5'>
                <h1 className='font-bold mb-3'>{title}</h1>
                <p>{description}</p>
                <button 
                    className='text-[#07CA9E] border-[#07CA9E] border-[1.5px] px-5 py-1 rounded-md mt-3'>
                    Explore
                </button>
            </div>
        </div>
    </>
  )
}

export default Featured