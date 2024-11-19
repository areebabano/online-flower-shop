"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { FaEye, FaHeart, FaTimes, FaRegHeart, FaFilter, FaSort } from 'react-icons/fa';
import { GiButterflyFlower } from 'react-icons/gi';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
}

const FlowerShopSection: React.FC = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());
  const [cartMessage, setCartMessage] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('default');
  const [filterBy, setFilterBy] = useState<string>('all');
  const [discountCode, setDiscountCode] = useState<string>(''); // Discount code state
  const [discountAmount, setDiscountAmount] = useState<number>(0); // Discount amount state
  const [addedToCart, setAddedToCart] = useState(false); // State to track if product is added to cart

  const products: Product[] = [
    { id: 1, name: 'Red Roses', description: 'Perfect for special occasions', price: 20, image: '/redrose1.jpg', badge: 'Best Seller' },
    { id: 2, name: 'White Lilies', description: 'Elegant and timeless', price: 30, image: '/whitelilies.jpg', badge: 'New Arrival' },
    { id: 3, name: 'Tulips Bouquet', description: 'Brighten up your day', price: 25, image: '/tulipsbouqet.jpg', badge: 'Discount' },
    { id: 4, name: 'Sunflowers', description: 'Bring cheer to any space', price: 15, image: '/sunflowers.jpg' },
    { id: 5, name: 'Orchids', description: 'Sophisticated and graceful', price: 40, image: '/orchids.jpg', badge: 'New Arrival' },
    { id: 6, name: 'Daisies', description: 'Perfect for summer days', price: 10, image: '/daisies.jpg' },
    { id: 7, name: 'Lavender', description: 'Calming and soothing fragrance', price: 18, image: '/lavender.jpg' },
    { id: 8, name: 'Peonies', description: 'Romantic and lush', price: 35, image: '/peonies.jpg', badge: 'Best Seller' },
    { id: 9, name: 'Magnolias', description: 'Graceful and fragrant', price: 50, image: '/magnolias.jpg' },
    { id: 10, name: 'Carnations', description: 'Classic and colorful', price: 12, image: '/carnations.jpg' },
    { id: 11, name: 'Gerberas', description: 'Vibrant and cheerful', price: 22, image: '/gerbera.jpg' },
    { id: 12, name: 'Calla Lilies', description: 'Elegant and exotic', price: 28, image: '/callalily.jpg' },
    { id: 13, name: 'Violets', description: 'Delicate and charming', price: 16, image: '/violets.jpg' },
    { id: 14, name: 'Gardenias', description: 'Sweet-scented and stunning', price: 45, image: '/gardenias.jpg', badge: 'New Arrival' },
    { id: 15, name: 'Chrysanthemums', description: 'Bold and vibrant colors', price: 20, image: '/Chrysanthemums.jpg' },
    { id: 16, name: 'Lillies of the Valley', description: 'Graceful and fragrant', price: 38, image: '/lilies of the valley.jpg' },
    { id: 17, name: 'Freesia', description: 'Beautiful and fragrant', price: 17, image: '/freesia.jpg' },
    { id: 18, name: 'Zinnias', description: 'Bright and cheerful', price: 13, image: '/zennias.jpg' },
    { id: 19, name: 'Camellias', description: 'Soft and romantic', price: 23, image: '/camellia.jpg' },
    { id: 20, name: 'Begonias', description: 'Colorful and long-lasting', price: 18, image: '/begonias.jpg' },
  ];

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setAddedToCart(false); // Reset the added to cart state when opening the modal
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
    setCartMessage(null);
  };

  // Sorting function
  const sortProducts = (products: Product[], sortBy: string) => {
    switch (sortBy) {
      case 'price':
        return products.sort((a, b) => a.price - b.price);
      case 'popularity':
        return products.sort((a, b) => a.name.localeCompare(b.name)); // Mock sorting by name
      case 'newest':
        return products.reverse(); // Mock sorting by newest (just reverses for simplicity)
      default:
        return products;
    }
  };

  // Filtering function
  const filterProducts = (products: Product[], filterBy: string) => {
    if (filterBy === 'all') return products;
    return products.filter(product => product.badge?.toLowerCase() === filterBy.toLowerCase());
  };

  const filteredAndSortedProducts = sortProducts(filterProducts(products, filterBy), sortBy);

  const toggleLike = (productId: number) => {
    setLikedProducts((prevLiked) => {
      const newLiked = new Set(prevLiked);
      if (newLiked.has(productId)) {
        newLiked.delete(productId);
      } else {
        newLiked.add(productId);
      }
      return newLiked;
    });
  };

  const handleAddToCart = () => {
    setCartMessage("Product added to cart!");
    setAddedToCart(true); // Set added to cart state to true
    setTimeout(() => setCartMessage(null), 3000);
  };

  // Apply discount logic
  const applyDiscount = () => {
    if (discountCode === "SAVE10") {
      setDiscountAmount(10); // 10% discount for code SAVE10
    } else if (discountCode === "SAVE20") {
      setDiscountAmount(20); // 20% discount for code SAVE20
    } else {
      setDiscountAmount(0);
      alert("Invalid discount code!");
    }
  };
    return (
      
<div className="bg-white w-full">
{/* Hero Section */}
<section className="relative bg-white p-4 max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-6">
  <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[700px]">
    <Image 
      src="/hero.jpg" 
      alt="Flowers" 
      layout="fill" 
      objectFit="cover" 
      className="rounded-md"
    />
  </div>
  <div className="absolute inset-0 flex flex-col items-center justify-start text-center text-white">
    <div className="max-w-lg mx-auto px-4">
      <h1 className="flex flex-col text-3xl sm:text-4xl md:text-5xl font-extrabold text-shadow-md text-black font-serif mt-24 sm:mt-24 md:mt-28 w-full">
        Welcome To
        <span className='inline-flex'><GiButterflyFlower className="text-pink-700 inline-flex mr-2" size={50} /> 𝕱𝖑𝖔𝖗𝖆𝖑 𝕰𝖑𝖊𝖌𝖆𝖓𝖈𝖊 <GiButterflyFlower className="text-pink-700 inline-flex ml-2" size={50} /></span>
        
      </h1>
      {/* <p className="mt-0 sm:mt-4 md:mt-6 text-sm sm:text-md md:text-lg font-normal font-serif mx-auto text-pink-500">
      Elegant floral arrangements delivered to your doorstep.
      </p> */}
    </div>
  </div>
</section>



        {/* Filters and Sort Section */}
        <section className="bg-white p-6 max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-6">
          {/* Filter */}
          <div className="flex items-center space-x-4">
            <FaFilter className="text-pink-700" size={20} />
            <span className="mr-4 text-sm sm:text-base text-black">Filter by:</span>
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="py-2 px-4 border p-2 rounded-md focus:outline-none text-black text-sm sm:text-base"
            >
              <option value="all">All</option>
              <option value="Best Seller">Best Seller</option>
              <option value="New Arrival">New Arrival</option>
              <option value="Discount">Discount</option>
            </select>
          </div>
  
          {/* Sort */}
          <div className="flex items-center space-x-4">
            <FaSort className="text-pink-700" size={20} />
            <span className="mr-4 text-sm sm:text-base text-black">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="py-2 px-4 border p-2 rounded-md focus:outline-none text-black text-sm sm:text-base"
            >
              <option value="default">Default</option>
              <option value="price">Price</option>
              <option value="popularity">Popularity</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </section>
  
         {/* Discount Code Section */}
         <section className="bg-gradient-to-r from-pink-500 to-pink-700 p-6 border-t flex justify-center items-center text-center space-x-4 max-w-7xl lg:mx-auto
 ">
         <div>
          <p className="text-xl font-semibold mb-4 text-white"><span className='text-yellow-300'>Special Offer!</span> Get up to 20% off on your first order!🌸🌼</p>
           <div className="flex justify-center items-center space-x-4">
            <input
              type="text"
              placeholder="Enter discount code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="border p-2 rounded-md focus:outline-none"
            />
            <button
              onClick={applyDiscount}
              className="border-2 border-white text-white font-serif font-bold py-2 px-6 rounded-full hover:bg-white hover:text-pink-600 transition duration-300"
            >
              Apply Discount 
            </button>
          </div>
          {discountAmount > 0 && (
            <div className="mt-3 text-green-600 font-semibold">
              Discount Applied: {discountAmount}% off
            </div>
          )}
        </div>
      </section>
        
        {/* Products Section */}
        <section className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mx-auto">
        {filteredAndSortedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            {product.badge && (
              <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                {product.badge}
              </span>
            )}
            <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={280}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            {/* <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" /> */}
            <h3 className="text-lg font-semibold text-pink-700">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="text-lg font-bold text-pink-700 mt-2">${product.price}</p>
            <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                    <div
                      onClick={() => handleQuickView(product)}
                      className="flex items-center justify-center p-2 rounded-full text-white bg-lime-500 hover:bg-pink-600 transition-all duration-300 cursor-pointer"
                    >
                      <FaEye size={20} />
                    </div>
                    <div
                      onClick={() => toggleLike(product.id)}
                      className="flex items-center justify-center p-2 rounded-full text-white bg-pink-500 hover:bg-pink-700 transition-all duration-300 cursor-pointer"
                    >
                      {likedProducts.has(product.id) ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
                    </div>
                    {/* <div
                      onClick={handleAddToCart}
                      className="flex items-center justify-center p-2 rounded-full text-white bg-green-500 hover:bg-green-600 transition-all duration-300 cursor-pointer"
                    >
                      <FaCartPlus size={20} />
                    </div> */}
                  </div>
              {/* </div> */}
          </div>
        ))}
      </section>

          {/* Quick View Modal */}
          {quickViewProduct && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full sm:w-4/5 md:w-1/2 lg:w-1/3">
            <button
              onClick={closeQuickView}
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">{quickViewProduct.name}</h2>
            {/* <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            /> */}
            <Image
             src={quickViewProduct.image}
             alt={quickViewProduct.name}
             height={100}
             width={100}
             className="object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-gray-500 mb-4">{quickViewProduct.description}</p>
            <p className="text-lg font-bold text-pink-700 mb-4">${quickViewProduct.price}</p>
            <div className="flex justify-between items-center space-x-4">
              <button
                onClick={handleAddToCart}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all duration-300"
              >
                Add to Cart 
              </button>
              <button
                onClick={() => toggleLike(quickViewProduct.id)}
                className="text-red-500 hover:text-red-600 transition-all duration-300"
              >
                {likedProducts.has(quickViewProduct.id) ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Notification */}
      {cartMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg">
          {cartMessage}
        </div>
      )}
    </div>
    );
  };
  

