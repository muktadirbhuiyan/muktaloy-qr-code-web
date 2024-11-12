import React from 'react';
import logo from './images/MuktaloyLogo.png'; // Adjust the path to your logo file

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Logo */}
      <img
        src={logo}
        alt="Loading..."
        className="h-24 w-24 mb-4" // Adjust size as necessary
      /> MUKTALOY

      {/* Loading Bar */}
      <div className="w-48 bg-gray-200 rounded-full h-2.5">
        <div className="bg-orange-500 h-2.5 rounded-full animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default Preloader;