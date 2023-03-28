// import Swiper core and required modules
import React from 'react';
import Image from 'next/legacy/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Swiper_nav from '../swiper_nav'
import { urlFor } from '@/client';

const Ahero =({ahome:{intro , descr , slider_image}}) => {
  return (
    <Swiper
      // install Swiper m odules
      modules={[ Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="min-h-screen  z-[2] bg-black"
    >
      {
        slider_image && slider_image.map((img)=>{
          return(
            <SwiperSlide key={img._key}>
            <div className="relative top-0 right-0 bottom-0 left-0  h-screen">
               <img src={urlFor(img)} alt="slide-image"  className='bg-fixed object-cover  bg-no-repeat object-center h-screen w-full'/>
                <div className="absolute bg-black/70 top-0 right-0 bottom-0 left-0 flex flex-col justify-center  px-20 ">
                 <motion.div 
                   initial={{opacity:0, x:1000}}
                   transition={{duration:2,}}
                   whileInView={{opacity:1, x:0, type:'tween'}}
   
                 className="md:w-[60%] flex flex-col md:space-y-8 space-y-6 justify-center md:items-center">
                   <h1 className='text-white  font-semibold md:text-4xl text-2xl tracking-wide md:text-center'>{intro}<span>BRIDGE DESIGN</span></h1>
                   <p className='text-slate-400 md:ml-10 ml-4 text-sm md:text-lg text-center md:text-start'>{descr}</p>
                    
                    <button className='px-16 py-4 self-center  text-white bg-orange-400 w-fit rounded-md ease-in duration-500 btn_hover text-[1rem]'>Contact us</button>
                 </motion.div> 
                </div>
            </div>
         </SwiperSlide>
          )
        })
      }
      <Swiper_nav/>
    </Swiper>
 );
};

export default Ahero;