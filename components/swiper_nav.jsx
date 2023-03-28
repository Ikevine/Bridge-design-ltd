import React from 'react'
import { useSwiper } from 'swiper/react'
import {HiArrowSmRight , HiArrowSmLeft} from 'react-icons/hi'
const Swiper_nav = () => {
    const swiper = useSwiper();
  return (
    <div className='flex justify-between w-full absolute z-[20] top-[50%] px-6'>
        <button onClick={()=>swiper.slidePrev()} className="bg-slate-400 text-slate-700 p-2 rounded-full text-xl"><HiArrowSmLeft/></button>
        <button onClick={()=>swiper.slideNext()} className="bg-slate-400 text-slate-700 p-2  rounded-full text-xl"><HiArrowSmRight/></button>
    </div>
  )
}

export default Swiper_nav