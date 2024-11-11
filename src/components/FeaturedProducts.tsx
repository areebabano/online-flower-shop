import React from 'react';
import { GiButterflyFlower } from 'react-icons/gi';
import Image from 'next/image'; // Import Next.js Image component

// Sample flower data (you can fetch this from an API or use real product data)
const flowers = [
  {
    id: 1,
    name: 'Red Roses',
    image: '/red f1.jpg', // Ensure to place image in the public folder
    price: '$25',
    description: 'A bouquet of fresh red roses for any occasion.',
  },
  {
    id: 2,
    name: 'Tulips',
    image: '/tulips f1.jpg',
    price: '$30',
    description: 'A vibrant bouquet of colorful tulips.',
  },
  {
    id: 3,
    name: 'Lilies',
    image: '/lilies f1.jpg',
    price: '$35',
    description: 'Elegant white lilies for a graceful touch.',
  },
  {
    id: 4,
    name: 'Daisies',
    image: '/daisies f1.jpg',
    price: '$20',
    description: 'Cheerful daisies that brighten up any room.',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white px-4 md:px-16 font-serif">
      <h2 className="flex justify-center gap-2 text-4xl font-semibold font-serif text-black text-center mb-2"> 
        Featured Products
        <GiButterflyFlower className='text-pink-700' size={40}/>
      </h2>
      <p className="text-lg text-center text-gray-500 mb-8">
        Discover our collection of beautiful, fresh flowers perfect for any occasion. 
        From romantic roses to vibrant tulips, find the perfect bouquet to brighten up your space.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {flowers.map((flower) => (
          <div key={flower.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            {/* Use Next.js Image component for better image optimization */}
            <Image
              src={flower.image}
              alt={flower.name}
              width={400} // You can adjust the width and height as needed
              height={250} // Adjust the height based on the aspect ratio of your images
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-pink-700">{flower.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{flower.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-pink-700">{flower.price}</span>
                <button className="bg-lime-500 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-all duration-200">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;



