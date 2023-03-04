import {Hero , Wedo , Testimonial ,Brand} from "@/components"

export default function Home() {
  return (
    <>
      <Hero/>
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
