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


const Hero =() => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="min-h-screen w-screen z-[2]"
    >
      <SwiperSlide>
         <div className="relative top-0 right-0 bottom-0 left-0 w-screen h-screen ">
            <Image src="/tiger.jpg" alt="slide-image" layout='fill' objectFit='cover'  className='bg-center'/>
             <div className="absolute bg-black/70 top-0 right-0 bottom-0 left-0 flex flex-col justify-center  px-20 ">
              <motion.div 
                initial={{opacity:0, x:1000}}
                transition={{duration:2,}}
                whileInView={{opacity:1, x:0, type:'tween'}}

              className="md:w-[60%] flex flex-col md:space-y-8 space-y-6 justify-center md:items-center">
                <h1 className='text-white  font-semibold md:text-4xl text-2xl tracking-wide md:text-center'>Good and smart thing mean independ and clear feature we like to have you all so welcome to <span >BRIDGE DESIGN</span></h1>
                <p className='text-slate-400 md:ml-10 ml-4 text-sm md:text-lg text-center md:text-start'>Lorem ipsum dolor sit elit. Voluptates distinctio odit quae  At voluptatibus architecto ea modi corrupti quibusdam. we welcome you all</p>
                 
                 <button className='px-16 py-4 self-center  text-white bg-orange-400 w-fit rounded-md ease-in duration-500 btn_hover text-[1rem]'>Contact us</button>
              </motion.div> 
             </div>
         </div>
      </SwiperSlide>
    </Swiper>
 );
};

export default Hero;