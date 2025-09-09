import React, { useContext } from 'react'
import logo from "../assets/ellie.png"
import { FaRegHeart, FaRegUser, FaSearch, FaUser } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { CiUser } from 'react-icons/ci'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { ShopContext } from '../DataContext'
   
  

const Header = () => {
  const{  productInCart,
        AddProductInTOCart}=useContext(ShopContext)
  return (
    <div className='flex w-full h-18   justify-center items-center bg-[#EFEFEF] '>
          <div className=' flex container w-[100%] h-[100%] justify-around items-center  '>
            <img src={logo} className='h-25 ' alt="" />
                <div className='flex w-[30rem] h-12 bg-[#969696]'>
                          <div className='flex  justify-center items-center flex-1'> <input type="text-center" placeholder='Search any thing ' className='text-[#0000004D] border-none outline-none h-[100%] w-[100%] text-xl ml-5 font-semibold' /></div>
                       <div className='flex  justify-center items-center bg-[#91CB94] p-1'>
                             <p className='text-[#292929] font-semibold'>Categories</p>
                               <MdKeyboardArrowDown size={25}/>
                                   
                       </div>
                          <div className='bg-[#197CC0] h-12 w-16 flex justify-center items-center'>
                            <FaSearch size={15} className='text-white'/>
                          </div>
                </div>
                   <div className='flex gap-5 justify-center items-center relative'>
                          <p className='text-red-500 font-semibold absolute  top-2 right-9 text-xl '>{productInCart.size}</p>
                    <FaRegHeart size={25} />
                      <FiShoppingCart size={25}/>
                       <CiUser size={25}/>
                   </div>
          </div>
    </div>
  )
}

export default Header