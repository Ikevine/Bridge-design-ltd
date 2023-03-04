import React from 'react'
import Image from 'next/legacy/image'
const Dlarge = () => {
  return (
    <div className='p-2 border border-orange-400 w-80 flex flex-col space-y-2 rounded-md'>
       <div className="relative h-96 w-76">
           <Image src="/tiger.jpg" alt='product image' layout='fill' objectFit='cover' className='rounded-md'/>
       </div>
       <div className="">
           <p className='text-sm text-slate-600'>Bride design rwanda</p>
           <h4 className='font-semibold text-md'>Crown Bride</h4>
       </div>
   </div>
  )
}

export default Dlarge