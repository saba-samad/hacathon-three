import Image from "next/image"
import envelop from "@/app/assets/envelop.png"
import twitter from "@/app/assets/twitter.png";
import instagram from "@/app/assets/instagram.png";
import facebook from "@/app/assets/fb2.png";
import github from "@/app/assets/github.png";
import visa from "@/app/assets/visa.png";
import  round from "@/app/assets/round.png";
import paypal from "@/app/assets/paypal.png";
import apple from "@/app/assets/apple.png";
import google from "@/app/assets/google.png";


export default function Footer() {
    return (
<div className="relative">
  {/* Black Box */}
  <div
    className="absolute bottom-[110%] w-[358px] h-[293px] left-1/2 transform -translate-x-1/2 translate-y-1/2 
    rounded-[20px] bg-[#000000] z-10 lg:w-[1240px] lg:h-[180px] lg:flex lg:justify-between lg:px-20"
  >
    <h1
      className="mt-9 h-[105px] w-[297px] text-[32px] text-[#ffffff] leading-[35px] font-bold pl-4 
        lg:w-[551px] lg:h-[94px] lg:text-[40px] lg:leading-[45px]"
    >
      STAY UPTO DATE ABOUT OUR LATEST OFFERS
    </h1>

    <div className="flex flex-col justify-center items-center mt-7">
      {/* Input Field */}
      <div
        className="w-[311px] lg:w-[349px] relative hover:scale-105 transition-transform duration-200"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="pl-14 lg:pl-[80px] pr-4 py-2 w-full text-black rounded-full border border-gray-300 
            focus:outline-none focus:ring-2"
        />
        <Image
          src={envelop}
          alt="Envelope Icon"
          className="h-[30px] w-[30px] absolute left-4 top-1/2 transform -translate-y-1/2"
        />
      </div>

      {/* Subscribe Button */}
      <button
        className="bg-white text-black px-1 py-2 w-[311px] lg:w-[349px] rounded-full font-semibold 
          hover:scale-x-110 border-2 mt-4"
      >
        Subscribe to Newsletter
      </button>
    </div>
  </div>

  {/* Footer */}
  <footer className="relative bg-gray-200 py-10 z-0 mt-[250px] lg:mt-[350px]">
    <div className="container mx-auto px-6 sm:px-12 lg:px-16">
      <div className="flex flex-col md:flex-row lg:flex-row items-start justify-between gap-8 lg:gap-0">
        {/* About Shop.co */}
        <div className="hover:bg-gray-300 p-4 rounded-lg transition duration-300">
          <h3 className="font-extrabold text-4xl mb-4 text-black hover:text-gray-700 hover:scale-105">
            SHOP.CO
          </h3>
          <p className="text-gray-600 mb-4">
            We have clothes that suit your style and which you are proud to wear. From women to men.
          </p>
          <div className="flex space-x-4">
            <Image
              className="w-10 h-10 border-2 border-transparent rounded-full hover:border-gray-950 hover:scale-110 transition duration-300"
              src={twitter}
              alt="Twitter"
              height={50}
              width={50}
            />
            <Image
              className="w-10 h-10 border-2 border-transparent rounded-full hover:border-gray-950 hover:scale-110 transition duration-300"
              src={facebook}
              alt="Facebook"
              height={50}
              width={50}
            />
            <Image
              className="w-10 h-10 border-2 border-transparent rounded-full hover:border-gray-950 hover:scale-110 transition duration-300"
              src={instagram}
              alt="Instagram"
              height={50}
              width={50}
            />
            <Image
              className="w-10 h-10 border-2 border-transparent rounded-full hover:border-gray-950 hover:scale-110 transition duration-300"
              src={github}
              alt="GitHub"
              height={50}
              width={50}
            />
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-8 lg:w-3/4">
          <div className="hover:bg-gray-300 p-4 rounded-lg transition duration-300">
            <h3 className="font-bold text-lg mb-4 text-black hover:text-gray-600 hover:scale-105">
              COMPANY
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:underline hover:text-gray-950 transition duration-200">
                <a href="#">About</a>
              </li>
              <li className="hover:underline hover:text-black transition duration-200">
                <a href="#">Features</a>
              </li>
              <li className="hover:underline hover:text-black transition duration-200">
                <a href="#">Works</a>
              </li>
              <li className="hover:underline hover:text-black transition duration-200">
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div className="hover:bg-gray-300 p-4 rounded-lg transition duration-300">
            <h3 className="font-bold text-lg mb-4 text-black hover:text-gray-600 hover:scale-105">
              HELP
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:underline hover:text-gray-950 transition duration-200">
                <a href="#">Customer Support</a>
              </li>
              <li className="hover:underline hover:text-gray-950 transition duration-200">
                <a href="#">Delivery Details</a>
              </li>
              <li className="hover:underline hover:text-gray-950 transition duration-200">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="hover:underline hover:text-gray-950 transition duration-200">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="hover:bg-gray-300 p-4 rounded-lg transition duration-300">
            <h3 className="font-bold text-lg mb-4 text-black hover:text-gray-600 hover:scale-105">
              FAQ
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:underline hover:text-gray-950 transition duration-200">
                <a href="#">Account</a>
              </li>
              <li className="hover:underline hover:text-gray-950 transition duration-200">
                <a href="#">Manage Deliveries</a>
              </li>
              <li className="hover:underline hover:text-gray-950 transition duration-200">
                <a href="#">Orders</a>
              </li>
              <li className="hover:underline hover:text-gray-950 transition duration-200">
                <a href="#">Payments</a>
              </li>
            </ul>
          </div>

          <div className="hover:bg-gray-300 p-4 rounded-lg transition duration-300">
            <h3 className="font-bold text-lg mb-4 text-black hover:text-gray-600 hover:scale-105">
              RESOURCES
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:underline hover:text-gray-950 transition duration-200">
                <a href="#">Free Books</a>
              </li>
              <li className="hover:underline hover:text-gray-950 transition duration-200">
                <a href="#">Development Tutorial</a>
              </li>
              <li className="hover:underline hover:text-gray-950 transition duration-200">
                <a href="#">How to - Blog</a>
              </li>
              <li className="hover:underline hover:text-gray-950transition duration-200">
                <a href="#">Youtube Playlist</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Divider */}
      <div className="border-2 border-b-gray-300 w-11/12 mx-auto mt-8"></div>

      {/* Footer Text and Payment Icons */}
      <div className="mt-8 text-left text-gray-700 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 hover:text-black font-extrabold">
        <p className="lg:w-auto hover:scale-y-150">Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Image src={visa} alt="Visa" height={50} width={50} />
          <Image src={round} alt="Card" height={50} width={50} />
          <Image src={paypal} alt="PayPal" height={50} width={50} />
          <Image src={apple} alt="Apple Pay" height={50} width={50} />
          <Image src={google} alt="Google Pay" height={50} width={50} />
        </div>
      </div>
    </div>
  </footer>
</div>




  
    )
}










