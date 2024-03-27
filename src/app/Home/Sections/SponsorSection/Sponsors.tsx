"use client"

import React from 'react'
import { SponsorsType } from '@/app/shared/types'
import image1 from '@/app/assets/cocacola.png'
import image2 from '@/app/assets/hp.png'
import image3 from '@/app/assets/google.png'
import image4 from '@/app/assets/paypal.png'
import SponsorsList from './SponsorsList'

type Props = {}

const sponsors: Array<SponsorsType> = [
    {
        image: image1
    },
    {
        image: image2
    },
    {
        image: image3
    },
    {
        image: image4
    },
]

const Sponsors = (props: Props) => {
  return (
    <section className='mt-12 w-full'>
        <h1 className='text-center text-[#313130] font-bold text-[32px] mb-16'>Sponsors</h1>
        <div className='w-full h-[1.5px] bg-[#CDCBC9]'></div>
        <div className='flex items-center justify-center gap-9 py-9'>
            {
                sponsors.map((sponsor, index) => {
                    return <SponsorsList key={index} image={sponsor.image}/>
                })
            }
        </div>
        <div className='w-full h-[1.5px] bg-[#CDCBC9]'></div>
    </section>
  )
}

export default Sponsors