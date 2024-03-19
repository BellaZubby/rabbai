"use Client"
import React from 'react'
import { StaticImageData } from 'next/image'
import  Image  from 'next/image'

type Props = {
    image: StaticImageData;
    title: string;
    subtitle: string;
    subjects: string;
    descriptionTitle: string;
    description: string;
    btnDescription: string;
}

const Feeds = ({image, title, subtitle, subjects, descriptionTitle, description, btnDescription}: Props) => {
  return (
    <div>
        <div className='flex gap-5 bg-[#FFF] rounded-lg py-5 px-4 w-[97%] h-[300px]'>
            {/* logo */}
            <div className='border-[1.5px] border-[#04654F] bg-[#F4F9F8] relative rounded-md basis-[30%]'>
                <Image src={image} alt='jamb-logo' className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'></Image>
            </div>
            {/* writings */}
            <div className='basis-[60%]'>
                <h1 className='text-[#04654F] font-bold text-3xl mb-3'>{title}</h1>
                <p className='text-[#313130] font-medium text-xl mb-1'>{subtitle}</p>
                <p className='text-[#313130] text-[14.778px] mb-3'>{subjects}</p>
                <p className='text-[#313130] font-medium text-[14.778px] mb-1'>{descriptionTitle}</p>
                <p className='text-[#313130] text-[12.007px] mb-2'>{description}</p>
                <button className='bg-[#0086FF] text-[#FFF] text-center font-medium text-[14.39px] w-full rounded-md py-2'>{btnDescription}</button>
            </div>
           
        </div> 
    </div>
  )
}

export default Feeds