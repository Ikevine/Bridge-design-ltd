// import Swiper core and required modules
import React from 'react';
import { urlFor } from '@/client';

const Dhero =({dhome:{intro , descr , image}}) => {
  return (
    <div className='items-center flex flex-col space-y-12 md:space-y-0 md:flex-row  p-4 px-6 mx-auto md:space-x-12 justify-center md:max-w-[80%] mt-24 mb-8 md:h-screen'>
        <div className="md:w-[50%]  flex flex-col space-y-4 ">
            <h1 className='text-slate-800 font-semibold md:text-4xl text-3xl tracking-wide md:text-center capitalize'>{intro}</h1>
            <p className='text-slate-700 font-semibold mt-2 '>{descr}</p>
            <Link href="/contact">
              <button className='px-16 py-2 md:py-4  text-white bg-orange-400 w-fit rounded-md transition ease-in-out delay-150 duration-300 btn_hover text-[1rem]'>Contact us</button>
            </Link>
        </div>
        <div className=" w-[90%]  aspect-square rounded-lg  relative flex items-center justify-center md:w-[45%] md:h-[80%] bg-gradient-to-r from-orange-400 to-orange-200 mt-4 transition ease-in-out delay-150 duration-300">
          <img src={urlFor(image)} alt='about hero image' layout='fill' className='absolute w-full h-full rounded-lg rotate-[10deg] hover:rotate-0'/> 
        </div>
    </div>
 );
};

export default Dhero;