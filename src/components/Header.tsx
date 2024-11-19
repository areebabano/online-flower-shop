"use client";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaRegHeart, FaStore } from "react-icons/fa";
import { LuShoppingBasket } from "react-icons/lu";
import { PiFlowerLotusLight } from "react-icons/pi";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b-2 border-pink-600">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-1 text-2xl font-bold text-black">
          <PiFlowerLotusLight className="text-pink-600" size={40} />
          <Link href="/">𝕱𝖑𝖔𝖗𝖆𝖑 𝕰𝖑𝖊𝖌𝖆𝖓𝖈𝖊</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="block lg:hidden">
          <button onClick={toggleNav} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 p-4">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="font-bold font-serif text-gray-600 hover:text-pink-700 active:text-pink-800 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <FaHome className="inline mr-2 " size={20} />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="font-bold font-serif text-gray-600 hover:text-pink-700 active:text-pink-800 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <FaStore className="inline mr-2" size={20} />
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="font-bold font-serif text-gray-600 hover:text-pink-700 active:text-pink-800 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <FaInfoCircle className="inline mr-2" size={20} />
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-bold font-serif text-gray-600 hover:text-pink-700 active:text-pink-800 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <FaPhoneAlt className="inline mr-2" size={20} />
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-screen w-2/3 max-w-md bg-white shadow-lg z-50 transform ${
            isNavOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out overflow-y-auto`}
        >
          {/* Close Button */}
          <div className="flex justify-start p-4">
            <button onClick={toggleNav} className="text-black text-2xl font-bold">
              X
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col items-start space-y-6 px-6">
            <li>
              <Link
                href="/"
                onClick={closeNav}
                className="font-bold font-serif text-gray-600 hover:text-pink-700 active:text-pink-800 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <FaHome className="inline mr-2" size={24} />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                onClick={closeNav}
                className="font-bold font-serif text-gray-600 hover:text-pink-700 active:text-pink-800 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <FaStore className="inline mr-2" size={24} />
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                onClick={closeNav}
                className="font-bold font-serif text-gray-600 hover:text-pink-700 active:text-pink-800 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <FaInfoCircle className="inline mr-2" size={24} />
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={closeNav}
                className="font-bold font-serif text-gray-600 hover:text-pink-700 active:text-pink-800 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <FaPhoneAlt className="inline mr-2" size={24} />
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-6 px-6">
            <AiOutlineUser className="text-black hover:text-pink-700" size={28} />
            <FaRegHeart className="text-black hover:text-pink-700" size={28} />
            <LuShoppingBasket className="text-black hover:text-pink-700" size={28} />
          </div>
        </div>

        {/* Social Media Icons (Desktop) */}
        <div className="hidden lg:flex space-x-6 mr-6">
          <AiOutlineUser className="text-black hover:text-pink-700" size={30} />
          <FaRegHeart className="text-black hover:text-pink-700" size={30} />
          <LuShoppingBasket className="text-black hover:text-pink-700" size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;


// components/Header.js
// import Link from 'next/link';
// import { AiOutlineUser } from 'react-icons/ai';
// import { FaHome, FaInfoCircle, FaPhoneAlt, FaRegHeart, FaStore} from 'react-icons/fa';
// import { LuShoppingBasket } from 'react-icons/lu';
// import { PiFlowerLotusLight } from 'react-icons/pi';

// const Header = () => {
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-white shadow-lg border-b-2 border-pink-600">
//       {/* Logo */}
//       <div className="flex items-center space-x-1 text-2xl font-bold text-black">
//         <PiFlowerLotusLight className='text-pink-600' size={40} />
//         <Link href="/">𝕱𝖑𝖔𝖗𝖆𝖑 𝕰𝖑𝖊𝖌𝖆𝖓𝖈𝖊</Link>
//       </div>

//       {/* Navigation */}
//       <nav>
//         <ul className="flex space-x-6 p-4">
//           <li>
//             <Link
//               href="/"
//               className="font-bold font-serif text-gray-600 hover:text-pink-700 active:text-pink-800 transition duration-300 ease-in-out transform hover:scale-105"
//             >
//               <FaHome className="inline mr-2" size={20} />
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/shop"
//               className="font-bold font-serif text-gray-600 hover:text-pink-700 active:text-pink-800 transition duration-300 ease-in-out transform hover:scale-105"
//             >
//               <FaStore className="inline mr-2" size={20} />
//               Shop
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/about-us"
//               className="font-bold font-serif text-gray-600 hover:text-pink-700 active:text-pink-800 transition duration-300 ease-in-out transform hover:scale-105"
//             >
//               <FaInfoCircle className="inline mr-2" size={20} />
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/contact"
//               className="font-bold font-serif text-gray-600 hover:text-pink-700 active:text-pink-800 transition duration-300 ease-in-out transform hover:scale-105"
//             >
//               <FaPhoneAlt className="inline mr-2" size={20} />
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Social Media Icons */}
//       <div className="flex space-x-6 mr-6">
//         <AiOutlineUser className="text-black hover:text-pink-700" size={30} />
//         <FaRegHeart className="text-black hover:text-pink-700" size={30} />
//         <LuShoppingBasket className="text-black hover:text-pink-700" size={30} />
//       </div>
//     </header>
//   );
// };

// export default Header;

