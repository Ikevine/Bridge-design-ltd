import React from 'react'
import Image from 'next/legacy/image'
const Testimonial = () => {
  return (
  <>
  <div className="flex m-10 space-x-12 items-center justify-center">
    <video className='h-72 2-72' controls>
      <source src='' type='video/mp4'/>
    </video>
    <div className="w-[30%] bg-white p-6 text-center flex flex-col space-y-2 drop-shadow-md rounded-lg h-52">
        <h2 className='font-semibold text-xl'>Vision</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima, temporibus omnis vero debitis accusamus?</p>
    </div>
  </div>

  {/* slide motion */}
   <div className='flex items-center justify-center space-x-6 w-[80%] mx-auto h-fit bg-white py-4 drop-shadow-2xl rounded-xl m-10'>
      <div className="relative h-36 w-36 ">
        <Image src='/tiger.jpg' alt='person image' layout='fill' objectFit='cover' className='rounded-full'/>
      </div>
      <div className="w-[70%] text-center space-y-4">
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, magni corporis porro cumque architecto quod. lorem15 Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi odio accusantium solu</p>
        <h1 className='text-lg font-semibold '>Niyomungeli Aline</h1>
      </div>
    </div>
 </>    
  )
}

export default Testimonial