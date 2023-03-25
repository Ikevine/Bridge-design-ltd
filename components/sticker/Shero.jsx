// import Swiper core and required modules
import React from 'react'

const Shero =() => {
  return (
    <div className='flex  container p-4 px-16 mx-auto space-x-6 justify-center mt-24'>
    <div className="w-[50%] flex flex-col space-y-4 ">
        <h1 className='font-semibold text-6xl tracking-wide'>Hellow everyone in this room</h1>
        <p className='text-slate-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum voluptas eum eligendi libero! Odio pariatur accusamus saepe iusto culpa ex.</p>
        <button className='px-16 py-4 text-white bg-orange-400 w-fit rounded-md ease-in duration-500 btn_hover text-[1rem]'>Contact us</button>
    </div>
    <div className='relative w-[45%] h-[80%]'>
    <img src="tiger.jpg" alt='about hero image' layout='fill'  className='rounded-xl object-cover w-full h-[40rem]'/>
    </div>   
  </div>
 );
};

export default Shero;