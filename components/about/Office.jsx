import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Office = () => {
  return (
   <div className='p-4 max-w-7xl space-x-4 mx-auto mt-4 flex items-center justify-center' >
    <Carousel className='main-slide p-6' showArrows={false}>
      <div>
          <img src="tiger.jpg" height="300px" width="200px" />
      </div>
      <div>
          <img src="tiger.jpg"/>
      </div>
      <div>
          <img src="tiger.jpg" />
      </div>
    </Carousel>
    <div className="max-w-[30%]">
       <h1 className='font-bold text-2xl text-slate-800 text-center'>Our office is on the high quality to produce the best</h1>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo voluptatum natus laborum sapiente ducimus harum autem quasi minus iste iusto consequuntur nam, dolore qui impedit, velit unde quae similique. Dicta pariatur ullam in quia?</p>
    </div>
   </div> 
  )
}

export default Office