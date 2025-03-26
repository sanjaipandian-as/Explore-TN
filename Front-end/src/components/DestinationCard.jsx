import React from "react";

const destinations = [
  { id: 1, name: "Chennai", image: "https://wallpaperaccess.com/full/2273780.jpg" },
  { id: 2, name: "Madurai", image: "https://wallpaperaccess.com/full/6697117.jpg" },
  { id: 3, name: "Ooty", image: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ooty-1655457424_bca80f81e8391ebdaaca.webp" },
  { id: 4, name: "Kodaikanal", image: "https://wallpaperaccess.com/full/9301891.jpg" },
  { id: 5, name: "Yercaud", image: "https://t3.ftcdn.net/jpg/03/46/77/80/240_F_346778049_beFmFk61ShrmeRdasboUEs9hY6XsPqdr.jpg" },
  { id: 6, name: "Valpaarai", image: "https://www.tamilnadutourism.tn.gov.in/img/pages/mobile/valparai-1655317113_9a764f170250c439648c.webp" },
  { id: 7, name: "KolliHills", image: "https://media.istockphoto.com/id/1216022846/photo/kolli-hills-kollimalai-seventy-hairpin-bends-located-in-central-tamil-nadu-india.jpg?s=612x612&w=0&k=20&c=Zwa-SlGmibGqfMed5vvWBEfngRTrD-P-bHIuh3P6frU=" },
  { id: 8, name: "Theni", image: "https://www.kolukkumalai.com/gallery/g-0016-tn.jpg" },
];

const DestinationCard = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">Popular Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <div 
            key={destination.id} 
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
          >
            {/* Image with Fallback */}
            <img 
              src={destination.image} 
              alt={destination.name} 
              className="w-full h-44 object-cover"
              onError={(e) => e.target.src = "https://via.placeholder.com/300x200?text=No+Image"}
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-white mb-2">{destination.name}</h3>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationCard;
