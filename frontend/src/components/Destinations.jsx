import React from "react";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    description: "City of lights with romantic charm and world-class cuisine",
    days: "7-day itinerary",
    button: "Explore",
    bg: "bg-gradient-to-r from-pink-500 to-red-400",
    icon: "🗼", // Eiffel Tower emoji
  },
  {
    id: 2,
    name: "Swiss Alps",
    description: "Breathtaking mountain views and outdoor adventures",
    days: "10-day itinerary",
    button: "Explore",
    bg: "bg-gradient-to-r from-purple-500 to-indigo-400",
    icon: "🏔️", // Mountain emoji
  },
  {
    id: 3,
    name: "Bali, Indonesia",
    description: "Tropical paradise with beaches, temples, and culture",
    days: "5-day itinerary",
    button: "Explore",
    bg: "bg-gradient-to-r from-green-400 to-blue-400",
    icon: "🌴", // Palm tree emoji
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className=" py-15 mt-20 sm:mt-40  rounded-4xl bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-900">Popular Destinations</h2>
      <p className="text-gray-600 mt-2">
        Discover amazing places around the world with pre-built itineraries
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-6">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            {/* Top Section with Gradient */}
            <div
              className={`${dest.bg} h-40 flex items-center justify-center text-6xl`}
            >
              {dest.icon}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                {dest.name}
              </h3>
              <p className="text-gray-600 mt-2 flex-grow">{dest.description}</p>
              <p className="text-sm text-gray-500 mt-2">{dest.days}</p>
              <button className="mt-4 self-start px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                {dest.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
