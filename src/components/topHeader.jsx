import React, { useContext } from "react";
import { ShopContext } from "../DataContext";
import { Link } from "react-router-dom";

const TopHeader = () => {
  
  const {
    openSignUpForm,
    showForm,
    setisValidEmail,
    setisValidName,
    setisValidPassWord,
    setISOpenEye,
    closeSignUpForm,
    setIsValidLoginEmail,setISValidLoginPassword,  deleteTokenFromLocalStorage,
        deleteAccountDataFromLocalStorage, showLogoutPopUp,ShowPopUptoLogOut,IsAuthenticated
  } = useContext(ShopContext);

  return (
    <div className="w-full h-[3rem] flex justify-center items-center font-[Montserrat] bg-[#1D1D1D] sticky  ">
      <div className="container flex justify-around items-center">
        <p className="text-[#e2b7b7]">FREE SHIPPING ON $50+ FOR REWARDS MEMBERS SIGN IN OR JOIN DETAILS</p>
        <nav className="flex gap-5 items-center text-[16px]">
          <Link to={"/"}>
            <p className="underline text-[#54FF6C] cursor-pointer">HOME</p>
          </Link>
          <p className="underline text-[#54FF6C] cursor-pointer">AboutUS</p>

        
          <p
            className="underline text-[#54FF6C] cursor-pointer" onClick={()=>{
                      showLogoutPopUp()
              
            }}
          
          >
            Log-Out
          </p>
         
           {/* <Link to={IsAuthenticated?"/":"/login"}>
            <p
            className="underline text-[#54FF6C] cursor-pointer" onClick={()=>{
                 deleteAccountDataFromLocalStorage()
            }}
          
          >
            Delete-Account
          </p>
           </Link> */}

         
        </nav>
      </div>
    </div>
  );
};

export default TopHeader;
