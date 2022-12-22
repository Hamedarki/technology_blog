import React, { useEffect } from "react";
import file from "../../images/File.svg";
import star from "../../images/Star.svg";
import crown from "../../images/Crown.svg";
import chartbar from "../../images/ChartBar.svg";
import chartslice from "../../images/ChartPieSlice.svg";
import figma from "../../images/FigmaLogo.svg";
import Property from "./Property";
import Aos from "aos";
import "aos/dist/aos.css";

const Propertys = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const Information = [
    {
      img: file,
      title: "Document Analysis",
      Information:
        "etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus",
    },
    {
      img: star,
      title: "Acceptance and Evaluation",
      Information:
        "etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus",
    },
    {
      img: crown,
      title: "Business Rules Analysis",
      Information:
        "etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus",
    },
    {
      img: chartbar,
      title: "Flow Diagrams",
      Information:
        "etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus",
    },
    {
      img: chartslice,
      title: "Stakeholder Analysis",
      Information:
        "etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus",
    },
    {
      img: figma,
      title: "Prototyping",
      Information:
        "etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus",
    },
  ];
  return (
    <div className="flex flex-col items-center w-screen p-5 pb-20 md:py-28 gap-10  md:p-16">
      <h3
        className="font-bold text-3xl text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        Quality and Process Management
      </h3>
      <p
        className="font-semibold w-auto md:w-2/3 m-auto pb-7 text-center "
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        We provide Project Management, Business Analysis and Test Management
        services with our expert staff who have gained experience in different
        sectors so that our customers can maintain their high quality levels.
      </p>
      <div
        className="flex flex-wrap  flex-row items-center justify-center gap-y-14"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="absolute">
          <div className="bg-pink-500 w-10 h-10 opacity-90 rounded-full absolute bottom-[590px]  md:bottom-[150px]  md:right-[375px]"></div>
          <div className="bg-purple-400 w-10 h-10 opacity-90 rounded-full absolute bottom-[360px] right-0.5 md:bottom-[150px] md:right-0"></div>
          <div className="bg-blue-400 w-10 h-10 opacity-90 rounded-full absolute bottom-36 left-0 md:bottom-[150px] md:right-0 md:left-[410px]"></div>
          <div className="bg-blue-500 w-10 h-10 opacity-90 rounded-full absolute right-0 top-11 md:top-9 md:right-[399px]"></div>
          <div className="bg-red-500 w-10 h-10 opacity-90 rounded-full absolute top-64 md:top-7"></div>
          <div className="bg-yellow-400 w-10 h-10 opacity-90 rounded-full absolute left-0 top-[470px] md:top-7 md:left-[395px]"></div>
        </div>
        <Property Information={Information} />
      </div>
    </div>
  );
};

export default Propertys;
