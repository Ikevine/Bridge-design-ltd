import React from 'react'
import Image from 'next/legacy/image'
const Ghead = () => {
  return (
    <div className='flex  container p-4 px-16 mx-auto space-x-6 justify-center'>
        <div className="w-[50%] flex flex-col space-y-4 ">
            <h1 className='font-semibold text-6xl tracking-wide'>We are the team of  expert who know how to work and find the intensive client in all points</h1>
            <p className='text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse nobis placeat incidunt vel delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quis!</p>
            <button className='px-16 py-4 text-white bg-orange-400 w-fit rounded-md ease-in duration-500 btn_hover text-[1rem]'>Contact us</button>
        </div>
        <div className="relative  w-[45%]">
           <Image src="/tiger.jpg" alt='about hero image' layout='fill' objectFit='cover' className='rounded-xl'/>    
        </div>  
    </div>
  )
}

export default Ghead