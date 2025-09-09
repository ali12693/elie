import React, { useContext } from 'react'
import { AllData } from '../AllProductsData'
import { ShopContext } from '../DataContext'
  import polygon from "../assets/Polygon.png";
import { Link } from 'react-router-dom';
  
const ShowAllProducts = () => {
       const{showProduct,combineAllCategoryProduct, showlessproduct,ShowAllOfProducts,inputRef,debounceSearch,setFilteredProductsToShowProducts,     setShowSelectedProductOnAddToCartPage, setdefaultCountToOne,
         SetAddtocartSelectedProduct}=useContext(ShopContext)
  return (
    <div className='flex flex-col justify-center gap-5 w-[80%]   '>
      <div className='flex justify-between items-center w-[85%]'>
        <p className='text-bold text-gray-700 text-bold text-xl ml-1'>show {showProduct.length} 0f 38 products</p>
        <div className='flex justify-center items-center gap-2'><p className='text-xl text-[#656565] underline cursor-pointer'>SortBy</p>
         <div className='flex justify-between items-center bg-[#EEEEEE9E] px-1'>
              <input type="text" placeholder='Featured' className='h-10 w-30  text-[#8A8A8A] px-2 border-none outline-none' ref={inputRef} onChange={()=>{
                       debounceSearch(inputRef)
                       setFilteredProductsToShowProducts()
              }} />
              <img src={polygon} alt="" className='h-2 cursor-pointer' />
         </div>
        </div>
      </div>
           <div className='w-[90%] grid grid-cols-3 gap-5'>
                            {    showProduct.map((product,i)=>{
                                 return <div className='flex flex-col gap-3 ' key={i}>
                                   <Link to={"/addtocart"}>
                                      <img src={product.image}  alt="" className='w-60 h-70 cursor-pointer' onClick={()=>{
                                              SetAddtocartSelectedProduct(product)
                                              setdefaultCountToOne()
                                      }} />
                                   </Link>
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
                
           
              {(showProduct.length==9)&&<div className='flex justify-center w-[50%]'>  <button className='bg-green-500 text-[#343434]text-xl font-bold px-4 w-30 cursor-pointer py-2 border-none outline-none' onClick={()=>{
                ShowAllOfProducts()
              }}>ShowMore</button></div>}
                  {(showProduct.length==combineAllCategoryProduct.length)&&<div className='flex justify-center w-[50%]'>  <button className='bg-green-500 text-[#343434]text-xl font-bold px-4 w-30 cursor-pointer py-2 border-none outline-none' onClick={()=>{
                showlessproduct()
              }}>ShowLess</button></div>}
            
    </div>
  )
}

export default ShowAllProducts
