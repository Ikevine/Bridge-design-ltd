import React from 'react'
import { client } from '@/client'
import { Ghead , Gwedo , Gprod } from '@/components'
const Gift = ({gift}) => {
  return (
    <div className='mt-24'>
       <Ghead data={gift && gift[0]}/>
       <Gwedo/>
       <div className="flex space-x-4">
        {
          gift.map((data)=>{
            return (data.product.map((data)=>{
              return <Gprod key={data._key} data={data}/>
            })
          )})
        }
       </div>
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