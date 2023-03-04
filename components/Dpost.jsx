import React from 'react'
import Lpost from './Dlarge'
import Gprod from './Gprod'
const Dpost = () => {
  return (
    <div className='flex space-x-4 max-w-[80%] mx-auto justify-center m-2'>
        {/* left side post */}
        <div className="flex flex-col space-y-4">
          <Gprod/>
          <Gprod/>
          <Gprod/>
        </div>
        {/* middle side post */}
        <div className="flex flex-col  space-y-4 mt-8">
          <Gprod/>
          <Gprod/>
          <Gprod/>
        </div>
        {/* right side post */}
        <div className="flex flex-col space-y-4">
            <Lpost/>
            <Lpost/>
        </div>
    </div>
  )
}

export default Dpost