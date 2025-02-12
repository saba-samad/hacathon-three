// interface Props {
//     price: number | undefined;
//     oldPrice: number | undefined;
//     discount: number | undefined;

//     // className?: string;
//     // label?: string;
//   }

// const PriceView = ({ price, oldPrice, discount }:Props) => {
//     const discountedPrice = oldPrice - (oldPrice * discount) / 100;

//   return (
//     <>
//     <div className="flex flex-col items-start gap-2">
//   {/* Price Section */}
//   <div className="flex items-center gap-2">
//     {/* Actual Price */}
//     <p className="text-red-500 font-bold">${discountedPrice}</p>
//     {/* Old Price */}
//     <p className="line-through text-gray-400">{oldPrice}</p>
//   </div>

//   {/* Discount */}
//   {discount && (
//     <p className="text-green-500 text-sm">
//       Discount: {discount}%
//     </p>
//   )}
// </div>

//   </>
//   )
// }

// export default PriceView

// // ////////////////////////////////////////////////////

// interface Props {
//     price: number | undefined;
//     oldPrice: number | undefined;
//     discount: number | undefined;
//   }

//   const PriceView = ({ price, oldPrice, discount }: Props) => {
//     console.log('Price:', price);
//     console.log('Old Price:', oldPrice);
//     console.log('Discount:', discount);

//     // Handle missing oldPrice and discount gracefully
//     const discountedPrice =
//       oldPrice && discount !== undefined
//         ? oldPrice - (oldPrice * discount) / 100
//         : price; // Fallback to `price` if `oldPrice` or `discount` is missing

//     return (
//       <div className="flex flex-col items-start gap-2">
//         <div className="flex items-center gap-2">
//           {/* Display Actual Price */}
//           {discountedPrice !== undefined && (
//             <p className="font-bold">${discountedPrice}</p>
//           )}

//           {/* Display Old Price (Crossed-out) */}
//           {oldPrice !== undefined && (
//             <p className="line-through text-gray-400">${oldPrice}</p>
//           )}
//         </div>

//         {/* Display Discount if it exists */}
//         {discount !== undefined && (
//           <p className="text-green-500 text-sm">{discount}%</p>
//         )}
//       </div>
//     );
//   };

//   export default PriceView;

// // ////////////////////////////////////////////////////

// interface Props {
//   price: number | undefined;
//   oldPrice: number | undefined;
//   discount: number | undefined;

//   priceClassName?: string; // Individual class for price
//   oldPriceClassName?: string; // Individual class for old price
//   discountClassName?: string; // Individual class for discount
//   // description?: string;
// }

// const PriceView = ({ price, oldPrice, discount, priceClassName,oldPriceClassName,discountClassName}: Props) => {
//   // console.log("Price:", price);
//   // console.log("Old Price:", oldPrice);
//   // console.log("Discount:", discount);

//   // console.log("Description:", description);
//   // Handle missing oldPrice and discount gracefully
//   const discountedPrice =
//     oldPrice && discount !== undefined
//       ? oldPrice - (oldPrice * discount) / 100
//       : price; // Fallback to `price` if `oldPrice` or `discount` is missing
// // console.log(discountedPrice );
// // console.log( PriceView  );

//   return (
//     <div className="flex items-center space-x-[5px] xl:space-x-2.5 ">
//       <div
//       className="flex items-center gap-2"
//       >
//         {/* Display Actual Price */}
//         {discountedPrice !== undefined && (
//           <p className={`font-bold  text-black text-xl xl:text-2xl ${priceClassName}`}>${discountedPrice}</p>
//         )}

//         {/* Display Old Price (Crossed-out) only if `oldPrice` exists */}
//         {oldPrice !== undefined && oldPrice > 0 && (
//           <p className={`font-bold text-black/40 line-through text-xl xl:text-2xl ${oldPriceClassName}`}>${oldPrice}</p>
//         )}

//       {/* Display Discount only if `discount` exists and is greater than 0 */}
//       {discount !== undefined && discount > 0 && (
//         <p className={`font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333] ${discountClassName}`}>{discount}%</p>
//       )}

//     </div>
//     </div>
//   );
// };

// export default PriceView;

//////////////////////////////////////////////////////////////////////
// import PriceFormatter from "./PriceFormatter";

// interface Props {
//   price: number | undefined;
//   oldPrice: number | undefined;
//   discount: number | undefined;
//   className?: string;
// }

// const PriceView = ({ price, oldPrice,discount }: Props) => {
//   return (
//     <div className="flex items-center space-x-[5px] xl:space-x-2.5 ">
//       <div className="flex items-center gap-2">
//         {/* <p>{price}</p> */}
//         {/* <p>{discount}</p> */}
//         {/* <p className="bg-pink-300">{ oldPrice}</p> */}

//         {/* <PriceFormatter amount={price} />
//         {oldPrice && discount (
//           <PriceFormatter amount={oldPrice - (discount * oldPrice) / 100} />
//         )} */}
//         <PriceFormatter amount={price} />
//     {price && oldPrice && (
//   <PriceFormatter amount={oldPrice - (discount * oldPrice) / 100} />
// )}
// <p className="bg-red-400"> {discount}</p>


// {/* {price && oldPrice && (
//           <PriceFormatter amount={price - (oldPrice * price) / 100} />
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default PriceView;

/////////////////////////////////////////////////
import PriceFormatter from "./PriceFormatter";

interface Props {
  price: number | undefined;
  oldPrice: number | undefined;
  discount: number | undefined;
  className?: string;
}

const PriceView = ({ price, oldPrice }: Props) => {
  // if (!price || !oldPrice) return null;
   // Early return if price or oldPrice is missing

  const discount = oldPrice && price !== undefined ? ((oldPrice - price) / oldPrice) * 100 : 0; // Calculate discount percentage
  
  return (
    <div className="flex items-center space-x-[5px] xl:space-x-2.5">
      <div className="font-bold text-black text-xl xl:text-2xl">
        <PriceFormatter amount={price} />
        {oldPrice !== undefined && price !== undefined && oldPrice > price && (
          <div className="font-bold text-black/40 line-through text-xl xl:text-2xl">
            <PriceFormatter amount={oldPrice} />
          </div>
        )}
        {discount > 0 && (
          <div className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333] ">
            <span>{discount.toFixed(0)}%</span>
          </div>
        )}
       
      </div>
    </div>
  );
};

export default PriceView;
