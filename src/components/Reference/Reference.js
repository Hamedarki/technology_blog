import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import logos from "../../images/Logos.svg";
import users from "../../images/Users.svg";
import usersResponsive from "../../images/logos/Logos.svg";

import airbnb from "../../images/logos/Airbnb Logo.svg";
import google from "../../images/logos/Google Logo.svg";
import bookmeapp from "../../images/logos/BookMyShow Logo.svg";
import microsoft from "../../images/logos/Microsoft Logo.svg";
import fedex from "../../images/logos/FedEx Logo.svg";
import ola from "../../images/logos/OLA Logo.svg";
import lala from "../../images/logos/OYO Logo.svg";
import amazon from "../../images/logos/Amazon Logo.svg";
import { useMediaQuery } from "react-responsive";
import { BsArrowRight } from "react-icons/bs";

const Reference = () => {
  let isMobileScreen = useMediaQuery({ query: `(max-width: 760px)` });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className=" flex flex-col items-center justify-center pb-2 md:py-16 md:p-0"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="bg-[#F4F5F7] w-screen h-auto flex flex-col justify-center items-center pt-14 pb-4 md:pb-8 ">
        <h2 className="text-4xl font-bold">Our references</h2>
        <p className="pt-4 pb-6">
          Our business partners who trust us and work with us
        </p>
        {/* {isMobileScreen ? (
          <div className="flex flex-col justify-center items-center">
            <div className="leading-none">
              <img src={airbnb} alt="airbnb logo" />
            </div>
            <div className="h-96 overflow-hidden">
              <img src={google} alt="google" height={'10px'}/>
              <img src={bookmeapp} alt="book me app" height={'10px'} />
            </div>
            <div>
              <img src={microsoft} alt="microsoft app" />
              <img src={fedex} alt="fedex" />
              <button className="bg-white hover:bg-[#F8464A] hover:text-white duration-700 ease-in-out relative left-10 rounded-2xl  text-[#F8464A] w-[170px] h-[90px] text-center font-bold text-lg flex flex-row items-center justify-center gap-2">
                <p>See all </p>
                <BsArrowRight size={"22px"} />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex  md:flex-row justify-center items-center gap-0 leading-tight pb-10">
            <div className="leading-none">
              <img src={airbnb} alt="airbnb logo" />
            </div>
            <div>
              <img src={google} alt="google" />
              <img src={bookmeapp} alt="book me app" />
            </div>
            <div>
              <img src={microsoft} alt="microsoft app" />
              <img src={fedex} alt="fedex" />
              <button className="bg-white hover:bg-[#F8464A] hover:text-white duration-700 ease-in-out relative left-10 rounded-2xl  text-[#F8464A] w-[170px] h-[90px] text-center font-bold text-lg flex flex-row items-center justify-center gap-2">
                <p>See all </p>
                <BsArrowRight size={"22px"} />
              </button>
            </div>
            <div>
              <img src={lala} alt="lala" />
              <img src={ola} alt="ola" />
            </div>
            <div>
              <img src={amazon} alt="amazon" />
            </div>
          </div>
        )} */}
        {isMobileScreen ? <img src={usersResponsive} alt='users' className={`z-10  `}/> :<img  src={logos} alt='logos' className="h-[320px] w-[940px]"/> }
      </div>
      <div
        className="w-screen h-auto py-20 flex flex-col justify-center items-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src={users} alt="users" className={`z-10`} />
        <div className="absolute">
          <div className="bg-red-500 w-12 h-12 opacity-90 rounded-full absolute bottom-[87px] md:bottom-[78px] left-0"></div>
        </div>
        <h3 className="text-4xl font-bold pb-3">Contact us</h3>
        <p className="font-semibold w-auto text-center pb-8">
          Contact us for detailed information about our solutions, services and
          products.
        </p>
        <button className="w-[150px] h-[45px] bg-[#F84646] font-semibold hover:text-white rounded-md text-lg  cursor-pointer duration-700 ease-in-out ">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Reference;
