// 'use client'
// import React from 'react'
// import Link from 'next/link';
// import  userCartStore from "@/store";
// import { IoCartOutline } from "react-icons/io5";

// const CartIcon = () => {
// const groupedItems = userCartStore(( state ) => state.getGroupedItems())

//   return (
// <>
//     <div className='relative flex flex-row '>
//        <Link href={"/cart"}> <IoCartOutline className="w-6 h-6"/>
     
//        </Link>
//        <span className='absolute top-0 right-0 translate-x-2 -translate-y-2 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>{groupedItems?.length ? groupedItems?. length:0}</span>
//     </div>
//     </>
//   );
// }

// export default CartIcon;


'use client'

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import userCartStore from '@/store';
import { IoCartOutline } from 'react-icons/io5';

const CartIcon = () => {
  const [hydrated, setHydrated] = useState(false); // Track hydration status
  const groupedItems = userCartStore((state) => state.getGroupedItems());

  // Ensure client-side hydration
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // Prevent rendering during SSR

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="relative flex flex-row">
        <Link href="/cart">
          <IoCartOutline className="w-6 h-6" />
        </Link>
        <span className="absolute top-0 right-0 translate-x-2 -translate-y-2 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {groupedItems?.length ?? 0}
        </span>
      </div>
    </Suspense>
  );
};

export default CartIcon;

