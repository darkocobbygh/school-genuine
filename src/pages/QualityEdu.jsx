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
      <div className='flex md:items-center md:justify-center md:gap-20 md:h-full md:pl-12 md:w-full'>
        <div>
            <img src={qua} alt="pic" />
        </div>
        <div className='flex-wrap'>
          <div className='md:h-2 md:w-20 bg-red-600'></div>
            <h2 className='text-[#252B42] text-[40px] md:pt-10 font-bold'>Get Quality <br /> Education</h2>
            <p>Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: <br />
            Newtonian mechanics </p>
            <button className='text-[#FF6551]'>Learn More &gt;</button>
        </div>
      </div>
      <div className='flex gap-4 md:justify-center md:pb-20'>
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
