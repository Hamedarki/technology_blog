import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

import {IoShareSocialOutline} from 'react-icons/io5';
import {CiLinkedin} from 'react-icons/ci';
import {SlSocialTwitter} from 'react-icons/sl';
import {BsInstagram} from 'react-icons/bs';
import {CiFacebook} from 'react-icons/ci'

const Footer = () => {
   useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  return (
    <div className='flex flex-col py-20 px-12 bg-[#F8464A] text-white gap-16' data-aos="fade-up"
    data-aos-duration="3000">
      <div className='flex flex-col gap-16 md:gap-0 md:flex-row justify-evenly items-start text-white text-sm'>
            <ul className='flex flex-col gap-6'>
               <h4 className='text-lg font-bold md:font-semibold pb-2 '>Solution and Services</h4>
               <li className='cursor-pointer'>Software development</li>
               <li className='cursor-pointer'>Outsourcing</li>
               <li className='cursor-pointer'>Quality and Process Management</li>
               <li className='cursor-pointer'>consultancy</li>
               <li className='cursor-pointer'>IoT Supported Solutions</li>
            </ul>
            <ul className='flex flex-col gap-6'>
               <h4 className='text-lg font-bold md:font-semibold pb-2'>Products</h4>
               <li className='cursor-pointer'>Education Management System</li>
               <li className='cursor-pointer'>Human Capital Management System</li>
               <li className='cursor-pointer'>Customer Relationship Management System</li>
               <li className='cursor-pointer'>Content Management System</li>
            </ul>
            <ul className='flex flex-col gap-6'>
               <h4 className='text-lg font-bold md:font-semibold pb-2 '>Institutional</h4>
               <li className='cursor-pointer'>about us</li>
               <li className='cursor-pointer'>Documents and Competencies</li>
               <li className='cursor-pointer'>Work partners</li>
            </ul>
            <ul className='flex flex-col gap-6'>
               <h4 className='text-lg font-bold md:font-semibold pb-2 '>Communication</h4>
               <li className='cursor-pointer'>Information Request Form</li>
               <li className='cursor-pointer'>Expert Request Form</li>
            </ul>
      </div>
      <div className='px-1 md:px-20 flex flex-col-reverse md:flex-row md:justify-between gap-10 md:gap-0 '>
         <h6 className='text-base md:text-sm'>© Copyright 2010-2021 - Can Çevik</h6>
         <div className='flex flex-row items-start  justify-start font-bold md:font-normal md:items-center md:justify-center gap-3.5'>
            <IoShareSocialOutline size={'19px'} className='cursor-pointer'/>
            <CiLinkedin size={'19px'} className='cursor-pointer '/>
            <SlSocialTwitter size={'19px'} className='cursor-pointer' />
            <BsInstagram size={'16px'} className='cursor-pointer'/>
            <CiFacebook size={'21px'} className='cursor-pointer'/>
         </div>
      </div>
    </div>
  )
}

export default Footer