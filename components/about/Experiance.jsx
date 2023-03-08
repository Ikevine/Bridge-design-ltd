import React from 'react'

const Experiance = ({experiance:{header,edescr}}) => {
  return (
        <div className="w-[95%] mx-auto p-6 text-white">
            {/* experiance video and description */}
            <div className="flex gap-6 justify-center ">
                <video src="" controls className='w-[60%]'>
                    <source src='' type='video/mp4'/>
                </video>
                <div className="pt-10 description flex flex-col space-y-6 w-[40%]">
                    <h2 className='font-semibold text-3xl'>{header}</h2>
                    <p className=' text-slate-400'>{edescr}</p>
                    <div className="button">
                        <button className='px-14 py-2 text-white bg-orange-400 w-fit rounded-md ease-in duration-500 btn_hover text-[1rem]'>Contact us</button>
                    </div>
                </div>
            </div>
        </div>  
  )
}

export default Experiance