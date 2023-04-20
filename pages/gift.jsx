import React from 'react'
import { client } from '@/client'
import { Ghead , Gwedo , Gprod } from '@/components'
const Gift = ({gift}) => {
  return (
    <div className='mt-24'>
       <Ghead data={gift && gift[0]}/>
       <Gwedo data={gift}/>
       {
         gift.map((data , index)=>{
          return (
          <div key={index} className="grid grid-cols-2
            md:grid-cols-3 lg:grid-cols-4  px-4 md:px-0 md:max-w-[90%] lg:max-w-[70%] mx-auto">
            {data.products.map((bdata)=>{
              return (
                <Gprod key={bdata.key} data={bdata}/>
              )
            })}
          </div>  
          ) 
        })
      }
    </div>
  )
}

export default Gift

export const getServerSideProps = async () => {
  const query ='*[_type == "gift"]';
  const gift = await client.fetch(query);


  return {
     props:{
    gift,
  }
 }
}