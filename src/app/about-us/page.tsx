"use client";
import Image from 'next/image';
import { IoBusiness } from 'react-icons/io5';
import { MdAutoStories, MdEventAvailable } from 'react-icons/md'; // Import additional icons
import { RiTeamFill } from 'react-icons/ri';
import { TbBrightnessUpFilled } from 'react-icons/tb';

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-900 mt-10 font-serif">

      {/* Hero Section
      <section className="relative">
        <div className="absolute inset- opacity-60"></div>
        <Image src="/hero.jpg" alt="Flowers" width={1920} height={800} className="w-full h-[400px] object-cover" />
        <div className="absolute inset-0 flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-extrabold text-shadow-md text-black font-serif mt-10 inline-flex gap-1">
            Welcome To Floral Elegance
            <GiButterflyFlower className='text-pink-700' size={50} />
          </h1>
          <p className="mt-2 text-lg font-normal font-serif mx-auto text-gray-500">
            Where elegance meets nature. Bringing stunning floral arrangements to your doorstep.
          </p>
        </div>
      </section> */}

{/* Mission Statement */}
<section className="py-16 px-6 bg-white border-b-2 border-gray-200 shadow-lg flex flex-col items-center">
  <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">

    {/* Left Flower Image */}
    <div className="w-full md:w-1/4 flex justify-center">
      <Image src="/flora1.png" alt="Left Flower" width={200} height={200} className="rounded-full object-cover" />
    </div>

    {/* Mission Text */}
    <div className="text-center md:w-1/2">
      <h2 className="text-3xl font-bold font-serif text-gray-800 inline-flex items-center justify-center">
        <IoBusiness className="mr-3 text-pink-700" size={30} />
        Our Mission
      </h2>
      <p className="mt-6 text-lg max-w-3xl mx-auto font-serif text-gray-700 leading-relaxed">
        At <b><i>Floral Elegance</i></b>&apos; we are committed to providing the highest quality floral arrangements for every occasion. 
        Whether it&apos;s a wedding, anniversary, or just because, our flowers are delivered with love and care.
      </p>
    </div>

    {/* Right Flower Image */}
    <div className="w-full md:w-1/4 flex justify-center">
      <Image src="/flora1.png" alt="Right Flower" width={200} height={200} className="rounded-full object-cover" />
    </div>
    
  </div>
</section>

{/* Our Story */}
<section className="py-16 px-6 bg-white border-b-2 border-gray-200 shadow-lg flex flex-col items-center">
  <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">

    {/* Left Flower Image */}
    <div className="w-full md:w-1/4 flex justify-center">
      <Image src="/p1.png" alt="Left Flower" width={200} height={200} className="rounded-full object-cover" />
    </div>

    {/* Mission Text */}
    <div className="text-center md:w-1/2">
    <h2 className="text-3xl font-semibold font-serif text-gray-800 flex items-center justify-center">
      <MdAutoStories className="text-pink-700 mr-3" size={30} />
      Our Story
    </h2>
      <p className="mt-6 text-lg text-gray-700 leading-relaxed font-serif">
      <b><i>Floral Elegance</i></b> was founded with a passion for flowers and the desire to bring beauty to every home. 
      Our journey began in 2010, and since then, we’ve grown into a trusted name in the floral industry, 
      delivering fresh, vibrant arrangements to customers worldwide.
    </p>
    </div>

    {/* Right Flower Image */}
    <div className="w-full md:w-1/4 flex justify-center">
      <Image src="/p1.png" alt="Right Flower" width={200} height={200} className="rounded-full object-cover" />
    </div>
    
  </div>
</section>


    {/* Our Story */}
{/*  */}




