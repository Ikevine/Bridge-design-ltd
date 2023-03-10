import React from 'react';
import { client } from '@/client';
import { Tab } from '@headlessui/react'
import { Stab} from '@/components'



const Sticker = ({stickers,categori}) => {

  const showProducts = (category) => {
    return stickers.filter((sticker) => sticker.categories._ref === categori[category]._id)
    .map((data)=> <Stab key={data._id} data={data}/> );        
  };    
  
 
  return (
    <div className='mt-24'>
      <Tab.Group>
        {/* categories */}
          <Tab.List>
             {
              categori.map((data)=>{
                return (
                  <Tab
                   key={data._id}
                   id={data._id}
                   className={({selected})=>
                    `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base
                    ${selected ?"bg-[#35383C] text-white":"border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                  >
                    {data.name}
                  </Tab>
                )
              })
             }
            

      </Tab.List>
          <Tab.Panels className="">
             <Tab.Panel className="tabPanel flex">{showProducts(0)}</Tab.Panel>
             <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
             <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
          </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Sticker;

export const getServerSideProps = async () => {
  const query ='*[_type == "sticker"]';
  const stickers = await client.fetch(query);

  const categQuery ='*[_type == "scate"]';
  const categori = await client.fetch(categQuery);

  return {
     props:{
     stickers,
     categori,
  }
 }
}