import React, { useContext } from "react";

import heart_icon from "../assets/wishlistHeart.png";
import favourite_icon from "../assets/Group77.png";
import TodayDeals from "../components/TodayDeals";
import { Link } from "react-router-dom";
import { ShopContext } from "../DataContext";
import POPOFDuplicateProduct from "../components/POPOFDuplicate Product";
          
const AddToCartSection = () => {
  const {ShowSelectedProductOnAddToCartPage,   productInCart,
        AddProductInTOCart,  increaseCount,decreasecount,singleproductCount,ISProductISDuplcate,DisableAddTOCartButton}=useContext(ShopContext)
  return (
    <div className="max-w-[65rem] mx-auto justify-center items-center  flex flex-col gap-10 mt-5 mb-5">
      {ISProductISDuplcate&&<POPOFDuplicateProduct image={ShowSelectedProductOnAddToCartPage.image}/>}
     {ShowSelectedProductOnAddToCartPage&&<div className="flex w-[100%] justify-center items-center gap-10"> <div className="w-[50%] flex flex-col gap-1">
        <img src={ShowSelectedProductOnAddToCartPage.image} alt="" className="w-[100%] h-65 rounded-md border-1 border-gray-300" />
        <div className="w-[100%] grid grid-cols-5 gap-2">
          {new Array(5).fill(ShowSelectedProductOnAddToCartPage.image).map((product,i) => {
           return <img src={product} alt="" className="h-22 w-30 rounded-md border-1 border-gray-300 " key={i} />;
          })}
        </div>
      </div>
      <div className="flex flex-col w-[50%] gap-2 mt-5">
        <h1 className="text-2xl font-bold text-[#343434] ">{ShowSelectedProductOnAddToCartPage.name}</h1>
        <div className="flex gap-3">
          <div className="flex gap-1 justify-center">
            <p className="text-green-500 font-bold">$</p>
            <p className="text-blue-700 font-bold">{ShowSelectedProductOnAddToCartPage.price}</p>
          </div>
          <p className="text-[#A9A9A9] font-bold line-through">
            {ShowSelectedProductOnAddToCartPage.oldPrice}
          </p>
        </div>

        <div className="flex gap-4 ">
          <div className="flex gap-1 items-center">
            <img src={heart_icon} alt="" className="h-5" />
            <p className="text-medium text-[#444444] ">Add to Favorites</p>
          </div>
               <div className="flex gap-1 items-center ">
                <img src={favourite_icon} alt="" className="h-5 mb-1" />
                     <p className="text-medium text-[#444444]  ">Add to Favorites</p>
               </div>
        </div>
        <div className="flex gap-2 items-center">
        <p className="text-xl font-bold text-[#444444] ">Qty:</p>
           <div className="flex gap-1 items-center">
               <p className="text-2xl text-[#444444] font-bold cursor-pointer "onClick={decreasecount}>-</p>
                 <div className="text-[#444444] bg-[#CFCFCF] px-2 py-2" >{singleproductCount.count}</div>
                 <p className="text-xl text-[#444444] font-bold mt-1 cursor-pointer"  onClick={increaseCount}>+</p>
           </div>
        </div>
              <div className="flex flex-col gap-2 mt-4">
                   <div className="bg-[#54FF6C] text-[#292929] px-5 py-2 w-30">Description</div>
                     <p className="text-[#444444]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
                 <div className="flex gap-2 mt-4 ">
                         <Link to={"/productssummary"}>
                          <button className="bg-green-500 border-none outline-none text-[#FFFFFF] w-40 py-3 text-center cursor-pointer rounded-3xl font-bold" disabled={DisableAddTOCartButton} onClick={()=>{
                                 AddProductInTOCart(ShowSelectedProductOnAddToCartPage)
                          }}>ADD TO CART</button>
                         </Link>
                           <button className="bg-white text-[#0702FF]  w-40 py-3 text-center cursor-pointer border-1 border-gray-300 rounded-3xl font-bold">BUT IT NOW</button>
                 </div>
            
      </div></div>}
      <TodayDeals/>
    </div>
  );
};

export default AddToCartSection;
