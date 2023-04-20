import React from 'react'
import { client } from '@/client'
import { Phead ,Pproduct  } from '@/components'
const Printing = ({printing}) => {
  return (
    <div className='mt-24'>
      <Phead data={printing && printing[0]}/>  
      {/* product  */}
        {
         printing.map((data , index)=>{
          return (
          <div key={index} className="grid grid-cols-2
            md:grid-cols-3 lg:grid-cols-4  px-4 md:px-0 md:max-w-[90%] lg:max-w-[70%] mx-auto">
            {data.products.map((bdata)=>{
              return (
                <Pproduct key={bdata.key} data={bdata}/>
              )
            })}
          </div>  
          ) 
        })
      }
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