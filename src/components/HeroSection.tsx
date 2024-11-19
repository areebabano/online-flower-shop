import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex justify-center bg-white py-10">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10">
        {/* Left side (Text) */}
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0 md:ml-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black font-serif">
            Premium Floral Arrangements for Every Occasion
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-400">
            At 𝕱𝖑𝖔𝖗𝖆𝖑 𝕰𝖑𝖊𝖌𝖆𝖓𝖈𝖊, we take pride in offering the finest selection of handpicked flowers, expertly arranged to suit every special moment. Whether you're celebrating a wedding, birthday, anniversary, or just want to brighten someone's day, our flowers are carefully sourced and delivered fresh to your doorstep. Trust us to bring nature's beauty to your life with elegance and sophistication.
          </p>
          <a
            href="/shop"
            className="inline-block border-2 border-white text-white bg-pink-600 hover:border-pink-700 font-serif font-bold py-3 px-6 rounded-full hover:bg-white hover:text-pink-600 shadow-md transition duration-300"
          >
            Explore Now
          </a>
        </div>

        {/* Right side (Image) */}
        <div className="flex-1">
          <Image 
            src="/hero.png" 
            alt="Hero Image" 
            width={400} 
            height={400} 
            className="w-full md:w-auto mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;



// // components/Hero.js
// import Image from 'next/image'

// const Hero = () => {
//   return (
//     <section className="flex items-center justify-between p-10 bg-white">
//       {/* Left side (Text) */}
//       <div className="ml-14 flex-1">
//         <h1 className="text-4xl font-bold mb-4 text-black font-serif">Premium Floral Arrangements for Every Occasion</h1>
//         {/* <h2 className="flex justify-center gap-2 text-4xl font-bold font-serif text-black mb-4">Premium Floral Arrangements for Every Occasion<GiButterflyFlower className='text-pink-700' size={40}/></h2> */}
//         <p className="text-lg mb-6 text-gray-400">
//   At 𝕱𝖑𝖔𝖗𝖆𝖑 𝕰𝖑𝖊𝖌𝖆𝖓𝖈𝖊&apos; we take pride in offering the finest selection of handpicked flowers&apos;
//   expertly arranged to suit every special moment. Whether you&apos;re celebrating a wedding, birthday, anniversary, or just want to brighten someone&apos;s day, our flowers are carefully sourced and delivered fresh to your doorstep. Trust us to bring nature&apos;s beauty to your life with elegance and sophistication.
// </p>

// <a
//           href="#explore-now"
//           className="border-2 border-white text-white bg-pink-600 hover:border-pink-700 font-serif font-bold py-4 px-6 rounded-full hover:bg-white hover:text-pink-600 shadow-md transition duration-300 mt-4"
//         >
//           Explore Now
//         </a>
//       </div>

//       {/* Right side (Image) */}
//       <div className="flex-1">
//         <Image 
//           src="/hero.png" 
//           alt="Hero Image" 
//           width={400} 
//           height={400} 
//         //   className=""
//         />
//       </div>
//     </section>
//   )
// }

// export default Hero;
