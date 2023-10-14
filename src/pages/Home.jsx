import React from 'react'
const Home = () => {
  return (
    <div className='flex md:flex-col md:w-[1046px] md:h-[941px] pt-10 items-center'>
      <div className='md:w-[599px] md:pl-4'>
      <h5 className='text-[#FF6551]'>For Better Future</h5>
      <h1>HIGH QUALITY COURSES</h1>
      <h4>Every day brings with it a fresh set of learning possibilities.</h4>
      <div className='flex gap-4'>
        <button className='bg-[#FF6551] md:w-[192px] md:h-[52px]'>Get Quote Now</button>
        <button className='text-[#FF6551] md:w-[192px] md:h-[52px] border-2 border-[#FF6551]'>Learn More</button>
      </div>
      </div>
      <div className='flex md:pl-80 items-center pt-4'>
        <div className='md:h-[300px] md:w-[328px] border-2'>
          <h3>Expert instruction</h3>
          <p>The gradual accumulation of 
            information about atomic and 
            small-scale behaviour...
            </p>
        </div>
        <div className='md:h-[300px] md:w-[328px] border-2'>
          <h3>Training Courses</h3>
          <p>The gradual accumulation of 
            information about atomic and 
            small-scale behaviour...
            </p>
        </div>
        <div className='md:h-[300px] md:w-[328px] border-2 flex flex-col'>
          <h3>Lifetime Changes</h3>
          <p>The gradual accumulation of 
            information about atomic and 
            small-scale behaviour...
            </p>
        </div>
      </div>
    </div>
  )
}

export default Home
