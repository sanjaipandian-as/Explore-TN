import React from 'react';

const Bookings = () => {
  return (
    <div className="bg-[#1c2230] p-4 rounded-2xl text-white">
      <h3 className="text-lg mb-4 font-semibold">Bookings</h3>
      <ul>
        <li className="mb-3">Goa <span className="text-gray-400 text-sm">16 Apr - 20 Apr</span></li>
        <li className="mb-3">Shimla <span className="text-gray-400 text-sm">16 Jan - 25 Jan</span></li>
        <li className="mb-3">Andaman <span className="text-gray-400 text-sm">7 Nov - 20 Nov</span></li>
      </ul>
    </div>
  );
};

export default Bookings;
