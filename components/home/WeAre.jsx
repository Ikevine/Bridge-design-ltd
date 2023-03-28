import React from 'react'

const WeAre = ({datas:{name , descr}}) => {
  return (
      <div className="w-fit bg-white p-8 text-center flex flex-col space-y-2 drop-shadow-md rounded-lg h-52 justify-center items-center ">
          <h2 className='font-semibold text-xl'>{name}</h2>
          <p>{descr}</p>
      </div>
  )
}

export default WeAre