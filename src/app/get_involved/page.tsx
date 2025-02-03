import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-16 mt-24"> {/* Added mt-24 to create space from navbar */}

        {/* Left Section: Text & Button */}
        <section className="flex flex-col justify-center items-start px-4 lg:px-16 text-gray-800">
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-green-600">
            Get Involved
          </h2>
          <p className="text-lg sm:text-xl mb-8 leading-relaxed max-w-xl">
            Join us in creating a sustainable future! At Beautiful Planet, every individual and organization has the power to make a lasting impact. We’re on a mission to combat climate change and promote carbon neutrality through innovation and collaboration.
          </p>
          
          <p className="text-lg sm:text-xl mb-8 leading-relaxed max-w-xl">
            Whether you're an individual passionate about sustainability, a business looking to green your operations, or someone who just wants to learn more about carbon neutrality, there's a way for you to contribute. Together, we can reduce emissions, conserve natural resources, and make the world a greener, more sustainable place for future generations.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            How Can You Get Involved?
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-lg sm:text-xl text-gray-700 mb-8">
            <li>Support our initiatives and spread awareness on sustainability.</li>
            <li>Adopt eco-friendly practices in your daily life to reduce carbon footprints.</li>
            <li>Partner with us to develop sustainable solutions and drive green innovation.</li>
            <li>Donate to or volunteer for our environmental causes and community outreach programs.</li>
            <li>Stay informed by reading our blogs and updates on environmental trends and solutions.</li>
          </ul>
          
          <button className="bg-green-600 text-white text-lg px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
            Explore Solutions
          </button>
        </section>

        {/* Right Section: Image */}
        <div className="flex justify-center items-center mb-72 mt-20"> {/* Increased negative margin for alignment */}
          <div className="relative rounded-lg overflow-hidden shadow-lg w-full h-[380px] md:h-[500px] lg:h-[600px]">
            <img
              src="/get_involved.png"
              className="w-full h-full rounded-lg shadow-2xl object-cover transition-transform duration-300 transform hover:scale-105"
              alt="Get Involved Image"
            />
          </div>
          
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default page;
