
import { Product } from "@/sanity.types";
import { FaPlus, FaMinus } from "react-icons/fa6";
// import { Button } from "./ui/button";
import toast from "react-hot-toast";
import userCartStore from'@/store';

// import { useState } from 'react';

interface Props {
  product: Product;
  className?: string;
}

const QuantityButton = ({ product }: Props) => {

  const { addItem, removeItem, getItemCount} = userCartStore();

  const handleRemoveProduct = () => {
    removeItem( product?._id )
    if(itemCount > 1){
   toast.success("Quantity decrease successfully")
    } else {
    toast.success(`${product?.name?.substring(0, 12)}... removed successfully`)
  };

    
  };
  const handleAddProduct = () => {
    addItem(product);
    toast.success( `${product.name?.substring(0, 12)}... added successfully`)
  } 
  const itemCount = getItemCount(product?._id);
  // const itemCount = 5;
  return (
    <>
      {/* <Button
        variant="outline"
        size="icon"
        className="w-6 h-6"
        onClick={handleRemoveProduct}
      >
        <FaMinus />
      </Button>
      <span>{itemCount}</span>
      <Button
        variant="outline"
        size="icon"
        className="w-6 h-6"
        onClick={handleRemoveProduct}
      >
        <FaPlus />
      </Button>  ml-72*/}
      {/*  */}

      <div className="md:relative  w-full border-t md:border-none border-black/5 bottom-0 left-0 p-4 md:p-0 z-10 flex items-center justify-between sm:justify-start md:justify-center">
        <div className="bg-[#F0F0F0] ml-[160px] w-full min-w-[110px] max-w-[110px] sm:max-w-[170px] py-3 md:py-3.5 px-4 sm:px-5 rounded-full flex items-center justify-between">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium h-5 w-5 sm:h-6 text-xl"
            onClick={handleRemoveProduct}
          >
            {" "}
            <FaMinus />
          </button>
          <span className="font-medium text-sm sm:text-base">{itemCount}</span>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium h-5 w-5 sm:h-6 text-xl"
            onClick={handleAddProduct}
          >
            <FaPlus />
          </button>
        </div>
        
      </div>

      {/*  */}
    </>
  );
};

export default QuantityButton;
