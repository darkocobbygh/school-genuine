import React from 'react'
import './practicee.css'
import sal from '../assets/sales.png';
import ratess from '../assets/Frame 4 sec-.png'

const PracticeAdvice = () => {
  return (
    <div className='bg-[#26335D] flex md:flex-col md:items-center md:justify-center'>
      <div className='md:w-[1044px] md:pb-20'>
      <div className='md:pt-14'>
        <h6 className='text-[#FF6551] text-sm font-bold'>Practice Advice</h6>
        <h2 className='font-bold text-[40px] text-white'>Our Popular Courses</h2>
        <p className='text-white'>Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className='flex gap-4 md:pt-14'>
        <div >
        <div className='md:h-[300px] md:w-[348px] saless'></div>
        <div className='bg-white md:h-[300px] md:w-[348px] md:pt-4 md:justify-center md:pl-6'>
        <div className='flex md:justify-between md:p-4'>
            <p className='font-bold text-sm text-[#FF6551]'>training Courses</p>
            <img src={ratess} alt="" />
            </div>
            <h5 className='text-[#252B42] font-bold text-[16px]'>Video in Live Action</h5>
            <p className='text-sm font-normal text-[#737373]'>We focus on ergonomics and meeting 
                you where you work. It's only a 
                keystroke away.</p>
                <img src={sal} alt="" className='md:pt-4' />
                <div className='flex md:gap-2 md:pt-4'>
                <p className='text-[#BDBDBD]'>$16.48</p><p className='text-[#2435A1]'>$6.48</p>
                </div>
                <div className='md:pt-4'>
                <button className='rounded-3xl border-2 md:h-[44px] md:w-[141px] border-[#FF6551] text-center text-[#FF6551] border-2'>Learn More &gt;</button>
                </div>  
        </div>
        </div>
       <div>
        <div className='md:h-[300px] md:w-[348px] saa'></div>
        <div className='bg-white md:h-[300px] md:w-[348px] md:pt-4 md:justify-center md:pl-6'>
            <div className='flex md:justify-between md:p-4'>
            <p className='font-bold text-sm text-[#FF6551]'>Books Liberary	</p>
            <img src={ratess} alt="" />
            </div>
            <h5 className='text-[#252B42] font-bold text-[16px]'>Every Client Matters</h5>
            <p className='text-sm font-normal text-[#737373]'>We focus on ergonomics and meeting 
                you where you work. It's only a 
                keystroke away.</p>
                <img src={sal} alt="" className='md:pt-4' />
                <div className='flex md:gap-2 md:pt-4'>
                <p className='text-[#BDBDBD]'>$16.48</p><p className='text-[#2435A1]'>$6.48</p>
                </div>
                <div className='md:pt-4'>
                <button className='rounded-3xl border-2 md:h-[44px] md:w-[141px] border-[#FF6551] text-center text-[#FF6551] border-2'>Learn More &gt;</button>
                </div>  
          </div>
       </div>
        <div>
          <div className='md:h-[300px] md:w-[348px] salad'></div>
          <div className='bg-white md:h-[300px] md:w-[348px] md:pt-4 md:justify-center md:pl-6'>
           <div className='flex md:justify-between md:p-4'>
           <p className='font-bold text-sm text-[#FF6551]'>Certified Teacher</p>
           <img src={ratess} alt="" />
           </div>
            <h5 className='text-[#252B42] font-bold text-[16px]'>Get Quality Education</h5>
            <p className='text-sm font-normal text-[#737373]'>We focus on ergonomics and meeting 
                you where you work. It's only a 
                keystroke away.</p>
                <img src={sal} alt="" className='md:pt-4' />
                <div className='flex md:gap-2 md:pt-4'>
                <p className='text-[#BDBDBD]'>$16.48</p><p className='text-[#2435A1]'>$6.48</p>
                </div>
                <div className='md:pt-4'>
                <button className='rounded-3xl border-2 md:h-[44px] md:w-[141px] border-[#FF6551] text-center text-[#FF6551] border-2'>Learn More &gt;</button>
                </div>  
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PracticeAdvice
