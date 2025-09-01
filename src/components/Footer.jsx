import React from "react";

const Footer = () => {
    return (
        <footer>
            {/* CTA Section */}
            <div className="bg-[#7374BF] rounded-t-4xl text-center py-24 px-6">
                <h2 className="text-3xl font-bold text-white">
                    Ready to Plan Your Next Adventure?
                </h2>
                <p className="text-indigo-100 mt-2">
                    Join thousands of travelers who trust TripCraft to create unforgettable journeys
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow hover:bg-gray-100 transition">
                        Start Planning Free
                    </button>
                    <button className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-600 transition">
                        View Pricing
                    </button>
                </div>
            </div>

            {/* Footer Links */}
            <div className="bg-gray-900 rounded-b-4xl text-gray-300 py-24 px-6">
                <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            ✈️ TripSync
                        </h3>
                        <p className="mt-2 text-sm">
                            Making travel planning simple and enjoyable for everyone.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-white font-semibold">Product</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><a href="#features" className="hover:text-white">Features</a></li>
                            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                            <li><a href="#app" className="hover:text-white">Mobile App</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold">Support</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><a href="#help" className="hover:text-white">Help Center</a></li>
                            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
                            <li><a href="#guides" className="hover:text-white">Travel Guides</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold">Company</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><a href="#about" className="hover:text-white">About</a></li>
                            <li><a href="#blog" className="hover:text-white">Blog</a></li>
                            <li><a href="#careers" className="hover:text-white">Careers</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                    © 2025 TripSync. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
