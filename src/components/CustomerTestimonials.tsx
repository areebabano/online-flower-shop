"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { GiButterflyFlower } from 'react-icons/gi';

const CustomerTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jane Doe",
      location: "New York",
      review: "The flower arrangements were absolutely stunning! I got them for my wedding, and they made the day even more special.",
      rating: 5,
      image: "/customer1.jpeg" // Replace with the actual image path
    },
    {
      id: 2,
      name: "John Smith",
      location: "Los Angeles",
      review: "I ordered a bouquet for my mom's birthday, and it arrived fresh and beautifully packaged. Highly recommend this shop!",
      rating: 4,
      image: "/customer2.jpg" // Replace with the actual image path
    },
    {
      id: 3,
      name: "Emily Johnson",
      location: "Chicago",
      review: "Fantastic customer service and quick delivery. The flowers were even more beautiful than I expected!",
      rating: 5,
      image: "/customer3.jpg" // Replace with the actual image path
    }
  ];

  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials py-16 bg-gray-100 text-center">
      <div className="flex items-center justify-center space-x-3 mb-4">
        <h2 className="text-4xl font-bold text-black font-serif">What Our Customers Say</h2>
        <GiButterflyFlower className="text-pink-700" size="40"/>
      </div>
      <p className="text-gray-500 text-lg mb-6">We are committed to making every experience memorable. Hear directly from our happy customers!</p>

      <div className="relative max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition"
          aria-label="Previous Testimonial"
        >
          <FaChevronLeft size={20} />
        </button>

        <div className="testimonial-content text-center transition-transform duration-300 transform hover:scale-105">
          <Image
            src={testimonials[current].image}
            alt={testimonials[current].name}
            height={100}
            width={100}
            className="mx-auto rounded-full mb-4 border-4 border-pink-200 shadow-md transition-transform duration-300 transform hover:scale-110"
          />

          <h4 className="text-2xl font-semibold text-black font-serif">{testimonials[current].name}</h4>
          <p className="text-gray-500 text-sm">{testimonials[current].location}</p>

          <p className="text-gray-600 italic mb-2 text-lg">{testimonials[current].review}</p>

          {/* Display Customer Rating */}
          <div className="flex justify-center mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={`text-yellow-500 ${i < testimonials[current].rating ? '' : 'opacity-40'}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition"
          aria-label="Next Testimonial"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className="mt-6 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${current === index ? 'bg-pink-700' : 'bg-gray-300'} transition duration-300`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default CustomerTestimonials;
