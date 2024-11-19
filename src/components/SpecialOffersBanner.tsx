import React from 'react';

const SpecialOffersBanner = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-pink-700 text-white py-5 pt-28">
      <div className="max-w-7xl container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-6">
        {/* Text Section */}
        <p className="text-center md:text-left text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-4 md:mb-0">
          <span className="text-yellow-300 font-extrabold">Limited Time Offer!</span> Get 20% off on all flower bouquets! 🌸🌼
        </p>

        {/* Button */}
        <a
          href="/shop"
          className="border-2 border-white text-sm sm:text-base md:text-lg text-white font-serif font-bold py-2 px-4 md:px-6 rounded-full hover:bg-white hover:text-pink-600 transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default SpecialOffersBanner;


// import React from 'react';

// const SpecialOffersBanner = () => {
//   return (
//     <div className="bg-gradient-to-r from-pink-500 to-pink-700 text-white py-5 pt-28">
//       <div className="container mx-auto flex justify-between items-center px-6">
//         <p className="text-lg font-bold text-white">
//           <span className="text-yellow-300 font-extrabold">Limited Time Offer!</span> Get 20% off on all flower bouquets! 🌸🌼
//         </p>
//         <a
//           href="#shop-now"
//           className="border-2 border-white text-white font-serif font-bold py-2 px-6 rounded-full hover:bg-white hover:text-pink-600 transition duration-300"
//         >
//           Shop Now
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SpecialOffersBanner;