export default FlowerShopSection;


// "use client";
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { FaEye, FaHeart,FaTimes, FaRegHeart, FaFilter, FaSort } from 'react-icons/fa';
// import { GiButterflyFlower } from 'react-icons/gi';

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   badge?: string;
// }

// const FlowerShopSection: React.FC = () => {
//   const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
//   const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());
//   const [cartMessage, setCartMessage] = useState<string | null>(null);
//   const [sortBy, setSortBy] = useState<string>('default');
//   const [filterBy, setFilterBy] = useState<string>('all');
//   const [discountCode, setDiscountCode] = useState<string>(''); // Discount code state
//   const [discountAmount, setDiscountAmount] = useState<number>(0); // Discount amount state
//   const [addedToCart, setAddedToCart] = useState(false); // State to track if product is added to cart
//   console.log(addedToCart)

//   const products: Product[] = [
//     { id: 1, name: 'Red Roses', description: 'Perfect for special occasions', price: 20, image: '/redrose1.jpg', badge: 'Best Seller' },
//     { id: 2, name: 'White Lilies', description: 'Elegant and timeless', price: 30, image: '/whitelilies.jpg', badge: 'New Arrival' },
//     { id: 3, name: 'Tulips Bouquet', description: 'Brighten up your day', price: 25, image: '/tulipsbouqet.jpg', badge: 'Discount' },
//     { id: 4, name: 'Sunflowers', description: 'Bring cheer to any space', price: 15, image: '/sunflowers.jpg' },
//     { id: 5, name: 'Orchids', description: 'Sophisticated and graceful', price: 40, image: '/orchids.jpg', badge: 'New Arrival' },
//     { id: 6, name: 'Daisies', description: 'Perfect for summer days', price: 10, image: '/daisies.jpg' },
//     { id: 7, name: 'Lavender', description: 'Calming and soothing fragrance', price: 18, image: '/lavender.jpg' },
//     { id: 8, name: 'Peonies', description: 'Romantic and lush', price: 35, image: '/peonies.jpg', badge: 'Best Seller' },
//     { id: 9, name: 'Magnolias', description: 'Graceful and fragrant', price: 50, image: '/magnolias.jpg' },
//     { id: 10, name: 'Carnations', description: 'Classic and colorful', price: 12, image: '/carnations.jpg' },
//     { id: 11, name: 'Gerberas', description: 'Vibrant and cheerful', price: 22, image: '/gerbera.jpg' },
//     { id: 12, name: 'Calla Lilies', description: 'Elegant and exotic', price: 28, image: '/callalily.jpg' },
//     { id: 13, name: 'Violets', description: 'Delicate and charming', price: 16, image: '/violets.jpg' },
//     { id: 14, name: 'Gardenias', description: 'Sweet-scented and stunning', price: 45, image: '/gardenias.jpg', badge: 'New Arrival' },
//     { id: 15, name: 'Chrysanthemums', description: 'Bold and vibrant colors', price: 20, image: '/Chrysanthemums.jpg' },
//     { id: 16, name: 'Lillies of the Valley', description: 'Graceful and fragrant', price: 38, image: '/lilies of the valley.jpg' },
//     { id: 17, name: 'Freesia', description: 'Beautiful and fragrant', price: 17, image: '/freesia.jpg' },
//     { id: 18, name: 'Zinnias', description: 'Bright and cheerful', price: 13, image: '/zennias.jpg' },
//     { id: 19, name: 'Camellias', description: 'Soft and romantic', price: 23, image: '/camellia.jpg' },
//     { id: 20, name: 'Begonias', description: 'Colorful and long-lasting', price: 18, image: '/begonias.jpg' },
//   ];

