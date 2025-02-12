// import React from "react";
// import Slider from "@mui/material/Slider";
// import Image from "next/image";
// import othergreaterthan from "@/app/assets/other greaterthan.png";
// import greaterthan from "@/app/assets/greaterthan.png";
// import check from "@/app/assets/check.png";
// import Box from "@mui/material/Box";
// import filter from "@/app/assets/filter.png";

// function valuetext(value: number) {
//   return `${value}°C`;
// }

// const Filter = () => {
//   // slider ui code
//   const [value, setValue] = React.useState<number[]>([20, 37]);

//   const handleChange = (event: Event, newValue: number | number[]) => {
//     setValue(newValue as number[]);
//   };

//   const items = [
//     { name: "T-shirts", href: "./onsale" },
//     { name: "Shorts", href: "./onsale" },
//     { name: "Hoodie", href: "./onsale" },
//     { name: "Jeans", href: "./onsale" },
//   ];

//   {
//     /* // filter k lye map ka array */
//   }
//   const buttons = [
//     { bgColor: "bg-green-600", hasImage: true },
//     { bgColor: "bg-red-700", hasImage: false },
//     { bgColor: "bg-yellow-600", hasImage: false },
//     { bgColor: "bg-orange-700", hasImage: false },
//     { bgColor: "bg-blue-500", hasImage: false },
//     { bgColor: "bg-blue-800", hasImage: false },
//     { bgColor: "bg-purple-900", hasImage: false },
//     { bgColor: "bg-pink-900", hasImage: false },
//     { bgColor: "bg-white", hasImage: false },
//     { bgColor: "bg-black", hasImage: false },
//   ];
//   {
//     /* // filter k lye map ka array */
//   }
//   const sizes = [
//     { label: "XX-Small", bgColor: "bg-black", textColor: "text-white" },
//     { label: "X-Small", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "Small", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "Medium", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "X-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "XX-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "3X-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "4X-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//   ];
//   {
//     /* // filter k lye map ka array */
//   }
//   const categories = [
//     { label: "Casual", href: "./onsale" },
//     { label: "Formal", href: "./onsale" },
//     { label: "Party", href: "./onsale" },
//     { label: "Gym", href: "./onsale" },
//   ];

//   return (
//     <>
//       {/* from here */}
//       <div className="hidden bg-orange-700 md:block min-w-[295px] max-w-[295px] border border-black rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
//         <div className="flex items-center justify-between">
//           <span className="font-bold text-black text-xl">Filters</span>
//           <Image src={filter} alt="" />
//         </div>
//         <hr className="border-t-black/10" />

//         <div className="flex flex-col space-y-0.5 text-black">
//           {items.map((item, index) => (
//             <a
//               key={index} // Unique key for React rendering
//               className="flex items-center justify-between py-2"
//               href={item.href}
//             >
//               {item.name}
//               <Image src={greaterthan} alt="Greater Than Icon" />
//             </a>
//           ))}
//         </div>
//         <hr className="border-t-black/10" />

//         {/* mai nai yahan matrrial ui  liberary import karwaye hai or jahan jahan ui ka comments hai mens wahan per ui import hai  */}
//         <div className="flex justify-between items-center">
//           <h3 className="font-bold text-black text-xl">Price</h3>
//           <span>
//             {" "}
//             <Image src={othergreaterthan} alt="" className="cursor-pointer" />
//           </span>
//         </div>
//         <div>
//           <Box sx={{ width: 250 }}>
//             <Slider
//               getAriaLabel={() => "Temperature range"}
//               value={value}
//               onChange={handleChange}
//               valueLabelDisplay="auto"
//               getAriaValueText={valuetext}
//               sx={{
//                 color: "black", // Sets the slider track and thumb color
//                 "& .MuiSlider-thumb": {
//                   borderColor: "black", // Thumb border color
//                 },
//                 "& .MuiSlider-track": {
//                   backgroundColor: "black", // Track color
//                 },
//                 "& .MuiSlider-rail": {
//                   backgroundColor: "#bdbdbd", // Rail color (optional for contrast)
//                 },
//               }}
//             />
//           </Box>
//         </div>
//         <hr className="border-t-black/10" />
//         {/* next part */}
//         <div className="flex justify-between items-center">
//           <h3 className="text-black text-xl font-bold">Colors</h3>
//           <span>
//             {" "}
//             <Image src={othergreaterthan} alt="" className="cursor-pointer" />
//           </span>
//         </div>

