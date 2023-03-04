import React from 'react'
import Image from 'next/legacy/image'
const Gprod = () => {
  return (
    <div className='p-2 m-8 border border-orange-400 w-60 flex flex-col space-y-2 rounded-md'>
       <div className="relative h-52 w-56">
          <Image src="/tiger.jpg" alt='product image' layout='fill' objectFit='cover' className='rounded-md'/>
       </div>
       <div className="">
          <p className='text-sm text-slate-600'>Bride design rwanda</p>
          <h4 className='font-semibold text-md'>Crown Bride</h4>
       </div>
    </div>
  )
}

export default Gprod