import React from 'react'
import Image from 'next/legacy/image'
const Machine = () => {
  return (
    <div className="max-w-4xl flex mx-auto space-x-4 m-10 justify-center items-center">
       <div className=" relative w-56 h-56 flex-auto">
          <Image src='/tiger.jpg' alt='machine available' layout='fill' objectFit='cover' className='rounded-lg'/>
       </div>
       <div className=" relative w-72 h-72 flex-auto drop-shadow-2xl shadow-md shadow-black">
          <Image src='/tiger.jpg' alt='machine available' layout='fill' objectFit='cover' className='rounded-sm'/>
       </div>
       <div className=" relative w-56 h-56 flex-auto">
          <Image src='/tiger.jpg' alt='machine available' layout='fill' objectFit='cover' className='rounded-lg'/>
       </div>
    </div>
  )
}

export default Machine