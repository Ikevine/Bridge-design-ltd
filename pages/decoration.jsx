import React from 'react'
import {Dhome , Dproduct , Dmiddle ,Dlarge} from "@/components"
import { client } from '@/client'
const Decoration = ({decoration}) => {
  return (
    <div>
      <Dhome dhome={decoration && decoration[0]}/>
      {/* post  */}
      <div className='flex space-x-4 max-w-[80%] mx-auto justify-center m-2'>
       {/* left side  */}
          <div className="flex flex-col space-y-4">
             {
               decoration.map((data)=>{
                return data.left.map((data)=>{
                  return <Dproduct key={data._key} data={data}/>
                })
               })
             }
          </div>
        {/* middle side */}
          <div className="flex flex-col  space-y-4 mt-8">
          {
               decoration.map((data)=>{
                return data.middle.map((data)=>{
                  return <Dmiddle key={data._key} data={data}/>
                })
               })
             }
          </div>
        {/* right side */}
          <div className="flex flex-col space-y-4">
            {
               decoration.map((data)=>{
                return data.right.map((data)=>{
                  return <Dlarge key={data._key} data={data}/>
                })
               })
            }
          </div>
      </div>
      
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