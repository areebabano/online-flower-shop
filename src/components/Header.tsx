// components/Header.js
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import { FaHome, FaInfoCircle, FaPhoneAlt, FaRegHeart, FaStore} from 'react-icons/fa';
import { LuShoppingBasket } from 'react-icons/lu';
import { PiFlowerLotusLight } from 'react-icons/pi';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-white shadow-lg border-b-2 border-pink-600">
      {/* Logo */}
      <div className="flex items-center space-x-1 text-2xl font-bold text-black">
        <PiFlowerLotusLight className='text-pink-600' size={40} />
        <Link href="/">𝕱𝖑𝖔𝖗𝖆𝖑 𝕰𝖑𝖊𝖌𝖆𝖓𝖈𝖊</Link>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6 p-4">
          <li>
            <Link
              href="/"
              className="font-bold font-serif text-gray-600 hover:text-pink-700 active:text-pink-800 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaHome className="inline mr-2" size={20} />
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

      {/* Social Media Icons */}
      <div className="flex space-x-6 mr-6">
        <AiOutlineUser className="text-black hover:text-pink-700" size={30} />
        <FaRegHeart className="text-black hover:text-pink-700" size={30} />
        <LuShoppingBasket className="text-black hover:text-pink-700" size={30} />
      </div>
    </header>
  );
};

export default Header;

