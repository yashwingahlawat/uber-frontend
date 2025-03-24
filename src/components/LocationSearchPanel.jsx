import React from 'react'

const LocationSearchPanel = () => {
  return (
    <div>
      {/* this is just a sample data. */}
      <div className='items-start gap-4 flex justify-start my-4'>
        <h2 className='bg-[#eee] h-10 flex justify-center items-center w-10 rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-medium'>24B, Near Kapoor's Cafe, Coding School, Bhopal</h4>
      </div>
      <div className='items-start gap-4 flex justify-start my-4'>
        <h2 className='bg-[#eee] h-10 flex justify-center items-center w-10 rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-medium'>24B, Near Kapoor's Cafe, Coding School, Bhopal</h4>
      </div>
    </div>
  )
}

export default LocationSearchPanel