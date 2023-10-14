import React from 'react'

const Newsletter = () => {
  return (
    <div>
      <div className='flex md:flex-col md:items-center md:justify-center md:pb-40 md:pt-20'>
        <h6 className='md:text-sm md:font-bold text-[#FF6551]'>Newsletter</h6>
        <h3 className='md:font-bold md:text-2xl'>Most Popular Courses</h3>
        <p className='md:text-center'>Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics </p>
        <div>
            <input type="text" placeholder='Your Email' className='md:h-[58px] md:w-[688px] bg-[#E6E6E6]' />
            <button className='md:w-[117px] md:h-[58px] bg-[#FF6551] text-white'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
