import React from 'react'
import Box from './Box'
import Image from 'next/legacy/image'
const Contact = () => {
  return (
    <div className="relative top-0 right-0 bottom-0 left-0 w-screen h-screen ">
         <Image src="/tiger.jpg" alt="slide-image" layout='fill' objectFit='cover'  className='bg-center'/>
      <div className="absolute bg-black/70 top-0 right-0 bottom-0 left-0 flex flex-col justify-center  px-20 ">
      <div className='m-16 flex md:flex-row flex-col space-x-8 justify-center items-center'>
        {/* boxes goes here */}
         <div className="flex space-x-4">
           <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-4">
              <Box/>
              <Box/>
              <Box/>
            </div>
        </div>
        {/* form here */}
        <form action="" className='md:w-[40%] w-[100%] bg-slate-00 flex flex-col space-y-2 p-4 '>
            <div className="flex space-x-2">
               <input type="text" placeholder='Enter your first name' className='w-[50%] h-16 p-2 focus:outline-none rounded border-x-2 border-orange-500'/>
               <input type="text" placeholder='Enter your last name' className='w-[50%] h-16 p-2 focus:outline-none rounded border-x-2 border-orange-500'/>
            </div>
            <input type="text" placeholder='Enter your Email' className='w-fill h-16 p-2 focus:outline-none rounded border-x-2 border-orange-500'/>
            <textarea name="" id="" className='w-full h-52 p-2 rounded border-x-2 border-orange-500' placeholder='Enter your messenge'></textarea>
        </form> 
       </div>
      </div>
    </div> 
  )
}

export default Contact