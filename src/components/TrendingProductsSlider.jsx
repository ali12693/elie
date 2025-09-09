import React, { useContext } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { ShopContext } from '../DataContext'
    
const TrendingProductsSlider = () => {
  const{increase,decrease,trendingProductsref}=useContext(ShopContext)

  return (
    <div className='w-[65rem] flex justify-between items-center mx-auto' ref={trendingProductsref}>
             <p className='text-2xl font-bold text-slate-700'>Trending Products</p>
             <div className='flex gap-3'>
              <div className='px-1 py-1  rounded-full bg-green-500'>
                <MdKeyboardArrowLeft size={30} className='cursor-pointer' onClick={()=>{
                     decrease()
                  
                }} />
              </div>
              <div className='px-1 py-1  rounded-full bg-green-500'>
                <MdKeyboardArrowRight size={30} className='cursor-pointer' onClick={()=>{
                  increase()
                  
                }}/>
              </div>
             </div>
    </div>
  )
}

export default TrendingProductsSlider