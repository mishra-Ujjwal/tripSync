import React from "react";
import { FaMapMarkedAlt, FaMoneyBillWave, FaPlane, FaMobileAlt, FaUsers, FaStar } from "react-icons/fa";

const features = [
  {
    icon: <FaMapMarkedAlt className="text-3xl text-green-500" />,
    title: "Smart Itinerary Builder",
    desc: "Create day-by-day plans with AI-powered suggestions for activities, restaurants, and attractions.",
    bg: "bg-blue-50",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-yellow-500" />,
    title: "Budget Tracking",
    desc: "Keep track of expenses and stay within budget with real-time cost monitoring and alerts.",
    bg: "bg-yellow-50",
  },
  {
    icon: <FaPlane className="text-3xl text-purple-500" />,
    title: "Flight & Hotel Booking",
    desc: "Compare prices and book flights, hotels, and transportation all in one place.",
    bg: "bg-purple-50",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-orange-500" />,
    title: "Mobile Access",
    desc: "Access your itinerary offline and get real-time updates on your mobile device.",
    bg: "bg-orange-50",
  },
  {
    icon: <FaUsers className="text-3xl text-pink-500" />,
    title: "Group Planning",
    desc: "Collaborate with friends and family to plan the perfect group adventure together.",
    bg: "bg-pink-50",
  },
  {
    icon: <FaStar className="text-3xl text-yellow-400" />,
    title: "Local Recommendations",
    desc: "Discover hidden gems and local favorites with personalized recommendations.",
    bg: "bg-yellow-50",
  },
];

const Planner = () => {
  return (
    <section className="py-15 bg-gray-50 rounded-4xl">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Everything You Need to Plan
        </h2>
        <p className="text-gray-600 mb-12">
          From inspiration to execution, our comprehensive tools help you create the perfect trip
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition text-left"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${feature.bg}`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planner;
