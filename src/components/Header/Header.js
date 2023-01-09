import "../../index.css";
import { useMediaQuery } from "react-responsive";

import { slide as Menu } from 'react-burger-menu'
import{HiMenu} from 'react-icons/hi'
// import { useState } from "react";
const Header = () => {

  let isMobileScreen = useMediaQuery({ query: `(max-width: 760px)` });

  //  const [menu , setMenu] = useState(false)
  //  const showSettings = (event) => {
  //     event.preventDefault();
  //   }

  //   const menuChange = () =>{
  //     setMenu(!menu)
  //   }

  return (
    <div
      className={`bg-hero-pattern overflow-hidden  flex flex-col max-w-fit justify-start gap-20 h-[790px]  md:h-[100vh] bg-no-repeat  md:bg-center md:bg-cover   w-screen`}
    >
      { !isMobileScreen ? <nav className=" hidden md:flex md:flex-row gap-10 p-4 text-sm font-semibold  justify-center relative left-28 top-4">
        <ul className="flex flex-row justify-evenly gap-10">
          <li className="hover:text-white hover:bg-[#F84646] text-center cursor-pointer duration-700 ease-in-out rounded-md p-2">
            Solution and Services
          </li>
          <li className="hover:text-white hover:bg-[#F84646] text-center cursor-pointer duration-700 ease-in-out rounded-md p-2">
            Products
          </li>
          <li className="hover:text-white hover:bg-[#F84646]  cursor-pointer duration-700 ease-in-out rounded-md p-2">
            Technologies
          </li>
          <li className="hover:text-white hover:bg-[#F84646]  cursor-pointer duration-700 ease-in-out rounded-md p-2">
            Human Resources
          </li>
          <li className="hover:text-white hover:bg-[#F84646]  cursor-pointer duration-700 ease-in-out rounded-md p-2">
            Institutional
          </li>
        </ul>
        <button className="hover:text-white rounded-md  cursor-pointer duration-700 ease-in-out  bg-[#F84646] w-[91px] h-[40px]">
          Sign Up
        </button>
      </nav>
      :<div className=" flex flex-row justify-between py-10 px-6 md:hidden " id="menu">
         <button className="hover:text-white rounded-md  cursor-pointer duration-700 ease-in-out  bg-[#F84646] w-[91px] h-[40px]">
          Sign Up
        </button>
         {/* <HiMenu size={'40px'} >
            
        </HiMenu>} */}
      {/* <button><Menu pageWrapId={ "page-wrap" } width={'100vw'} className='absolute z-20 right-60'>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a  className="menu-item--small" href="/contact">Settings</a>
        </Menu>click</button> */}
      
      </div>}
      <div className="flex flex-col items-center relative right-[215px] top-4 gap-7">
        <h2 className=" text-4xl md:text-5xl font-bold md:w-1/2  relative left-52 top-32 text-center md:text-left md:static">
          
          In Information Technologies 23 Years of Experience
        </h2>
        <p className="  font-semibold text-base w-[90%] md:text-lg md:w-1/2  relative left-[220px] top-32 text-center md:text-left md:static">
          We provide Project Management, Business Analysis and Test Management
          services with our expert staff who have gained experience in different
          sectors so that our customers can maintain their high quality levels.
        </p>
        <div className="h-[55px] w-[320px] md:w-[502px] md:h-[73px] bg-white shadow-lg relative left-[217px] md:left-0 top-40 md:top-0 md:right-[85px] rounded-lg overflow-hidden font-semibold">
          <input
            placeholder="Sign up for our e-mail newsletter"
            className="h-full w-[70%] px-1 outline-none text-sm md:text-lg text-gray-600"
          />
          <button className="bg-[#F84646] h-[80%] w-[29%] rounded-md hover:text-white duration-700 ease-in-out">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
