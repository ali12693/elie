import React, { useContext } from 'react'
import img from "../assets/bath_8.png"
import { ShopContext } from '../DataContext'
import { useNavigate } from 'react-router-dom'

const POPOFDuplicateProduct = ({image}) => {
  const { closePopUpOfDuplicateProduct,ISProductISDuplcate,setDisableAddTOCartButton}=useContext(ShopContext)
  const navigate=useNavigate()
  return (
  
    <div className='top-50    bg-[#011309]  py-5 px-5 fixed flex justify-center items-center'>
               <div className='justify-center items-center flex   gap-5 '>
                      <img src={image} alt="" className='w-50 h-50 ' />
                      <div className='flex flex-col items-center gap-5'>
                         <p className='text-white font-bold text-xl   '>This product is Already in the cart, <br/> do You want to add it again?</p>
                           <div className='flex justify-between items-center gap-5 '>
                            <button className='text-center h-12   px-6  fotn-bold text-white bg-green-600 cursor-pointer text-2xl ' onClick={()=>{
                                                closePopUpOfDuplicateProduct()
                                                  navigate("/productspage")
                                }}>Cancel</button>
                                <button className='text-center h-12   px-10 fotn-bold text-white bg-red-600 cursor-pointer text-2xl ' onClick={()=>{
                                                closePopUpOfDuplicateProduct()
                                                         setDisableAddTOCartButton(false)
                                }}>Ok</button>
                      </div>
                          
                               
                           </div>
               </div>
    </div>
  )
}

export default POPOFDuplicateProduct