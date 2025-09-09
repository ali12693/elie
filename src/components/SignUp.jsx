import React, { useContext } from "react";
import tree from "../assets/tree.png";
import user from "../assets/user.png";
import mail from "../assets/mail.png";
import pass from "../assets/pass.png";
import google_icon from "../assets/google.png";
import fb_icon from "../assets/fb.png";
import Apple_icon from "../assets/apple.png";

import { ImCross } from "react-icons/im";
import { ShopContext } from "../DataContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Login from "./Signin";

const SignUp = () => {
  const {
    IsOpenSignUPForm,
    closeSignUpForm,
    emailref,
    userNameRef,
    passWordRef,
    checkUserName,
    checkPassWord,
    checkemail,
    isValidName,
    isValidPassWord,
    isValidEmail,
    storeformData,
    openEye,
    closeEye,
    ISOpenEye,
    openForm,
    closeform,
        setisValidEmail,
        setisValidName,
        setisValidPassWord
  } = useContext(ShopContext);

  

  return IsOpenSignUPForm ? (
    <div className="h-[100vh] max-w-[100vw]  flex  justify-center items-center ">
      
        <div className="h-full w-1/2 bg-[#e6e6e6] flex justify-center items-center">
          <img src={tree} alt="" className="h-1/2 " />
        </div>

      

          <div className="flex justify-center items-center w-1/2 h-full flex-col gap-6 bg-white">
            <h1 className="text-gray-700 text-xl font-bold text-center">Create Account</h1>

            <div className="w-[95%] flex flex-col justify-start gap-2">
              <h2 className="text-medium text-gray-600 font-semibold">Full Name</h2>
              <div className="full-name px-2 w-full gap-2 flex flex-col">
                <div className="border-gray-200 border-1 rounded-4xl h-10 w-full flex gap-2 items-center">
                  <img src={user} alt="" className="h-3 ml-4" />
                  <input type="text" placeholder="Enter your Name" className="border-none outline-none flex-1" ref={userNameRef} onChange={checkUserName} />
                </div>
                {!isValidName && <p className="text-red-500 px-4">User name is not valid</p>}
              </div>

              <div className="flex flex-col mt-2 w-full gap-2">
                <h2 className="text-medium text-gray-600 font-semibold">Email</h2>
                <div className="full-name px-2 w-full gap-2 flex flex-col">
                  <div className="border-gray-200 border-1 rounded-4xl h-10 w-full flex gap-2 items-center">
                    <img src={mail} alt="" className="h-3 ml-4" />
                    <input type="text" placeholder="Enter your Email" className="border-none outline-none flex-1" ref={emailref} onChange={checkemail} />
                  </div>
                  {!isValidEmail && <p className="text-red-500 px-4">Email is not valid</p>}
                </div>
              </div>

              <div className="flex flex-col mt-2 w-full gap-2">
                <h2 className="text-medium text-gray-600 font-semibold">Password</h2>
                <div className="full-name px-2 w-full gap-2 flex flex-col">
                  <div className="border-gray-200 border-1 rounded-4xl h-10 w-full flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <img src={pass} alt="" className="h-3 ml-4" />
                      <input type={ISOpenEye ? "text" : "password"} placeholder="Enter your Password" className="border-none outline-none flex-1" ref={passWordRef} onChange={checkPassWord} />
                    </div>
                    {ISOpenEye ? (
                      <FaRegEyeSlash size={18} className="mr-2 cursor-pointer" onClick={closeEye} />
                    ) : (
                      <FaRegEye size={18} className="mr-2 cursor-pointer" onClick={openEye} />
                    )}
                  </div>
                  {!isValidPassWord && <p className="text-red-500 px-4">Password is not valid</p>}
                </div>
              </div>
            </div>

            <button className="bg-green-950 opacity-70 text-white w-[95%] cursor-pointer py-1 rounded-2xl" onClick={storeformData}>
              Sign-up
            </button>

            <p className="text-medium text-gray-300">OR</p>

            <div className="flex gap-5">
              <div className="border-1 rounded-full p-2 border-gray-200">
                <img src={google_icon} alt="" className="h-4" />
              </div>
              <div className="border-1 rounded-full p-2 border-gray-200">
                <img src={fb_icon} alt="" className="h-4" />
              </div>
              <div className="border-1 rounded-full p-2 border-gray-200">
                <img src={Apple_icon} alt="" className="h-4" />
              </div>
            </div>

            <div className="flex justify-center items-center gap-2">
              <p className="text-gray-800 font-semibold text-sm">Already have an account?</p>
              <button className="border-none outline-none text-medium text-green-300 cursor-pointer" onClick={()=>{
                     closeSignUpForm()
                     setisValidEmail(true)
                     setisValidPassWord(true)
                     setisValidName(true)
                     
              }}>
                Login
              </button>
            </div>
          </div>
        </div>
      
  
  ) : (
    <Login />
  );
};

export default SignUp;
