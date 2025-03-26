import React from 'react';
import { FaTachometerAlt, FaTicketAlt, FaBookmark, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { RiRobot3Fill } from 'react-icons/ri';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-6 flex flex-col text-gray-400 relative">
      <h1 className="text-2xl font-extrabold text-lime-400 mb-10">Explore<span className="text-white">-TN</span></h1>
      <ul className="space-y-6">
        <li className="flex items-center space-x-4 py-3 px-4 rounded-xl cursor-pointer bg-lime-400 text-black">
          <FaTachometerAlt size={20} />
          <span className="font-semibold">Dashboard</span>
        </li>
        <li className="flex items-center space-x-4 py-3 px-4 rounded-xl cursor-pointer hover:bg-lime-400 hover:text-black transition-all duration-300">
          <FaTicketAlt size={20} />
          <span>My Tickets</span>
        </li>
        <li className="flex items-center space-x-4 py-3 px-4 rounded-xl cursor-pointer hover:bg-lime-400 hover:text-black transition-all duration-300">
          <FaBookmark size={20} />
          <span>Favourite</span>
        </li>
        <li className="flex items-center space-x-4 py-3 px-4 rounded-xl cursor-pointer hover:bg-lime-400 hover:text-black transition-all duration-300">
          <FaEnvelope size={20} />
          <span>Message</span>
        </li>
        <li className="flex items-center space-x-4 py-3 px-4 rounded-xl cursor-pointer hover:bg-lime-400 hover:text-black transition-all duration-300">
          <RiRobot3Fill size={20} />
          <span>Explore's AI</span>
        </li>
        <li className="flex items-center space-x-4 py-3 px-4 rounded-xl cursor-pointer hover:bg-lime-400 hover:text-black transition-all duration-300">
          <FaCog size={20} />
          <span>Settings</span>
        </li>
      </ul>
      <button className="absolute bottom-6 left-6 right-6 bg-red-500 flex items-center justify-center gap-2 py-2 rounded-lg text-white hover:bg-red-600 transition-all duration-300">
        <FaSignOutAlt size={18} />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
