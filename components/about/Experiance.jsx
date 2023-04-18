import React from 'react'

const Experiance = ({experiance:{header,edescr}}) => {
  return (
        <div className="w-[95%] mx-auto p-2 md:p-6 text-white mb-8 ">
            {/* experiance video and description */}
            <div className="flex flex-col-reverse gap-6 justify-center md:flex-row ">
                <video src="" controls className='md:w-[60%]'>
                    <source src='' type='video/mp4'/>
                </video>
                <div className=" description flex flex-col space-y-6 md:w-[40%]">
                    <h2 className='font-semibold md:text-3xl text-2xl text-center capitalize'>{header}</h2>
                    <p className=' text-slate-200'>{edescr}</p>
                    <div className="button">
                        <button className='px-14 py-2 text-white bg-orange-400 w-fit rounded-md ease-in duration-500 btn_hover text-[1rem]'>Contact us</button>
                    </div>
                </div>
            </div>
        </div>  
  )
}

export default Experiance