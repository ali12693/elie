import React from 'react';
import productCollection_img from "../assets/productCollection.jpg";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { AllData } from '../AllProductsData'
import { Link } from 'react-router-dom';

const ProductCollection = () => {
  const productCollectionData=AllData.productCollection
  return (
    <div className="flex max-w-[70rem] min-h-[700px] bg-[#F1F1F1]  mx-auto justify-center items-center mt-5 mb-10">
      <div className="flex flex-col w-full h-full justify-center items-center container mt-10  ">
        <h2 className="text-4xl font-bold text-slate-700 ">Product Collection</h2>
        
        <div className="w-[90%] grid grid-cols-3 grid-rows-3  p-10">
          {new Array(9).fill(productCollectionData[0].image).map((productImg, index) => (
            <div key={index} className="flex flex-col bg-[#F2F1F1] p-3 rounded-md">
                 <Link to={"productspage"}>
                             <img src={productImg} alt="" className="h-[22rem] w-[90%] cursor-pointer" />                      
                 </Link>
            
              <div className="flex flex-col gap-2 mt-2">
                <h2 className="text-[#343434] mt-2">BODY SCRUB</h2>
                <div className="flex gap-1 items-center">
                  <p className="text-blue-500 cursor-pointer">$ 28.00</p>
                  <FaLongArrowAltRight size={20} className="text-blue-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;
