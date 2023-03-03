import React from 'react'
import Link from 'next/link'
import {GrFacebookOption , GrInstagram , GrLinkedinOption} from 'react-icons/gr'
import { HiArrowSmRight } from 'react-icons/hi'
const Footer = () => {
  return (
    <div className='bg-black/80 text-white shadow-inner py-4'>
       <div className="flex justify-between items-center w-[80%] h-fit py-8 mx-auto">
         {/* linked list */}
          <div className="">
             <h3 className='font-bold mb-2'>Quick Links</h3>
             <ul classNclassName='font-bold mb-2'ame='flex flex-col space-y-1'>
              <Link href='#'>
                 <li className='hover:text-orange-400 duration-500 ease-in-out'>Home</li>
              </Link>
              <Link href='#'>
                 <li className='hover:text-orange-400 duration-500 ease-in-out'>About us</li>
              </Link>
              <Link href='#'>
                 <li className='hover:text-orange-400 duration-500 ease-in-out'>Services</li>
              </Link>
              <Link href='#'>
                 <li className='hover:text-orange-400 duration-500 ease-in-out'>Contact us</li>
              </Link>
             </ul>
          </div>
         {/* location */}
         <div>
         <h3 className='font-bold mb-2'>Location</h3>
          <div className="flex flex-col space-y-2">
              <h4 className='font-medium'>KG 045 , Rwanda , Kigali City</h4>
              <h4 className='font-medium'>Our social media</h4>
              <div className="flex gap-4">
                <span className='p-2 bg-orange-400 rounded-full hover:bg-transparent border-orange-400 border duration-500 ease-in'><GrFacebookOption/></span>
                <span className='p-2 bg-orange-400 rounded-full hover:bg-transparent border-orange-400 border duration-500 ease-in'><GrInstagram/></span>
                <span className='p-2 bg-orange-400 rounded-full hover:bg-transparent border-orange-400 border duration-500 ease-in'><GrLinkedinOption/></span>
            </div>
          </div>
         </div> 
         {/* subscribe */}
         <div className="flex flex-col space-y-2">
           <h3 className='font-bold mb-2'>Keep in Touch</h3>
           <div className="relative h-8 bg-white ">
               <input type="text" placeholder='Enter your email' className='focus:outline-none focus:border-b-4 text-black p-2 transition-colors focus:border-b-orange-400 w-full h-full'/>
               <span className='absolute bg-orange-400 top-0 bottom-0 right-0 flex justify-center items-center text-xl px-2 rounded-tl-lg rounded-bl-lg'><HiArrowSmRight/></span>
           </div>
           <p className='w-72 text-slate-300'>Sign up to get our notification every day on  Lorem, ipsum dolor.</p>
         </div>
       </div>
    </div>
  )
}

export default Footer