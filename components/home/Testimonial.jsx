import React from 'react'
import { urlFor } from '@/client'
const Testimonial = ({datas:{pname , says ,image}}) => {
  return (
   <div className='flex items-center justify-center space-x-6 w-[80%] mx-auto h-fit bg-white py-4 drop-shadow-2xl px-4 md:px-0 rounded-xl m-10'>
      <div className="relative md:h-36 md:w-36 h-28 w-28">
        <img src={urlFor(image)} alt='person image' layout='fill'  className='absolute object-cover rounded-full'/>
      </div>
      <div className="w-[70%]  md:text-center space-y-4">
        <p className=''>{says}</p>
        <h1 className='text-lg font-semibold text-center'>{pname}</h1>
      </div>
    </div>  
  )
}

export default Testimonial