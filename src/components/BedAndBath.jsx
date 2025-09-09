import React, { useContext } from 'react';
       
import { FaLongArrowAltRight } from "react-icons/fa";
  
import { ShopContext } from '../DataContext';
import group1 from "../assets/Group21.png";
import group2 from "../assets/Group22.png";
import group3 from "../assets/Group20.png";
import group4 from "../assets/Group19.png";
import { AllData } from '../AllProductsData';
import ProductsPage from '../Pages/ProductsPage';
import { Link } from 'react-router-dom';

const BedAndBath = () => {
  const{bedAndBathref}=useContext(ShopContext)
   const bedAndBathData=AllData.bed

  return (
    <div className="flex w-[70rem] min-h-[650px]  mx-auto justify-center items-center" ref={bedAndBathref}>
      <div className="flex flex-col w-full h-full gap-10 justify-baseline">
          <div className="flex flex-col ">
                   <div className=" w-30 flex justify-between">
                     <img src={group1} alt="" />
                     <img src={group2} alt="" />
                   </div>
                <h2 className="text-xl font-bold text-gray-600">BED & BATH</h2>
                    <div className=" w-30 flex justify-between">
                     <img src={group3} alt="" />
                     <img src={group4} alt="" />
                   </div>
                 </div>
  
        <div className="flex w-full h-full gap-10 " >
          <div className="w-full grid grid-cols-7 gap-5">
            {bedAndBathData.map((product, index) => (
              <div key={index} className="flex flex-col bg-[#F2F1F1] p-3 rounded-md">
                <img src={product.image} alt="" className="h-30 object-cover" />
                <div className="flex flex-col gap-3 mt-2">
                  <h2 className="text-[#343434] text-sm">{product.name}</h2>
                  <div className="flex gap-1 items-center">
                 <Link to={"productspage"}>
                                                 <p className="text-[#1CAA24] cursor-pointer">View All</p>
                 </Link>
                    <FaLongArrowAltRight size={20} className="text-[#1CAA24]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedAndBath;