//   const handleQuickView = (product: Product) => {
//     setQuickViewProduct(product);
//     setAddedToCart(false); // Reset the added to cart state when opening the modal
//   };

//   const closeQuickView = () => {
//     setQuickViewProduct(null);
//     setCartMessage(null);
//   };

//   // Sorting function
//   const sortProducts = (products: Product[], sortBy: string) => {
//     switch (sortBy) {
//       case 'price':
//         return products.sort((a, b) => a.price - b.price);
//       case 'popularity':
//         return products.sort((a, b) => a.name.localeCompare(b.name)); // Mock sorting by name
//       case 'newest':
//         return products.reverse(); // Mock sorting by newest (just reverses for simplicity)
//       default:
//         return products;
//     }
//   };

//   // Filtering function
//   const filterProducts = (products: Product[], filterBy: string) => {
//     if (filterBy === 'all') return products;
//     return products.filter(product => product.badge?.toLowerCase() === filterBy.toLowerCase());
//   };

//   const filteredAndSortedProducts = sortProducts(filterProducts(products, filterBy), sortBy);

//   const toggleLike = (productId: number) => {
//     setLikedProducts((prevLiked) => {
//       const newLiked = new Set(prevLiked);
//       if (newLiked.has(productId)) {
//         newLiked.delete(productId);
//       } else {
//         newLiked.add(productId);
//       }
//       return newLiked;
//     });
//   };


