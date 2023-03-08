import React from 'react'
import { urlFor } from '@/client'
const Brand = ({data:{single_brand}}) => {
  return (
    <div className='relative m-10 h-28 w-60 '>
       <img src={urlFor(single_brand)} alt='brand work with us' layout='fill' className='absolute object-cover rounded-md'/>
    </div>
  )
}

export default Brand