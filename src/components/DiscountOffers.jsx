import React, { useContext } from 'react';
   
import { ShopContext } from '../DataContext';
import { AllData } from '../AllProductsData';
import { Link } from 'react-router-dom';
    
const DiscountOffers = () => {
  const {salesAndDiscountref}=useContext(ShopContext)
  const offerData=AllData.offer
  return (
    <div className="flex max-w-[70rem] min-h-[500px]  mx-auto justify-center items-center " ref={salesAndDiscountref} >
      <div className="flex flex-col w-full gap-5 h-full">
        <h2 className="text-4xl font-bold text-gray-500">Discount Offers</h2>
        <div className="grid grid-cols-3 gap-5 w-full h-full">
          
           <div style={{ backgroundImage: `url(${offerData[0].image})` }} className='bg-center group h-full '>
              <div
            className=" opacity-0 bg-black/50 h-full group-hover:opacity-100 duration-500 flex flex-col items-center gap-10   p-5"
            
          >
            <p className="text-[#54FF6C] text-3xl font-bold">Product</p>
            <div className="flex flex-col gap-3 items-center ">
              <h1 className="text-white text-6xl font-bold">Featured</h1>
              <p className="text-white text-2xl">Top Ten Products of the Week</p>
            </div>
                                   <Link to={"productspage"}>
                                  <button className="text-white text-2xl font-semibold border-none outline-none underline cursor-pointer">
              Explore item
            </button>                  
                 </Link>
         
          </div>
           </div>
          <div style={{ backgroundImage: `url(${offerData[1].image})` }} className='bg-center group h-full '>
          <div
            className="opacity-0  h-full bg-black/50 group-hover:opacity-100 duration-500 flex flex-col items-center gap-10  bg-center p-5 "
           
          >
            <p className="text-[#54FF6C] text-3xl font-bold">Product</p>
            <div className="flex flex-col gap-3 items-center">
              <h1 className="text-white text-5xl font-bold">Sale Off</h1>
              <p className="text-white text-6xl">Baby Things</p>
              <p className="text-white text-2xl">Top Ten Products of the Week</p>
            </div>
            <h1 className="text-white text-7xl font-extrabold">70 %</h1>
                                   <Link to={"productspage"}>
                                     <button className="text-white text-2xl font-semibold border border-slate-50 h-14 px-8 rounded-md cursor-pointer">
              Explore item
            </button>            
                 </Link>
            
          </div></div>

            <div className='group bg-center h-full'   style={{ backgroundImage: `url(${offerData[2].image})` }} >   <div
            className="opacity-0 h-full bg-black/75 group-hover:opacity-100 flex flex-col items-center gap-10  bg-center p-5  duration-500"
          
          >
            <p className="text-[#54FF6C] text-3xl font-bold">Product</p>
            <div className="flex flex-col gap-3 items-center">
              <h1 className="text-white text-6xl font-bold">Sell</h1>
              <p className="text-white text-2xl">Top Ten Products of the Week</p>
            </div>
                                   <Link to={"productspage"}>
                                          <button className="text-white text-2xl font-semibold border-none outline-none underline cursor-pointer">
              Explore item
            </button>        
                 </Link>
           
          </div></div>

        </div>
      </div>
    </div>
  );
};

export default DiscountOffers;
