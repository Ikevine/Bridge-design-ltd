import {Hero , Wedo , Testimonial ,Brand} from "@/components"
import {client } from '../client'
export default function Home({home}) {
  return (
    <>
      <Hero shome={home}/>
      <Wedo/>
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

  return {
     props:{
     home,
  }
 }
}