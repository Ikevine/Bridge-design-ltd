import React from 'react';
import { client } from '@/client';
import {Ahero ,TeamMemb ,Experiance ,Machine} from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const About = ({about}) => {
  return (
    <>
      <Ahero ahome={about && about[0]}/>
      <div className="my-4">
        <h1 className='text-center font-semibold text-2xl capitalize'>Our bestTeam members</h1>
        <div className='flex space-x-3'>
        <Swiper
              spaceBetween={30}
              slidesPerView={2}
              // autoplay={{
              //   delay: 10000,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
          {
            about.map((data)=>{
              return(
              data.member.map((data)=>{
                return (
                <SwiperSlide>
                  <TeamMemb key={data._id} data={data}/>
                </SwiperSlide>
                )
              })
            )})
          }  
        </Swiper> 

        </div>
      </div>

      {/* about and machine section here */}
      <div className="w-screen h-fill p-4 bg-[#02251D]">
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
      
    </>
  )
}


export default About

export const getServerSideProps = async () => {
  const query ='*[_type == "about"]';
  const about = await client.fetch(query);


  return {
     props:{
     about,
  }
 }
}