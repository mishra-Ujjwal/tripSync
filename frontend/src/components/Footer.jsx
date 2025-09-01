import React from "react";

const Footer = () => {
    return (
        <footer>

            

            {/* Footer Links */}
            <div className="bg-white rounded  text-gray-600 mt-10 py-10 sm:py-24 px-6">
                <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <img src="/images/logo.png" alt="" className="w-40" />
                        </h3>
                        <p className="mt-2 text-sm">
                            Making travel planning simple and enjoyable for everyone.
                        </p>
                    </div>

                    {/* Product */}
                    <div className="hidden md:block ">
                        <h4 className=" font-semibold">Product</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><a href="#features" className="hover:text-white">Features</a></li>
                            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                            <li><a href="#app" className="hover:text-white">Mobile App</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="hidden md:block ">
                        <h4 className="font-semibold">Support</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><a href="#help" className="hover:text-white">Help Center</a></li>
                            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
                            <li><a href="#guides" className="hover:text-white">Travel Guides</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className=" font-semibold">Company</h4>
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
