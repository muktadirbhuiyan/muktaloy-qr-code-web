// src/Preloader.tsx
import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {/* Spinner or animation */}
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500"></div>
    </div>
  );
};

export default Preloader;