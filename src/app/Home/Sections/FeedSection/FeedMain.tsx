"use client"

import React from 'react'
import Feeds from './Feeds'
import Slider from 'react-slick'
import { FeedsType } from '@/app/shared/types'
import image from '@/app/assets/feeds.png';
import { onClickType } from '@/app/shared/types'
import next from '@/app/assets/next.svg'
import prev from '@/app/assets/prev.svg'
import Image from 'next/image'
import './Feed.css'


const Feed: Array<FeedsType> = [
    {
        image: image,
        title: "JAMB",
        subtitle: "For Engineering Courses",
        subjects: "Mathematics | English | Physics | Chemistry",
        descriptionTitle: "Description",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum animi eius sequi assumendasit amet consectetur",
        btnDescription: "Enroll | ₦2000"
    
    },
    {
        image: image,
        title: "JAMB",
        subtitle: "For Engineering Courses",
        subjects: "Mathematics | English | Physics | Chemistry",
        descriptionTitle: "Description",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum animi eius sequi assumendasit amet consectetur",
        btnDescription: "Enroll | ₦2000"
    
    },
    {
        image: image,
        title: "JAMB",
        subtitle: "For Engineering Courses",
        subjects: "Mathematics | English | Physics | Chemistry",
        descriptionTitle: "Description",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum animi eius sequi assumendasit amet consectetur",
        btnDescription: "Enroll | ₦2000"
    
    },
    {
        image: image,
        title: "JAMB",
        subtitle: "For Engineering Courses",
        subjects: "Mathematics | English | Physics | Chemistry",
        descriptionTitle: "Description",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum animi eius sequi assumendasit amet consectetur",
        btnDescription: "Enroll | ₦2000"
    
    },
]
// leftarrow
const PrevArrow: React.FC<onClickType> = ({ onClick }) => {
    return (
        <div
            className="slick-arrow slick-back"
            onClick={onClick}>
                <Image src={prev} alt='prev'></Image>
        </div>);
};

//  for nextArrow
const NextArrow: React.FC<onClickType> = ({ onClick }) => {
    return (<div
        className="slick-arrow slick-front"
        onClick={onClick}> 
            <Image src={next} alt='next'></Image>
        </div>);
};

const FeedMain = () => {

    const settings = {
        className: "center",
        centerMode: true,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        infinite: true,
        centerPadding: "90px",
        slidesToShow: 2,
        speed: 500,
        dotsClass: "slick-Dots slick-thumb",
        dots: true,
        // for append dots
        appendDots: (dots: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined) => (
            <div>
              <ul style={{color: "red"}}> {dots} </ul>
            </div>
          ),
      };

  return (
    <section className='mt-12 w-full'>
        <div>
            <h1 className='text-2xl text-[#172041] text-center font-medium'>Suggested Feed</h1>
            <div className='w-[100%] mt-6'>
            <Slider {...settings} className='relative'>
                {
                    Feed.map((feed, index) => {
                        return <Feeds 
                                key={index}
                                image={feed.image} 
                                title={feed.title} 
                                subtitle={feed.subtitle} 
                                subjects={feed.subjects} 
                                descriptionTitle= {feed.descriptionTitle}
                                description ={feed.description}
                                btnDescription={feed.btnDescription}
                                />
                    })
                }
            </Slider>
            </div>
        </div>

    </section>
  )
}

export default FeedMain