import React from 'react'
  import kid_img from "../assets/kid.jpg"
  import group1 from "../assets/Group21.png";
import group2 from "../assets/Group22.png";
import group3 from "../assets/Group20.png";
import group4 from "../assets/Group19.png";
const Rectangle = () => {
  return (
    <div className='w-[70rem] h-[30rem] flex   mx-auto mt-10 mb-5 justify-center items-center'>
               <div className='flex flex-col w-full h-full container'>
                      <div className='flex  items-center text-xl gap-1 ml-3'><p>Find kid's </p>
          <div className="flex flex-col ">
                           <div className=" w-20 flex justify-between">
                             <img src={group1} alt="" />
                             <img src={group2} alt="" />
                           </div>
                        <p className="text-xl font-bold ">Collection</p>
                            <div className=" w-20 flex justify-between">
                             <img src={group3} alt="" />
                             <img src={group4} alt="" />
                           </div>
                         </div>
        </div>
     <div className='flex  rounded-2xl overflow-hidden  justify-center items-center w-[95%] h-[95%] bg-gradient-to-l from-[#54FF6C]  to-[#0702FF] mt-5'>
           <div className='  flex flex-col  items-center gap-10 w-[50%] h-[100]% '>
         
            <div className='flex flex-col  text-[#F8F8F8] font-semibold  '>
            <h1 className='text-5xl font-[Montserrat] font-medium  '>Best style</h1>
            <h1 className='text-5xl font-[Montserrat] font-medium '>Collection for your kids</h1>
                 <p className='text-[#E4E4E4] text-sm'>Get special offers just for you</p>
                   <button className='bg-[#54FF6C] hover:bg-green-600 text-[#FFFFFF] font-semibold text-center h-12 w-35 rounded-3xl border-none outline-none mt-5 cursor-pointer'>Shop Now</button>
            </div>
       
          
             
        </div>
          <div className="flex justify-end items-end h-[100%] w-[50%]">
               <div className='h-[90%] w-[100%] bg-[#C4C4C4] rounded-tl-2xl  flex items-end justify-end'>
                       <img src={kid_img} className='h-[95%] w-[96%] rounded-tl-2xl' alt="" />
               </div>
          </div>

     </div>
               </div>
    </div>
  )
}

export default Rectangle