import React from 'react'
import { urlFor } from '@/client'
const Plarge = ({data:{image , dname}}) => {
  return (
    <div className='p-2 border border-orange-400 w-80 flex flex-col space-y-2 rounded-md'>
       <div className="relative">
           <img src={urlFor(image)} alt='product image' layout='fill'  className='h-96 w-76 object-cover rounded-md'/>
       </div>
       <div className="">
           <p className='text-sm text-slate-600'>Bride design rwanda</p>
           <h4 className='font-semibold text-md'>{dname}</h4>
       </div>
   </div>
  )
}

export default Plarge