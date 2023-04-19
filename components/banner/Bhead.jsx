import React from 'react'
import { urlFor } from '@/client'
import Link from 'next/link'
const Bhead = ({hbanner:{header , descr , image}}) => {
  
  return (
    <div className='items-center flex flex-col space-y-4 md:space-y-0 md:flex-row p-4 px-4 mx-auto md:space-x-12 justify-center mt-16 mb-8 md:max-w-[80%]'>
        <div className="md:w-[50%]  flex flex-col space-y-4 ">
            <h1 className='text-slate-800  font-semibold md:text-4xl text-3xl tracking-wide md:text-center capitalize'>{header}</h1>
            <p className='text-slate-700 font-semibold mt-2 '>{descr}</p>
            <Link href="/contact">
              <button className='px-16 py-2 md:py-4  text-white bg-orange-400 w-fit rounded-md transition ease-in-out delay-150 duration-300 btn_hover text-[1rem]'>Contact us</button>
            </Link>
        </div>
        <div className="bg-orange-400 p-4 rounded-t-[50%] w-full aspect-square relative flex items-center justify-center border-4 border-orange-400  md:w-[45%] md:h-[30%]">
          <img src={urlFor(image)} alt='about hero image' layout='fill' className='absolute w-full h-full rounded-t-[50%]'/> 
        </div>
        
    </div>
  )
}

export default Bhead