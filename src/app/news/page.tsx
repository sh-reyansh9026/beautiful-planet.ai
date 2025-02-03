import React from 'react'
import InnerNavbar from '@/components/InnerNavbar'
import Footer from '@/components/Footer'
import { CardHoverNews } from '@/components/CardHover'

function page() {
  return (
      <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-white">
      {/* Navbar */}
      <InnerNavbar />
      
      {/* Main News Section */}
      <div className="container mx-auto py-20 px-6">
        <h1 className="text-5xl font-bold text-gray-800 text-center mb-4 -mt-4">
          Latest News & Updates
        </h1>
        <CardHoverNews />
        </div>
      <Footer/>
    </div>
  )
}

export default page
