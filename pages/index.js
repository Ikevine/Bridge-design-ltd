import testimonial from "@/backend/schemas/testimonial"
import {Hero , Wedo , Testimonial ,Brand , Wera} from "@/components"
import {client } from '../client'
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
                <div key={data._id} className='grid md:grid-cols-3 grid-rows-1 max-w-[60%] mx-auto'>
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
          <div className="flex flex-col  md:flex-row m-10 space-y-4 md:space-x-12 items-center justify-center max-w-[80%] mx-auto">
             <video className='h-80 rounded-lg' controls >
                 <source src='' type='video/mp4'/>
             </video>
              {
                home.length && home.map((data)=>{
                  return(
                    <div key={data._id} className='grid md:grid-cols-3 grid-rows-1 max-w-[60%] mx-auto'>
                      {data.we_are.map((datas)=>{
                        return (
                          <Wera key={datas._id} datas={datas}/>)//
                      })}
                    </div>
                  ) 
                })
              }
          </div>
          {/* testimonial */}

          {
                home.length && home.map((data)=>{
                  return(
                    <div key={data._id} className='grid md:grid-cols-3 grid-rows-1 max-w-[60%] mx-auto'>
                      {data.testimonial.map((datas)=>{
                        return (
                          <Testimonial key={datas._id} datas={datas}/>)//
                      })}
                    </div>
                  ) 
                })
              }
      </div>

      <div className="my-4">
        <h1 className="capitalize font-semibold text-center text-2xl text-slate-700">Popular brand work with us</h1>
        <div className="flex justify-between items-center">
          {
            home.length && home.map((data)=>{
              return(
                data.brand.map((data)=>{
                    return <Brand key={data._key} data={data}/>  
                })
              )
            })
          }
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