//   const handleAddToCart = () => {
//     setCartMessage("Product added to cart!");
//     setAddedToCart(true); // Set added to cart state to true
//     setTimeout(() => setCartMessage(null), 3000);
//   };

//   // Apply discount logic
//   const applyDiscount = () => {
//     if (discountCode === "SAVE10") {
//       setDiscountAmount(10); // 10% discount for code SAVE10
//     } else if (discountCode === "SAVE20") {
//       setDiscountAmount(20); // 20% discount for code SAVE20
//     } else {
//       setDiscountAmount(0);
//       alert("Invalid discount code!");
//     }
//   };

//   return (
//     <div className="bg-white text-gray-900 font-serif mt-16">
//   {/* Hero Section */}
//   <section className="relative">
//     {/* <div className="absolute inset-0 opacity-60"></div> */}
//     <Image 
//       src="/hero.jpg" 
//       alt="Flowers" 
//       width={1920} 
//       height={800} 
//       className="w-full h-[400px] object-cover sm:h-[500px] lg:h-[700px]" 
//     />
//     <div className="absolute inset-0 flex-col items-center justify-center text-center text-white">
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-shadow-md text-black font-serif mt-[14px] sm:mt-10 md:mt-16 inline-flex gap-1">
//         Welcome To Floral Elegance
//         <GiButterflyFlower className="text-pink-700" size={50} />
//       </h1>
//       <p className="mt-1 sm:mt-2 md:mt-4 text-sm sm:text-lg md:text-xl font-normal font-serif mx-auto text-gray-500">
//         Where elegance meets nature. Bringing stunning floral arrangements to your doorstep.
//       </p>
//     </div>
//   </section>


//       {/* Filter and Sort Section */}
// <section className="p-6 flex flex-col sm:flex-row justify-between lg:space-x-8 items-center border-b">
//   {/* Filter */}
//   <div className="flex items-center space-x-4 mb-4 sm:mb-0">
//     <FaFilter className="text-pink-700" size={20} />
//     <span className="mr-4 text-sm sm:text-base">Filter by:</span>
//     <select
//       value={filterBy}
//       onChange={(e) => setFilterBy(e.target.value)}
//       className="border p-2 rounded-md focus:outline-none text-sm sm:text-base"
//     >
//       <option value="all">All</option>
//       <option value="best seller">Best Seller</option>
//       <option value="new arrival">New Arrival</option>
//       <option value="discount">Discount</option>
//     </select>
//   </div>

//   {/* Sort */}
//   <div className="flex items-center space-x-4">
//     <FaSort className="text-pink-700" size={20} />
//     <span className="mr-4 text-sm sm:text-base">Sort by:</span>
//     <select
//       value={sortBy}
//       onChange={(e) => setSortBy(e.target.value)}
//       className="border p-2 rounded-md focus:outline-none text-sm sm:text-base"
//     >
//       <option value="default">Default</option>
//       <option value="price">Price</option>
//       <option value="popularity">Popularity</option>
//       <option value="newest">Newest</option>
//     </select>
//   </div>
// </section>


