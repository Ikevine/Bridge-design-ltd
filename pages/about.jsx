import React from 'react'
import {Hero ,TeamMemb ,Experiance} from "@/components"
const about = () => {
  return (
    <>
      <Hero/>
      <div className="my-4">
        <h1 className='text-center font-semibold text-2xl capitalize'>Our bestTeam members</h1>
         <TeamMemb/>
      </div>
      <Experiance/>
    </>
  )
}

export default about