"use client"
import React from 'react'
import ReviewList from './ReviewList'
import { ReviewType } from '@/app/shared/types'
import reviewer from '@/app/assets/reviewer.png'
import reviewer2 from '@/app/assets/reviewer2.jpg'
import reviewer3 from '@/app/assets/reviewer3.jpg'
import Rating from './Rating'
import { ChevronUpIcon } from '@heroicons/react/16/solid'
import Slider from 'react-slick'
import './next.css'
import { onClickType } from '@/app/shared/types'

type Props = {}

//  for nextArrow
const NextArrow: React.FC<onClickType> = ({ onClick }) => {
    return (<div
        className="slick-arrow slick-up nextarrow"
        onClick={onClick}>
            <ChevronUpIcon className='w-6 h-6 relative left-[50%] -translate-x-[50%] bottom:[205px] xxs:bottom-[180px] xs:bottom-[160px] sm:bottom-[150px] md:bottom-40  text-[#CDCBC9]'/>
        </div>);
};

const Reviewers: Array<ReviewType> = [
    {
        image: reviewer,
        name: 'Sandra Ugwu',
        date: '12/02/2024',
        rating: <Rating/>,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi tempora vero commodi beatae odit quibusdam deleniti sunt dolor quam qui. adipisicing elit. Excepturi tempora vero commodi beatae odit quibusdam deleniti sunt dolor quam qui.'

    },
    {
        image: reviewer2,
        name: 'Mildred Hassan',
        date: '02/03/2024',
        rating: <Rating/>,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi tempora vero commodi beatae odit quibusdam deleniti sunt dolor quam qui.  adipisicing elit. Excepturi tempora vero commodi beatae odit quibusdam deleniti sunt dolor quam qui.'
    
    },
    {
        image: reviewer3,
        name: 'Philip Coker',
        date: '13/03/2024',
        rating: <Rating/>,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi tempora vero commodi beatae odit quibusdam deleniti sunt dolor quam qui.  adipisicing elit. Excepturi tempora vero commodi beatae odit quibusdam deleniti sunt dolor quam qui.'
    },
]

const Reviews = (props: Props) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        // autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    };

  return (
    <section className='mt-12 w-full pb-9'>
            <h1 className='text-[#172041] font-bold text-2xl ml-10 mb-6'>Reviews</h1>
            <div className='relative w-[95%] mx-auto h-[250px]'>
                <div className='bg-[#FFF] w-full h-full absolute bottom-2 rounded-xl shadow-lg'>
                    {/* <ChevronUpIcon className='w-6 h-6 relative left-[50%] -translate-x-[50%] md:top-5 top-1 text-[#CDCBC9]'/> */}
                  <Slider {...settings}>  
                    {
                        Reviewers.map((item, index) => {
                            return <ReviewList 
                                        key ={index} 
                                        image ={item.image} 
                                        name={item.name}
                                        date={item.date}
                                        rating={item.rating}
                                        description={item.description}
                                        />
                        })
                    }
                </Slider>
                </div>
                <div className='bg-[#ebebe9] w-[85%] h-full mx-auto rounded-xl'></div>
            </div>
        
        
    </section>
  )
}

export default Reviews