//         {/* Discount Code Section */}
//         <section className="bg-gradient-to-r from-pink-500 to-pink-700 p-6 border-t flex justify-center items-center text-center space-x-4 lg:max-w-6xl lg:mx-auto
// ">
//         <div>
//           <p className="text-xl font-semibold mb-4 text-white"><span className='text-yellow-300'>Special Offer!</span> Get up to 20% off on your first order!🌸🌼</p>
//           <div className="flex justify-center items-center space-x-4">
//             <input
//               type="text"
//               placeholder="Enter discount code"
//               value={discountCode}
//               onChange={(e) => setDiscountCode(e.target.value)}
//               className="border p-2 rounded-md focus:outline-none"
//             />
//             <button
//               onClick={applyDiscount}
//               className="border-2 border-white text-white font-serif font-bold py-2 px-6 rounded-full hover:bg-white hover:text-pink-600 transition duration-300"
//             >
//               Apply Discount 
//             </button>
//           </div>
//           {discountAmount > 0 && (
//             <div className="mt-3 text-green-600 font-semibold">
//               Discount Applied: {discountAmount}% off
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Product Listing */}
    //   <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mx-auto">
    //     {filteredAndSortedProducts.map((product) => (
    //       <div
    //         key={product.id}
    //         className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
    //       >
    //         {product.badge && (
    //           <span className="absolute top-2 right-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
    //             {product.badge}
    //           </span>
    //         )}
    //         <Image
    //             src={product.image}
    //             alt={product.name}
    //             width={300}
    //             height={280}
    //             className="w-full h-48 object-cover rounded-lg mb-4"
    //           />
    //         {/* <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" /> */}
    //         <h3 className="text-lg font-semibold text-pink-700">{product.name}</h3>
    //         <p className="text-sm text-gray-500">{product.description}</p>
    //         <p className="text-lg font-bold text-pink-700 mt-2">${product.price}</p>
    //         <div className="absolute bottom-4 right-4 flex items-center space-x-2">
    //                 <div
    //                   onClick={() => handleQuickView(product)}
    //                   className="flex items-center justify-center p-2 rounded-full text-white bg-lime-500 hover:bg-pink-600 transition-all duration-300 cursor-pointer"
    //                 >
    //                   <FaEye size={20} />
    //                 </div>
    //                 <div
    //                   onClick={() => toggleLike(product.id)}
    //                   className="flex items-center justify-center p-2 rounded-full text-white bg-pink-500 hover:bg-pink-700 transition-all duration-300 cursor-pointer"
    //                 >
    //                   {likedProducts.has(product.id) ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
    //                 </div>
    //                 {/* <div
    //                   onClick={handleAddToCart}
    //                   className="flex items-center justify-center p-2 rounded-full text-white bg-green-500 hover:bg-green-600 transition-all duration-300 cursor-pointer"
    //                 >
    //                   <FaCartPlus size={20} />
    //                 </div> */}
    //               </div>
    //           {/* </div> */}
    //       </div>
    //     ))}
    //   </section>

    //       {/* Quick View Modal */}
    //       {quickViewProduct && (
    //     <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
    //       <div className="bg-white p-6 rounded-lg w-full sm:w-4/5 md:w-1/2 lg:w-1/3">
    //         <button
    //           onClick={closeQuickView}
    //           className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
    //         >
    //           <FaTimes size={20} />
    //         </button>
    //         <h2 className="text-2xl font-semibold text-pink-700 mb-4">{quickViewProduct.name}</h2>
    //         {/* <img
    //           src={quickViewProduct.image}
    //           alt={quickViewProduct.name}
    //           className="w-full h-64 object-cover rounded-lg mb-4"
    //         /> */}
    //         <Image
    //          src={quickViewProduct.image}
    //          alt={quickViewProduct.name}
    //          height={100}
    //          width={100}
    //          className="object-cover rounded-lg mb-4"
    //         />
    //         <p className="text-sm text-gray-500 mb-4">{quickViewProduct.description}</p>
    //         <p className="text-lg font-bold text-pink-700 mb-4">${quickViewProduct.price}</p>
    //         <div className="flex justify-between items-center space-x-4">
    //           <button
    //             onClick={handleAddToCart}
    //             className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all duration-300"
    //           >
    //             Add to Cart 
    //           </button>
    //           <button
    //             onClick={() => toggleLike(quickViewProduct.id)}
    //             className="text-red-500 hover:text-red-600 transition-all duration-300"
    //           >
    //             {likedProducts.has(quickViewProduct.id) ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   )}

    //   {/* Cart Notification */}
    //   {cartMessage && (
    //     <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg">
    //       {cartMessage}
    //     </div>
    //   )}
    // </div>
