import React from "react";
const HeroSection = () => {
    
  return (
    <section className="max-w-7xl mx-auto px-2 sm:px-10 py-5 sm:py-20 bg-white/60 shadow-2xl  rounded-2xl">
        <h1 className="sm:text-3xl text-xl font-medium pb-5">Where Do You Want to Go?</h1>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
        {/* Destination */}
        <div>
          <label className="block text-lg font-semibold mb-2">Destination</label>
          <input
            type="text"
            placeholder="Enter destination"
            className="w-full px-4 py-3 border  outline-none rounded-xl placeholder-black"

          />
        </div>

        {/* Start Date */}
        <div className="sm:block hidden">
          <label className="block text-lg font-semibold mb-2">Start Date</label>
          <input type="date" className="w-full px-4 py-3 border  outline-none rounded-xl" />
        </div>

        {/* End Date */}
        <div className="sm:block hidden">
          <label className="block text-lg font-semibold mb-2">End Date</label>
          <input type="date" className="w-full px-4 py-3 border  outline-none rounded-xl" />
        </div>

        {/* for mobile */}
        <div className="sm:hidden flex flex-wrap gap-1">
<div className="sm:hidden block">
          <label className="block text-lg font-semibold mb-2">Start Date</label>
          <input type="date" className="w-full px-4 py-3 border  outline-none rounded-xl" />
        </div>

        {/* End Date */}
        <div className="sm:hidden block">
          <label className="block text-lg font-semibold mb-2">End Date</label>
          <input type="date" className="w-full px-4 py-3 border  outline-none rounded-xl" />
        </div>
        </div>

        {/* Travel Style */}
        <div>
          <label className="block text-lg font-semibold mb-2">Travel style</label>
          <select className="w-full px-4 py-3 border  outline-none rounded-xl">
            <option>Adventure</option>
            <option>Relaxation</option>
            <option>Luxury</option>
            <option>Budget</option>
          </select>
        </div>

        {/* Travel Mode */}
        <div>
          <label className="block text-lg font-semibold mb-2">Travel Mode</label>
          <select className="w-full px-4 py-3 border outline-none rounded-xl">
            <option>Flight</option>
            <option>Train</option>
            <option>Car</option>
            <option>Bus</option>
          </select>
        </div>

        {/* Who's Traveling */}
        <div>
          <label className="block text-lg font-semibold mb-2">Who's traveling</label>
          <select className="w-full px-4 py-3 border  outline-none rounded-xl">
            <option>Solo</option>
            <option>Couple</option>
            <option>Family</option>
            <option>Friends</option>
          </select>
        </div>
   
        {/* Submit Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full py-3 bg-[#0249AE] hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
          >
            Plan My Trip
          </button>
        </div>
      </form>
    </section>
  );
};

export default HeroSection;
