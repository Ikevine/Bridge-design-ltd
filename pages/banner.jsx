import React from 'react'
import { client } from '@/client'
import { Bproduct , Bhead } from '@/components'
const Banner = ({banner}) => {
  return (
   <div className='px-2 md:px-0'>
     <Bhead hbanner={banner && banner[0]}/>
     {
       banner.map((data,index)=>{
        return (
         <div key={index} className="grid grid-cols-2
          md:grid-cols-3 lg:grid-cols-4  px-4 md:px-0 md:max-w-[90%] lg:max-w-[70%] mx-auto">
          {data.product.map((bdata)=>{
            return (
              <Bproduct key={bdata.key} data={bdata}/>
            )
          })}
         </div>  
        ) 
       })
     }
     
   </div>
  )
}

export default Banner

export const getServerSideProps = async () => {
  const query ='*[_type == "hbanner"]';
  const banner = await client.fetch(query);


  return {
     props:{
      banner,
  }
 }
}