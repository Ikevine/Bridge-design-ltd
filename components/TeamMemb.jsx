import React from 'react'
import { urlFor } from '@/client'
import Link from 'next/link'
import {GrFacebookOption , GrInstagram , GrLinkedinOption} from 'react-icons/gr'
const TeamMemb = ({data:{name , image , role, facebook ,instagram ,linkedin}}) => {
  return (
    <div className='border border-orange-400 px-2 py-4 w-80 flex flex-col space-y-1 justify-center items-center rounded-xl'>
        <img src={urlFor(image)} alt='team_member' layout='fill' className='object-cover h-56 rounded-xl w-full'/>
        <p className='text-slate-600 self-center'>{HTMLTableRowElement}</p>
        <h4 className='font-bold py-2 self-center'>{name}</h4>
        <div className="flex gap-4 self-center">
           <Link href={`${facebook}`} className='p-2 bg-orange-400 rounded-full hover:bg-transparent border-orange-400 border duration-500 ease-in text-white hover:text-black'>
             <span><GrFacebookOption/></span>
           </Link>
           <Link href={`${instagram}`} className='p-2 bg-orange-400 rounded-full hover:bg-transparent border-orange-400 border duration-500 ease-in text-white hover:text-black'>
             <span><GrInstagram/></span>
           </Link>
           <Link href={`${linkedin}`}  className='p-2 bg-orange-400 rounded-full hover:bg-transparent border-orange-400 border duration-500 ease-in text-white hover:text-black'>
             <span><GrLinkedinOption/></span>
           </Link>
          
          
        </div>
    </div>
  )
}

export default TeamMemb