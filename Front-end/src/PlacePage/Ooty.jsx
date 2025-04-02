import React from 'react';

const Card = ({ title, content, image }) => {
  return (
    <div className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img 
        src={image || 'https://via.placeholder.com/400'} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-100">{title}</h2>
        <p className="text-gray-400 text-sm leading-relaxed">{content}</p>
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
          <Card key={index} title={place.title} content={place.content} image={place.image} />
        ))}
      </div>
    </div>
  );
};

function Ooty() {
  const cityDescription = "Ooty, known as the 'Queen of Hill Stations,' is a picturesque town in Tamil Nadu. Famous for its lush green landscapes, beautiful lakes, waterfalls, and viewpoints, Ooty attracts nature lovers and adventure seekers alike.";

  const places = {
    Lakes: [
      { "title": "Ooty Lake", "city": "Ooty", "content": "A scenic lake famous for boating and beautiful surroundings.", "image": "/images/ooty_lake.jpg" },
      { "title": "Pykara Lake", "city": "Ooty", "content": "A picturesque lake offering breathtaking views.", "image": "/images/pykara_lake.jpg" },
      { "title": "Avalanche Lake", "city": "Ooty", "content": "A serene lake surrounded by lush green forests, ideal for picnics.", "image": "/images/avalanche_lake.jpg" },
      { "title": "Emerald Lake", "city": "Ooty", "content": "A tranquil lake known for its stunning sunrise and sunset views.", "image": "/images/emerald_lake.jpg" },
      { "title": "Upper Bhavani Lake", "city": "Ooty", "content": "A pristine lake known for its clear blue waters and peaceful ambiance.", "image": "/images/upper_bhavani.jpg" },
      { "title": "Wellington Lake", "city": "Wellington", "content": "A beautiful lake offering a peaceful escape in the Nilgiris.", "image": "/images/wellington_lake.jpg" },
      { "title": "Bellikkal Lake", "city": "Ooty", "content": "A quiet and lesser-known lake surrounded by lush greenery.", "image": "/images/bellikkal_lake.jpg" },
      { "title": "Kamaraj Sagar Dam", "city": "Ooty", "content": "Also known as Sandynalla Reservoir, it's a popular picnic spot surrounded by lush greenery.", "image": "/images/kamaraj_sagar_dam.jpg" },
      { "title": "Marlimun Lake", "city": "Ooty", "content": "A serene lake offering peaceful surroundings, ideal for picnics and nature walks.", "image": "/images/marlimun_lake.jpg" }
    ],
    Waterfalls: [
      { "title": "Pykara Waterfalls", "city": "Ooty", "content": "A cascading waterfall offering breathtaking views.", "image": "/images/pykara_waterfalls.jpg" },
      { "title": "Kalhatty Waterfalls", "city": "Ooty", "content": "A stunning waterfall amidst lush greenery, perfect for nature lovers.", "image": "/images/kalhatty_falls.jpg" },
      { "title": "Catherine Falls", "city": "Coonoor", "content": "A double-cascading waterfall amidst lush tea plantations.", "image": "/images/catherine_falls.jpg" },
      { "title": "Law’s Falls", "city": "Coonoor", "content": "A cascading waterfall set amidst lush greenery.", "image": "/images/laws_falls.jpg" },
      { "title": "Elk Falls", "city": "Kotagiri", "content": "A small but beautiful waterfall located near Kotagiri.", "image": "/images/elk_falls.jpg" },
      { "title": "Halashana Falls", "city": "Ooty", "content": "A hidden gem offering a tranquil environment and a refreshing experience.", "image": "/images/halashana_falls.jpg" }
    ],
    Viewpoints: [
      { "title": "Doddabetta Peak", "city": "Ooty", "content": "The highest peak in the Nilgiris, offering panoramic views of Ooty.", "image": "/images/doddabetta_peak.jpg" },
      { "title": "Dolphin’s Nose", "city": "Coonoor", "content": "A viewpoint offering breathtaking views of the Nilgiri hills and tea estates.", "image": "/images/dolphins_nose.jpg" },
      { "title": "Lamb’s Rock", "city": "Coonoor", "content": "A popular viewpoint known for its spectacular valley views.", "image": "/images/lambs_rock.jpg" },
      { "title": "Needle Rock Viewpoint", "city": "Gudalur", "content": "A stunning viewpoint offering panoramic views of the Nilgiris.", "image": "/images/needle_rock.jpg" },
      { "title": "Tiger Hill", "city": "Ooty", "content": "A scenic hill offering breathtaking sunrise views and a trekking trail.", "image": "/images/tiger_hill.jpg" },
      { "title": "Kodanad View Point", "city": "Kotagiri", "content": "A breathtaking viewpoint offering panoramic views of the Nilgiri hills.", "image": "/images/kodanad_view.jpg" },
      { "title": "Lady Canning's Seat", "city": "Coonoor", "content": "A lesser-known viewpoint offering tranquil scenery.", "image": "/images/lady_canning_seat.jpg" },
      { "title": "Ketti Valley View", "city": "Ooty", "content": "Offers panoramic views of one of the largest valleys in the world.", "image": "/images/ketti_valley_view.jpg" },
      { "title": "Parsons Valley", "city": "Ooty", "content": "A scenic spot known for its lush greenery and tranquil environment.", "image": "/images/parsons_valley.jpg" }
    ],
    Gardens: [
      { "title": "Botanical Gardens", "city": "Ooty", "content": "A well-maintained garden with diverse plant species and vibrant flowers.", "image": "/images/botanical_gardens.jpg" },
      { "title": "Rose Garden", "city": "Ooty", "content": "A beautiful garden featuring thousands of varieties of roses.", "image": "/images/rose_garden.jpg" },
      { "title": "Sim’s Park", "city": "Coonoor", "content": "A botanical park in Coonoor featuring exotic plant species.", "image": "/images/sims_park.jpg" },
      { "title": "Thread Garden", "city": "Ooty", "content": "A unique garden showcasing handmade thread-crafted flowers and plants.", "image": "/images/thread_garden.jpg" },
      { "title": "Kattery Park", "city": "Coonoor", "content": "A well-maintained park with beautiful landscapes and a variety of flora.", "image": "/images/kattery_park.jpg" }
    ]
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="bg-gray-950 text-gray-300 p-10 rounded-lg shadow-xl text-center max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-100 uppercase mb-4">
          Top Attractions in Ooty
        </h1>
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

export default Ooty;
