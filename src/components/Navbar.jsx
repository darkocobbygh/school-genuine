import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
import './navbar.css'

const Navbar = () => {
    const [isOpem,setIsOpen]=useState(false);

    const toggleNav=()=>{
        setIsOpen(!isOpem);
    }

  return (
    <div>
      <nav className='flex md:justify-between justify-between pr-4 pl-4 h-full w-full pt-4'>
        <NavLink to={'/'} className={'logo md:text-base'}>Brandname</NavLink>
        <div className='bg-white'>
        <ul className='navlinks bg-white'>
            <NavLink to={'/'} className={'lg:pr-4'}>Home</NavLink>
            <NavLink to={'/product'} className={'lg:pr-4'}>Product</NavLink>
            <NavLink to={'/pricing'} className={'lg:pr-4'}>Pricing</NavLink>
            <NavLink to={'/contact'} className={'lg:pr-4'}>Contact</NavLink>
        </ul>
        </div>
        <div>
          <NavLink to={'/login'} className={'lg:pr-4'}>Login</NavLink>
          <NavLink to={'/join-us'} className={'lg:pr-4 text-[#FF6551]'}>Join us</NavLink>
        </div>
        <div className='md:hidden lg:hidden'>
        <button onClick={toggleNav}>
            {isOpem?<FaTimes size={'40px'}/>: <FaBars size={'40px'}/>}
        </button>
        </div>
      </nav>
      {isOpem &&(
        <div>
        <ul className='flex justify-center items-center flex-col text-4xl md:hidden'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/product'}>Product</NavLink>
            <NavLink to={'/pricing'}>Pricing</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
        </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
