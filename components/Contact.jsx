import React from 'react'
import {BsFillPhoneFill} from 'react-icons/bs';
import {AiFillMail} from 'react-icons/ai';
import {MdLocationOn} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contacti = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ve4tmqg', 'template_m771uf8', form.current, 'L2J_1HarUgW6QKG9T')

    e.target.reset()
  };

  return (
    <div className=" w-screen h-auto mt-12  bg-slate-200 flex flex-col justify-center items-center p-8">
        <div>
           <h1 className='font-semibold text-2xl text-slate-800 capitalize p-2'>Contact me</h1>
        </div>
        {/* boxes goes here */}
           <div className="flex flex-col md:flex-row md:space-y-0 space-y-4 md:space-x-4 w-full justify-center items-center">

              <div className='text-slate-900 flex flex-col gap-2 justify-center items-center p-3 w-[70%] md:w-[20%] self-center bg-slate-300 rounded-md cursor-pointer hover:drop-shadow-xl'>
                <span className='flex items-center justify-center space-x-2 font-semibold text-lg'><AiFillMail/> <p>Email</p></span>
                <h4 className='font-bold'>bridgedesignltd@gmail.com</h4>
                 <a href="mailto:bridgedesignltd@gmail.com">send a message </a>
              </div>
              
              <div className='text-slate-900 flex flex-col gap-2 justify-center items-center p-3 w-[70%] md:w-[20%] self-center bg-orange-300 rounded-md cursor-pointer hover:drop-shadow-xl'>
                 <span className='flex items-center justify-center space-x-2 font-semibold text-lg'><BsFillPhoneFill/><p>Cell number</p> </span>
                 <a href="tel:+250 788 774 264" className=''>+250 788 774 264</a>
                 <h4>Call</h4>
              </div>

              <div className=' flex flex-col gap-2 justify-center items-center p-3 w-[70%] md:w-[20%] self-center bg-slate-900 text-slate-100 rounded-md cursor-pointer hover:drop-shadow-xl'>
                 <span className='flex items-center justify-center space-x-2 font-semibold text-lg'><MdLocationOn/><p>Location</p></span>
                 <h4>Street KN2st</h4>
                 <h4>NDARU ARCADE 1 building</h4>
                 <h1> 3rd Floor romm b<sub>3</sub>-02 </h1>
              </div>

          </div>
        {/* form here */}
        <form ref={form} onSubmit={sendEmail} className='w-[100%] md:w-[50%] mx-auto bg-slate-00 flex flex-col space-y-2 p-4'>
            <input type="text" name='name' placeholder='Enter your first name' className=' h-16 p-2 focus:outline-none rounded border-x-2 border-orange-500' required/>

            <input type="text" name='email' placeholder='Enter your Email' className='w-fill h-16 p-2 focus:outline-none rounded border-x-2 border-orange-500' required/>

            <textarea name="message"  className='focus:outline-none w-full h-52 p-2 rounded border-x-2 border-orange-500' placeholder='Enter your messenge' required></textarea>
            <button type='submit' className='px-10 py-2 self-center  text-white bg-orange-400 w-fit rounded-md ease-in duration-500 btn_hover text-[1rem]'>Send message</button>
        </form>
    </div> 
  )
}

export default Contacti