"use client"
import logo from '@/app/assets/Myrabbai.png'
import searchIcon from "@/app/assets/Search.svg"
import Image from 'next/image';
// import useMediaQuery from '@/app/hooks/useMediaQuery';


export default function Navbar() {
  // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

    return (
      <>
        <div className='w-full fixed z-[40]'>
          <div className='w-[90%] mx-auto bg-[#FFFFFF] shadow-lg flex items-center justify-center gap-7 rounded-md mt-6 p-3'>
            <Image src={logo} alt={"logo"}></Image>
            <div className='flex items-center gap-4 text-[16px] cursor-pointer'>
              <a className='active:font-semibold hover:font-semibold '>Home</a>
              <a className='active:font-semibold hover:font-semibold '>About myRabbai</a>
              <a className='active:font-semibold hover:font-semibold '>My Learning Board</a>
              <a className='active:font-semibold hover:font-semibold '>Contact Us</a>
              <div className='relative flex items-center'>
                <Image src={searchIcon} alt={"searchIcon"} className='absolute ml-4'></Image>
                <input type='text' placeholder='Search' className='p-1 border border-[#525150] rounded-md placeholder:pl-12 placeholder:text-[#525150]'/>
              </div>
              </div>
              <div className='flex items-center gap-1 text-[16px]'>
                <button>Log in</button>
                <button className='bg-[#0086FF] px-12 py-2 rounded-lg text-white font-semibold'>Sign up</button>
              </div>
            </div>
          </div>
        
      </>
    );
  }