import React from 'react'
import { client } from '@/client'
import { Phead ,Plarge ,Pmiddle ,Pproduct  } from '@/components'
const Printing = ({printing}) => {
  return (
    <div className='mt-24'>
      <Phead data={printing && printing[0]}/>  
      {/* post  */}
      <div className='flex space-x-4 max-w-[80%] mx-auto justify-center m-2'>
       {/* left side  */}
          <div className="flex flex-col space-y-4">
             {
               printing.map((data)=>{
                return data.left.map((data)=>{
                  return <Pproduct key={data._key} data={data}/>
                })
               })
             }
          </div>
        {/* middle side */}
          <div className="flex flex-col  space-y-4 mt-8">
          {
               printing.map((data)=>{
                return data.middle.map((data)=>{
                  return <Pmiddle key={data._key} data={data}/>
                })
               })
             }
          </div>
        {/* right side */}
          <div className="flex flex-col space-y-4">
            {
               printing.map((data)=>{
                return data.right.map((data)=>{
                  return <Plarge key={data._key} data={data}/>
                })
               })
            }
          </div>
      </div>
    </div>
  )
}

export default Printing

export const getServerSideProps = async () => {
  const query ='*[_type == "printing"]';
  const printing = await client.fetch(query);


  return {
     props:{
     printing,
  }
 }
}