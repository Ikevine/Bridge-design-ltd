import React from 'react'
import Link from 'next/link'
import { useRef } from 'react';
import {GrFacebookOption , GrInstagram , GrLinkedinOption} from 'react-icons/gr'
import { HiArrowSmRight } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
const Footer = () => {
   const form = useRef();

   const sendEmail = (e) => {
   e.preventDefault();

   emailjs.sendForm('service_hjda9rk', 'template_awid7y2', form.current, 'L2J_1HarUgW6QKG9T')

   e.target.reset()
   };
  return (
    <div className='bg-black/80 text-white shadow-inner py-4'>
       <div className="flex flex-col md:flex-row md:justify-between md:items-center w-[80%] h-fit space-y-8 md:space-y-0 py-8 mx-auto">
         {/* linked list */}
          <div className="">
             <h3 className='font-bold mb-2'>Quick Links</h3>
             <ul className='font-bold mb-2flex flex-col space-y-1 ml-2'>
              <Link href='/'>
                 <li className='hover:text-orange-400 duration-500 ease-in-out'>Home</li>
              </Link>
              <Link href='/about'>
                 <li className='hover:text-orange-400 duration-500 ease-in-out'>About us</li>
              </Link>
              <Link href='#'>
                 <li className='hover:text-orange-400 duration-500 ease-in-out'>Services</li>
              </Link>
              <Link href='/contact'>
                 <li className='hover:text-orange-400 duration-500 ease-in-out'>Contact us</li>
              </Link>
             </ul>
          </div>
         {/* location */}
         <div>
         <h3 className='font-bold mb-2'>Location</h3>
          <div className="flex flex-col space-y-2 ml-2">
              <h4 className='font-medium text-slate-200'>KG 045 , Rwanda , Kigali City</h4>
              <h4 className='font-medium  text-slate-200'>Our social media</h4>
              <div className="flex gap-4">
              <Link href="" className='p-2 bg-orange-400 rounded-full hover:bg-transparent border-orange-400 border duration-500 ease-in text-white hover:text-black'>
                 <span><GrFacebookOption/></span>
               </Link>
               <Link href="" className='p-2 bg-orange-400 rounded-full hover:bg-transparent border-orange-400 border duration-500 ease-in text-white hover:text-black'>
                 <span><GrInstagram/></span>
               </Link>
               <Link href=""  className='p-2 bg-orange-400 rounded-full hover:bg-transparent border-orange-400 border duration-500 ease-in text-white hover:text-black'>
                 <span><GrLinkedinOption/></span>
               </Link>
            </div>
          </div>
         </div> 
         {/* subscribe */}
         <div className="flex flex-col space-y-2 ">
           <h3 className='font-bold '>Keep in Touch</h3>
           <form ref={form} onSubmit={sendEmail} className="relative h-8 bg-white ">
               <input type="text" name='subscribe' placeholder='Enter your email' className='focus:outline-none focus:border-b-4 text-black p-2 transition-colors focus:border-b-orange-400 w-full h-full'/>
               <button type='submit' className='absolute bg-orange-400 top-0 bottom-0 right-0 flex justify-center items-center text-xl px-2 rounded-tl-lg rounded-bl-lg'><HiArrowSmRight/></button>
           </form>
           <p className='w-72 text-slate-300'>Sign up to get our notification every day on  Lorem, ipsum dolor.</p>
         </div>
       </div>
    </div>
  )
}

export default Footer