import React from 'react';
import { client } from '@/client';
import {Ahero ,TeamMemb ,Experiance ,Machine ,Office} from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const About = ({about , office}) => {
  console.log(office);
  return (
    <>
      <Ahero ahome={about && about[0]}/>
      {/* team member  */}
      <div className="my-4 px-10">
        <h1 className='text-center container mx-auto font-semibold text-2xl capitalize mb-4'>Our bestTeam members</h1>
        <div className="flex justify-between items-center px-4">
          <Swiper

              breakpoints={{

                720:{
                  slidesPerView:1,
                  spaceBetween:50,
                  
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                },

              }}
              // autoplay={{
              //   delay: 10000,
              //   disableOnInteraction: false,
              // }}
              pagination={{clickable: true,}}
              modules={[Autoplay, Pagination]}
              className="mySwiper  w-[80%] md:w-[90%]  mx-auto"
            >
          {
            about.length && about.map((data)=>{
              return(
                data.member.map((data)=>{
                    return(
                      <SwiperSlide className="w-full items-center justify-center pb-12 md:pb-0" >
                        <TeamMemb key={data._key} data={data}/> 
                      </SwiperSlide>
                    )  
                })
              )
            })
          }
        </Swiper>
        </div>
      </div>

      {/* about and machine section here */}
      <div className="w-screen h-fill p-4 bg-[#02251D]">
        <div className="text-center mb-6">
          <h1 className='font-semibold text-2xl text-white capitalize p-2'>What you need to know</h1>
          <p className='text-slate-300 text-center'>Lorem we do it ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut minima odit expedita, delectus sequi.</p>
        </div>
        <Experiance experiance={about && about[0]}/>
       
          {/* machines available */}
        <div className="">
            <h1 className='capitalize font-semibold text-2xl text-orange-400 text-center my-4'>Super machine in bridge design</h1>
            {
            about.map((data)=>{
              return(
              data.machine.map((data)=>{
                return <Machine key={data._id} data={data}/>
               })
             )})
            }
        </div>
      </div>
      <div className="">
        <Office data={office.length && office[0]}/>
      </div>
    </>
  )
}


export default About

export const getServerSideProps = async () => {
  const query ='*[_type == "about"]';
  const about = await client.fetch(query);
  
  const officequery ='*[_type == "office"]';
  const office = await client.fetch(officequery);

  return {
     props:{
     about,
     office,
  }
 }
}