"use client"
import React from 'react'
import grid from '@/app/assets/grid.png'
import Image from 'next/image'

type Props = {}

const Grid = (props: Props) => {
  return (
    <section className='mt-32 w-full pb-72 pt-3'>
        <div className='flex flex-col items-center justify-center'>
            <div className='relative'>
              <Image src={grid} alt='gridImage' className='rounded-lg'></Image>
              <div className='bg-[#FAF9F8] w-[102%] h-[12px] absolute top-[50%] -translate-y-[50%] left-[-3.5px]'></div>
              <div className='bg-[#FAF9F8] w-[12px] h-[49.1%] absolute left-[45%] -translate-x-[50%] top-0'></div>
              <div  className='bg-[#FAF9F8] w-[12px] h-[49.1%] absolute right-[45%] -translate-x-[50%] bottom-0' ></div>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='text-[43px] text-[#313130] font-bold mt-4'>Get Ready to Soar?</h3>
              <p className='text-[28px] text-[#313130]mt-2'>Pass your Degree Exams at Ease</p>
              <button className='bg-[#0086FF] text-[#FFF] px-40 rounded-md py-2 font-medium mt-4'>Start Now</button>
            </div>
        </div>

    </section>
  )
}

export default Grid