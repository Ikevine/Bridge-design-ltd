import {Hero , Wedo , Testimonial ,Brand , Wera } from "@/components"
import {client } from '../client'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Home({home}) {
  return (
    <>
      
      <Hero shome={home && home[0]}/>

      <div className='p-4 md:px-16 flex  flex-col justify-center items-center min-h-screen'>
        <div className="text-center">
          <h1 className='font-semibold text-2xl text-slate-800 capitalize p-2'>{home[0].head_wedo}</h1>
          <p className='text-slate-800 text-center w-8'>{home[0].descr_wedo}</p>
        </div>
           {
            home.length && home.map((data , index)=>{
              return(
                <div key={index} className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto p-4 b'>
                  {data.wedo.map((datas,index)=>{
                    return (
                      <Wedo key={index} datas={datas}/>)
                  })}
                </div>
               ) 
             })
            }
      </div>

      {/* testimonial and objextiver section */}

    

    <div className='bg-slate-200 p-2 mb-4 h-auto'>

        
        <div className="text-center">
          <h1 className='font-semibold text-2xl text-slate-700 capitalize p-2'>{home[0].head_wera}</h1>
          <p className='text-slate-800 text-center'>{home[0].descr_wera}</p>
          
        </div>
          {/* wera */}
          <div className="flex flex-col  lg:flex-row mt-10 space-y-8 md:space-x-12 items-center justify-center px-4 mx-auto">
             <video className='h-[20rem] rounded-lg' controls >
                 <source src='' type='video/mp4'/>
             </video>
             <Swiper
              spaceBetween={30}
              slidesPerView={1}
              // autoplay={{
              //   delay: 10000,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
             
              className="mySwiper max-w-[28rem] bg-slate-200"
            >
              {
                home.length && home.map((data)=>{
                  return(
                    <div key={data._id} className=' mx-auto'>
                      {data.we_are.map((datas , index)=>{
                        return (
                          <SwiperSlide key={index} className="h-80 w-36">
                            <Wera key={datas._id} datas={datas}/>
                          </SwiperSlide>
                          )//
                      })}
                    </div>
                  ) 
                })
              }
            </Swiper>
          </div>




          {/* testimonial */}
          <div className="h-screen flex flex-col items-center justify-center">
            <div className="text-center">
              <h1 className='font-semibold text-2xl text-slate-700 capitalize p-2'>{home[0].head_test}</h1>
              <p className='text-slate-800 text-center'>{home[0].descr_test}</p>
            </div>
           
           <Swiper
              spaceBetween={30}
              
              // autoplay={{
              //   delay: 10000,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              
              className="mySwiper h-72 w-[90%]"
            >

          {
                home.length && home.map((data)=>{
                  return(
                  
                    <div key={data._id}>
                      {data.testimonial.map((datas , index)=>{
                        return (
                          <SwiperSlide key={index} className="w-full items-center justify-center" >
                             <Testimonial key={datas._id} datas={datas}/>
                          </SwiperSlide>
                          )//
                      })}
                    </div>
                  ) 
                })
              }
          </Swiper>
          </div>
      </div>

      <div className="my-4">
        <h1 className="capitalize font-semibold text-center text-2xl text-slate-700">{home[0].head_brand}</h1>
        <div className="flex justify-between items-center">
          <Swiper
              spaceBetween={30}
              breakpoints={{

                720:{
                  slidesPerView:2,
                  spaceBetween:30,
                  
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },

              }}
              // autoplay={{
              //   delay: 10000,
              //   disableOnInteraction: false,
              // }}
              pagination={{clickable: true,}}
              className="mySwiper  w-[80%] mx-auto"
            >
          {
            home.length && home.map((data)=>{
              return(
                data.brand.map((data , index)=>{
                    return(
                      <SwiperSlide key={index} className="w-full items-center justify-center pb-12 md:pb-0" >
                        <Brand key={data._key} data={data}/> 
                      </SwiperSlide>
                    )  
                })
              )
            })
          }
        </Swiper>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const query ='*[_type == "home"]';
  const home = await client.fetch(query);


  return {
     props:{
     home,
  }
 }
}