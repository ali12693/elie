import React, { useContext } from 'react';
import { ShopContext } from '../DataContext';
import { Link } from 'react-router-dom';

      
const TrendingProduct = () => {
const{TrendingProductSLice}=useContext(ShopContext)
     
  return (
    <div className='w-[70rem]  min-h-[350px] grid grid-cols-5 mx-auto place-items-end overflow-visible gap-5 mt-10' >
      {TrendingProductSLice.map((product, i) => {
        const lastIndex = TrendingProductSLice.length - 1;

        let height = '350px';
        if (i === 0 || i === lastIndex) height = '250px';
        else if (i === 1 || i === lastIndex - 1) height = '300px';



        return (
                                 <Link to={"productspage"}>
                                     <img
            key={i}
            src={product.image}
            className='rounded-md'
            style={{
              height: height
           
            }}
          />             
                 </Link>
         
        );
      })}
    </div>
  );
};

export default TrendingProduct;
