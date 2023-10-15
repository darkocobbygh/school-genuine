import React from 'react'

const Newsletter = () => {
  return (
    <div>
      <div className='flex md:flex-col md:items-center md:justify-center md:pb-40 md:pt-20 pt-10'>
        <div className='pl-10 md:pl-0 md:pr-0 pr-20 text-center'>
        <h6 className='text-sm font-bold text-[#FF6551]'>Newsletter</h6>
        <h3 className='font-bold text-2xl'>Most Popular Courses</h3>
        <p className='md:text-center'>Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics </p>
        <div className='md:pt-0 pt-4'>
            <input type="text" placeholder='Your Email' className='md:h-[58px] md:w-[688px] w-[220px] bg-[#E6E6E6]' />
            <button className='md:w-[117px] md:h-[58px] bg-[#FF6551] text-white'>Subscribe</button>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Newsletter
