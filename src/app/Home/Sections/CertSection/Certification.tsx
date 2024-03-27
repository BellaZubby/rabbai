"use client"
import React from 'react'
import Featured from './Featured'
import { FeaturedType } from '@/app/shared/types'
import image1 from '@/app/assets/jamb.png'
import image2 from '@/app/assets/waec.png'
import image3 from '@/app/assets/neco.png'



type Props = {}
const Features: Array<FeaturedType> = [
    {
        image: image1,
        title: "JAMB",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum animi eius sequi assumendasit amet consectetur"
    },
    {
        image: image2,
        title: "WAEC",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum animi eius sequi assumendasit amet consectetur"
    },
    {
        image: image3,
        title: "NECO",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum animi eius sequi assumendasit amet consectetur"
    },
]

const Certification = (props: Props) => {

  return (
    <section className='w-full mt-12'>
        <div className='w-[95%] mx-auto'>
            <h1 className=' mx-0 md:mx-24 text-[#313130] font-bold text-2xl'>Featured Certifications</h1>
             <div className='grid md:grid-cols-3 gap-4 mt-4 md:mt-9 bg-[#FFF] px-6 rounded-lg pb-6 hover:rounded-lg'>
                {
                    Features.map((feature, i) => {
                        return <Featured key={i} image={feature.image} title={feature.title} description={feature.description} />
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Certification