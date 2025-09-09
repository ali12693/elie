import React from 'react'
import { AllData } from '../AllProductsData'
       
const TodayDeals = () => {
   const data = AllData.productCollection[0];
  return (
    <div className='flex w-full flex-col    mt-5 gap-5 '>
              <div className=' w-[80%] grid grid-cols-3 gap-10  '>
                  {new Array(3).fill(data).map((product,i) => {
           return <div className='flex flex-col gap-3 ' key={i}>
                                      <img src={product.image} alt="" className=' h-80 cursor-pointer' />
                                        <div className='flex  flex-col  gap-1 ml-2'>
                                            <p className='text-xl font-bold text-[#656565]'>{product.name}</p>
                                            <div className='flex gap-2'>
                                                         <p className='text-blue-500 '>${product.price}</p>
                                            <p className='text-[#CFCFCF] line-through  '>${product.oldPrice}</p>
                                            </div>
                                        </div>
                                  </div>
          })}
              </div>
    </div>
  )
}

export default TodayDeals