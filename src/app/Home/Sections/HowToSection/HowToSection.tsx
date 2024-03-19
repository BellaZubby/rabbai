"use client"
import React from 'react'
import HowTo from './HowTo'
import { HowToType } from '@/app/shared/types'
import one from '@/app/assets/one.svg'
import two from '@/app/assets/two.svg'
import three from '@/app/assets/three.svg'
import four from '@/app/assets/four.svg'
import five from '@/app/assets/five.svg'
import six from '@/app/assets/six.svg'

const List: Array<HowToType> = [
    {
        image:one,
        title: "Get Started",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum animi eius sequi assumendasit amet consectetur"

    },
    {
        image:two,
        title: "Enroll",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum animi eius sequi assumendasit amet consectetur"

    },
    {
        image:three,
        title: "Learning",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum animi eius sequi assumendasit amet consectetur"

    },
    {
        image: four,
        title: "Path",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum animi eius sequi assumendasit amet consectetur"

    },
    {
        image:five,
        title: "Exams",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum animi eius sequi assumendasit amet consectetur"

    },
    {
        image:six,
        title: "Leadership board",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum animi eius sequi assumendasit amet consectetur"

    },
]


const HowToSection = () => {
  return (
    <section className='mt-32'>
            <h1 className='text-[#172041] text-2xl font-bold ml-10'>How to use <span className='text-[#0086FF]'>myRabbAi</span>?</h1>
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-6 gap-10 mt-7'>
                {
                    List.map((item, index) => {
                        return <HowTo key={index} image ={item.image} title={item.title} description={item.description}/>
                    })
                }
            </div>

    </section>
  )
}

export default HowToSection