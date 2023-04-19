import React from 'react'
import { urlFor } from '@/client';
import {HiArrowRight} from 'react-icons/hi'
import Link from 'next/link';
const Dproduct = ({data:{image , dname , descr}}) => {
  return (
   <div className='p-2 border border-orange-400 m-2 flex flex-col space-y-2 rounded-md'>
      <img src={urlFor(image)} alt='product image' layout='fill'  className='rounded-md object-cover w-full h-[80%] md:h-[60%] file:overflow-hidden'/>
      <div className="text-slate-600 space-y-3 flex flex-col ">
         <h4 className='font-semibold text-md text-slate-800'>{dname}</h4>
         <p className='text-sm '>{descr}</p>
         <div className="p-4 self-center flex space-x-2 justify-center items-center">
         <span>Contact me</span> 
         <Link href='/contact'>
           <span className='text-orange-400'><HiArrowRight/></span>
         </Link>
         </div>
      </div>
   </div>
  )
}

export default Dproduct