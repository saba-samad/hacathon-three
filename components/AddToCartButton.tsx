'use client'
import{ Product } from "@/sanity.types";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import QuantityButton from "./QuantityButton";
import userCartStore from'@/store';

interface Props {
  product: Product;
  // className?: string;
}

const AddToCartButton = ({product }: Props) => {
 const { addItem, getItemCount} = userCartStore();

 const itemCount = getItemCount(product?._id);

  const handleAddToCart = () => {
    addItem(product);
    toast.success( `${product.name?.substring(0, 12)}... added successfully`)
  };
  // const itemCount = 5;


  return (
    <>
    { itemCount? 
    <div className="text-sm">
      <div className="flex items-center justify-between">
     <span className="text-2xl text-muted-foreground">Quantity</span>
     {/* <span className="text-sm sm:text-base text-muted-foreground">Quantity</span> */}
     <QuantityButton product={product}/>
      </div>
     
      </div> : 
    <Button 
    onClick={ handleAddToCart}
    className="w-full ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all">Add To Cart</Button>
    }
    
    </>
  )
}

export default AddToCartButton
