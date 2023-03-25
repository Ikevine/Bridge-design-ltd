import React from 'react'

const Bproduct = () => {
  return (
    <div className='flex justify-between items-center max-w-[80%] mx-auto mt-24'>
        {/* right */}
            <div className="flex flex-col space-y-4 w-[28%]">
                <img src="tiger.jpg" alt="our banner" className='w-full object-cover rounded-lg'/> 
                <img src="tiger.jpg" alt="banner page" className='w-full object-cover rounded-lg'/>
            </div>
        {/* middle */}
            <div className="flex flex-col space-y-4 w-[35%]">
               <img src="tiger.jpg" alt="our banner" className='w-full object-cover rounded-lg'/> 
               <img src="tiger.jpg" alt="banner page" className='w-full object-cover rounded-lg'/>
            </div>
        {/* left */}
            <div className="flex flex-col space-y-4 w-[28%]">
                <img src="tiger.jpg" alt="our banner" className='w-full object-cover rounded-lg'/> 
                <img src="tiger.jpg" alt="banner page" className='w-full object-cover rounded-lg'/>
            </div>
    </div>
  )
}

export default Bproduct