//         <div className="pt-4 pb-3">
//           <div className="flex space-2.5 flex-wrap md:grid grid-cols-5 gap-2.5">
//             {buttons.map((button, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 className={`${button.bgColor} rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20`}
//               >
//                 {button.hasImage && (
//                   <Image src={check} alt="Check Icon" className="w-4 h-4" />
//                 )}
//               </button>
//             ))}
//           </div>
//           <hr className="border-t-black/10 mt-5" />

//           {/* next part */}
//           <div className="flex justify-between mt-4 items-center">
//             <h3 className="font-bold text-black text-xl">Size</h3>
//             <span>
//               {" "}
//               <Image src={othergreaterthan} alt="" className="cursor-pointer" />
//             </span>
//           </div>
//           <div className="pt-4 pb-3">
//             <div className="flex items-center flex-wrap">
//               {sizes.map((size, index) => (
//                 <button
//                   key={index}
//                   className={`m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px] font-medium ${size.bgColor} ${size.textColor}`}
//                 >
//                   {size.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <hr className="border-t-black/10" />
//           {/* next part*/}
//           <div className="flex justify-between mt-4 items-center">
//             <h3 className="font-bold text-black text-xl">Dress Style</h3>
//             <span>
//               {" "}
//               <Image src={othergreaterthan} alt="" className="cursor-pointer" />
//             </span>
//           </div>

//           <div className="flex flex-col space-y-0.5 text-black">
//             {categories.map((category, index) => (
//               <a
//                 key={index}
//                 className="flex items-center justify-between py-2"
//                 href={category.href}
//               >
//                 {category.label}
//                 <Image src={greaterthan} alt="Greater Than Icon" />
//               </a>
//             ))}
//           </div>

//           <button
//             className="inline-flex mt-4 items-center justify-center shadow hover:bg-gray-900 hover:shadow-lg transition-all duration-300 ease-in transform hover:scale-110 px-4 bg-black w-full rounded-full text-sm font-medium py-4 h-12 text-white"
//             type="button"
//           >
//             Apply Filter
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Filter;

// ////////////////////
// import React from "react";
// import Slider from "@mui/material/Slider";
// import Image from "next/image";
// import othergreaterthan from "@/app/assets/other greaterthan.png";
// import greaterthan from "@/app/assets/greaterthan.png";
// import check from "@/app/assets/check.png";
// import Box from "@mui/material/Box";
// import filter from "@/app/assets/filter.png";

// function valuetext(value: number) {
//   return `${value}°C`;
// }

// const Filter = () => {
//   // Slider UI state
//   const [value, setValue] = React.useState<number[]>([20, 37]);

//   const handleChange = (event: Event, newValue: number | number[]) => {
//     setValue(newValue as number[]);
//   };

//   // Filter items for navigation
//   const items = [
//     { name: "T-shirts", href: "./onsale" },
//     { name: "Shorts", href: "./onsale" },
//     { name: "Hoodie", href: "./onsale" },
//     { name: "Jeans", href: "./onsale" },
//   ];

//   // Buttons for colors (example)
//   const buttons = [
//     { bgColor: "bg-green-600", hasImage: true },
//     { bgColor: "bg-red-700", hasImage: false },
//     { bgColor: "bg-yellow-600", hasImage: false },
//     { bgColor: "bg-orange-700", hasImage: false },
//     { bgColor: "bg-blue-500", hasImage: false },
//     { bgColor: "bg-blue-800", hasImage: false },
//     { bgColor: "bg-purple-900", hasImage: false },
//     { bgColor: "bg-pink-900", hasImage: false },
//     { bgColor: "bg-white", hasImage: false },
//     { bgColor: "bg-black", hasImage: false },
//   ];

