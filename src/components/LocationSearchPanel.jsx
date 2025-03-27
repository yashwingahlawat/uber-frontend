import React from 'react'

const LocationSearchPanel = () => {
  const locations=["24B, Near Kapoor's Cafe, Coding School, Bhopal","22B, Near Malhotra's Cafe, Coding School, Bhopal"]
  return (
    <div>
      {
        locations.map(val=>
          <div className='items-start gap-4 p-3 border-2 border-gray-50 rounded-xl active:border-black flex justify-start my-2'>
        <h2 className='bg-[#eee] h-10 flex justify-center items-center w-10 rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-medium'>{val}</h4>
      </div>
        )
      }
      {/* this is just a sample data. */}
      {/* <div className='items-start gap-4 p-3 border-2 border-gray-50 rounded-xl active:border-black flex justify-start my-2'>
        <h2 className='bg-[#eee] h-10 flex justify-center items-center w-10 rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-medium'>24B, Near Kapoor's Cafe, Coding School, Bhopal</h4>
      </div>
      <div className='items-start gap-4 p-3 border-2 border-gray-50 rounded-xl active:border-black flex justify-start my-2'>
        <h2 className='bg-[#eee] h-10 flex justify-center items-center w-10 rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-medium'>24B, Near Kapoor's Cafe, Coding School, Bhopal</h4>
      </div> */}
    </div>
  )
}

export default LocationSearchPanel