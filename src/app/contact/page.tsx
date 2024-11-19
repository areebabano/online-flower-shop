"use client"
import { FaEnvelope, FaFacebook, FaInstagram, FaPinterest, FaShareAlt, FaSpinner, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import Image from 'next/image';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Cast `name` as a key of `formErrors` to avoid the TypeScript error
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  
    // Clear errors when the user starts typing again
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name as keyof typeof formErrors]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const errors = { name: '', email: '', message: '' };
    let isValid = true;

    // Name validation
    if (!formData.name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    // Message validation
    if (!formData.message) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate form submission (replace with actual API request)
    setTimeout(() => {
      setFormSubmitted(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    }, 2000);
  };

  return (
    <div className="bg-white text-gray-900 font-serif">
  {/* Contact Header Section with images */}
  <section className="py-16 px-6 bg-white flex flex-col items-center mt-10">
    <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
      <div className="w-full md:w-1/4 flex justify-center">
        <Image
          src="/flower1.jpg"
          alt="Flower Left"
          height={200}
          width={200}
          layout="intrinsic"
        />
      </div>
      <div className="text-center md:w-1/2">
        <h1 className="text-4xl font-bold font-serif text-black mb-6">
          <span className="text-pink-700 mr-2">&#9733;</span> Get In Touch
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          We would love to hear from you! For any inquiries, collaborations, or feedback, feel free to reach out.
        </p>
      </div>
      <div className="w-full md:w-1/4 flex justify-center">
        <Image
          src="/flower1.jpg"
          alt="Flower Right"
          height={210}
          width={210}
          layout="intrinsic"
        />
      </div>
    </div>
  </section>

  {/* Contact Info - Centered with images */}
  <section className="py-0 px-6 bg-white flex flex-col items-center mt-0">
    <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
      <div className="w-full md:w-1/4 flex justify-center">
        <Image
          src="/c1.jpg"
          alt="Flower Left"
          height={220}
          width={220}
          layout="intrinsic"
        />
      </div>
      <div className="text-center md:w-1/2">
        <h3 className="text-3xl font-semibold text-black mb-6">
          <MdPhone className="inline-block mr-2 text-pink-700" /> Contact Information
        </h3>
        <p className="text-lg text-gray-600 mb-6">Reach out to us through any of these channels:</p>
        <div className="space-y-6">
          <div className="flex justify-center items-center space-x-4">
            <MdEmail size={26} className="text-yellow-600" />
            <a href="mailto:contact@floralelegance.com" className="text-lg text-black hover:text-rose-700 transition duration-300">contact@floralelegance.com</a>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <MdPhone size={26} className="text-gray-600" />
            <a href="tel:+123456789" className="text-lg text-black hover:text-rose-700 transition duration-300">+1 234 567 89</a>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <HiLocationMarker size={26} className="text-green-600" />
            <span className="text-lg text-gray-600">123 Blossom St, Floral City</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 flex justify-center">
        <Image
          src="/c1.jpg"
          alt="Flower Right"
          height={220}
          width={220}
          layout="intrinsic"
        />
      </div>
    </div>
  </section>

  {/* Follow Us - Centered with images */}
  <section className="py-0 px-6 bg-white flex flex-col items-center mt-0">
    <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
      <div className="w-full md:w-1/4 flex justify-center">
        <Image
          src="/c6.jpg"
          alt="Flower Left"
          height={220}
          width={220}
          layout="intrinsic"
        />
      </div>
      <div className="text-center md:w-1/2">
        <h3 className="text-3xl font-semibold text-black mb-4 flex items-center justify-center">
          <FaShareAlt className="text-pink-700 mr-2" /> Connect With Us
        </h3>
        <p className="text-lg text-gray-600 mb-6 max-w-lg mx-auto">
          Join us on our social media channels to stay updated with the latest news, offers, and inspirations from Floral Elegance. We’re excited to connect and share with you!
        </p>
        <div className="flex justify-center space-x-8">
          <a href="https://www.facebook.com/floralelegance" target="_blank" className="text-rose-600 hover:text-rose-700 transition duration-300">
            <FaFacebook size={36} className="text-blue-600 hover:text-blue-700" />
          </a>
          <a href="https://www.instagram.com/floralelegance" target="_blank" className="text-rose-600 hover:text-rose-700 transition duration-300">
            <FaInstagram size={36} className="text-pink-500 hover:text-pink-600" />
          </a>
          <a href="https://www.twitter.com/floralelegance" target="_blank" className="text-rose-600 hover:text-rose-700 transition duration-300">
            <FaTwitter size={36} className="text-blue-200 hover:text-blue-300" />
          </a>
          <a href="https://www.pinterest.com/floralelegance" target="_blank" className="text-rose-600 hover:text-rose-700 transition duration-300">
            <FaPinterest size={36} className="text-red-500 hover:text-red-600" />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/4 flex justify-center">
        <Image
          src="/c6.jpg"
          alt="Flower Right"
          height={220}
          width={220}
          layout="intrinsic"
        />
      </div>
    </div>
  </section>

{/* Contact Form */}
<section className="max-w-4xl mx-auto p-12 mt-4 text-center font-serif relative">
  {/* Heading with Icon */}
  <h3 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
    <FaEnvelope className="text-pink-600 mr-2" /> Contact Us
  </h3>

  {/* Small Paragraph */}
  <p className="text-lg text-gray-600 mb-6 max-w-lg mx-auto">
    We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, please feel free to reach out. Fill in the form below to send us a message, and we’ll respond as soon as possible.
  </p>

  {/* Contact Form */}
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Name Field */}
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Your Name"
        className="w-full p-4 border text-black border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
    </div>

    {/* Email Field */}
    <div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Your Email"
        className="w-full p-4 border text-black border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
      />
      {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
    </div>

    {/* Subject Field */}
    <div>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleInputChange}
        placeholder="Subject"
        className="w-full p-4 border text-black border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
      />
    </div>

    {/* Message Field */}
    <div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Your Message"
        className="w-full p-4 border text-black border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-pink-600 h-40"
      ></textarea>
      {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className={`w-full py-4 px-6 ${isLoading ? 'bg-gray-400' : 'bg-pink-600'} text-white text-lg rounded-md hover:bg-pink-700 transition duration-300`}
      disabled={isLoading}
    >
      {isLoading ? (
        <FaSpinner className="animate-spin mx-auto" size={24} />
      ) : (
        'Send Message'
      )}
    </button>
  </form>

  {/* Success/Failure Message */}
  {formSubmitted && !isLoading && (
    <p className="text-lg text-pink-600 mt-6">Thank you for your message! We will get back to you shortly.</p>
  )}
</section>


    </div>
  );
};

export default ContactPage;