//   // Sizes for filter
//   const sizes = [
//     { label: "XX-Small", bgColor: "bg-black", textColor: "text-white" },
//     { label: "X-Small", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "Small", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "Medium", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "X-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "XX-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "3X-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "4X-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//   ];

//   // Categories for dress style
//   const categories = [
//     { label: "Casual", href: "./onsale" },
//     { label: "Formal", href: "./onsale" },
//     { label: "Party", href: "./onsale" },
//     { label: "Gym", href: "./onsale" },
//   ];

//   return (
//     <>
//       {/* Outer container: Removed the "hidden" class so it displays in all viewports.
//           Optionally, you can add responsive styling here as needed. */}
//       <div className="bg-orange-700 md:block min-w-[295px] max-w-[295px] border border-black rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
//         <div className="flex items-center justify-between">
//           <span className="font-bold text-black text-xl">Filters</span>
//           <Image src={filter} alt="Filter Icon" />
//         </div>
//         <hr className="border-t-black/10" />

//         <div className="flex flex-col space-y-0.5 text-black">
//           {items.map((item, index) => (
//             <a
//               key={index} // Unique key for React rendering
//               className="flex items-center justify-between py-2"
//               href={item.href}
//             >
//               {item.name}
//               <Image src={greaterthan} alt="Greater Than Icon" />
//             </a>
//           ))}
//         </div>
//         <hr className="border-t-black/10" />

//         <div className="flex justify-between items-center">
//           <h3 className="font-bold text-black text-xl">Price</h3>
//           <span>
//             <Image src={othergreaterthan} alt="Expand Icon" className="cursor-pointer" />
//           </span>
//         </div>
//         <div>
//           <Box sx={{ width: 250 }}>
//             <Slider
//               getAriaLabel={() => "Temperature range"}
//               value={value}
//               onChange={handleChange}
//               valueLabelDisplay="auto"
//               getAriaValueText={valuetext}
//               sx={{
//                 color: "black", // Slider track and thumb color
//                 "& .MuiSlider-thumb": {
//                   borderColor: "black", // Thumb border color
//                 },
//                 "& .MuiSlider-track": {
//                   backgroundColor: "black", // Track color
//                 },
//                 "& .MuiSlider-rail": {
//                   backgroundColor: "#bdbdbd", // Rail color for contrast
//                 },
//               }}
//             />
//           </Box>
//         </div>
//         <hr className="border-t-black/10" />

//         <div className="flex justify-between items-center">
//           <h3 className="text-black text-xl font-bold">Colors</h3>
//           <span>
//             <Image src={othergreaterthan} alt="Expand Icon" className="cursor-pointer" />
//           </span>
//         </div>

//         <div className="pt-4 pb-3">
//           <div className="flex flex-wrap grid grid-cols-5 gap-2.5">
//             {buttons.map((button, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 className={`${button.bgColor} rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20`}
//               >
//                 {button.hasImage && (
//                   <Image src={check} alt="Check Icon" className="w-4 h-4" />
//                 )}
//               </button>
//             ))}
//           </div>
//           <hr className="border-t-black/10 mt-5" />

//           <div className="flex justify-between mt-4 items-center">
//             <h3 className="font-bold text-black text-xl">Size</h3>
//             <span>
//               <Image src={othergreaterthan} alt="Expand Icon" className="cursor-pointer" />
//             </span>
//           </div>
//           <div className="pt-4 pb-3">
//             <div className="flex flex-wrap items-center">
//               {sizes.map((size, index) => (
//                 <button
//                   key={index}
//                   className={`m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px] font-medium ${size.bgColor} ${size.textColor}`}
//                 >
//                   {size.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <hr className="border-t-black/10" />

//           <div className="flex justify-between mt-4 items-center">
//             <h3 className="font-bold text-black text-xl">Dress Style</h3>
//             <span>
//               <Image src={othergreaterthan} alt="Expand Icon" className="cursor-pointer" />
//             </span>
//           </div>

//           <div className="flex flex-col space-y-0.5 text-black">
//             {categories.map((category, index) => (
//               <a
//                 key={index}
//                 className="flex items-center justify-between py-2"
//                 href={category.href}
//               >
//                 {category.label}
//                 <Image src={greaterthan} alt="Greater Than Icon" />
//               </a>
//             ))}
//           </div>

