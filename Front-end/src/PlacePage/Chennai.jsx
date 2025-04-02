import React from 'react';
import { MapPin } from 'lucide-react';

const Card = ({ title, content, image, location }) => {
  return (
    <div className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img 
        src={image || 'https://via.placeholder.com/400'} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-100">{title}</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">{content}</p>
        {location && (
          <a
            href={location}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-300 transition"
          >
            <MapPin size={18} className="mr-2" /> View on Google Maps
          </a>
        )}
      </div>
    </div>
  );
};

const Section = ({ title, places }) => {
  const gridCols = places.length % 3 === 0 || places.length === 5 ? 'md:grid-cols-3' : 'md:grid-cols-4';
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-gray-100 border-l-4 border-blue-500 pl-4 mb-6 uppercase">{title}</h2>
      <div className={`grid grid-cols-1 ${gridCols} gap-8 p-4`}>
        {places.map((place, index) => (
          <Card key={index} {...place} />
        ))}
      </div>
    </div>
  );
};

function Chennai() {
  const cityDescription = "Chennai, the capital city of Tamil Nadu, is a vibrant blend of rich cultural heritage, historic landmarks, and modern attractions...";

  const places = {
    Beaches: [
      { title: "Marina Beach", content: "One of the longest beaches in the world.", image: "https://media.gettyimages.com/id/624091590/photo/marina-beach-chennai-city.jpg", location: "https://maps.app.goo.gl/UyAqiCT4aCGLjP37A" },
      { title: "Elliot’s Beach", content: "A calm beach known for its peaceful atmosphere.", image: "/images/elliots.jpg", location: "https://goo.gl/maps/2TzC5" },
      { title: "Breezy Beach", content: "A small yet beautiful beach in Chennai.", image: "/images/breezy.jpg", location: "https://goo.gl/maps/3BZpX" },
      { title: "Thiruvanmiyur Beach", content: "A less crowded and serene beach.", image: "/images/thiruvanmiyur.jpg", location: "https://goo.gl/maps/4YzP7" }
    ],
    Historical: [
      { title: "Fort St. George", content: "One of the oldest British forts in India.", image: "/images/fortstgeorge.jpg", location: "https://goo.gl/maps/5X8R9" },
      { title: "Santhome Basilica", content: "A neo-Gothic church built over St. Thomas' tomb.", image: "/images/santhome.jpg", location: "https://goo.gl/maps/6R9T8" }
    ]
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="bg-gray-950 text-gray-300 p-10 rounded-lg shadow-xl text-center max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-100 uppercase mb-4">Top Attractions in Chennai</h1>
        <p className="text-lg font-light leading-relaxed">{cityDescription}</p>
      </div>
      <div className="mt-12">
        {Object.entries(places).map(([category, items], index) => (
          <Section key={index} title={category} places={items} />
        ))}
      </div>
    </div>
  );
}

export default Chennai;
