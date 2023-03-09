import React from 'react'
import Image from 'next/legacy/image'
const Gwedo = () => {
  return (
    <div className='flex space-x-6 w-[80%] mx-auto m-6'>
        <div className="relative w-[70%] h-72">
            <Image src="/tiger.jpg" alt='gift we made' layout='fill' objectFit='cover' className='rounded-lg'/>
        </div>
        <div className="">
            <div className="flex flex-col space-y-4 mb-2">
                <h1 className='font-bold text-xl text-orange-400'>What Gift we do</h1>
                <p className='text-slate-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius incidunt quibusdam nostrum maiores. Repellat, molestias?</p>
            </div>
            <div className="">
                <label htmlFor="radio_btn" className='inline-flex items-center'>
                     <input type="radio" name="radio_" id="radio_btn" className='hidden '/>
                     <div className='h-4 w-4 border-2 rounded-full btn_before p-[2px] flex justify-center items-center mr-[0.2rem]'/> 
                     <span className='capitalize text-slate-600 font-semibold text-sm'>Birthday Gift</span> 
                </label>
            </div>
        </div>
    </div>
  )
}

export default Gwedo