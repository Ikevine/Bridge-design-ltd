import testimonial from "@/backend/schemas/testimonial"
import {Hero , Wedo , Testimonial ,Brand , Wera ,Swiper_nav} from "@/components"
import {client } from '../client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Home({home}) {
  return (
    <>
      
      <Hero shome={home && home[0]}/>
      <div className='p-4 flex  flex-col justify-center items-center min-h-screen'>
        <div className="text-center">
          <h1 className='font-semibold text-xl capitalize p-2'>Services we provide</h1>
          <p className='text-slate-800 text-center'>Lorem we do it ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut minima odit expedita, delectus sequi.</p>
        </div>
           {
            home.length && home.map((data)=>{
              return(
                <div key={data._id} className='grid md:grid-cols-4 grid-rows-1 mx-auto'>
                  {data.wedo.map((datas)=>{
                    return (
                      <Wedo key={datas._id} datas={datas}/>)//
                  })}
                </div>
               ) 
             })
            }
      </div>

      {/* testimonial and objextiver section */}

      <div className='bg-slate-200 p-2 mb-4 min-h-screen'>
          {/* wera */}
          <div className="flex flex-col  md:flex-row m-10 space-y-4 md:space-x-12 items-center justify-center px-4 mx-auto">
             <video className='h-80 rounded-lg' controls >
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
              modules={[Autoplay, Pagination]}
              className="mySwiper max-w-[32rem]"
            >
              {
                home.length && home.map((data)=>{
                  return(
                    <div key={data._id} className='mx-auto'>
                      {data.we_are.map((datas)=>{
                        return (
                          <SwiperSlide className="h-80 w-36">
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

          <Swiper
              spaceBetween={30}
              
              // autoplay={{
              //   delay: 10000,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper h-72 "
            >

          {
                home.length && home.map((data)=>{
                  return(
                    <div key={data._id} className='grid md:grid-cols-3 grid-rows-1 max-w-[60%] mx-auto'>
                      {data.testimonial.map((datas)=>{
                        return (
                          <SwiperSlide className="items-center justify-center " >
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

      <div className="my-4">
        <h1 className="capitalize font-semibold text-center text-2xl text-slate-700">Popular brand work with us</h1>
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
              modules={[Autoplay, Pagination]}
              className="mySwiper h-72 "
            >
          {
            home.length && home.map((data)=>{
              return(
                data.brand.map((data)=>{
                    return(
                      <SwiperSlide className="items-center justify-center " >
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