{/* Products and Services */}
<section className="py-16 px-6 bg-white font-serif border-b-2 border-gray-200 shadow-lg">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 inline-flex items-center justify-center">
      <MdEventAvailable className="text-pink-700 mr-3" size={30} />
      Our Products & Services
    </h2>
    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
      Explore our floral offerings designed to make your occasions special. From weddings to birthdays, we have the perfect solution for you.
    </p>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <div className="bg-white shadow-lg rounded-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-xl font-semibold text-pink-700">Custom Floral Arrangements</h3>
        <p className="mt-4 text-gray-600 text-sm">
          Handcrafted arrangements for all occasions. Our florists work closely with you to create the perfect design.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-xl font-semibold text-pink-700">Flower Subscriptions</h3>
        <p className="mt-4 text-gray-600 text-sm">
          Beautiful fresh flowers delivered to your door regularly. A perfect gift that keeps giving every month.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-xl font-semibold text-pink-700">Event Floral Design</h3>
        <p className="mt-4 text-gray-600 text-sm">
          Elegant floral decorations for events, from weddings to corporate parties. We ensure every detail is perfect.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Team Introduction */}
<section className="py-16 px-6 bg-white font-serif">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 inline-flex items-center justify-center mb-1">
      <RiTeamFill className="text-pink-600 mr-3" size={30} />
      Meet the Floral Elegance Team
    </h2>
    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
      Our dedicated team is passionate about creating stunning floral arrangements and providing exceptional service.
    </p>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Team Member 1 */}
      <div className="bg-white shadow-lg rounded-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <Image src="/owner.jpg" alt="Areeba Hammad" width={200} height={200} className="w-32 h-32 object-cover rounded-full mx-auto" />
        <h3 className="mt-4 text-xl font-semibold text-black">Areeba Hammad</h3>
        <p className=" text-1xl text-pink-700">Owner & Lead Florist</p>
        <p className="mt-1 text-gray-600 text-sm">Areeba is the creative visionary behind our floral designs. With a passion for floristry and attention to detail, she ensures every bouquet and arrangement is a masterpiece.</p>
      </div>
      {/* Team Member 2 */}
      <div className="bg-white shadow-lg rounded-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <Image src="/customers1.jpeg" alt="John Smith" width={200} height={200} className="w-32 h-32 object-cover rounded-full mx-auto" />
        <h3 className="mt-4 text-xl font-semibold text-black">John Smith</h3>
        <p className=" text-1xl text-pink-700">Customer Support</p>
        <p className="mt-1 text-gray-600 text-sm">John is the friendly face behind our customer support. Always ready to assist with orders and floral queries, he ensures our customers feel valued and cared for.</p>
      </div>
      {/* Team Member 3 */}
      <div className="bg-white shadow-lg rounded-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <Image src="/team.jpg" alt="Emily White" width={200} height={200} className="w-32 h-32 object-cover rounded-full mx-auto" />
        <h3 className="mt-4 text-xl font-semibold text-black">Emily White</h3>
        <p className="text-1xl text-pink-700">Event Coordinator</p>
        <p className="mt-1 text-gray-600 text-sm">Emily ensures that every event is perfectly coordinated. Her eye for detail and seamless execution make every occasion unforgettable.</p>
      </div>
    </div>
  </div>
</section>



{/* Call to Action */}
<div className="bg-gradient-to-r from-pink-500 to-pink-700 text-white font-serif py-10">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-yellow-300 mb-4 flex items-center justify-center">
      <span className="text-yellow-300 inline-flex">
        <TbBrightnessUpFilled className="mr-3" size={28} />
      </span>
      Brighten Your Day! <span className="text-white ml-2">with Flowers!🌸🌼</span>
    </h2>

    <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6">
      Discover stunning floral arrangements for every occasion. From weddings to birthdays, we have the perfect bouquet for you.
    </p>
    <a
      href="#shop-now"
      className="border-2 border-white text-white font-serif font-bold py-2 px-6 rounded-full hover:bg-white hover:text-pink-600 transition duration-300"
    >
      Shop Now
    </a>
  </div>
</div>



{/* Contact Information Section */}
<section className="py-8 px-6 text-center bg-pink-100 font-serif border-b-2 border-gray-200 shadow-lg">
  <p className="text-lg text-gray-700 mb-4">
    If you have any inquiries, <a href="/contact" className="text-pink-600 hover:text-pink-700 font-semibold">please reach out to us</a>.
  </p>
</section>


      
    </div>
  );
};

export default AboutPage;
