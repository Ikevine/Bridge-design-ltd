import React from 'react';
import { client } from '@/client';
import { Tab } from '@headlessui/react'
import { Stab , Shero} from '@/components'

const Sticker = ({stickers,categori ,shead}) => {

  const showProducts = (category) => {
    return stickers.filter((sticker) => sticker.categories._ref === categori[category]._id)
    .map((data)=> <Stab key={data._id} data={data}/> );        
  };    
  
 
  return (
   <div className="">
    <Shero data={shead && shead[0]}/>
      
    <div className='mt-24 max-w-[80%] mx-auto flex flex-col p-4 '>
      <h1 className='font-bold text-2xl my-4 text-center'>Free Gallery</h1>
      <Tab.Group>
        {/* categories */}
          <Tab.List className="">
             {
              categori.map((data)=>{
                return (
                  <Tab
                   key={data._id}
                   id={data._id}
                   className={({selected})=>
                    `px-12 py-2 rounded-tr-2xl rounded-bl-2xl font-semibold text-lg
                    ${selected ?"bg-orange-400 text-white ease-in duration-400 outline-0":"text-slate-800"
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
             <Tab.Panel className="tabPanel grid place-items-center grid-cols-5 ">{showProducts(0)}</Tab.Panel>
             <Tab.Panel className="tabPanel grid place-items-center grid-cols-5 ">{showProducts(1)}</Tab.Panel>
             <Tab.Panel className="tabPanel grid place-items-center grid-cols-5 ">{showProducts(2)}</Tab.Panel>
          </Tab.Panels>
      </Tab.Group>
    </div>
  </div>  
  )
}

export default Sticker;

export const getServerSideProps = async () => {
  const query ='*[_type == "sticker"]';
  const stickers = await client.fetch(query);

  const categQuery ='*[_type == "scate"]';
  const categori = await client.fetch(categQuery);
  
  const sheadQuery ='*[_type == "shead"]';
  const shead = await client.fetch(sheadQuery);

  return {
     props:{
     stickers,
     categori,
     shead,
  }
 }
}