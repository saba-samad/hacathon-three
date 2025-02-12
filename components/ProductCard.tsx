// // //////////////////////////////////////////
// // github code

// import { LuStar } from "react-icons/lu";
// import newImage from "@/app/assets/new.png";
// import ProductCartBar from "./ProductCartBar";
// import AddToCartButton from "./AddToCartButton";

// const ProductCard = ({ product }: { product: Product }) => {
//   return (
//     <div className="overflow-hidden w-[300px] group text-sm">
//       <div className=" overflow-hidden rounded relative">
//         {product?.image && (
//           <Link href={`/product/${product?.slug?.current}`}>
//             <Image
//               src={urlFor(product.image).url()}
//               alt="productImage"
//               width={500}
//               height={500}
//               loading="lazy"
//               className={`w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105`}
//             />
//           </Link>
//           // className={`w-full max-h-96 object-cover overflow-hidden transition-transform duration-500 group-hover:scale-105`
          
//         )}
//       </div>
//       {/* Product Content */}
//       <div className="m-3">
//         {/* <div className="flex items-center justify-between"> */}
//         <p className=" text-black font-bold xl:text-xl mb-1.5 capitalize">
//           {product?.name}
//         </p>
//         <div className="text-lightText mt-3 flex items-center gap-1">
//           {Array.from({ length: 5 }).map((_, index) => {
//             // const isLastStar = index === 4;
//             return (
//               <Image src={stars } key={index} alt="" 
//               className="-mt-2 h-4 w-4"/>
//             );
//           })}
//         </div>
//         {/* </div> */}
//         {/* <p>4.5</p> */}

//         <PriceView
//           price={product?.price}
//           oldPrice={product?.oldPrice}
//           discount={product?.discount}
          
//         />
     
      
//        {/* <p>{product?.description}</p> */}
         
//         {/* <AddToCartButton product={product} /> */}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// //////////////////////////////////////////
import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import stars from "@/app/assets/Star 1.png";
import PriceView from "./PriceView";
import Link from "next/link";


const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className=" overflow-hidden w-[300px] group text-sm">
      <div className="overflow-hidden rounded relative">
        {product?.image && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product.image).url()}
              alt="productImage"
              width={500}
              height={500}
              loading="lazy"
              className={`w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105`}
            />
          </Link>


        )}
      </div>
      
      {/* Product Content */}
      <div className="m-3">
        <p className="text-black font-bold xl:text-xl mb-1.5 capitalize">
          {product?.name}
        </p>
        <div className="text-lightText mt-3 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image src={stars} key={index} alt="" className="h-4 w-4" />
          ))}
        </div>
        <PriceView
          price={product?.price}
          oldPrice={product?.oldPrice}
          discount={product?.discount}
        />
      </div>
    </div>
  );
};
export default ProductCard;
