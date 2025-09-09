import React, { useContext } from 'react'
import { ShopContext } from '../DataContext'

const Navbar = () => {
   const{handleToScroll,sectionRef}=useContext(ShopContext)
  return (
    <div className='max-w-full h-12 flex justify-center items-center bg-[#91CB94]   '>
  <div className=' w-[100%] h-[100%] flex justify-center items-center gap-10 '>  
                <p className='text-[18px] font-[Montserrat] cursor-pointer' onClick={()=>{
                    handleToScroll(sectionRef.trendingProducts)
                }}>New</p>
              <p className='text-[18px] font-[Montserrat] cursor-pointer' onClick={()=>{
                      handleToScroll(sectionRef.trendingProducts)
              }}>Diapers</p>
                <p className='text-[18px] font-[Montserrat] cursor-pointer' onClick={()=>{
                        handleToScroll(sectionRef.bedAndBath)
                }}>Wipers</p>
                <p className='text-[18px] font-[Montserrat]  cursor-pointer' onClick={()=>{
                     handleToScroll(sectionRef.bathAndBody)
                }}>Bath&Body</p>
                <p className='text-[18px] font-[Montserrat] cursor-pointer' onClick={()=>{
                       handleToScroll(sectionRef.bedAndBath)
                }}>Bed&Bath</p>
                <p className='text-[18px] font-[Montserrat] cursor-pointer' onClick={()=>{
                       handleToScroll(sectionRef.salesAndDiscount)
                }}>Sales & Discounts</p>
                <p className='text-[18px] font-[Montserrat] cursor-pointer' onClick={()=>{
                       handleToScroll(sectionRef.bathAndBody)
                }}>Value Kits&Bundles</p>
                <p className='text-[18px] font-[Montserrat] cursor-pointer'>Gifts</p>
                <p className='text-[18px] font-[Montserrat] cursor-pointer'>more</p>
    </div>
    </div>
  )
}

export default Navbar
