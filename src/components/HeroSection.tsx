// components/Hero.js
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="flex items-center justify-between p-10 bg-white">
      {/* Left side (Text) */}
      <div className="ml-14 flex-1">
        <h1 className="text-4xl font-bold mb-4 text-black font-serif">Premium Floral Arrangements for Every Occasion</h1>
        {/* <h2 className="flex justify-center gap-2 text-4xl font-bold font-serif text-black mb-4">Premium Floral Arrangements for Every Occasion<GiButterflyFlower className='text-pink-700' size={40}/></h2> */}
        <p className="text-lg mb-6 text-gray-400">At 𝕱𝖑𝖔𝖗𝖆𝖑 𝕰𝖑𝖊𝖌𝖆𝖓𝖈𝖊&apos; we take pride in offering the finest selection of handpicked flowers,
           expertly arranged to suit every special moment. Whether you&apos;re celebrating a wedding, birthday, anniversary, or just want to brighten someone's day, our flowers are carefully sourced and delivered fresh to your doorstep. Trust us to bring nature&apos;s beauty to your life with elegance and sophistication.</p>
        <button className="px-6 py-2 bg-pink-600 hover:bg-yellow-600 text-white font-semibold rounded-lg">
          Explore Now
        </button>
      </div>

      {/* Right side (Image) */}
      <div className="flex-1">
        <Image 
          src="/image.png" 
          alt="Hero Image" 
          width={400} 
          height={400} 
        //   className=""
        />
      </div>
    </section>
  )
}

export default Hero;
