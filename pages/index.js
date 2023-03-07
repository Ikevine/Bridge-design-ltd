import {Hero , Wedo , Testimonial ,Brand} from "@/components"
import {client } from '../client'
export default function Home({home , wedod}) {
  return (
    <>
    {/* // */}
   
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
                      <Wedo key={datas._key} datas={datas}/>)//
                  })}
                </div>
               ) 
             })
            }
      </div>
      
      <Testimonial/>
      <div className="my-4">
        <h1 className="capitalize font-semibold text-center text-2xl text-slate-700">Popular brand work with us</h1>
        <div className="flex justify-between items-center">
          <Brand/>
          <Brand/>
          <Brand/>
          <Brand/>
          <Brand/>
        </div>
      </div>
      
    </>
  )
}

export const getServerSideProps = async () => {
  const query ='*[_type == "home"]';
  const home = await client.fetch(query);

  const wedoQuery ='*[_type == "wedo"]';
  const wedod = await client.fetch(query);

  return {
     props:{
     home,wedod
  }
 }
}