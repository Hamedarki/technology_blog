import React from 'react'

const Property = ({Information}) => {
  return (
    <>
     {Information.map((item,index)=>{
      return(
      <div key={index} className='flex flex-col justify-center items-center w-[100%]  md:w-[33%]'>
        <img src={item.img}  alt={item.title} className='z-10'/>
        <h4 className='font-bold text-lg text-center'>{item.title}</h4>
        <p className='w-1/2 flex justify-center items-center text-center text-sm font-semibold '>{item.Information}</p>
      </div>)
    })}
    </>
   
    // <div>
    //   <img />
    //   <h4></h4>
    //   <p></p>
    // </div>
  )
}

export default Property