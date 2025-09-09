import React, { useContext } from 'react'
import img from "../assets/bath_8.png"
import { ShopContext } from '../DataContext'
const BuyProductPopUP = () => {
  const {closePopup,   AddProductInOrdersummary,  orderPorductImage,setSelectedProductInOrdersummary}=useContext(ShopContext)
  return (
  
    <div className='top-50    bg-[#061b20]  py-4 px-5 fixed flex justify-center items-center'>
               <div className='justify-center items-center flex gap-5 '>
                      <img src={orderPorductImage[1].newproduct.image} alt="" className='w-30 h-30 rounded-full' />
                      <div className='flex flex-col items-center gap-5'>
                         <p className='text-white font-bold '>Do you want to buy this product</p>
                           <div className='flex justify-between items-center gap-5 '>
                             <button className='text-center h-10 px-6 fotn-bold  bg-green-500 text-white cursor-pointer' onClick={()=>{
                                      closePopup()
                             }}>Cancel</button>
                                <button className='text-center h-10  px-10 fotn-bold text-white bg-red-600 cursor-pointer text-xl ' onClick={()=>{
                                              closePopup()
                                               setSelectedProductInOrdersummary()
                                }}>ok</button>
                      </div>
                          
                               
                           </div>
               </div>
    </div>
  )
}

export default BuyProductPopUP