//           <button
//             className="inline-flex mt-4 items-center justify-center shadow hover:bg-gray-900 hover:shadow-lg transition-all duration-300 ease-in transform hover:scale-110 px-4 bg-black w-full rounded-full text-sm font-medium py-4 h-12 text-white"
//             type="button"
//           >
//             Apply Filter
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Filter;


// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// "use client";
// import React from "react";
// import Slider from "@mui/material/Slider";
// import Image from "next/image";
// import Box from "@mui/material/Box";

// // Asset imports
// import filterIcon from "@/app/assets/filter.png";
// import greaterthan from "@/app/assets/greaterthan.png";
// import othergreaterthan from "@/app/assets/other greaterthan.png";
// import check from "@/app/assets/check.png";

// function valuetext(value: number) {
//   return `${value}°C`;
// }

// const Filter = () => {
//   // Slider state
//   const [value, setValue] = React.useState<number[]>([20, 37]);
//   const handleChange = (event: Event, newValue: number | number[]) => {
//     setValue(newValue as number[]);
//   };

//   // Navigation items
//   const items = [
//     { name: "T-shirts", href: "./onsale" },
//     { name: "Shorts", href: "./onsale" },
//     { name: "Hoodie", href: "./onsale" },
//     { name: "Jeans", href: "./onsale" },
//   ];

//   // Color buttons
//   const buttons = [
//     { bgColor: "bg-green-600", hasImage: true },
//     { bgColor: "bg-red-700", hasImage: false },
//     { bgColor: "bg-yellow-600", hasImage: false },
//     { bgColor: "bg-orange-700", hasImage: false },
//     { bgColor: "bg-blue-500", hasImage: false },
//     { bgColor: "bg-blue-800", hasImage: false },
//     { bgColor: "bg-purple-900", hasImage: false },
//     { bgColor: "bg-pink-900", hasImage: false },
//     { bgColor: "bg-white", hasImage: false },
//     { bgColor: "bg-black", hasImage: false },
//   ];

//   // Size buttons
//   const sizes = [
//     { label: "XX-Small", bgColor: "bg-black", textColor: "text-white" },
//     { label: "X-Small", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "Small", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "Medium", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "X-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "XX-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "3X-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//     { label: "4X-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
//   ];

//   // Category links
//   const categories = [
//     { label: "Casual", href: "./onsale" },
//     { label: "Formal", href: "./onsale" },
//     { label: "Party", href: "./onsale" },
//     { label: "Gym", href: "./onsale" },
//   ];

//   return (
//     // Use a responsive container:
//     // - On mobile, the container takes full width.
//     // - On desktop, it maintains a fixed width.
//     <div className="w-full md:min-w-[295px] md:max-w-[295px] border border-black rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
//       <div className="flex items-center justify-between">
//         <span className="font-bold text-black text-xl">Filters</span>
//         <Image src={filterIcon} alt="Filter Icon" />
//       </div>
//       <hr className="border-t-black/10" />

//       <div className="flex flex-col space-y-0.5 text-black">
//         {items.map((item, index) => (
//           <a
//             key={index}
//             className="flex items-center justify-between py-2"
//             href={item.href}
//           >
//             {item.name}
//             <Image src={greaterthan} alt="Greater Than Icon" />
//           </a>
//         ))}
//       </div>
//       <hr className="border-t-black/10" />

//       <div className="flex justify-between items-center">
//         <h3 className="font-bold text-black text-xl">Price</h3>
//         <span>
//           <Image
//             src={othergreaterthan}
//             alt="Expand Icon"
//             className="cursor-pointer"
//           />
//         </span>
//       </div>
//       <div>
//         <Box sx={{ width: "100%" }}>
//           <Slider
//             getAriaLabel={() => "Temperature range"}
//             value={value}
//             onChange={handleChange}
//             valueLabelDisplay="auto"
//             getAriaValueText={valuetext}
//             sx={{
//               color: "black",
//               "& .MuiSlider-thumb": {
//                 borderColor: "black",
//               },
//               "& .MuiSlider-track": {
//                 backgroundColor: "black",
//               },
//               "& .MuiSlider-rail": {
//                 backgroundColor: "#bdbdbd",
//               },
//             }}
//           />
//         </Box>
//       </div>
//       <hr className="border-t-black/10" />

