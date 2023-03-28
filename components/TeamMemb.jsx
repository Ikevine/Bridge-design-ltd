import React from 'react'
import { urlFor } from '@/client'
import {GrFacebookOption , GrInstagram , GrLinkedinOption} from 'react-icons/gr'
const TeamMemb = ({data:{name , image}}) => {
  return (
    <div className='border border-orange-400 px-2 py-4 w-80 flex flex-col space-y-1 justify-center items-center'>
        <img src={urlFor(image)} alt='team_member' layout='fill' className='object-cover h-40 w-full'/>
        <p className='text-slate-600 self-center'>CEO and Project manager</p>
        <h4 className='font-bold py-2 self-center'>{name}</h4>
        <div className="flex gap-4 self-center">
           <span className='p-2 bg-orange-400 rounded-full hover:bg-transparent border-orange-400 border duration-500 ease-in text-white hover:text-black'><GrFacebookOption/></span>
           <span className='p-2 bg-orange-400 rounded-full hover:bg-transparent border-orange-400 border duration-500 ease-in text-white hover:text-black'><GrInstagram/></span>
           <span className='p-2 bg-orange-400 rounded-full hover:bg-transparent border-orange-400 border duration-500 ease-in text-white hover:text-black'><GrLinkedinOption/></span>
        </div>
    </div>
  )
}

export default TeamMemb