import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { urlFor } from '@/client'
const Wedo = ({datas:{name , simage , descr , page}}) => {
  return (
   <div>
    <Link href={`${page}`}>
      <motion.div 
        whileHover={{scale:1.1}}
        transition={{duration:1.1 ,type:'tween' }}
        className='drop-shadow-2xl bg-white p-8 md:p-4 w-[80%] md:w-[80%] h-auto border mt-10 flex flex-col items-center justify-center rounded-lg space-x-6'>
        <img src={urlFor(simage)} alt="what we do" layout='fill'  className='rounded mb-2 w-full h-[50%]'/>
        <div className='flex flex-col space-y-2'>
          <h4 className='text-center font-bold '>{name}</h4>
          <p className='text-slate-900'>{descr}</p>
        </div> 
      </motion.div>
    </Link>
  </div>  
  )
}
export default Wedo

