import React from 'react'
import {BsWhatsapp } from 'react-icons/bs';
import {HiArrowRight} from 'react-icons/hi'
import Link from 'next/link';
const Box = () => {
  return (
    <div className='md:px-14 md:py-6 px-8 py-6 rounded-xl bg-orange-400 text-white flex flex-col space-y-1 justify-center items-center hover:text-slate-900 ease-in duration-500  hover:drop-shadow-2xl hover:bg-white'>
       <span className='font-bold md:text-3xl text-xl'><BsWhatsapp/></span>
       <h3 className='text-sm md:font-bold font-semibold tracking-wider'>Whatsapp</h3>
       <h3 className='text-sm md:font-bold font-semibold tracking-wider'>0788441394</h3>
       <Link href='/'>
          <li className='list-none text-slate-300 relative'>Start<span className='absolute  top-0 bottom-0 left-[2.2rem] flex justify-center items-center'><HiArrowRight/></span></li>
       </Link>
    </div>
  )
}

export default Box