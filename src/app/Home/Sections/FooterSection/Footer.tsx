import React from 'react'
import image1 from '@/app/assets/whatsapp.svg'
import image2 from '@/app/assets/instagram.svg'
import image3 from '@/app/assets/telegram.svg'
import Link from 'next/link'
import Image from 'next/image'


type Props = {}

const Footer = (props: Props) => {
  return (
    <section className='mt-12 w-full'>
        <div className='flex items-center justify-center gap-12'>
            <div className='flex items-center gap-5'>
                <Link href="#"><Image src={image1} alt='whatsapp'></Image></Link>
                <Link href="#"><Image src={image2} alt='whatsapp'></Image></Link>
                <Link href="#"><Image src={image3} alt='whatsapp'></Image></Link>
            </div>
            <div className='flex items-center gap-5 text-xs text-[#7B7A79]'>
                <Link href='#'>Terms of use</Link>
                <Link href='#'>Policy</Link>
                <Link href='#'>Contact</Link>
            </div>
            <div className='text-[#7B7A79] text-xs'>
                <p>2024 myRabbAi. All rights Reserved.</p>
            </div>
        </div>


    </section>
  )
}

export default Footer