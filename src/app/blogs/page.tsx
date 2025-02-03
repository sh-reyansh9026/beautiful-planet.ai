import React from 'react'
import InnerNavbar from '@/components/InnerNavbar'
import Footer from '@/components/Footer'
import {CardHoverBlog } from '@/components/CardHover'

function page() {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-white">
      {/* Navbar */}
      <InnerNavbar />
      {/* Blog Section */}
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-4 -mt-4">Our Latest Blogs</h1>
        <CardHoverBlog />
      </div>
      <Footer/>
    </div>
  )
}

export default page
