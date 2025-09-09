import React, { useContext } from "react";
import bath_img1 from "../assets/bath_1.png";
import bath_img2 from "../assets/bath_2.png";
import bath_img3 from "../assets/bath_3.png";
import bath_img4 from "../assets/bath_4.png";
import bath_img5 from "../assets/bath_5.png";
import bath_img6 from "../assets/bath_6.png";
import bath_img7 from "../assets/bath_7.png";
import bath_img8 from "../assets/bath_8.png";
import bath_img9 from "../assets/bath_9.png";
import bath_img10 from "../assets/bath_10.png";
import bath_img11 from "../assets/bath_11.png";
import bath_img12 from "../assets/bath_12.png";

import secondBaby from "../assets/SecondBaby.jpg";
import group1 from "../assets/Group21.png";
import group2 from "../assets/Group22.png";
import group3 from "../assets/Group20.png";
import group4 from "../assets/Group19.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ShopContext } from "../DataContext";
import { AllData } from "../AllProductsData";
import ProductsPage from "../Pages/ProductsPage";
import { Link } from "react-router-dom";
ProductsPage

const BathAndBody = () => {
  const { bathAndBodyref } = useContext(ShopContext);
  const bathData = AllData.bath;
  return (
    <div
      className="flex w-[70rem] mx-auto mt-11 mb-5 justify-center items-start"
      ref={bathAndBodyref}
    >
      <div className="flex flex-col w-full gap-5">
        <div className="flex flex-col ">
          <div className=" w-30 flex justify-between">
            <img src={group1} alt="" />
            <img src={group2} alt="" />
          </div>
          <h2 className="text-xl font-bold text-gray-600 ">BATH & Body</h2>
          <div className=" w-30 flex justify-between">
            <img src={group3} alt="" />
            <img src={group4} alt="" />
          </div>
        </div>

        <div className="flex w-full gap-5">
          <div className="w-[67%] grid grid-cols-4 gap-5">
            {bathData.map((product, index) => (
              <div
                key={index}
                className="flex flex-col bg-[#F2F1F1]  relative"
              >
                {index !== 0 && (
                  <div className="absolute h-7 inset-0 rounded-br-2xl text-medium bg-[#2f2c2c] text-[#E3E3E3] text-center  w-22 py-1">
                    {index == 1 ? "4Size" : "6Scents"}
                  </div>
                )}
                <img src={product.image} alt="" className="h-35" />
                <div className="flex flex-col gap-3 mt-2 px-2">
                  <h2 className="text-[#343434]">{product.name}</h2>
                  <div className="flex gap-1 items-center ">
                 <Link to={"/productspage"}>
                        <p className="text-[#1CAA24] cursor-pointer">View All</p>
                 </Link>
                    <FaLongArrowAltRight size={20} className="text-[#1CAA24]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-[33%] h-[700px] rounded-xl overflow-hidden group">
            <img
              src={secondBaby}
              className="w-full   rounded-xl h-full "
              alt="Baby Banner"
            />

            <div className="absolute inset-0  flex flex-col items-center justify-evenly   opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col">
                <h2 className="   text-[#343434]  text-6xl">Value Kits &</h2>
                <h2 className="   text-[#343434]  text-6xl">Bundle Deals</h2>
              </div>
              <button className="bg-green-500 cursor-pointer text-white px-12 py-4 rounded-4xl text-2xl hover:bg-green-600">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BathAndBody;
