import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-20 md:px-20 sm:pt-32 md:pt-40 "
      style={{
    background: "linear-gradient(to right, #348AC7, #7474BF)",
  }} >
        {/* Left Content */}
        <div className="text-white max-w-lg">
          <h1 className="sm:text-6xl text-5xl  font-bold leading-tight">
            Plan Your Perfect <span className="text-yellow-300">Adventure</span>
          </h1>
          <p className="sm:mt-6 mt-3 text-center text-md text-gray-100 w-[90%]">
            An itinerary planner that organizes trips with personalized
            schedules, nearby attractions, and smart routes for a smooth travel
            experience.
          </p>
          <div className="hidden sm:flex mt-8  items-center justify-center gap-10">
            <button className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition">
              Start Planning Free
            </button>
            <button className="border border-white px-6 py-3 rounded-lg text-white hover:bg-white hover:text-indigo-600 transition">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-110 mt-5 md:mt-0">
          <h2 className="text-xl font-bold mb-2">Quick Trip Planner</h2>
          <p className="text-gray-500 mb-4">Where do you want to go?</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter city or country"
              className="w-full p-3 border rounded-lg border-gray-500 outline-none "
            />

            <select
              name=""
              id=""
              className="w-full py-3 px-2 border border-gray-500 outline-none rounded-lg text-gray-600"
            >
              <option value="">Enter number of people</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7+</option>
            </select>

            <div className="flex gap-4 w-full sm:mr-0">
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="start"
                  className="mb-1 text-sm font-medium text-gray-700"

                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="start"
                  className="p-3 border rounded-lg"
                  min={new Date().toISOString().split("T")[0]} // today’s date
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="end"
                  className="mb-1 text-sm font-medium text-gray-700"
                >
                  End Date
                </label>
                <input type="date" id="end" className="p-3 border rounded-lg" 
                min={new Date().toISOString().split("T")[0]} // today’s date
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
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
