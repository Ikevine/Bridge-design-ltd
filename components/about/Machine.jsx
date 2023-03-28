import React from 'react'
import { urlFor } from '@/client'
const Machine = ({data:{name,left , middle , right}}) => {
  return (
   <div className="">
      <h1 className='capitalize font-semibold text-xl text-orange-400 text-center my-4'>{name}</h1>
      <div className="flex md:flex-row flex-col container mx-auto space-y-4 md:space-x-4 m-10 justify-center items-center px-10">
         
            <img src={urlFor(left)} alt='machine available' layout='fill'  className='object-cover rounded-lg md:w-[26%] md:h-64 w-96 flex-auto'/>
            <img src={urlFor(middle)} alt='machine available' layout='fill'  className='object-cover rounded-sm md:w-[36%] md:h-96 w-96 flex-auto drop-shadow-2xl shadow-md shadow-black'/>
            <img src={urlFor(right)} alt='machine available' layout='fill'  className='object-cover rounded-lg md:w-[26%] md:h-64 w-96 flex-auto'/>
      </div>
   </div> 
  )
}

export default Machine