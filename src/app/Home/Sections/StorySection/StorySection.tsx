"use client"
import React from 'react'

type Props = {}

const StorySection = (props: Props) => {
  return (
    <section className='mt-40 w-full'>
        <div className='w-[90%] mx-auto md:flex items-center gap-9'>
            {/* left */}
            <div className='basis-[50%] relative'>
               <div  className='w-full h-[322px] bg-[#C4C4C4] absolute left-3 bottom-2 rounded-lg shadow-sm'></div>
               <div className='w-full h-[322px] border border-gray-500 rounded-lg'></div>
            </div>

            {/* right */}
            <div className='basis-[50%] md:px-9 mt-12 md:mt-0'>
                <h1 className='text-[#0086FF] font-bold text-3xl mb-6'>myRabbAi Story</h1>
                <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Voluptatum animi eius sequi assumendasit amet consectetur adipisicing elit. 
                    maxime aperiam consequatur delectus ipsam architecto magni. Voluptatum animi eius sequi 
                    assumendasit amet consectetur adipisicing elit.
                </p>
            </div>
        </div>
    </section>
  )
}

export default StorySection