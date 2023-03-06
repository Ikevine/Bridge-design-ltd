import React from 'react'
import Show from '../Show'
const Wedo = () => {
  return (
    <div className='p-4 flex  flex-col justify-center items-center min-h-screen'>
      <div className="text-center">
         <h1 className='font-semibold text-xl capitalize p-2'>Services we provide</h1>
         <p className='text-slate-800 text-center'>Lorem we do it ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut minima odit expedita, delectus sequi.</p>
       </div>
      <div className='grid md:grid-cols-3 grid-rows-1 max-w-[60%] mx-auto'>
       <Show/>
       <Show/>
       <Show/>
       <Show/>
       <Show/>
       <Show/>
      </div>
    </div>
    
  )
}

export default Wedo