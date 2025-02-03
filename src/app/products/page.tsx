import Footer from '@/components/Footer'
import { Product } from '@/components/Product'
import React from 'react'



function Page() {
  return (
    <div>
    <div className='p-12 grid grid-cols-1 gap-2 bg-white'>    
        <Product/>
      </div>
      <Footer/>
      </div>
  )
}

export default Page
