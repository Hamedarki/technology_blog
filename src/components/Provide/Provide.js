import React, { useEffect } from "react";
import Aos from "aos";
import {TfiArrowCircleRight , TfiArrowCircleDown} from 'react-icons/tfi'
import { useMediaQuery } from 'react-responsive';

import "aos/dist/aos.css";
const Provide = () => {


  const isMobileScreen = useMediaQuery({ query: `(max-width: 760px)` });



  useEffect(() => {
    Aos.init({ duration: 1000 });

  }, []);



  return (
    <div className="bg-[#F84646] w-screen  h-screen md:h-[376px] p-7 pb-1 pt-8 md:p-16  flex flex-col  justify-center md:justify-evenly"      data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <div className="flex flex-col  h-[20%]  md:h-auto items-center justify-center gap-7 md:gap-4 mb-0 md:mb-12">
        <h3 className="text-4xl text-center md:text-right md:text-4xl font-semibold text-white">What Do We Provide With Test Management? </h3>
        <span className=" text-white">IoT Supported Solutions</span>
      </div>
      <ul className="flex flex-col md:flex-row items-center h-[70%] md:h-auto justify-center gap-5 md:gap-14 text-lg md:text-base text-white text-center">
         <li>Software Quality<br/>We increase</li>
         {isMobileScreen ? <TfiArrowCircleDown size={'20px'} /> : <TfiArrowCircleRight size={'20px'} />}
         <li>Predict Possible Errors<br/>We determine</li>
         {isMobileScreen ? <TfiArrowCircleDown size={'20px'} /> : <TfiArrowCircleRight size={'20px'} />}
         <li>Possible Risks<br/>we prevent</li>
         {isMobileScreen ? <TfiArrowCircleDown size={'20px'} /> : <TfiArrowCircleRight size={'20px'} />}
         <li>From Time and Cost<br/>We Provide Savings</li>
      </ul>
    </div>
  );
};

export default Provide;
