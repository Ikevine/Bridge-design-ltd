import React from 'react'
import Image from 'next/legacy/image'
const Brand = () => {
  return (
    <div className='relative m-10 h-28 w-60 '>
       <Image src='/tiger.jpg' alt='brand work with us' layout='fill' objectFit='cover' className='rounded-md'/>
    </div>
  )
}

export default Brand