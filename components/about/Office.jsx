import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { urlFor } from '@/client';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Office = ({data:{header , descr , image}}) => {
  return (
   <div className='p-4 max-w-7xl space-x-4 mx-auto mt-4 flex md:flex-row  flex-col-reverse items-center justify-center' >
    <Carousel className='main-slide p-6 max-w-2xl' showArrows={false}>
            
              {
                image.map((data , index)=>{
                  return(
                   <div key={index}> 
                     <img src={urlFor(data)} alt="office_image" />
                   </div>  
                  )
                })
              }
            
    </Carousel>
    <div className="md:max-w-[30%]">
       <h1 className='font-bold text-2xl text-slate-800 text-center'>{header}</h1>
       <p>{descr}</p>
    </div>
   </div> 
  )
}

export default Office