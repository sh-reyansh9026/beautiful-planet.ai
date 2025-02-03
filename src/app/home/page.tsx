import Carousel from '@/components/Carousel';
import { LeafIcon, Wind, Code, Globe } from 'lucide-react';
import React from 'react';
import Footer from '../../components/Footer';

const Page: React.FC = () => {
  return (
    <div className="relative h-[100vh]">
      <Carousel />

      {/* Green Strip */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[75%] bottom-4 h-24 bg-[#037213] bg-opacity-100 z-10 flex justify-center items-center text-white mb-5">
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
          <div className='flex justify-center items-center'>
            <LeafIcon size={40} className='mr-4' />
            Carbon Neutrality
          </div>

          <div className='flex justify-center items-center'>
            <Wind size={40} className='mr-4' />
            Sustainable Solutions
          </div>

          <div className='flex justify-center items-center'>
            <Code size={40} className='mr-4' />
            AI Integration
          </div>

          <div className='flex justify-center items-center'>
            <Globe size={40} className='mr-4' />
            ESG Focus
          </div>
        </div>
      </div>

      {/* Key Metrics portion */}
      <div className="relative bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-6xl font-bold text-gray-800 mb-8 mt-8">
            Key Metrics & Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col items-center rounded-lg shadow-lg p-4">
              <div className="text-3xl font-bold text-[#037213]">Our Impact</div>
              <div className="text-lg text-gray-700 mt-4 text-justify leading-relaxed max-w-xl">
                 Our focus is on creating measurable reductions in carbon emissions by integrating AI-driven solutions that optimize energy use, streamline processes, and promote sustainable practices across industries.
              </div>


            </div>
            <div className="flex flex-col items-center rounded-lg shadow-lg p-4">
              <div className="text-3xl font-bold text-[#037213]">Carbon Neutrality</div>
              <div className="text-lg text-gray-700 mt-4 text-justify leading-relaxed max-w-xl">
                By 2030, we are committed to achieving net-zero emissions across all of our operations and projects. This goal will be supported by advanced tracking, carbon offset programs, and energy-efficient technologies.
              </div>
            </div>
            <div className="flex flex-col items-center rounded-lg shadow-lg p-4">
              <div className="text-3xl font-bold text-[#037213]">Sustainable Growth</div>
              <div className="text-lg text-gray-700 mt-4 text-justify leading-relaxed max-w-xl">
                We will drive long-term, sustainable growth by developing cutting-edge AI tools to optimize resource management, reduce waste, and empower organizations to make data-driven decisions for a greener future.
              </div>
            </div>
            <div className="flex flex-col items-center rounded-lg shadow-lg p-4">
              <div className="text-3xl font-bold text-[#037213]">Key Metrics</div>
              <div className="text-lg text-gray-700 mt-4 text-justify leading-relaxed max-w-xl">
                Our success will be measured by the amount of carbon saved, the energy efficiency improvements we achieve, and the number of companies we partner with to integrate sustainable AI solutions. We will continuously track our progress with transparency and accountability.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
