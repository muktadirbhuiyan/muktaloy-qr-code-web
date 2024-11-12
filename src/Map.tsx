import React, { useState } from 'react';
import Map from './images/map.webp'

const MapPlaceholder = () => {
  const [loadMap, setLoadMap] = useState(false);

  return (
    <div className="map-container w-full h-[250px] mt-4 relative">
      {!loadMap ? (
        <div className="relative">
          {/* Dummy Placeholder Image */}
          <img
            src={Map}
            alt="Map Placeholder"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Button to Load Interactive Map */}
          <button
            onClick={() => setLoadMap(true)}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-xl"
          >
            Click to See Map
          </button>
        </div>
      ) : (
        <iframe
          title="MUKTALOY Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0777978413116!2d90.54174807607292!3d23.74460497867441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b50b9484dbfd%3A0xd34f1e1c6de1d54d!2sMUKTALOY!5e0!3m2!1sen!2sbd!4v1731345419974!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        />
      )}
    </div>
  );
};

export default MapPlaceholder;
