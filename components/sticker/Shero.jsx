// import Swiper core and required modules
import React from 'react'
import { urlFor } from '@/client';
const Shero =({data:{header , image , descr}}) => {
  return (
    <div className='items-center flex flex-col space-y-4 md:space-y-0 md:flex-row p-4 px-4 mx-auto md:space-x-12 justify-center mt-24 mb-8 md:max-w-[80%]'>
        <div className="md:w-[50%]  flex flex-col space-y-4 ">
            <h1 className='font-bold text-2xl md:text-6xl text-center tracking-wide'>{header}</h1>
            <p className='text-slate-700 font-semibold mt-2 '>{descr}</p>
            <button className='px-16 py-2 md:py-4  text-white bg-orange-400 w-fit rounded-md ease-in duration-500 btn_hover text-[1rem]'>Contact us</button>
        </div>
        <img src={urlFor(image)} alt='about hero image' layout='fill'  className='rounded-xl object-cover w-full h-80 md:w-[45%] md:h-[80%]'/> 
    </div>
 );
};

export default Shero;