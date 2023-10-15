import React from 'react'
import qua from '../assets/thumb-concept.png';
import hooli from '../assets/hooli.png'
import lyat from '../assets/lyat.png'
import coll from '../assets/col-md-2 sec-.png';
import stripp from '../assets/stripe.png';
import awss from '../assets/awss.png'
import reddi from '../assets/fa-brands-6.png'
const QualityEdu = () => {
  return (
    <div>
      <div className='flex md:flex-row flex-col md:items-center pl-20 md:justify-center pt-6 md:gap-20 md:pl-12 md:w-full'>
        <div>
            <img src={qua} alt="pic" className='md:w-[506.5px] md:h-[535.65px] w-72' />
        </div>
        <div className='flex-wrap w-[328px] h-[300px]'>
          <div className='md:h-2 w-20 bg-red-600'></div>
            <h2 className='text-[#252B42] text-[40px] md:pt-10 font-bold pt-4'>Get Quality <br /> Education</h2>
            <p className='text-[#737373]'>Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: <br />
            Newtonian mechanics </p>
            <button className='text-[#FF6551] pt-2 md:pt-0'>Learn More &gt;</button>
        </div>
      </div>
      <div className='flex gap-4 md:justify-center md:pb-20 md:pt-20 pl-20 pr-10 md:pr-0 pb-4 md:pb-4 md:pl-0'>
        <div><img src={hooli} alt="" /></div>
        <div><img src={lyat} alt="" /></div>
        <div><img src={coll} alt="" /></div>
        <div><img src={stripp} alt="" /></div>
        <div><img src={awss} alt="" /></div>
        <div><img src={reddi} alt="" /></div>
      </div>
    </div>
  )
}

export default QualityEdu
