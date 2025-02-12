import React from 'react';
import { Product } from "@/sanity.types";
import ProductCard from "@/components/ProductCard";


interface Props {
    products: Product[];
    title?: boolean;
    // next: NextProduct[];
  }

const FourProduct = ({ products}: Props) => {
    
        // Slicing the products array
        const firstFourProducts = products.slice(0, 4);
  return (
    <>
 <div className="flex justify-center ">
          <h1 className="text-black mt-9 text-center font-extrabold text-3xl md:text-4xl lg:text-5xl pt-4">
          You might also like
          </h1>
        </div>

    <div className="flex  justify-center">
      <div className="p-4 mt-9 grid gap-4 
             sm:gap-6 md:gap-8 lg:gap-80 xl:gap-80 2xl:gap-80
             grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
             xl:grid-cols-5 2xl:grid-cols-6 mx-auto
          ">
        {firstFourProducts?.map((product) => (
          <ProductCard key={product?._id} product={product}
        />
        ))}
      </div>
      </div>
    </>
  )
}

export default FourProduct;
