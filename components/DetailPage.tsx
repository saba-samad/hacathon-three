import React from 'react'
import Image from "next/image";
import check from "@/app/assets/check.png";
// import page2shirt from "@/app/assets/page 2 shirt.png";
// import page3shirt from "@/app/assets/clear pic1.png";
// import page3shirt2 from "@/app/assets/clear pic 2.png"; 

const DetailPage = () => {

    // const [selectedImage, setSelectedImage] = useState<typeof page2shirt>(page2shirt);
// const images: { [key: string]: StaticImageData } = {
//     page2shirt,
//     page3shirt,
//     page3shirt2,
//   };

    // const handleImageClick = (imageKey: keyof typeof images) => {
    //     setSelectedImage(images[imageKey]); // Update the selected image
    //   };
    
      const sizes = [
        { label: "Small", bgColor: "bg-black", textColor: "text-white" },
        { label: "Medium", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
        { label: "Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
        { label: "X-Large", bgColor: "bg-[#F0F0F0]", textColor: "text-black" },
      ];
    
      const circles = [
        { bgColor: "#4F4631", hasCheck: true }, // Circle 1 with check icon
        { bgColor: "#314F4A", hasCheck: false }, // Circle 2
        { bgColor: "#31344F", hasCheck: false }, // Circle 3
      ];

  return (
    <>
    <div className="flex flex-col">
    <span className="text-sm sm:text-base text-black/60 mb-4">Select Colors</span>
    <div className="flex items-center flex-wrap space-x-3 sm:space-x-4">
      {circles.map((circle, index) => (
        <button
          key={index}
          type="button"
          className={`rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20`}
          style={{ backgroundColor: circle.bgColor }}
        //   onClick={() => setSelectedColor(circle.bgColor)}
        >
          {circle.hasCheck && (
            <Image src={check } alt="Check Icon" width={16} height={16} className="w-4 h-4" />
          )}
        </button>
      ))}
    </div>
</div>
<hr className="h-[1px] border-t-black/10"/>
 {/* next line */}
 <div className="flex flex-col">
            <span className="text-sm sm:text-base text-black/60 mb-4">Choose Size</span>
            <div className="flex items-center flex-wrap lg:space-x-3">
      {sizes.map((size, index) => (
        <button
          key={index}
          type="button"
          className={`flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base rounded-full m-1 lg:m-0 max-h-[46px] font-medium ${size.bgColor} ${size.textColor}`}
        //   onClick={() => setSelectedSize(size.label)}
         >
          {size.label}
        </button>
      ))}
    </div>
</div>
{/* 
 <hr className="h-[1px] border-t-black/10 my-5"/> */}



    </>
  )
}

export default DetailPage
