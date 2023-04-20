import React from 'react'
import {Dhome , Dproduct } from "@/components"
import { client } from '@/client'
const Decoration = ({decoration}) => {
  return (
    <div>
      <Dhome dhome={decoration && decoration[0]}/>
      {/* post  */}
      {
       decoration.map((data ,index)=>{
        return (
         <div key={index} className="grid grid-cols-2
          md:grid-cols-3 lg:grid-cols-4  px-4 md:px-0 md:max-w-[90%] lg:max-w-[70%] mx-auto">
          {data.products.map((bdata)=>{
            return (
              <Dproduct key={bdata.key} data={bdata}/>
            )
          })}
         </div>  
        ) 
       })
     }
    </div>
  )
}

export default Decoration

export const getServerSideProps = async () => {
  const query ='*[_type == "decoration"]';
  const decoration = await client.fetch(query);


  return {
     props:{
    decoration,
  }
 }
}