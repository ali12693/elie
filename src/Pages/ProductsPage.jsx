import React, { useContext } from "react";
import polygon from "../assets/Polygon.png";
import ShowAllProducts from "../components/ShowAllProducts";
import { ShopContext } from "../DataContext";
import { AllData } from "../AllProductsData";

const ProductsPage = () => {
  const {   lowestPriceRef,
        HighestPriceRef,  combineAllCategoryProduct,
        setPriceValue,filterProductsByCategory}=useContext(ShopContext)
  return (
    <div className="max-w-[70rem]  flex mt-5 mx-auto justify-center gap-10 mb-5  ">
      <div className="flex flex-col w-50 gap-5 mt-4 ">
        <div className="w-full flex flex-col   ">
          <div className="bg-[#F1F2F3] px-2 w-full text-xl font-bold ">
            Categories
          </div>
          <div className="flex flex-col gap-3 w-full justify-center border-gray-100 border-2 px-2 border-t-0 py-1">
            <div className="flex justify-between items-center text-[#343434]">
              <p className="underline text-medium cursor-pointer " onClick={()=>{
                    filterProductsByCategory(AllData.offer)
              }}>
                Sales&Dsicount
              </p>
              <img src={polygon} alt="" className="h-2" />
            </div>
            <div className="flex justify-between items-center">
              <p className="underline text-medium cursor-pointer "  onClick={()=>{
                    filterProductsByCategory(AllData.bath)
              }}>Bath&Body</p>
              <img src={polygon} alt="" className="h-2" />
            </div>
            <div className="flex justify-between items-center">
              <p className="underline text-medium cursor-pointer "  onClick={()=>{
                    filterProductsByCategory(AllData.bed)
              }}>Diapers</p>
              <img src={polygon} alt="" className="h-2" />
            </div>
            <div className="flex justify-between">
              <p className="underline text-medium cursor-pointer "  onClick={()=>{
                    filterProductsByCategory(AllData.bath)
              }}>Wipers</p>
              <img src={polygon} alt="" className="h-2" />
            </div>
            <div className="flex justify-between items-center">
              <p className="underline text-medium  cursor-pointer"  onClick={()=>{
                    filterProductsByCategory(AllData.trendingProduct)
              }}>Gifts</p>
              <img src={polygon} alt="" className="h-2" />
            </div>
            <div className="flex justify-between items-center">
              <p className="underline text-medium cursor-pointer " onClick={()=>{
                    filterProductsByCategory(combineAllCategoryProduct)
              }} >More</p>
              <img src={polygon} alt="" className="h-2" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col  mt-3 ">
          <div className="bg-[#F1F2F3] text-xl font-bold px-2 text-[#343434]">Filter</div>
          <div className="flex flex-col w-full border-gray-100 text-[#343434] border-2 border-t-0 px-2 py-2 gap-3 ">
            <p className="underline font-bold text-[#343434] mt-1">Price</p>
            <div className="flex gap-2 justify-center">
              <input
                type="text"
                className="bg-[#F1F2F3] w-22 text-center  py-2 border-none outline-none  text-gray-600"  ref={lowestPriceRef} onChange={()=>{
                  setPriceValue()
              
                }}
              />
              <input
                type="text"
                className="bg-[#F1F2F3] w-22  py-2 text-center border-none outline-none  text-gray-600"
              ref={HighestPriceRef} onChange={()=>{
                                    setPriceValue() 
                                    
             }} />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold">Availability</p>
              <div className="flex gap-2 ">
                <input type="checkbox" className="h-5 w-5 bg-[#F1F2F3] border-none outline-none" />
                <p className="text-medium text-[#343434]  ">IN Stock</p>
              </div>
              <div className="flex gap-2 ">
                <input type="checkbox" className="h-5 w-5 bg-[#F1F2F3] border-none outline-none" />
                <p className="text-medium text-[#343434]">out of  Stock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShowAllProducts/>

    </div>
  );
};

export default ProductsPage;
