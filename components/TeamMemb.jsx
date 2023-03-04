import React from 'react'
import Image from 'next/legacy/image'
import {GrFacebookOption , GrInstagram , GrLinkedinOption} from 'react-icons/gr'
const TeamMemb = () => {
  return (
    <div className='border border-orange-400 p-4 w-72 m-8 flex flex-col space-y-1 justify-center items-center'>
        <div className='relative h-52 w-60'>
          <Image src='/tiger.jpg' alt='team_member' layout='fill' objectFit='cover'/>
        </div>
        <p className='text-slate-600 self-start'>CEO and Project manager</p>
        <h4 className='font-bold py-2 self-start'>Ngabo Eric</h4>
        <div className="flex gap-4 self-start">
           <span className='p-2 bg-orange-400 rounded-full hover:bg-transparent border-orange-400 border duration-500 ease-in text-white hover:text-black'><GrFacebookOption/></span>
           <span className='p-2 bg-orange-400 rounded-full hover:bg-transparent border-orange-400 border duration-500 ease-in text-white hover:text-black'><GrInstagram/></span>
           <span className='p-2 bg-orange-400 rounded-full hover:bg-transparent border-orange-400 border duration-500 ease-in text-white hover:text-black'><GrLinkedinOption/></span>
        </div>
    </div>
  )
}

export default TeamMemb