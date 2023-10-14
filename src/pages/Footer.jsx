import React from 'react';
import {BsFacebook,BsTwitter,BsTelephone,BsFillEnvelopeFill} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {HiOutlineLocationMarker} from 'react-icons/hi'

const Footer = () => {
  return (
    <div>
      <div className='flex gap-4'>
      <div>
        <h5 className='font-semibold'>Company Info</h5>
        <p>About Us</p>
        <p>Carrier</p>
        <p>We are hiring</p>
        <p>Blog</p>
      </div>
      <div>
        <h5 className='font-semibold'>Legal</h5>
        <p>About Us</p>
        <p>Carrier</p>
        <p>We are hiring</p>
        <p>Blog</p>
      </div>
      <div>
        <h5 className='font-semibold'>Features</h5>
        <p>Business Marketing</p>
        <p>User Analytic</p>
        <p>Live Chat</p>
        <p>Unlimited Support</p>
      </div>
      <div>
        <h5 className='font-semibold'>Resources</h5>
        <p>IOS & Android</p>
        <p>Watch a Demo</p>
        <p>Customers</p>
        <p>API</p>
      </div>
      <div>
        <h5 className='font-semibold'>Get In Touch</h5>
        <div className='flex md:pt-4'>
            <BsTelephone color='red' size={'30px'}/>
        <p className='pl-4'>(480) 555-0103</p>
        </div>
        <div className='flex'>
        <HiOutlineLocationMarker color='red' size={'30px'}/>
        <p className='pl-4'>4517 Washington Ave. Manchester, 
            Kentucky 39495</p>
        </div>
        <div className='flex'>
        <BsFillEnvelopeFill color='red' size={'30px'}/>
        <p className='pl-4'>debra.holt@example.com</p>
        </div>
      </div>
      </div>
      <div className='flex md:justify-between md:pt-6'>
        <p>Made With Love By Figmaland All Right Reserved </p>
        <div className='flex gap-4'>
            <BsFacebook/>
            <AiFillInstagram/>
            <BsTwitter/>
        </div>
      </div>
    </div>
  )
}

export default Footer
