import React from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import picc from '../assets/picc.png';
import mann from '../assets/circle.png';
import secon from '../assets/testimonial-user-cover-169.png'

const Approdable = () => {
  return (
    <div className='flex md:flex-col md:items-center md:justify-center'>
      <div className='md:w-[1044px] md:pb-20'>
      <div className=''>
        <p className='text-[#FF6551] font-bold text-sm'>Practice Advice</p>
        <h3 className='text-4xl font-bold text-[#252B42] md:pt-4'>Approdable Packages</h3>
        <p className='md:pt-4 text-[#737373]'>Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className='flex gap-4 md:items-center md:justify-center md:pt-16'>
        <div className='md:w-[328px] items-center justify-center'>
          <div className='flex gap-2 justify-center'>
            <AiFillStar color='gold' size={'20px'}/>
            <AiFillStar color='gold' size={'20px'}/>
            <AiFillStar color='gold' size={'20px'}/>
            <AiFillStar color='gold' size={'20px'}/>
            <AiOutlineStar color='gold' size={'20px'}/>
          </div>
         <p className='text-center'>Slate helps you see <br />
            how many more days <br />
            you need to work to <br />
            reach your financial <br />
            goal for the month <br />
            and year.</p>
            <div className='flex gap-4 md:pl-14 md:pt-10'>
                <img src={picc} alt="" />
                <div className='flex md:flex-col'>
                <h6 className='text-[#FF6551] font-bold text-sm'>Regina Miles</h6>
                <p>Designer</p>
                </div>
            </div>
        </div>
        <div className='md:w-[328px] items-center justify-center'>
        <div className='flex gap-2 justify-center'>
            <AiFillStar color='gold' size={'20px'}/>
            <AiFillStar color='gold' size={'20px'}/>
            <AiFillStar color='gold' size={'20px'}/>
            <AiFillStar color='gold' size={'20px'}/>
            <AiOutlineStar color='gold' size={'20px'}/>
          </div>
         <p className='text-center'>Slate helps you see <br />
            how many more days <br />
            you need to work to <br />
            reach your financial <br />
            goal for the month <br />
            and year.</p>
            <div className='flex gap-4 md:pl-14 md:pt-10'>
                <img src={mann} alt="" />
                <div className='flex md:flex-col'>
                <h6 className='text-[#FF6551] font-bold text-sm'>Regina Miles</h6>
                <p>Designer</p>
                </div>
            </div>
        </div>
        <div className='md:w-[328px] items-center justify-center'>
        <div className='flex gap-2 justify-center'>
            <AiFillStar color='gold' size={'20px'}/>
            <AiFillStar color='gold' size={'20px'}/>
            <AiFillStar color='gold' size={'20px'}/>
            <AiFillStar color='gold' size={'20px'}/>
            <AiOutlineStar color='gold' size={'20px'}/>
          </div>
         <p className='text-center'>Slate helps you see <br />
            how many more days <br />
            you need to work to <br />
            reach your financial <br />
            goal for the month <br />
            and year.</p>
            <div className='flex md:gap-4 md:pl-14 md:pt-10'>
                <img src={secon} alt="" />
               <div className='flex md:flex-col'>
               <h6 className='text-[#FF6551] font-bold text-sm'>Regina Miles</h6>
                <p>Designer</p>
               </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Approdable
