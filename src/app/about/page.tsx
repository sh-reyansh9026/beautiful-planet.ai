import Footer from "@/components/Footer";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo.tsx";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* About Us Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 py-16 max-w-7xl mx-auto pt-28">
        <section className="flex flex-col justify-center items-start">
          <h2 className="text-[#0277BD] text-5xl font-bold mb-6">About Us</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            Beautiful Planet is dedicated to integrating artificial intelligence (AI) solutions with sustainable practices to create a positive impact on the environment. We work towards building carbon-neutral solutions that help organizations reduce their carbon footprints, optimize energy consumption, and promote sustainability in all sectors.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Our team is passionate about driving change through technology and innovation, with a clear focus on contributing to a more sustainable and eco-friendly future for generations to come.
          </p>
        </section>
        <div className="flex justify-center items-center">
          <img
            src="/Vision.jpg"
            className="w-full md:w-[500px] h-[350px] rounded-lg shadow-2xl object-cover transition-transform duration-300 transform hover:scale-105 mt-28"
            alt="About Us Image"
          />
        </div>
      </div>
      <div className="-mt-12">
        <InfiniteMovingCardsDemo />
        </div>
      {/* Vision Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 py-16 max-w-7xl mx-auto bg-white rounded-lg shadow-lg -mt-8 mb-8">
        <div className="flex justify-center items-center mt-8">
          <img
            src="/About.jpg"
            className="w-full md:w-[500px] h-[350px] rounded-lg shadow-2xl object-cover transition-transform duration-300 transform hover:scale-105"
            alt="Vision Image"
          />
        </div>
        <section className="flex flex-col justify-center items-start px-4">
          <h2 className="text-[#0277BD] text-5xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            Our vision is to empower businesses to operate sustainably while leveraging AI technologies to make smarter, more efficient decisions that contribute positively to the environment. We envision a world where carbon neutrality is no longer a goal, but a reality for all industries.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            At Beautiful Planet, we strive to create solutions that lead to tangible environmental benefits, optimizing processes in energy use, waste management, and resource allocation to help reduce carbon emissions globally.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
