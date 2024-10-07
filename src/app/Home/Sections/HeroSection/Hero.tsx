"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import image1 from '@/app/assets/firstSlide.png'
import image2 from '@/app/assets/secondSlide.png'
import image3 from '@/app/assets/thirdSlide.png'
import good1 from '@/app/assets/Good Icon 1.svg'
import good2 from '@/app/assets/Good Icon 2.svg'
import good3 from '@/app/assets/Good Icon 3.svg'
import halfYellow from '@/app/assets/yellowHalfFull.svg'
import fullYellow from '@/app/assets/yellowFull.svg'
import halfGradient from '@/app/assets/gradientHalfFull.svg'
import fullGradient from '@/app/assets/gradientEllipseSmall.svg'
import thirdGradient from '@/app/assets/thirdSlideEllipse.svg'
import { onClickType } from '@/app/shared/types'
import next from '@/app/assets/next.svg'
import prev from '@/app/assets/prev.svg'
import Slider from 'react-slick'
import './prev-next.css'
import './slick.css'
import './hero.css'


// leftArrow
const PrevArrow: React.FC<onClickType> = ({ onClick }) => {
  return (
      <div
          className="slick-arrow slick-prev"
          onClick={onClick}>
              <Image src={prev} alt='prev-btn' className=''></Image>
      </div>);
};

//  for nextArrow
const NextArrow: React.FC<onClickType> = ({ onClick }) => {
  return (<div
      className="slick-arrow slick-next"
      onClick={onClick}>
          <Image src={next} alt='next-btn' className=''></Image>
      </div>);
};

const Hero = () => {

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "10px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 2000,

};

  return (
    <>
    
      <Slider {...settings}>
      {/* first slide */}
        <div className='bg-[#d3d3d3] w-[95%] h-[562px] rounded-xl mt-12'>
          <div className='relative'>
            <Image src={image1} alt='firstSlideImage' className='w-[570px] h-auto object-cover absolute right-36 z-[20]'></Image>
            <Image src={halfYellow} alt='halfYellow' className='absolute top-0 right-7'></Image>
            <Image src={fullYellow} alt='fullYellow' className='absolute right-7 top-[300px]'></Image>
            <Image src={good1} alt='good' className='absolute right-[40%] top-[250px] z-[35]'></Image>
            <Image src={good2} alt='good' className='absolute right-[43%] top-[239px]'></Image>
            <Image src={good3} alt='good' className='absolute right-[38%] top-[298px]'></Image>
          </div>
          <div className='w-[60%] mt-28 ml-36 text-[#313130]'>
            <h1 className='text-[50px]'>Redefining</h1>
            <h1 className='text-[50px] font-bold'>Success <span className='font-normal'>in</span> </h1>
            <h1 className='text-[55px] font-bold'>Every Click!</h1>
            <p className='text-justify text-xs w-[42%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur et hic aut, perspiciatis, voluptatem quas voluptatum necessitatibus inventore fugiat voluptatibus cum facilis? Eligendi nesciunt eaque, perspiciatis ipsam quaerat laudantium, 
              ut at cupiditate sint, fugit praesentium corrupti! Ducimus consectetur ipsa eveniet.</p>
            <motion.button 
              className='px-28 py-3 rounded-md text-[#FFF] font-semibold mt-5'
              style={{background: 'linear-gradient(94deg, #42A9F4 22.48%, #3BD6E0 77.53%)'}}
              whileHover={{
                background: "linear-gradient(110deg, #67A1FF 5.2%, #3BD6E0 40.48%, #4285F4 77.53%)",
                transition: {
                    duration: 2.0,
                }
            }}
              >
              Get Started
            </motion.button>

          </div>


      </div> 

      {/* second slide */}
       <div className='bg-gradient-home w-[1360px] h-[562px] rounded-xl mt-12 ml-1'>
          <div className='relative'>
            <Image src={image2} alt='firstSlideImage' className='w-[770px] h-[650px] object-contain absolute right-8 z-[20]'></Image>
            <Image src={halfGradient} alt='halfYellow' className='absolute top-0 right-7'></Image>
            <Image src={fullGradient} alt='fullYellow' className='absolute right-7 top-[320px]'></Image>
            <Image src={good1} alt='good' className='absolute right-[45%] top-[270px] z-[35]'></Image>
            <Image src={good2} alt='good' className='absolute right-[48%] top-[258px]'></Image>
            <Image src={good3} alt='good' className='absolute right-[43%] top-[325px]'></Image>
          </div>
          <div className='w-[60%] mt-28 ml-36 text-[#313130]'>
            <h1 className='text-[50px]'>Redefining</h1>
            <h1 className='text-[50px] font-bold'>Success <span className='font-normal'>in</span> </h1>
            <h1 className='text-[55px] font-bold'>Every Click!</h1>
            <p className='text-justify text-xs w-[42%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur et hic aut, perspiciatis, voluptatem quas voluptatum necessitatibus inventore fugiat voluptatibus cum facilis? Eligendi nesciunt eaque, perspiciatis ipsam quaerat laudantium, 
              ut at cupiditate sint, fugit praesentium corrupti! Ducimus consectetur ipsa eveniet.</p>
            <button 
              className='bg-gradient-btn px-28 py-3 rounded-md text-[#FFF] font-semibold mt-5 hover:bg-gradient-btnHover'
            >
              Get Started
            </button>

          </div>


      </div> 

      {/* third slide */}

      <div className='bg-transparent w-[1360px] h-[562px] rounded-xl mt-12'>
          <div className='relative'>
            <Image src={image3} alt='firstSlideImage' className='w-[890px] h-[600px] object-contain absolute right-8 z-[20]'></Image>
            <Image src={halfGradient} alt='halfYellow' className='absolute top-0 right-[280px]'></Image>
            <Image src={thirdGradient} alt='fullYellow' className='absolute right-7 top-[501px]'></Image>
            <Image src={good1} alt='good' className='absolute left-[67%] top-[380px] z-[35]'></Image>
            <Image src={good2} alt='good' className='absolute left-[72%] top-[355px] w-24 h-24'></Image>
            <Image src={good2} alt='good' className='absolute left-[49%] top-[282px] w-24 h-24 z-[99]'></Image>
            <Image src={good3} alt='good' className='absolute left-[62%] top-[448px] w-20 h-20 z-[99]'></Image>
          </div>
          <div className='w-[60%] mt-28 ml-36 text-[#313130] relative z-[99]'>
            <h1 className='text-[50px]'>Redefining</h1>
            <h1 className='text-[50px] font-bold'>Success <span className='font-normal'>in</span> </h1>
            <h1 className='text-[55px] font-bold'>Every Click!</h1>
            <p className='text-justify text-xs w-[42%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur et hic aut, perspiciatis, voluptatem quas voluptatum necessitatibus inventore fugiat voluptatibus cum facilis? Eligendi nesciunt eaque, perspiciatis ipsam quaerat laudantium, 
              ut at cupiditate sint, fugit praesentium corrupti! Ducimus consectetur ipsa eveniet.</p>
            <motion.button 
              className='third-btn px-28 py-3 rounded-md text-[#FFF] font-semibold mt-5'
             style={{background: 'linear-gradient(94deg, #42A9F4 22.48%, #3BD6E0 77.53%)'}}
              whileHover={{
                background: "linear-gradient(110deg, #67A1FF 5.2%, #3BD6E0 40.48%, #4285F4 77.53%)",
                transition: {
                    duration: 2.0,
                }
            }}
            >
              Get Started
            </motion.button>

          </div>


      </div> 
      
      
      </Slider>      
            
            
           
    </>
  )
}

export default Hero