//   );
// };

// export default FlowerShopSection;



// "use client";
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { FaEye, FaHeart, FaCartPlus, FaTimes, FaRegHeart, FaFilter, FaSort } from 'react-icons/fa';
// import { GiButterflyFlower } from 'react-icons/gi';

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   badge?: string;
// }

// const FlowerShopSection: React.FC = () => {
//   const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
//   const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());
//   const [cartMessage, setCartMessage] = useState<string | null>(null);
//   const [sortBy, setSortBy] = useState<string>('default');
//   const [filterBy, setFilterBy] = useState<string>('all');

//   const products: Product[] = [
//     { id: 1, name: 'Red Roses', description: 'Perfect for special occasions', price: 20, image: '/images/red-roses.jpg', badge: 'Best Seller' },
//     { id: 2, name: 'White Lilies', description: 'Elegant and timeless', price: 30, image: '/images/white-lilies.jpg', badge: 'New Arrival' },
//     { id: 3, name: 'Tulips Bouquet', description: 'Brighten up your day', price: 25, image: '/images/tulips.jpg', badge: 'Discount' },
//     { id: 4, name: 'Sunflowers', description: 'Bring cheer to any space', price: 15, image: '/images/sunflowers.jpg' },
//     { id: 5, name: 'Orchids', description: 'Sophisticated and graceful', price: 40, image: '/images/orchids.jpg', badge: 'New Arrival' },
//     { id: 6, name: 'Daisies', description: 'Perfect for summer days', price: 10, image: '/images/daisies.jpg' },
//     { id: 7, name: 'Lavender', description: 'Calming and soothing fragrance', price: 18, image: '/images/lavender.jpg' },
//     { id: 8, name: 'Peonies', description: 'Romantic and lush', price: 35, image: '/images/peonies.jpg', badge: 'Best Seller' },
//     { id: 9, name: 'Magnolias', description: 'Graceful and fragrant', price: 50, image: '/images/magnolias.jpg' },
//     { id: 10, name: 'Carnations', description: 'Classic and colorful', price: 12, image: '/images/carnations.jpg' },
//     { id: 11, name: 'Gerberas', description: 'Vibrant and cheerful', price: 22, image: '/images/gerberas.jpg' },
//     { id: 12, name: 'Calla Lilies', description: 'Elegant and exotic', price: 28, image: '/images/calla-lilies.jpg' },
//     { id: 13, name: 'Violets', description: 'Delicate and charming', price: 16, image: '/images/violets.jpg' },
//     { id: 14, name: 'Gardenias', description: 'Sweet-scented and stunning', price: 45, image: '/images/gardenias.jpg', badge: 'New Arrival' },
//     { id: 15, name: 'Chrysanthemums', description: 'Bold and vibrant colors', price: 20, image: '/images/chrysanthemums.jpg' },
//     { id: 16, name: 'Lillies of the Valley', description: 'Graceful and fragrant', price: 38, image: '/images/lillies-of-the-valley.jpg' },
//     { id: 17, name: 'Freesia', description: 'Beautiful and fragrant', price: 17, image: '/images/freesia.jpg' },
//     { id: 18, name: 'Zinnias', description: 'Bright and cheerful', price: 13, image: '/images/zinnias.jpg' },
//     { id: 19, name: 'Camellias', description: 'Soft and romantic', price: 23, image: '/images/camellias.jpg' },
//     { id: 20, name: 'Begonias', description: 'Colorful and long-lasting', price: 18, image: '/images/begonias.jpg' },
//   ];
  

//   const handleQuickView = (product: Product) => {
//     setQuickViewProduct(product);
//   };

//   const closeQuickView = () => {
//     setQuickViewProduct(null);
//     setCartMessage(null);
//   };

//   // Sorting function
//   const sortProducts = (products: Product[], sortBy: string) => {
//     switch (sortBy) {
//       case 'price':
//         return products.sort((a, b) => a.price - b.price);
//       case 'popularity':
//         return products.sort((a, b) => a.name.localeCompare(b.name)); // Mock sorting by name
//       case 'newest':
//         return products.reverse(); // Mock sorting by newest (just reverses for simplicity)
//       default:
//         return products;
//     }
//   };

//   // Filtering function
//   const filterProducts = (products: Product[], filterBy: string) => {
//     if (filterBy === 'all') return products;
//     return products.filter(product => product.badge?.toLowerCase() === filterBy.toLowerCase());
//   };

//   const filteredAndSortedProducts = sortProducts(filterProducts(products, filterBy), sortBy);

