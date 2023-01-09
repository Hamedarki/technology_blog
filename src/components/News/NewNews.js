import React, {useState } from "react";
import { useQuery } from "react-query";
import { fetchArticels } from "../../services/articels";
const NewNews = () => {

  const [number , setNumber] = useState(5)


  const numberUp = () =>{
    setNumber((numberPrev)=>{ return numberPrev + 5})
  }


  
  const { isLoading, error, data } = useQuery("responseData", fetchArticels, {
    select: (data) => {
      console.log(data.articles)
       return data.articles.slice(0,number)
    },
  });

  if (isLoading) {
    return "loading...";
  }

  if (error || data === undefined) {
    
    return "we have a problem!";
  }
  // integrate error-boundary with react-query

  return (
    <React.Fragment>
      {data.map((item, index) => (
        <div
          className="flex flex-col justify-center items-center "
          key={item.title}
        >
          <div
            data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`}
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className={`flex  ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } flex-col-reverse justify-center items-center gap-2`}
          >
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              } ${index % 2 === 0 ? "items-end" : "items-start"} gap-8`}
            >
              <h4 className="text-2xl  text-center md:text-left md:text-4xl font-bold w-auto md:w-3/4 overflow-hidden leading-snug">
                {item.title}
                {
                  //split title
                }{" "}
              </h4>
              <p className="text-gray-600 w-auto text-center md:text-left md:w-3/4">
                {item.description}
              </p>
              <button
                className={`w-[100%] md:w-[160px] h-[48px] bg-[#F84646] font-semibold  relative right-0 ${
                  index % 2 === 0 ? "md:right-72" : "md:right-0"
                } hover:text-white rounded-md  cursor-pointer duration-700 ease-in-out `}
              ><a href={item.url}  target={"_blank"} rel="noreferrer">More</a>
              </button>
            </div>
            <img
              src={item.urlToImage}
              alt="conversation"
              className="h-[470px] w-[500px] rounded-lg hover:opacity-90 duration-700"
            />
          </div>
        </div>
      ))}
      <button onClick={numberUp} className='w-[100%] md:w-[160px] h-[48px] bg-[#F84646] font-semibold  relative right-0  hover:text-white rounded-md  cursor-pointer duration-700 ease-in-out '>More News</button>
    </React.Fragment>
  );
};

export default NewNews;
