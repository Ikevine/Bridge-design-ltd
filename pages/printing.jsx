import React from 'react'
import { Ghead , Dpost } from '@/components'
const Printing = () => {
  return (
    <div className='mt-24'>
        <Ghead/>
        <Dpost/>
    </div>
  )
}

export default Printing

export const getServerSideProps = async () => {
  const query ='*[_type == "about"]';
  const about = await client.fetch(query);


  return {
     props:{
     about,
  }
 }
}