//   const toggleLike = (productId: number) => {
//     setLikedProducts((prevLiked) => {
//       const newLiked = new Set(prevLiked);
//       if (newLiked.has(productId)) {
//         newLiked.delete(productId);
//       } else {
//         newLiked.add(productId);
//       }
//       return newLiked;
//     });
//   };

//   const handleAddToCart = () => {
//     setCartMessage("Product added to cart!");
//     setTimeout(() => setCartMessage(null), 3000);
//   };

//   return (
//     <div className="bg-white text-gray-900 font-serif">
//       {/* Hero Section */}
//       <section className="relative">
//         <div className="absolute inset-0 opacity-60"></div>
//         <Image src="/hero.jpg" alt="Flowers" width={1920} height={800} className="w-full h-[400px] object-cover" />
//         <div className="absolute inset-0 flex-col items-center justify-center text-center text-white">
//           <h1 className="text-5xl font-extrabold text-shadow-md text-black font-serif mt-10 inline-flex gap-1">
//             Welcome To Floral Elegance
//             <GiButterflyFlower className='text-pink-700' size={50} />
//           </h1>
//           <p className="mt-2 text-lg font-normal font-serif mx-auto text-gray-500">
//             Where elegance meets nature. Bringing stunning floral arrangements to your doorstep.
//           </p>
//         </div>
//       </section>

//       {/* Filter and Sort Section */}
//       <section className="p-6 flex justify-between items-center border-b">
//         {/* Filter */}
//         <div className="flex items-center space-x-4">
//           <FaFilter className="text-pink-700" size={20} />
//           <span className="mr-4">Filter by:</span>
//           <select
//             value={filterBy}
//             onChange={(e) => setFilterBy(e.target.value)}
//             className="border p-2 rounded-md focus:outline-none"
//           >
//             <option value="all">All</option>
//             <option value="best seller">Best Seller</option>
//             <option value="new arrival">New Arrival</option>
//             <option value="discount">Discount</option>
//           </select>
//         </div>

//         {/* Sort */}
//         <div className="flex items-center space-x-4">
//           <FaSort className="text-pink-700" size={20} />
//           <span className="mr-4">Sort by:</span>
//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="border p-2 rounded-md focus:outline-none"
//           >
//             <option value="default">Default</option>
//             <option value="price">Price</option>
//             <option value="popularity">Popularity</option>
//             <option value="newest">Newest</option>
//           </select>
//         </div>
//       </section>
//       <section className="p-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div key={product.id} className="relative border rounded-lg overflow-hidden shadow-md hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform">
//               <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
//                 <p className="text-gray-500 text-sm mb-2">{product.description}</p>
//                 <div className="flex items-center justify-between">
//                   <p className="text-xl font-bold text-pink-600">${product.price}</p>
//                   <div className="flex items-center space-x-2">
//                     <div
//                       onClick={() => handleQuickView(product)}
//                       className="flex items-center justify-center p-2 rounded-full text-white bg-lime-500 hover:bg-pink-600 transition-all duration-300 cursor-pointer"
//                     >
//                       <FaEye size={20} />
//                       <span className="ml-1">View</span>
//                     </div>

//                     {/* Heart icon functionality */}
//                     <div
//                       onClick={() => toggleLike(product.id)}
//                       className={`flex items-center justify-center p-2 rounded-full border-2 transition-all duration-300 cursor-pointer ${
//                         likedProducts.has(product.id) ? 'text-red-600 border-red-600' : 'text-gray-400 border-gray-400'
//                       }`}
//                     >
//                       <FaHeart size={20} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {product.badge && (
//                 <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
//                   {product.badge}
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {quickViewProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeQuickView}>
//           <div
//             className="bg-white p-5 rounded-lg shadow-xl w-full max-w-md mx-auto relative animate-fade-in scale-95 transform transition duration-300 ease-in-out"
//             style={{ maxHeight: '90vh', overflowY: 'auto' }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={closeQuickView}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-all duration-200"
//             >
//               <FaTimes size={18} />
//             </button>
//             <div className="text-center mb-3">
//               <h2 className="text-xl font-bold text-gray-800">{quickViewProduct.name}</h2>
//             </div>
//             <div className="relative w-full h-48 mb-3 rounded-lg overflow-hidden">
//               <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-full object-cover" />
//             </div>
//             <div className="text-center text-gray-600 text-sm mb-3">
//               <p>{quickViewProduct.description}</p>
//             </div>
//             <div className="text-center text-lg font-semibold text-pink-600 mb-3">
//               ${quickViewProduct.price}
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300"
//             >
//               <FaCartPlus size={20} />
//               <span>Add to Cart</span>
//             </button>
//             {cartMessage && (
//               <p className="text-center text-green-600 mt-2">{cartMessage}</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FlowerShopSection;



