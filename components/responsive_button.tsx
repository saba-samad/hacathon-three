'use client';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import filterIcon from "@/app/assets/filter.png";
import Filter from "@/components/filter";


const ResponsiveButton = () => {
     // State to control whether the modal is shown
      const [isFilterOpen, setIsFilterOpen] = useState(false);
      // State to control the slide-in animation class
      const [modalAnimation, setModalAnimation] = useState("translate-y-full");

      // When the modal opens, trigger the slide-in animation.
        useEffect(() => {
          if (isFilterOpen) {
            // Delay a tick to allow the modal to mount off-screen, then animate it
            setTimeout(() => {
              setModalAnimation("translate-y-0");
            }, 50);
          }
        }, [isFilterOpen]);
      
        // Function to close modal with animation
        const closeModal = () => {
          // Slide it back down first
          setModalAnimation("translate-y-full");
          // Remove the modal from DOM after animation duration (300ms)
          setTimeout(() => {
            setIsFilterOpen(false);
          }, 300);
        };
      
  return (
    <>
     <button
                  type="button"
                  onClick={() => {
                    console.log("Opening filter modal");
                    setIsFilterOpen(true);
                  }}
                  className="h-8 w-8 rounded-full bg-[#F0F0F0] text-black p-1 sm:hidden"
                  aria-haspopup="dialog"
                  aria-expanded={isFilterOpen}
                  aria-controls="mobile-filter"
                >
                  <Image src={filterIcon} alt="Filter" />
                </button>
                {/*  */}
                {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={closeModal}
          />
          {/* Modal Container with sliding animation */}
          <div
            id="mobile-filter"
            className={`fixed inset-x-0 bottom-0 z-50 bg-white p-4 rounded-t-lg shadow-lg transform transition-transform duration-300 ${modalAnimation}`}
          >
            <div className="flex justify-end">
              <button onClick={closeModal} className="text-black text-xl font-bold">
                &#10005; {/* Unicode for "X" */}
              </button>
            </div>
            <Filter />
          </div>
        </>
      )}
    {/*  */}
    </>
  );
};

export default ResponsiveButton;
