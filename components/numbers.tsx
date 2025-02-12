import React from 'react'
import Image from "next/image";
import rightarrow from "@/app/assets/right arrow.png";
import dots from "@/app/assets/dots.png";
import leftarrow from "@/app/assets/left arrow.png";
const numbers = () => {
  return (
    <>
    <nav className="mx-auto flex w-full justify-between items-center">
              {/* Previous Button */}
              <a
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-9 py-2 gap-1 px-2.5 xs:pl-2.5 border border-black"
                href="#"
              >
                <Image
                  src={leftarrow}
                  alt=""
                  width="15"
                  height="15"
                  className="h-4 w-4 xs:block"
                />
                <span className="xs:ml-2">Previous</span>
              </a>

              {/* Page Numbers */}
              <ul className="flex flex-row items-center gap-1">
                <li>
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-9 w-9 ml-2 bg-black/5 shadow-none border-none text-black font-medium text-sm"
                    href="#"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-9 w-9 xs:w-6 shadow-none border-none  text-black font-medium text-sm"
                    href="#"
                  >
                    2
                  </a>
                </li>
                <li className="hidden lg:block">
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-9 w-9 xs:w-6 shadow-none border-none  text-black font-medium text-sm"
                    href="#"
                  >
                    3
                  </a>
                </li>
                {/* More Pages */}
                <li>
                  <span className="flex h-9 w-9 text-black font-medium items-center justify-center text-sm">
                    <Image src={dots} alt="" />
                  </span>
                </li>
                <li className="hidden lg:block">
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-9 w-9 xs:w-6 shadow-none border-none  text-black font-medium text-sm"
                    href="#"
                  >
                    8
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-9 w-9 xs:w-6 shadow-none border-none  text-black font-medium text-sm"
                    href="#"
                  >
                    9
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-9 w-9 xs:w-6 shadow-none border-none text-black font-medium text-sm"
                    href="#"
                  >
                    10
                  </a>
                </li>
              </ul>

              {/* Next Button */}
              <a
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-9 py-2 gap-1 px-2 xs:px-2 xs:pr-1 border border-black/10"
                href="#"
              >
                <span className="xs:mr-1">Next</span>
                <Image src={rightarrow} alt="" />
              </a>
            </nav>
    </>
  )
}

export default numbers
