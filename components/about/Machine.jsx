import React from 'react'
import { urlFor } from '@/client'
const Machine = ({data:{name,left , middle , right}}) => {
  return (
   <div className="">
      <h1 className='capitalize font-semibold text-xl text-orange-400 text-center my-4'>{name}</h1>
      <div className="max-w-4xl flex mx-auto space-x-4 m-10 justify-center items-center">
         <div className=" relative ">
            <img src={urlFor(left)} alt='machine available' layout='fill'  className='object-cover rounded-lg w-56 h-56 flex-auto'/>
         </div>
         <div className=" relative">
            <img src={urlFor(middle)} alt='machine available' layout='fill'  className='object-cover rounded-sm w-72 h-72 flex-auto drop-shadow-2xl shadow-md shadow-black'/>
         </div>
         <div className=" relative ">
            <img src={urlFor(right)} alt='machine available' layout='fill'  className='object-cover rounded-lg w-56 h-56 flex-auto'/>
         </div>
      </div>
   </div> 
  )
}

export default Machine