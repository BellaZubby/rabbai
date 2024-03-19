"use client"
import React from 'react'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/16/solid'
type Props = {}

const Rating = (props: Props) => {

    const [rating, setRating] = useState(0);
    const [rateColor, setColor] = useState(null);
      return (
    <>
        <div className='flex'>
            {[...Array(5)].map((star, index) => {
                const currentRate = index + 1
                return (
                        <StarIcon key={index} className={currentRate <= (rateColor || rating ) ? "text-yellow-500" : "text-[#313130]"}  onClick={() => setRating(currentRate)} style={{width: '20px'}}/>
                )
            })}
        </div>   
    </>
  )
}

export default Rating