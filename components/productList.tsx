// /////////////////////////////////
import { Product } from "@/sanity.types";
import ProductCard from "@/components/ProductCard";
// import { NextProduct } from "@/sanity.types";
// import ProductCard2 from "./ProductCard2";


interface Props {
  products: Product[];
  title?: boolean;
  // next: NextProduct[];
}

const ListCard = ({ products, title}: Props) => {
   // Slicing the products array
   const firstFourProducts = products.slice(0, 4);
   const nextFourProducts = products.slice(4, 8);


  //  console.log("First Four Products:", firstFourProducts);
  //  console.log("Next Four Products:", nextFourProducts);

  return (
    <>
    <main className="">
      {/* Optional Title  */}
      {title && (
        
        <div className="flex justify-center ">
          <h1 className="text-black mt-9 text-center font-extrabold text-3xl md:text-4xl lg:text-5xl pt-4">
            NEW ARRIVALS
          </h1>
        </div>
      )}

      {/* Product Grid */}
      <div className="flex  justify-center">
      <div className="p-4 mt-9 grid gap-4 
             sm:gap-6 md:gap-8 lg:gap-80 xl:gap-80 2xl:gap-80
             grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
             xl:grid-cols-5 2xl:grid-cols-6 mx-auto
          ">
        {nextFourProducts?.map((product) => (
          <ProductCard key={product?._id} product={product}
        />
        ))}
      </div>
      </div>
      <div className="w-full flex justify-center items-center">
          <div className="w-[80%] flex justify-center border-b-2 border-neutral-100 pb-10">
            <button className="bg-neutral-100 border border-gray-300 rounded-[60px] text-black py-2 px-9 mt-9">
              View All
            </button>
          </div>
        </div>
      {/* firstFourProducts */}
      <div className="flex  justify-center mt-12">
          <h2 className="text-black font-font font-extrabold text-5xl md:text-3xl lg:text-4xl xl:text-5xl pt-4">
          Top Selling
          </h2>
        </div>
      {/*  */}
      <div className="flex justify-center">
      <div className="p-4  mt-9 grid gap-4 
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
      
     

      </main>
      
     
    
    
    </>
    
  );
};

export default ListCard;





// /////////////////////////////////////



 
// {/* <div className="overflow-hidden">
// <div className="flex mx-4 xl:mx-0 space-x-4 sm:space-x-5">
      
//       <div className="min-w-0 shrink-0 grow-0 basis-full w-full max-w-[198px] sm:max-w-[295px] pl-0">
//         <a className="flex flex-col items-start aspect-auto" href="/shop/product/1/T-shirt-with-Tape-Details">
//         <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden">
//           {/* image */}
//         </div>
//         <strong className="text-black xl:text-xl">T-shirt with Tape Details</strong>
//         {/* stars */}
//         <div className="flex items-center space-x-[5px] xl:space-x-2.5">…</div>
//         </a>
//         </div> 



//         {/* 2 div */}
//         <div className="min-w-0 shrink-0 grow-0 basis-full w-full max-w-[198px] sm:max-w-[295px] pl-0">
//         <a className="flex flex-col items-start aspect-auto" href="/shop/product/1/T-shirt-with-Tape-Details">
//         <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden">
//           {/* image */}
//         </div>
//         <strong className="text-black xl:text-xl">T-shirt with Tape Details</strong>
//         {/* stars */}
//         <div className="flex items-center space-x-[5px] xl:space-x-2.5">…</div>
//         </a>
//         </div> 
//         {/* 3 div */}
//         <div className="min-w-0 shrink-0 grow-0 basis-full w-full max-w-[198px] sm:max-w-[295px] pl-0">
//         <a className="flex flex-col items-start aspect-auto" href="/shop/product/1/T-shirt-with-Tape-Details">
//         <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden">
//           {/* image */}
//         </div>
//         <strong className="text-black xl:text-xl">T-shirt with Tape Details</strong>
//         {/* stars */}
//         <div className="flex items-center space-x-[5px] xl:space-x-2.5">…</div>
//         </a>
//         </div> 
//         {/* 4 div */}
//         <div className="min-w-0 shrink-0 grow-0 basis-full w-full max-w-[198px] sm:max-w-[295px] pl-0">
//         <a className="flex flex-col items-start aspect-auto" href="/shop/product/1/T-shirt-with-Tape-Details">
//         <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden">
//           {/* image */}
//         </div>
//         <strong className="text-black xl:text-xl">T-shirt with Tape Details</strong>
//         {/* stars */}
//         <div className="flex items-center space-x-[5px] xl:space-x-2.5">…</div>
//         </a>
//         </div> 
// {/*  */}
//  </div>
// </div> */}


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////
// import { Product } from "@/sanity.types";
// import ProductCard from "@/components/ProductCard";

// interface Props {
//   products: Product[];
//   title?: boolean;
// }

// const ListCard = ({ products, title }: Props) => {
//   return (
//     <>
//       {/* Optional Title */}
//       {title && (
//         <div className="flex justify-center">
//           <h1 className="text-black mt-9 text-center font-extrabold text-3xl md:text-4xl lg:text-5xl pt-4">
//             NEW ARRIVALS
//           </h1>
//         </div>
//       )}

//       {/* Product Grid */}
//       <div className="p-2 mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products?.map((product) => (
//           <ProductCard key={product?._id} product={product} />
//         ))}
//       </div>
     
//     </>
//   );
// };

// export default ListCard;