// "use client"
// import { useState } from 'react';

// // Define types for Product and Cart Item
// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   badge?: string;
// }

// interface CartItem extends Product {}

// const Shop: React.FC = () => {
//   // Initialize cart and modal states
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [showQuickView, setShowQuickView] = useState<Product | null>(null);
//   const [discountCode, setDiscountCode] = useState<string>('');

//   // Sample product data
//   const products: Product[] = [
//     { id: 1, name: 'Red Roses', description: 'Perfect for Love & Romance', price: 20, image: '/images/red-roses.jpg', badge: 'Best Seller' },
//     { id: 2, name: 'White Lilies', description: 'Elegant and beautiful', price: 30, image: '/images/white-lilies.jpg', badge: 'New' },
//     { id: 3, name: 'Tulips Bouquet', description: 'Bright and cheerful', price: 25, image: '/images/tulips.jpg', badge: 'On Sale' },
//   ];

//   // Add product to cart
//   const addToCart = (product: Product) => {
//     if (!product || !product.name || !product.price) {
//       console.error('Invalid product data:', product);
//       return;
//     }
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   // Apply discount code
//   const applyDiscount = () => {
//     if (discountCode === 'SAVE10') {
//       alert('Discount Applied!');
//     } else {
//       alert('Invalid Code');
//     }
//   };

//   return (
//     <div className="bg-gray-100 text-gray-800 p-6">
//       <h1 className="text-4xl font-bold text-center text-pink-700 mb-8">Our Premium Flowers</h1>

//       {/* Featured Product Section */}
//       <div className="bg-white p-6 rounded-lg shadow-lg mb-8 text-center">
//         <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Product</h2>
//         <div className="flex justify-center items-center">
//           <img
//             src={products[0].image}
//             alt={products[0].name}
//             className="w-64 h-64 object-cover rounded-lg shadow-md"
//           />
//           <div className="ml-6 text-left">
//             <h3 className="text-xl font-semibold text-gray-900">{products[0].name}</h3>
//             <p className="text-gray-600 mt-2">{products[0].description}</p>
//             <p className="text-lg font-bold mt-4">${products[0].price}</p>
//             <button
//               className="mt-4 px-6 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-800 transition duration-300"
//               onClick={() => addToCart(products[0])}
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <div key={product.id} className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover rounded-lg cursor-pointer"
//               onClick={() => setShowQuickView(product)}
//             />
//             <h2 className="text-xl font-semibold mt-4 text-gray-800">{product.name}</h2>
//             <p className="text-gray-500">{product.description}</p>
//             <p className="text-lg font-bold mt-2">${product.price}</p>
//             {product.badge && (
//               <span className="absolute top-2 right-2 bg-pink-700 text-white text-xs font-semibold px-2 py-1 rounded">
//                 {product.badge}
//               </span>
//             )}
//             <button
//               className="mt-4 px-6 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-800 transition duration-300"
//               onClick={() => addToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Quick View Modal */}
//       {showQuickView && showQuickView.image && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
//             <button
//               className="absolute top-2 right-2 text-gray-500"
//               onClick={() => setShowQuickView(null)}
//             >
//               Close
//             </button>
//             <h2 className="text-2xl font-semibold">{showQuickView.name}</h2>
//             <img
//               src={showQuickView.image}
//               alt={showQuickView.name}
//               className="w-full h-64 object-cover my-4"
//             />
//             <p className="text-gray-600">{showQuickView.description}</p>
//             <p className="text-lg font-bold mt-2">${showQuickView.price}</p>
//             <button
//               className="mt-4 px-6 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-800 transition duration-300"
//               onClick={() => addToCart(showQuickView)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Discount Section */}
//       <div className="mt-10 p-6 bg-white rounded-lg shadow-md text-center">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Special Offers</h2>
//         <input
//           type="text"
//           placeholder="Enter Discount Code"
//           value={discountCode}
//           onChange={(e) => setDiscountCode(e.target.value)}
//           className="border px-4 py-2 rounded-md text-gray-700 mr-2"
//         />
//         <button
//           className="px-6 py-2 bg-pink-700 text-white rounded-md hover:bg-pink-800 transition duration-300"
//           onClick={applyDiscount}
//         >
//           Apply Code
//         </button>
//       </div>

//       {/* Cart Preview Section */}
//       <div className="mt-10 p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Shopping Cart</h2>
//         {cart.length > 0 ? (
//           <ul className="space-y-2">
//             {cart.map((item, index) => (
//               <li key={index} className="flex justify-between border-b pb-2">
//                 {item.name} - <span>${item.price}</span>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-center text-gray-500">Your cart is empty.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Shop;
