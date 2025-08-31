import React from "react";

const Home = () => {
  return (
   <div>
 

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-32 md:pt-40">

        {/* Left Content */}
        <div className="text-white max-w-lg">
          <h1 className="text-5xl font-bold leading-tight">
            Plan Your Perfect <span className="text-yellow-300">Adventure</span>
          </h1>
          <p className="mt-6 text-lg text-gray-100">
            Create detailed itineraries, discover amazing destinations, and make
            every moment of your journey unforgettable with our intelligent trip
            planning tools.
          </p>
          <div className="mt-8 ml-20 flex space-x-4">
            <button className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition">
              Start Planning Free
            </button>
            <button className="border border-white px-6 py-3 rounded-lg text-white hover:bg-white hover:text-indigo-600 transition">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-96 mt-12 md:mt-0">
          <h2 className="text-xl font-bold mb-2">Quick Trip Planner</h2>
          <p className="text-gray-500 mb-4">Where do you want to go?</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter city or country"
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="text"
              placeholder="Enter number of people"
              className="w-full p-3 border rounded-lg"
            />

            <div className="flex space-x-2">
              <input
                type="date"
                className="w-1/2 p-3 border rounded-lg"
              />
              <input
                type="date"
                className="w-1/2 p-3 border rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Create Itinerary
            </button>
          </form>
        </div>
      </div>
      </div>
  );
};

export default Home;
