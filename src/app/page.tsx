import FeaturedProducts from '@/components/FeaturedProducts'
import HeroSection from '@/components/HeroSection'
import SpecialOffersBanner from '@/components/SpecialOffersBanner'
import React from 'react'

function Home() {
  return (
    <div>
      {/* SpecialOffersBanner Section */}
      <SpecialOffersBanner/>
      {/* Hero Section */}
      <HeroSection/>
      {/* Featured Products Section */}
      <FeaturedProducts />
    </div>
  )
}

export default Home