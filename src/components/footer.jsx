import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import bg_image from "../assets/SecondBaby.jpg";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center h-[300px] bg-[#2D2D2D] " >
              <div className="w-[80%] flex justify-around items-center ">
                 <div className="grid grid-cols-3 gap-16   justify-items-center      ">
        
        
        <div className="flex flex-col gap-3">
          <h1 className="text-[#F4F3F3] text-medium font-bold">
            CORPORATE MAILING ADDRESS
          </h1>
          <div className="text-[#f0e8e8] flex flex-col gap-2">
            <p className="cursor-pointer">
              1100 Peachtree Street Suite 200 Atlanta GA 30309 United States
            </p>
            <p className="cursor-pointer">Suite 200</p>
            <p className="cursor-pointer">Atlanta GA 30309</p>
            <p className="cursor-pointer">United States</p>
          </div>
        </div>

    
        <div className="flex flex-col justify-between   ">
          <div className="flex gap-20 justify-center">
            <div className="flex flex-col text-[#F4F3F3]">
              <h1 className="text-sm font-semibold">TEXT OR CALL</h1>
              <p>(888) 355-4336</p>
            </div>
            <div className="flex flex-col text-[#F4F3F3]">
              <h1 className="text-xl font-bold">PHONE HOURS</h1>
              <div className="flex flex-col text-sm">
                <p >MONDAY - FRIDAY</p>
                <p>10AM UNTIL 5PM EST.</p>
              </div>
            </div>
          </div>
          <div className="text-[#F4F3F3] flex gap-10 items-center justify-center">
            <h2>Terms of Use</h2>
            <h2>Privacy Policy</h2>
          </div>
        </div>

    
        <div className="flex flex-col gap-3 text-[#F4F3F3]">
          <h1 className="text-xl font-bold">WEBSITE</h1>
          <div className="text-medium">
            <p>elliebathbedandbaby.com</p>
            <h2 className="text-xl font-bold">CUSTOMER SUPPORT</h2>
            <p>support@elliebathbedandbaby.com</p>
          </div>
          <div className="flex gap-5">
            <div className="bg-white rounded-full p-1">
              <FaTwitter size={25} className="text-blue-500 cursor-pointer" />
            </div>
            <div className="bg-white rounded-full p-1">
              <FaInstagram size={25} className="text-blue-500 cursor-pointer" />
            </div>
            <div className="bg-white rounded-full p-1">
              <FaFacebook size={25} className="text-blue-500 cursor-pointer" />
            </div>
          </div>
        </div>

      </div>
              </div>
    </div>
  );
};

export default Footer;
