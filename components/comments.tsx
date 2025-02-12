'use client';
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import frame10 from "@/app/assets/Frame 10.png";
import sarah from "@/app/assets/sarah.png";
import alex from "@/app/assets/alex.png";
import james from "@/app/assets/james.png";

const Comment = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const comments = [
    {
      name: "Sarah",
      comment: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
      image: sarah, // Replace with actual path
      frame: frame10,

    },
    {
      name: "Alex",
      comment: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."`,
      image: alex, // Replace with actual path
      frame: frame10,
    },
    {
      name: "James",
      comment: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."`,
      image: james, // Replace with actual path
      frame: frame10,
    },
  ];

  // Handle next and previous navigation
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? comments.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === comments.length - 1 ? 0 : prev + 1));
  };
  return (
    <>
     <main>
           <div className="w-full flex justify-center items-center mt-10 mb-1 relative">
             <div className="w-[80%]">
               {/* Heading and Arrows */}
               <div className="flex justify-between items-center relative">
                 <h1 className="text-black font-font font-extrabold text-5xl pt-4">
                   OUR HAPPY CLIENTS
                 </h1>
     
                 {/* Arrows */}
                 <div className="flex items-center gap-2">
                   <FaArrowLeft
                     onClick={handlePrev}
                     className="cursor-pointer text-2xl text-gray-500 hover:text-black"
                   />
                   <FaArrowRight
                     onClick={handleNext}
                     className="cursor-pointer text-2xl text-gray-500 hover:text-black"
                   />
                 </div>
               </div>
     
               {/* Comments Section */}
               <div className="flex justify-between mt-10 gap-4">
                 {/* Mobile View: Single Comment */}
                 <div className="md:hidden flex justify-center items-center w-full border border-gray-300 rounded-[20px] p-4">
                   <div className="text-center">
     
                   <Image
                       src={comments[currentIndex].frame}
                       alt={comments[currentIndex].name}
                       className="mb-4"
                     /> 
     
                     <Image
                       src={comments[currentIndex].image}
                       alt={comments[currentIndex].name}
                       className="mb-4"
                     />
                     <p className="text-gray-600 text-md">{comments[currentIndex].comment}</p>
                     {/* <h3 className="text-black font-bold mt-2">
                       - {comments[currentIndex].name}
                     </h3> */}
                   </div>
                 </div>
     
                 {/* Desktop View: All Comments */}
                 <div className="hidden md:flex justify-between gap-4 w-full">
                   {comments.map((client, index) => (
                     <div
                       key={index}
                       className="flex flex-col justify-center w-[50%] border border-gray-300 rounded-[20px] p-4"
                     >
                    <Image
                       src={comments[currentIndex].frame}
                       alt={comments[currentIndex].name}
                       className="mb-4"
                     />    
     
                       <Image
                         src={client.image}
                         alt={client.name}
                         className="mb-4"
                       />
                       <p className="text-gray-600 text-md">{client.comment}</p>
                       {/* <h3 w-20 h-20      rounded-full className="text-black font-bold mt-2">- {client.name}</h3> */}
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           </div>
         </main>
    </>
  )
}

export default Comment;
