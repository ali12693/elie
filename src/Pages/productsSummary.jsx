import React, { useContext } from 'react';
import truck_delivery_icon from "../assets/truck-delivery.png";
import { TiTick } from 'react-icons/ti';
import delete_icon from "../assets/deleteIcon.png"
import { AllData } from '../AllProductsData';
import { ShopContext } from '../DataContext';
import BuyProductPopUP from '../components/buyProductPopUP';
import { useNavigate } from 'react-router-dom';


const ProductsSummary = () => {
      const data = AllData.productCollection[0];
      const{productInCart, inputChecked,removeProductFromCart, setRemovedProductID,removeAllProductFromCart,selectAlItemsInput, selectAllProducts,singleproductCount, IncreaseItemsInProductsSummmary,
        DecreaseItemsInProductsSummmary,unSelectOther,checkISSelectedAll, IsAllProductsSelected,AddProductInOrdersummary,showPopUp,ShowPopUpToBuyProduct, getProductformMap,totalBIll,totalItems}=useContext(ShopContext)
 console.log(selectAllProducts,"selectAllProducts")
 const navigate=useNavigate()
  return (
    <div className=' bg-[#F3F3F3] max-w-[100vw]  mx-auto  flex justify-center items-center   '>
              {ShowPopUpToBuyProduct&&  <BuyProductPopUP/>}
      <div className='w-[95%] flex  container mt-15 mb-10 '>
        <div className='w-[55%] flex flex-col gap-10 px-10  justify-center'>
          
    
          <div className='w-full bg-white flex flex-col  px-6 py-4 gap-2 '>
            <h1 className='text-xl'>Preferred Delivery Options</h1>
            <div className='bg-[#eae2e2] w-80 border-2 rounded-sm p-3'>
              <div className='flex gap-1 items-center'>
                <div className='w-7 h-7 rounded-full bg-blue-700 flex justify-center items-center'>
                  <TiTick size={25} className='text-white' />
                </div>
                <div className='flex gap-3 px-4'>
                  <p>Delivery Fee</p>
                  <p>$2</p>
                </div>
                <img src={truck_delivery_icon} className='h-10 w-20 ' alt="Delivery Icon" />
              </div>

              <div className='flex w-[80%] flex-col items-center gap-2 mt-1'>
                <p className='text-[#474747]'>Standard</p>
                <p className='text-[#717171]'>Get by 22-24 Apr 2025</p>
              </div>
            </div>
          </div>
   <button className='bg-green-600 py-2 cursor-pointer font-bold ' onClick={()=>{
    navigate("/productspage")
   }}>Buy more</button>
          <div className='flex w-full bg-white items-center p-2'>
          
            <div className='flex w-full justify-between'>
                   <div className='flex gap-2 items-center'>
                          <input type="checkbox" className='w-5 h-5' ref={selectAlItemsInput} onChange={()=>{
                            
                                   
                                        selectAllProducts()
                                  

                                          
                                         
                                         
                                         
                          }} />
              <p className='text-medium text-[#444444] '>SELECT ALL ({productInCart.size} ITEM(S))</p>
                   </div>

                   <div className='flex gap-1 py-1'>
                    <img src={delete_icon} className='h-5 cursor-pointer' onClick={()=>{
                           removeAllProductFromCart()

                    }} />
                    <p className='text-[#444444]'>Delete</p>
                   </div>
            </div>
          </div>
           
                                     
                 {productInCart.size>0&& Array.from(productInCart).map(([id,product],i)=>{
                
                    return            <div className='flex w-full bg-white  p-2 gap-5 py-2 ' key={id}>
                <div className='flex gap-4 items-center'>
                    <input type="checkbox" className='h-5 w-5 '   ref={(el)=>{
                                  
                        return  inputChecked.current[id]=el
                    }} onChange={(e)=>{
                      
                       
                       
                      unSelectOther(id,e)
                    
                                  
                        
                       
                           
                            
                            

                    }} />
                    <img src={product.newproduct.image} alt="" className='h-25 w-25' />
                </div>
                <div className='w-120 flex flex-col gap-4'>
                    <div className='w-full flex flex-col '><div className='flex justify-between  w-full'>
                        <p className='text-medium font-bold text-[#343434] '>{product.newproduct.name}</p>
                        <p className='font-bold text-blue-600 mr-8'>{product.newproduct.price}</p>
                    </div>
                      <div className='flex justify-between w-full'>
                        <p className='text-sm'>No Brand, Family Color, Best Quality</p>
                        <p className='line-through text-[#A4A4A4] font-bold mr-8'>{product.newproduct.oldPrice}</p>
                    </div></div>

                    <div className='flex justify-between w-full'>
                          <p>30% off</p>
                            <div className='flex items-center   gap-1'>
                                <p className='px-3 bg-[#414141] text-black text-2xl font-bold text-center cursor-pointer ' onClick={()=>{
                                  DecreaseItemsInProductsSummmary(id)
                                }}>-</p>
                                <p className='text-[#414141]'>{product.count}</p>
                                <p className=' px-2  bg-[#414141] text-black text-2xl font-bold cursor-pointer' onClick={()=>{
                                    IncreaseItemsInProductsSummmary(id)
                                }}>+</p>
                            </div>
                    </div>

                </div>
                   <div className='flex gap-2  flex-col items-center justify-end'>
                    
                               <div className='flex items-center gap-1'>
                                 <img src={delete_icon} alt="" onClick={()=>{
                                  console.log(id,"delete")
                                
                                  removeProductFromCart(id)
                                }} className='cursor-pointer'  />
                                <p className='text-[#414141] '>Delete</p>
                               </div>

                               <button className='bg-green-500 py-1 cursor-pointer px-6 text-center font-bold text-white' onClick={()=>{
                                           showPopUp()
                                           getProductformMap(id,product)
                               }}>Add</button>
                   </div>
          </div>
                 })

}

        </div>
           <div className='w-[30%] bg-white flex flex-col gap-5 px-4   justify-center  h-75'>
                    <h1 className='text-xl font-bold text-[#0f0f0f]'>Order Summary</h1>
                    <div className='flex flex-col w-full gap-5'>
                           <div className='w-full justify-between flex '>
                              <p className='text-xl text-[#000000]'> SubTotal ({AddProductInOrdersummary[1]?.count?AddProductInOrdersummary[1].count:0}   items)</p>
                              <p className='text-xl text-[#000000]'> USD.{AddProductInOrdersummary[1]?.newproduct?.price&&AddProductInOrdersummary[1]?.count?AddProductInOrdersummary[1].newproduct.price*AddProductInOrdersummary[1].count:"00:00"}</p>
                           </div>
                           <div className='w-full flex justify-between'>
                                <p className='text-xl text-[#000000]'>Total Items</p>
                                <p className='text-xl text-[#000000]'>{totalItems>0?totalItems:"00:00"}</p>
                           </div>
                           <div className='w-full flex justify-between '>
                            <input type="text" className='w-60 h-10 text-[#B3B3B3] border-none outline-none px-2 bg-[#F3F3F3]' />
                            <button className='bg-[#197CC0] text-[#FFFFFF] px-4 py-2 cursor-pointer '>Apply</button>
                           </div>
                           <div className='w-full flex justify-between'>
                                <p className='text-xl text-[#000000]'>Total</p>
                                <p className='text-xl text-[#000000]'>USD.{totalBIll>0?totalBIll:"00:00"}</p>
                           </div>
                           
                         
                    </div>
                 
                      <button className='bg-green-500 text-[#FFFFFF] w-full py-3 cursor-pointer'>Proceed to Checkout</button>
           </div>
             

           

      </div>
    </div>
  );
}

export default ProductsSummary;
