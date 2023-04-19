import React from 'react'
import { urlFor } from '@/client'
const Testimonial = ({datas:{pname , says ,image}}) => {
  return (
   <div className='flex items-center justify-center space-x-6  md:w-[90%] mx-auto h-72 bg-white px-4 py-4 drop-shadow-xl md:px-0 rounded-lg m-10'>
        <img src={urlFor(image)} alt='person image' layout='fill'  className=' object-cover rounded-full md:h-24 md:w-24 h-24 w-24'/>
      <div className="w-[70%]  md:text-center space-y-4">
        <p className='text-sm md:text-lg'>{says}</p>
        <h1 className='text-lg font-semibold text-center'>{pname}</h1>
      </div>
    </div>  
  )
}

export default Testimonial