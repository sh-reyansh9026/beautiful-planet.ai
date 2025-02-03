import React from 'react';
import Image from "next/image";
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

function Page() {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-md border border-slate-950 h-auto md:h-[700px] m-4 md:m-16 mt-16 md:mt-24 overflow-hidden">
        
        {/* Left Side: Contact Form */}
        <div className="flex flex-col justify-center p-6 md:p-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl text-gray-900 font-bold">Contact Us</h1>
            <p className="text-gray-900 pt-4 md:pt-8">
              Get in touch with us to collaborate on a greener, carbon-free future!
            </p>
          </div>
          <div className="mt-6 md:mt-8">
            <ContactForm />
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/ContactUS.png"
            height={700}
            width={700}
            className="w-full h-auto object-cover md:h-full"
            alt="Contact Us"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Page;
