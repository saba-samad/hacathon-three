import React from 'react';
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import CartIcon from "./CartIcon";
import HumBurger from "./HumBurger";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { RxCross2 } from "react-icons/rx";


const Header = async () => {
 const user = await currentUser();
 console.log(user);

 return (
   <>
     <div className="w-full h-[140px] bg-[#ffffff] mx-auto relative lg:relative">
       {/* top bar */}
       <div className="bg-black text-[#ffffff] py-2 px-4 flex justify-between items-center">
         <p className="font-normal text-[12px] text-center mx-auto">
           Sign up and get 20% off to your first order.
           <span className="font-medium underline cursor-pointer ml-2">
             Sign Up Now
           </span>
         </p>

         <div className="hidden lg:block w-[20px] h-[20px] mr-[90px]">
         
          <RxCross2/>
         </div>
       
       </div>

       {/* Navbar section */}
       <div className="flex items-center justify-between px-3 lg:px-12 py-6">
         {/* humburger menu for mobile */}
         <div className="lg:hidden">
           <HumBurger />
         </div>

         {/* for logo */}
         <div className="font-extrabold font-font text-2xl lg:text-[32px] mb-2 mr-3 ml-4 lg:mr-10">
           <Link href={"/"}>SHOP.CO</Link>
         </div>
         {/* className */}
         {/* navigation links */}
         <ul className="hidden lg:flex gap-6 items-center font-normal text-[16px]">
           <Link
             href={"/"}
             className="flex items-center gap-2 hover:underline  hover:text-gray-700 transition duration-200"
           >
             Shop
             <FaAngleDown />
           </Link>
           <Link
             href={"/Onsale"}
            //  href={"/Onsale"}
             className="hover:underline hover:text-gray-700 transition duration-400"
           >
             On Sale
           </Link>
           <Link
             href={"/New Arrivals"}
             className="hover:underline hover:text-gray-700 transition duration-400"
           >
             New Arrivals
           </Link>
           <Link
             href={"/Brands"}
             className="hover:underline hover:text-gray-700 transition duration-400"
           >
             Brands
           </Link>
           {/* <Link
             href={"/about"}
             className="hover:underline hover:text-gray-700 transition duration-400"
           >
             About
           </Link> */}
         </ul>
         {/* extra */}
         {/* search bar */}
         
         <form 
  action="/search"
  className="w-full sm:w-auto sm:flex-1 sm:mx-4 sm:mt-0"
>
{/* <FaSearch className="text-gray-600" /> */}
  <input
  
    type="text"
    name="query"
    placeholder="Search for products"
    className="hidden lg:flex bg-gray-50 text-gray-800 px-4 py-2.5 focus:outline-none   border border-gray-200 w-full max-w-4xl rounded-full hoverEffect hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
  />
   {/* <div className="hidden lg:flex w-[477px] h-[48px] px-4 py-3 gap-3 bg-[#F0F0F0] rounded-full items-center hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
           <FaSearch className="text-gray-600" />
           <p className="text-[#655e5e]">Search for products...</p>
         </div> */}
</form>


         {/*  */}
         {/* <div className="hidden lg:flex w-[477px] h-[48px] px-4 py-3 gap-3 bg-[#F0F0F0] rounded-full items-center hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
           <FaSearch className="text-gray-600" />
           <p className="text-[#655e5e]">Search for products...</p>
         </div> */}
         {/* extra icon for mobile */}
         <div className="flex items-center gap-3">
           {/* <Image src={searchicon} alt="Icon 2" className="w-6 h-6 lg:hidden text-black" /> */}
           <FaSearch className="w-5 h-4 lg:hidden text-black" />
       {/* clark use kya hai sign page k lye */}


        <CartIcon />
         

            <ClerkLoaded>
             <SignedIn>
               <Link href={"/orders"}>
                 <FaBasketShopping className="w-6 h-6 opacity-85" />
               </Link>
             </SignedIn>



             {/* <MdOutlineAccountCircle className="w-6 h-6" /> */}

             
             
             {user ? (
               <div className='flex items-center text-sm gap-2 border border-gray-1 00 px-2 py-1 rounded-md shadow-md'>
                 <UserButton />
                 <div className='flex flex-col'>
                   <p className='text-xs'>Welcome Back</p>
                   <p className='font-semibold'>{user?.fullName}</p>
                 </div>
               </div>
             ) : (
               <SignInButton mode='modal'>
                 <div className='cursor-pointer'
                 // className=' cursor-pointer flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md'
                 >
                   <MdOutlineAccountCircle className="w-6 h-6" />
                   {/* <div className='flex flex-col'>
                    <p className='text-xs'>Account</p>
                    <p className='font-semibold'>login</p>
                   </div> */}

                 </div>
               </SignInButton>
             )}
           </ClerkLoaded>


         </div>
       </div>
     </div>

     {/*  */}
   </>
 );
};
export default Header;
