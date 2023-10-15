import React from 'react';
import {BsFacebook,BsTwitter,BsTelephone,BsFillEnvelopeFill} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {HiOutlineLocationMarker} from 'react-icons/hi'

const Footer = () => {
  return (
    <div className='flex md:flex-col flex-col md:items-center md:justify-center'>
      <div className='md:w-[1044px] md:pb-20 pl-20 pr-20'>
      <div className='flex gap-10 flex-col md:flex-row pt-6'>
      <div>
        <h5 className='font-semibold'>Company Info</h5>
        <p className='text-[#737373] md:font-bold text-sm md:pt-4'>About Us</p>
        <p className='text-[#737373] md:font-bold text-sm'>Carrier</p>
        <p className='text-[#737373] md:font-bold text-sm'>We are hiring</p>
        <p className='text-[#737373] md:font-bold text-sm'>Blog</p>
      </div>
      <div>
        <h5 className='font-semibold'>Legal</h5>
        <p className='text-[#737373] md:font-bold text-sm md:pt-4'>About Us</p>
        <p className='text-[#737373] md:font-bold text-sm'>Carrier</p>
        <p className='text-[#737373] md:font-bold text-sm'>We are hiring</p>
        <p className='text-[#737373] md:font-bold text-sm'>Blog</p>
      </div>
      <div>
        <h5 className='font-semibold'>Features</h5>
        <p className='text-[#737373] md:font-bold text-sm md:pt-4'>Business Marketing</p>
        <p className='text-[#737373] md:font-bold text-sm'>User Analytic</p>
        <p className='text-[#737373] md:font-bold text-sm'>Live Chat</p>
        <p className='text-[#737373] md:font-bold text-sm'>Unlimited Support</p>
      </div>
      <div>
        <h5 className='font-semibold'>Resources</h5>
        <p className='text-[#737373] md:font-bold text-sm md:pt-4'>IOS & Android</p>
        <p className='text-[#737373] md:font-bold text-sm'>Watch a Demo</p>
        <p className='text-[#737373] md:font-bold text-sm'>Customers</p>
        <p className='text-[#737373] md:font-bold text-sm'>API</p>
      </div>
      <div>
        <h5 className='font-semibold'>Get In Touch</h5>
        <div className='flex md:pt-4'>
            <BsTelephone color='red' size={'30px'}/>
        <p className='pl-4 text-[#737373] md:font-bold text-s'>(480) 555-0103</p>
        </div>
        <div className='flex'>
        <HiOutlineLocationMarker color='red' size={'30px'}/>
        <p className='pl-4 text-[#737373] md:font-bold text-s'>4517 Washington Ave. Manchester, <br />
            Kentucky 39495</p>
        </div>
        <div className='flex'>
        <BsFillEnvelopeFill color='red' size={'30px'}/>
        <p className='pl-4 text-[#737373] md:font-bold text-s'>debra.holt@example.com</p>
        </div>
      </div>
      </div>
      <div className='flex md:justify-between md:pt-6 pt-6'>
        <p>Made With Love By Figmaland All Right Reserved </p>
        <div className='flex gap-4 md:pr-40 pl-6'>
            <BsFacebook size={'30px'} color='red'/>
            <AiFillInstagram size={'30px'} color='red'/>
            <BsTwitter size={'30px'} color='red'/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
