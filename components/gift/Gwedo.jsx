import React from 'react'
import Image from 'next/legacy/image';
import { urlFor } from '@/client';
const Gwedo = ({data}) => {
  return (
    <div className=' w-[80%] mx-auto m-6'>
        <div className="mb-4 md:mb-0">
            <div className="flex flex-col space-y-4 mb-2">
            <h1 className='font-bold text-xl text-orange-400'>{data.categories_head}</h1>
            <p className='text-slate-700'>{data.categories_descr}</p>
        </div>
    <div className="flex flex-col-reverse md:flex-row-reverse space-x-6">
        <div className="relative md:w-[50%] h-72">
            <Image src={urlFor(data.update)} alt='gift we made' layout='fill' objectFit='cover' className='rounded-lg'/>
        </div>

            <div className="flex flex-col md:w-[50%] items-center justify-center space-y-5">
                {
                    data.map((data)=>{
                        return(
                            data.categ_name.map((data , index)=>{
                                return (
                                 <label key={index} htmlFor="radio_btn" className='inline-flex items-center justify-center'>
                                    <input type="radio" name="radio_" id="radio_btn" className='hidden '/>
                                    <div className='h-5 w-5 border-2 rounded-full btn_before p-[3px] flex justify-center items-center mr-[0.4rem] border-slate-500'/> 
                                    <span className='capitalize text-slate-600 font-semibold text-sm'>{data}</span> 
                                  </label>
                                )
                            })
                        )
                    })
                }
                
                
            </div>
    </div>     
        </div>
    </div>
  )
}

export default Gwedo