//       <div className="flex justify-between items-center">
//         <h3 className="text-black text-xl font-bold">Colors</h3>
//         <span>
//           <Image
//             src={othergreaterthan}
//             alt="Expand Icon"
//             className="cursor-pointer"
//           />
//         </span>
//       </div>
//       <div className="pt-4 pb-3">
//         <div className="flex flex-wrap grid grid-cols-5 gap-2.5">
//           {buttons.map((button, index) => (
//             <button
//               key={index}
//               type="button"
//               className={`${button.bgColor} rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20`}
//             >
//               {button.hasImage && (
//                 <Image src={check} alt="Check Icon" className="w-4 h-4" />
//               )}
//             </button>
//           ))}
//         </div>
//       </div>
//       <hr className="border-t-black/10 mt-5" />

//       <div className="flex justify-between mt-4 items-center">
//         <h3 className="font-bold text-black text-xl">Size</h3>
//         <span>
//           <Image
//             src={othergreaterthan}
//             alt="Expand Icon"
//             className="cursor-pointer"
//           />
//         </span>
//       </div>
//       <div className="pt-4 pb-3">
//         <div className="flex flex-wrap items-center">
//           {sizes.map((size, index) => (
//             <button
//               key={index}
//               className={`m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px] font-medium ${size.bgColor} ${size.textColor}`}
//             >
//               {size.label}
//             </button>
//           ))}
//         </div>
//       </div>
//       <hr className="border-t-black/10" />

//       <div className="flex justify-between mt-4 items-center">
//         <h3 className="font-bold text-black text-xl">Dress Style</h3>
//         <span>
//           <Image
//             src={othergreaterthan}
//             alt="Expand Icon"
//             className="cursor-pointer"
//           />
//         </span>
//       </div>
//       <div className="flex flex-col space-y-0.5 text-black">
//         {categories.map((category, index) => (
//           <a
//             key={index}
//             className="flex items-center justify-between py-2"
//             href={category.href}
//           >
//             {category.label}
//             <Image src={greaterthan} alt="Greater Than Icon" />
//           </a>
//         ))}
//       </div>
//       <button
//         className="inline-flex mt-4 items-center justify-center shadow hover:bg-gray-900 hover:shadow-lg transition-all duration-300 ease-in transform hover:scale-110 px-4 bg-black w-full rounded-full text-sm font-medium py-4 h-12 text-white"
//         type="button"
//       >
//         Apply Filter
//       </button>
//     </div>
//   );
// };

// export default Filter;

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
"use client";
import React from "react";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import Box from "@mui/material/Box";

// Asset imports
import filterIcon from "@/app/assets/filter.png";
import greaterthan from "@/app/assets/greaterthan.png";
import othergreaterthan from "@/app/assets/other greaterthan.png";
import check from "@/app/assets/check.png";

function valuetext(value: number) {
  return `${value}°C`;
}

