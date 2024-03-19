"use client"
import React from 'react'

type Props = {}

const Update = (props: Props) => {
  return (
    <section className='pt-3 w-full pb-72'>
        <div className='flex flex-col items-center justify-center gap-4'>
            <h3 className='text-[#313130] font-bold text-2xl'>To get the Latest Update</h3>
            <p className='text-[#313130] text-xl'>Join our Email List</p>
            <div className='w-[50%] mx-auto relative'>
                <input type='email' placeholder='Enter your Email' className='border bg-transparent w-full border-[rgba(102,102,102,0.35)] border-1 py-2 rounded-lg placeholder:text-[#7B7A79] placeholder:pl-5'/>
                <button type='submit' className='bg-[#0086FF] absolute right-0 h-full w-[12%] text-[#FFF] font-bold rounded-tr-lg rounded-br-lg'>Join</button>
            </div>
        </div>

    </section>
  )
}

export default Update