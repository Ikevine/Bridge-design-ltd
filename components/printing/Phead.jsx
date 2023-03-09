import React from 'react'
import { urlFor } from '@/client'
const Phead = ({data:{header ,descr ,image}}) => {
  return (
    <div className='flex  container p-4 px-16 mx-auto space-x-6 justify-center'>
        <div className="w-[50%] flex flex-col space-y-4 ">
            <h1 className='font-semibold text-6xl tracking-wide'>{header}</h1>
            <p className='text-slate-700'>{descr}</p>
            <button className='px-16 py-4 text-white bg-orange-400 w-fit rounded-md ease-in duration-500 btn_hover text-[1rem]'>Contact us</button>
        </div>
        <div className='relative w-[45%] h-[80%]'>
        <img src={urlFor(image)} alt='about hero image' layout='fill'  className='rounded-xl object-cover w-full h-[40rem]'/>
        </div>   
    </div>
  )
}

export default Phead