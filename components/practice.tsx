import { Product } from "@/sanity.types";
import ProductCard from "@/components/ProductCard";

interface Props {
  products: Product[];
   title?: boolean;
 }

 const Practice = ({ products }: Props) => {
   return (
     <>
       {/* Optional Title */}
       {/* {title && (
         <div className="flex justify-center">
           <h1 className="text-black mt-9 text-center font-extrabold text-3xl md:text-4xl lg:text-5xl pt-4">
             NEW ARRIVALS
           </h1>
         </div>
       )} */}

      {/* Product Grid */}
       <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
         {products?.map((product) => (
           <ProductCard key={product?._id} product={product} />
         ))}
       </div>
     
    </>
   );
 };

export default Practice;;

// /////////////////////
// import { Product } from "@/sanity.types";
// import ProductCard from "@/components/ProductCard";
// // import { NextProduct } from "@/sanity.types";
// // import ProductCard2 from "./ProductCard2";


// interface Props {
//   products: Product[];
//   title?: boolean;
//   // next: NextProduct[];
// }

// const  Practice = ({ products}: Props) => {
//    // Slicing the products array
//    const firstFourProducts = products.slice(0, 3);
//    const nextFourProducts = products.slice(3, 6);
//    const thenFourProducts = products.slice(6, 8);



//   //  console.log("First Four Products:", firstFourProducts);
//   //  console.log("Next Four Products:", nextFourProducts);

//   return (
//     <>
//     <main className="">
    

//       {/* Product Grid */}
//       <div className="flex justify-center">
//       <div className="p-4 mt-9 grid gap-4 
//              grid-cols-1 xs:grid-cols-2
//  sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3lg:gap-5
//           ">
//         {nextFourProducts?.map((product) => (
//           <ProductCard key={product?._id} product={product}
//         />
//         ))}
// </div>
//       </div>
//       {/* firstFourProducts */}
//       <div className="flex">
//       <div className="p-4 mt-9 grid gap-4 
//              grid-cols-1 xs:grid-cols-2
//  sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3lg:gap-5
//           ">
//         {firstFourProducts?.map((product) => (
//           <ProductCard key={product?._id} product={product}
//         />
//         ))}
//       </div>
//       </div>
//       {/*  */}
//       <div className="flex justify-center">
//       <div className="p-4 mt-9 grid gap-4 
//              sm:gap-6 md:gap-8 lg:gap-80 xl:gap-80 2xl:gap-80
//              grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
//              xl:grid-cols-5 2xl:grid-cols-6 mx-auto
//           ">
//         {thenFourProducts?.map((product) => (
//           <ProductCard key={product?._id} product={product}
//         />
//         ))}
//       </div>
//       </div>
      
     

//       </main>
      
     
    
    
//     </>
    
//   );
// };

// export default Practice;