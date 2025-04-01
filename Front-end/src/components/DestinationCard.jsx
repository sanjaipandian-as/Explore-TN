import React from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const destinations = [
  { id: 1, name: "Chennai", image: "https://wallpaperaccess.com/full/2273780.jpg" },
  { id: 2, name: "Madurai", image: "https://wallpaperaccess.com/full/6697117.jpg" },
  { id: 3, name: "Ooty", image: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ooty-1655457424_bca80f81e8391ebdaaca.webp" },
  { id: 4, name: "Kodaikanal", image: "https://wallpaperaccess.com/full/9301891.jpg" },
  { id: 5, name: "Yercaud", image: "https://t3.ftcdn.net/jpg/03/46/77/80/240_F_346778049_beFmFk61ShrmeRdasboUEs9hY6XsPqdr.jpg" },
  { id: 6, name: "Valpaarai", image: "https://www.tamilnadutourism.tn.gov.in/img/pages/mobile/valparai-1655317113_9a764f170250c439648c.webp" },
  { id: 7, name: "KolliHills", image: "https://media.istockphoto.com/id/1216022846/photo/kolli-hills-kollimalai-seventy-hairpin-bends-located-in-central-tamil-nadu-india.jpg?s=612x612&w=0&k=20&c=Zwa-SlGmibGqfMed5vvWBEfngRTrD-P-bHIuh3P6frU=" },
  { id: 8, name: "Theni", image: "https://www.kolukkumalai.com/gallery/g-0016-tn.jpg" },
  { id:9 , name: " Coonoor", image:"https://media1.thrillophilia.com/filestore/f0ufvscjst2argui3nfh4ikavh7i_1556099835_shutterstock_657980620.jpg?w=753&h=450&dpr=1.0"}
];

const DestinationCard = () => {
  return (
    <div className="container mx-auto px-5 py-1">
      {/* Left-aligned heading */}
      <h2 className="text-3xl font-bold mb-2.5 text-gray-100 text-left">
        Popular Destinations in TAMIL NADU
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 py-4">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-2xl"
          >
            
            <div className="overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-46 object-cover transition-transform duration-300 hover:scale-110"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/300x200?text=No+Image")
                }
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-white">{destination.name}</h3>
            </div>

            <hr className="border-gray-700 w-full" />
            <div className="relative group flex justify-center ">
              <button className="w-full cursor-pointer text-white py-2 relative overflow-hidden transition-all duration-300 flex items-center justify-center gap-2">
                <span className="relative z-10 flex  items-center gap-2">
                  <span className="group-hover:text-black group-hover:font-bold transition-all  duration-300 ">
                    Explore Now
                  </span>
                  <LuSquareArrowOutUpRight className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-black" />
                </span>
                <span className="absolute inset-0 bg-lime-500 scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
              </button>
            </div>

          </div>
        ))}
      </div>






      {/* Explore More Places button with modern text and stylish effect */}
      <div className="mt-3 flex justify-center">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-lg hover:from-pink-500 hover:to-purple-500 transition text-lg font-semibold shadow-lg transform hover:scale-105">
          Uncover More Wonders
        </button>
      </div>
    </div >
  );
};

export default DestinationCard;
