"use client"
import React from 'react'
import image1 from '@/app/assets/firstSlide.png'
import image2 from '@/app/assets/secondSlide.png'
import image3 from '@/app/assets/thirdSlide.png'
import { HeroSlideType } from '@/app/shared/types'
import Hero from './Hero'
import Slider from 'react-slick'
import './prev-next.css'
import './slick.css'
import { onClickType } from '@/app/shared/types'
import Image from 'next/image'
import next from '@/app/assets/next.svg'
import prev from '@/app/assets/prev.svg'

const data: Array<HeroSlideType> = [
    {
        image: image1,
    },
    {
        image: image2,
    },
    {
        image: image3,
    },
]

// leftarrow
const PrevArrow: React.FC<onClickType> = ({ onClick }) => {
    return (
        <div
            className="slick-arrow slick-Prev prevarrow"
            onClick={onClick}>
                <Image src={prev} alt='prev-btn'></Image>
        </div>);
};

//  for nextArrow
const NextArrow: React.FC<onClickType> = ({ onClick }) => {
    return (<div
        className="slick-arrow slick-Next nextarrow"
        onClick={onClick}>
            <Image src={next} alt='next-btn'></Image>
        </div>);
};


const HeroMain = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    };


  return (
    <>
    <div className=' bg-gradient-btn w-[90%] mx-auto h-[520px] relative top-12 rounded-lg left-2'>

        <Slider {...settings}>
            {
                data.map((item, i) => {
                    return <Hero key={i} image={item.image}/>
                    
                   
                })
            }
        
        </Slider>
    </div>
    
    </>
  )
}

export default HeroMain