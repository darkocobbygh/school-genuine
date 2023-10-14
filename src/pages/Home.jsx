import React from 'react';
import bom from '../assets/bom.png';
import teles from '../assets/teles.png';
import grads from '../assets/grads.png'
const Home = () => {
  return (
    <div className='flex md:flex-col md:w-[1046px] md:h-[941px] pt-10 items-center'>
      <div className=' md:pl-80'>
      <div className='md:w-[599px]'>
      <h5 className='text-[#FF6551]'>For Better Future</h5>
      <h1 className='font-bold text-6xl md:pt-6'>HIGH QUALITY <br /> COURSES</h1>
      <h4 className='font-normal text-[#737373] md:pt-6'>Every day brings with it a fresh set of learning possibilities.</h4>
      <div className='flex gap-4 md:pt-6'>
        <button className='bg-[#FF6551] md:w-[192px] md:h-[52px] text-white rounded-md'>Get Quote Now</button>
        <button className='text-[#FF6551] md:w-[192px] md:h-[52px] border-2 border-[#FF6551] rounded-md'>Learn More</button>
      </div>
      </div>
      <div className='flex items-center pt-20 md:gap-6'>
        <div className='md:h-[300px] md:w-[328px] md:pt-6 shadow-lg md:pl-4'>
          <img src={bom} alt="" />
          <h3 className='pt-6 text-2xl font-bold'>Expert instruction</h3>
          <div className='md:w-[50px] md:h-[2px] bg-[#E74040] md:mt-6'></div>
          <p className='pt-6'>The gradual accumulation of 
            information about atomic and 
            small-scale behaviour...
            </p>
        </div>
        <div className='md:h-[300px] md:pl-4 md:pt-6 md:w-[328px] shadow-lg'>
          <img src={teles} alt="" />
          <h3 className='pt-6 text-2xl font-bold'>Training Courses</h3>
          <div className='md:w-[50px] md:h-[2px] md:mt-6 bg-[#E74040]'></div>
          <p className='pt-6'>The gradual accumulation of 
            information about atomic and 
            small-scale behaviour...
            </p>
        </div>
        <div className='md:h-[300px] md:pl-4 md:w-[328px] md:pt-6 shadow-lg flex flex-col'>
          <img src={grads} alt="" className='md:w-[70px] md:h-[70px]' />
          <h3 className='pt-6 text-2xl font-bold'>Lifetime Changes</h3>
          <div className='md:w-[50px] md:h-[2px] md:mt-6 bg-[#E74040]'></div>
          <p className='pt-6'>The gradual accumulation of 
            information about atomic and 
            small-scale behaviour...
            </p>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Home
