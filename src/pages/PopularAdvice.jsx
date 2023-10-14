import React from 'react';
import love from '../assets/circle sec-.png'
import {AiFillCheckCircle} from 'react-icons/ai'

const PopularAdvice = () => {
  return (
    <div className='flex md:flex-col md:items-center md:justify-center'>
      <div className='md:w-[1044px] md:pb-20'>
      <div className='pt-14'>
        <p className='text-[#FF6551] font-bold text-sm'>Practice Advice</p>
        <h3 className='text-2xl font-bold md:pt-4'>Watch our Courses</h3>
        <p className='text-sm font-normal md:pt-4 text-[#737373]'>Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className='flex gap-4 md:pt-20'>
        <div className='md:w-[328px] md:h-[737px] shadow-lg md:pt-10 md:pl-10'>
            <img src={love} alt="" />
            <h3 className='font-bold text-2xl md:pt-4'>FREE</h3>
            <p className='font-bold text-sm text-[#737373] md:pt-4'>Organize across all apps by hand</p>
            <h2 className='text-[#FF6551] text-[40px] md:pt-4 font-bold'>19$</h2>
            <p className='text-[#8EC2F2] text-sm font-bold pt-2'>Per Month</p>
            <p className='text-[#737373] md:pt-8 text-sm font-normal'>Slate helps you see how 
            many more days you need...</p>
            <div className='md:pt-8'>
              <button className='bg-[#FF6551] md:w-[243px] md:h-[52px] text-white rounded-md'>Try for free</button>
            </div>
            <div className='pt-6'>
            <div className='flex gap-2'>
            <AiFillCheckCircle color='green' size={'20px'}/>
            <p className='text-sm font-bold'>Unlimited product updates</p>
            </div>
            <div className='flex gap-2 md:pt-4'>
              <AiFillCheckCircle color='green' size={'20px'}/>
              <p className='text-sm font-bold'>Unlimited product updates</p>
            </div>
            <div className='flex gap-2 md:pt-4'>
              <AiFillCheckCircle color='green' size={'20px'}/>
              <p className='text-sm font-bold'>Unlimited product updates</p>
            </div>
            <div className='flex gap-2 md:pt-4'>
              <AiFillCheckCircle color='gray' size={'20px'}/>
              <p className='text-sm '>1GB  Cloud storage</p>
            </div>
           <div className='flex gap-2 md:pt-4'>
            <AiFillCheckCircle color='gray' size={'20px'}/>
            <p className='text-sm '>Email and community support</p>
           </div>
            </div>
        </div>
        <div className='shadow-lg md:w-[328px] md:pt-10 md:pl-10'>
            <img src={love} alt="" />
            <h3 className='font-bold text-2xl md:pt-4'>FREE</h3>
            <p className='font-bold text-sm text-[#737373] md:pt-4'>Organize across all apps by hand</p>
            <h2 className='text-[#FF6551] text-[40px] font-bold md:pt-4'>19$</h2>
            <p className='text-[#8EC2F2] text-sm font-bold pt-2'>Per Month</p>
            <p className='text-[#737373] md:pt-8 text-sm font-normal'>Slate helps you see how 
            many more days you need...</p>
            <div className='md:pt-8'>
              <button className='bg-[#FF6551] md:w-[243px] md:h-[52px] text-white rounded-md'>Try for free</button>
            </div>
            <div className='pt-6'>
            <div className='flex gap-2'>
            <AiFillCheckCircle color='green' size={'20px'}/>
            <p className='text-sm font-bold'>Unlimited product updates</p>
            </div>
            <div className='flex gap-2 md:pt-4'>
              <AiFillCheckCircle color='green' size={'20px'}/>
              <p className='text-sm font-bold'>Unlimited product updates</p>
            </div>
            <div className='flex gap-2 md:pt-4'>
              <AiFillCheckCircle color='green' size={'20px'}/>
              <p className='text-sm font-bold'>Unlimited product updates</p>
            </div>
            <div className='flex gap-2 md:pt-4'>
              <AiFillCheckCircle color='gray' size={'20px'}/>
              <p className='text-sm '>1GB  Cloud storage</p>
            </div>
           <div className='flex gap-2 md:pt-4'>
            <AiFillCheckCircle color='gray' size={'20px'}/>
            <p className='text-sm '>Email and community support</p>
           </div>
            </div>
        </div>
        <div className='shadow-lg md:w-[328px] md:pt-10 md:pl-10'>
            <img src={love} alt="" />
            <h3 className='font-bold text-2xl md:pt-4'>FREE</h3>
            <p className='font-bold text-sm text-[#737373] md:pt-4'>Organize across all apps by hand</p>
            <h2 className='text-[#FF6551] text-[40px] font-bold md:pt-4'>19$</h2>
            <p className='text-[#8EC2F2] text-sm font-bold pt-2'>Per Month</p>
            <p className='text-[#737373] md:pt-8 text-sm font-normal'>Slate helps you see how 
            many more days you need...</p>
            <div className='md:pt-8'>
              <button className='bg-[#FF6551] md:w-[243px] md:h-[52px] text-white rounded-md'>Try for free</button>
            </div>
            <div className='pt-6'>
            <div className='flex gap-2'>
            <AiFillCheckCircle color='green' size={'20px'}/>
            <p className='text-sm font-bold'>Unlimited product updates</p>
            </div>
            <div className='flex gap-2 md:pt-4'>
              <AiFillCheckCircle color='green' size={'20px'}/>
              <p className='text-sm font-bold'>Unlimited product updates</p>
            </div>
            <div className='flex gap-2 md:pt-4'>
              <AiFillCheckCircle color='green' size={'20px'}/>
              <p className='text-sm font-bold'>Unlimited product updates</p>
            </div>
            <div className='flex gap-2 md:pt-4'>
              <AiFillCheckCircle color='gray' size={'20px'}/>
              <p className='text-sm '>1GB  Cloud storage</p>
            </div>
           <div className='flex gap-2 md:pt-4'>
            <AiFillCheckCircle color='gray' size={'20px'}/>
            <p className='text-sm '>Email and community support</p>
           </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PopularAdvice
