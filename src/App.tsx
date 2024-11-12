import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Menu, Share2 } from 'lucide-react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import muktaloyHeader from './images/MuktaloyImage.webp';
import Map from './Map';
import Preloader from './Preloader';
import apartmentDescription from './apartmentDescription.md';
import ReactMarkdown from 'react-markdown';

// Custom Markdown Renderer to avoid <p> nesting issues
interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        p: ({ node, ...props }) => <div {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

function App() {
  // State to track loading status
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // For the dropdown menu
  const [content, setContent] = useState<string>('');

  // Toggle menu function
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Load markdown content when the component mounts
  useEffect(() => {
    fetch(apartmentDescription)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  // Simulate loading (adjust timing or remove this if you load real data)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1 seconds for preloader
    return () => clearTimeout(timer);
  }, []);

  // Show Preloader while loading
  if (loading) {
    return <Preloader />;
  }

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
                src={muktaloyHeader}
                alt="Apartment Building"
                className="w-full h-60 object-cover rounded-t-3xl"
              />

              {/* Burger Menu Icon in the top right of the image */}
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg text-orange-500"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>

              {/* Dropdown Menu - displayed only if `menuOpen` is true */}
              {menuOpen && (
                <div className="absolute top-14 right-4 w-40 bg-white shadow-lg rounded-lg p-2 space-y-2 z-10">
                  <button
                    onClick={() => window.location.href = 'tel:+8801990999982'}
                    className="flex items-center space-x-2 text-gray-700 hover:text-orange-500"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Now</span>
                  </button>

                  <button
                    onClick={() => window.location.href = 'mailto:muktadirbhuiyan69@gmail.com'}
                    className="flex items-center space-x-2 text-gray-700 hover:text-orange-500"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </button>

                  <button
                    onClick={() => navigator.share({ title: 'Muktaloy Apartment', url: window.location.href })}
                    className="flex items-center space-x-2 text-gray-700 hover:text-orange-500"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Share Page</span>
                  </button>
                </div>
              )}
            </div>

            {/* Main Content Section */}
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div>
                  <h1 className="text-2xl font-bold text-orange-500">MUKTALOY</h1>
                  <p className="text-1xl font-bold text-blue-500">Apartment Building</p>
                </div>
                <div className="app text-base">
                  <MarkdownRenderer content={content} />
                </div>

                <div className="flex items-start space-x-2">
                  <MapPin className="mt-1 h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <div className="text-sm">576/1, Borpa (Notun Rasta), Rupshi, Rupganj, Narayanganj</div>
                  </div>
                </div>

                <div>
                  <Map />
                </div>

                <div className="space-y-2">
                  <h2 className="text-md">Contact Information:</h2>
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
      <SpeedInsights />
    </div>
  );
}

export default App;