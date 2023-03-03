import React from 'react'
import Image from 'next/legacy/image'
import { motion } from 'framer-motion'
const Show = () => {
  return (
    <motion.div 
    whileHover={{scale:1.1}}
    transition={{duration:1.1 ,type:'tween' }}
    className='drop-shadow-2xl bg-white p-4 w-64 h-[72] border m-10  flex flex-col space-y-4 rounded-lg'>
       <div className='relative h-36'>
          <Image src="/tiger.jpg" alt="what we do" layout='fill' objectFit='cover' className='rounded-lg'/>
       </div>
       <div className='flex flex-col space-y-2'>
         <h4 className='text-center font-bold '>Logo design</h4>
         <p className='text-slate-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum ...</p>
       </div> 
    </motion.div>
  )
}

export default Show