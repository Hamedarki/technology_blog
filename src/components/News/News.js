import React, { useEffect, useState } from 'react';
import news1 from '../../images/Illustration.svg';
import news2 from '../../images/Illustration (1).svg'
import Aos from "aos";
import "aos/dist/aos.css";
import NewNews from './NewNews';

const News = () => {
  
    
  const [post , setPost] = useState([])
const [req , setReq] = useState(false)


  const getNewNews = () =>{
   setReq((preReq) => !preReq)
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='flex flex-col justify-center items-center p-4 md:p-32 gap-16 md:gap-28'>
      <div className='flex flex-col-reverse md:flex-row justify-center items-start' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
         <div className='flex flex-col justify-start items-start gap-10'>
         <h4 className='text-4xl text-center md:text-left w-auto md:text-4xl font-bold md:w-3/4 leading-snug'>Quality and Process Management</h4>
         <p className='text-gray-600 w-auto text-center md:text-left md:w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
         <button className='w-[100%] md:w-[160px] h-[48px] bg-[#F84646] font-semibold hover:text-white rounded-md  cursor-pointer duration-700 ease-in-out '>More</button>
         </div>
         <img src={news1} alt='conversation' className='h-[470px] w-[500px] rounded-lg hover:opacity-90 duration-700'/>
      </div>
      <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='flex flex-col-reverse md:flex-row-reverse justify-center items-center'>
         <div className='flex flex-col justify-end items-end gap-10'>
         <h4 className='text-4xl text-center md:text-left md:text-4xl font-bold w-auto md:w-3/4 leading-snug'>Test Management and Analysis</h4>
         <p className='text-gray-600 w-auto text-center md:text-left md:w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
         <button className='w-[100%] md:w-[160px] h-[48px] bg-[#F84646] font-semibold  relative right-0 md:right-72 hover:text-white rounded-md  cursor-pointer duration-700 ease-in-out '>More</button>
         </div>
         <img src={news2} alt='conversation' className='h-[470px] w-[500px] rounded-lg hover:opacity-90 duration-700'/>
      </div>
      <button onClick={getNewNews}  className='w-[100%] md:w-[160px] h-[48px] bg-[#F84646] font-semibold  relative right-0  hover:text-white rounded-md  cursor-pointer duration-700 ease-in-out '>More News</button>
      <div className='flex flex-col items-center justify-center gap-28'>
      {req && <NewNews post={post} setPost={setPost}/>}
      </div>
    </div>
  )
}

export default News