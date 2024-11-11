import React, { useState } from 'react';
import { MapPin, Phone, Mail, Menu, Share2 } from 'lucide-react';
import muktaloyImage from './images/MuktaloyImage.jpg';

function App() {
  // State to track the visibility of the dropdown menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        {/* Gradient background effect behind the main card */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

        {/* Main card container */}
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">

            {/* Header Section: Contains the main image and burger menu */}
            <div className="relative">
              <img
                src={muktaloyImage}
                alt="Apartment Building"
                loading="lazy"
                className="w-full h-60 object-cover rounded-t-3xl" // Full-width header image with a fixed height and rounded top corners
              />

              {/* Burger Menu Icon in the top right of the image */}
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg text-orange-500"
              >
                <Menu className="h-6 w-6" /> {/* Icon from lucide-react */}
              </button>

              {/* Dropdown Menu - displayed only if `menuOpen` is true */}
              {menuOpen && (
                <div className="absolute top-14 right-4 w-40 bg-white shadow-lg rounded-lg p-2 space-y-2 z-10">
                  {/* Call Now Button - opens phone dialer */}
                  <button
                    onClick={() => window.location.href = 'tel:+8801990999982'}
                    className="flex items-center space-x-2 text-gray-700 hover:text-orange-500"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Now</span>
                  </button>

                  {/* Email Button - opens email client */}
                  <button
                    onClick={() => window.location.href = 'mailto:muktadirbhuiyan69@gmail.com'}
                    className="flex items-center space-x-2 text-gray-700 hover:text-orange-500"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </button>

                  {/* Share Button - uses the Web Share API for sharing */}
                  <button
                    onClick={() => navigator.share({ title: 'Muktaloy Apartment', url: window.location.href })}
                    className="flex items-center space-x-2 text-gray-700 hover:text-orange-500"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              )}
            </div>

            {/* Main Content Section */}
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                {/* Title and Description */}
                <div>
                  <h1 className="text-2xl font-bold text-orange-500">MUKTALOY</h1>
                  <p className="text-1xl font-bold text-blue-500">Apartment Building</p>
                </div>
                {/* <p className="text-gray-600">Single/Double Room Flat ready for rent. Attached Kitchen+Bathroom+Velcony</p> */}
                <p className="text-gray-600">একক/ডাবল রুম ফ্ল্যাট ভাড়ার জন্য প্রস্তুত। সংযুক্ত রান্নাঘর+বাথরুম+বারান্দা। ২৪ ঘন্টা সিসি টিভি সিকিউরিটি সহ, খোলামেলা পরিবেশে বসবাস করতে চাইলে যোগাযোগ করুন।</p>

                {/* Location Information */}
                <div className="flex items-start space-x-2">
                  <MapPin className="mt-1 h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm">576/1, Borpa, Rupshi-1464, Rupganj, Narayanganj</p>
                  </div>
                </div>

                {/* Google Maps Iframe Embed */}
                <div className="w-full h-[250px] mt-4">
                  <iframe
                    title="MUKTALOY Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0777978413116!2d90.54174807607292!3d23.74460497867441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b50b9484dbfd%3A0xd34f1e1c6de1d54d!2sMUKTALOY!5e0!3m2!1sen!2sbd!4v1731345419974!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Contact Information Section */}
                <div className="space-y-2">
                  <p className="text-md">Contact Information:</p>
                  <p className="font-bold">Muktadir Bhuiyan</p>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-orange-500" />
                    <a href="tel:+8801990999982" className="text-sm">
                      +8801990999982
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-orange-500" />
                    <a href="mailto:muktadirbhuiyan69@gmail.com" className="text-sm">
                      muktadirbhuiyan69@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Register Button */}
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <a
                  href="https://forms.gle/rcCmJwkXJrc5Xtei7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors text-center"
                >
                  REGISTER NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