const Filter = () => {
  // Slider state
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  // Navigation items
  const items = [
    { name: "T-shirts", href: "./onsale" },
    { name: "Shorts", href: "./onsale" },
    { name: "Hoodie", href: "./onsale" },
    { name: "Jeans", href: "./onsale" },
  ];

  // Color buttons
  const buttons = [
    { bgColor: "bg-green-600", hasImage: true },
    { bgColor: "bg-red-700", hasImage: false },
    { bgColor: "bg-yellow-600", hasImage: false },
    { bgColor: "bg-orange-700", hasImage: false },
    { bgColor: "bg-blue-500", hasImage: false },
    { bgColor: "bg-blue-800", hasImage: false },
    { bgColor: "bg-purple-900", hasImage: false },
    { bgColor: "bg-pink-900", hasImage: false },
    { bgColor: "bg-white", hasImage: false },
    { bgColor: "bg-black", hasImage: false },
  ];

  // Size buttons
  const sizes = [
    { label: "XX-Small", bgColor: "bg-black", textColor: "text-white" },
    { label: "X-Small", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
    { label: "Small", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
    { label: "Medium", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
    { label: "Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
    { label: "X-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
    { label: "XX-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
    { label: "3X-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
    { label: "4X-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
  ];

  // Category links
  const categories = [
    { label: "Casual", href: "./onsale" },
    { label: "Formal", href: "./onsale" },
    { label: "Party", href: "./onsale" },
    { label: "Gym", href: "./onsale" },
  ];

  return (
    // Use a responsive container: full width on mobile; fixed width on desktop.
    <div className="w-full md:min-w-[295px] md:max-w-[295px] border border-black rounded-[20px] px-5 md:px-6 py-5 space-y-5">
      <div className="flex items-center justify-between">
        <span className="font-bold text-black text-xl">Filters</span>
        <Image src={filterIcon} alt="Filter Icon" />
      </div>
      <hr className="border-t-black/10" />

      <div className="flex flex-col space-y-1 text-black">
        {items.map((item, index) => (
          <a
            key={index}
            className="flex items-center justify-between py-2"
            href={item.href}
          >
            {item.name}
            <Image src={greaterthan} alt=">" />
          </a>
        ))}
      </div>
      <hr className="border-t-black/10" />

      <div className="flex justify-between items-center">
        <h3 className="font-bold text-black text-xl">Price</h3>
        <span>
          <Image
            src={othergreaterthan}
            alt="Expand"
            className="cursor-pointer"
          />
        </span>
      </div>
      <div>
        <Box sx={{ width: "100%" }}>
          <Slider
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            sx={{
              color: "black",
              "& .MuiSlider-thumb": { borderColor: "black" },
              "& .MuiSlider-track": { backgroundColor: "black" },
              "& .MuiSlider-rail": { backgroundColor: "#bdbdbd" },
            }}
          />
        </Box>
      </div>
      <hr className="border-t-black/10" />

      <div className="flex justify-between items-center">
        <h3 className="font-bold text-black text-xl">Colors</h3>
        <span>
          <Image
            src={othergreaterthan}
            alt="Expand"
            className="cursor-pointer"
          />
        </span>
      </div>
      <div className="pt-4 pb-3">
        <div className="grid grid-cols-5 gap-2">
          {buttons.map((button, index) => (
            <button
              key={index}
              type="button"
              className={`${button.bgColor} rounded-full w-9 h-9 flex items-center justify-center border border-black/20`}
            >
              {button.hasImage && (
                <Image src={check} alt="Check" className="w-4 h-4" />
              )}
            </button>
          ))}
        </div>
      </div>
      <hr className="border-t-black/10 mt-5" />

      <div className="flex justify-between items-center">
        <h3 className="font-bold text-black text-xl">Size</h3>
        <span>
          <Image
            src={othergreaterthan}
            alt="Expand"
            className="cursor-pointer"
          />
        </span>
      </div>
      <div className="pt-4 pb-3">
        <div className="flex flex-wrap items-center">
          {sizes.map((size, index) => (
            <button
              key={index}
              className={`m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px] font-medium ${size.bgColor} ${size.textColor}`}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>
      <hr className="border-t-black/10" />

      <div className="flex justify-between items-center">
        <h3 className="font-bold text-black text-xl">Dress Style</h3>
        <span>
          <Image
            src={othergreaterthan}
            alt="Expand"
            className="cursor-pointer"
          />
        </span>
      </div>
      <div className="flex flex-col space-y-1 text-black">
        {categories.map((category, index) => (
          <a
            key={index}
            className="flex items-center justify-between py-2"
            href={category.href}
          >
            {category.label}
            <Image src={greaterthan} alt=">" />
          </a>
        ))}
      </div>
      <button
        className="inline-flex mt-4 items-center justify-center shadow hover:bg-gray-900 transition-transform duration-300 px-4 bg-black w-full rounded-full text-sm font-medium py-4 h-12 text-white"
        type="button"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default Filter;

